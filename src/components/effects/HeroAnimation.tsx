"use client";

import { useEffect, useRef } from "react";

interface SpeedLine {
  x: number;
  y: number;
  baseY: number; // Original Y position to return to
  velocityY: number; // Vertical velocity for smooth movement
  speed: number;
  length: number;
  opacity: number;
  trail: { x: number; y: number }[];
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<SpeedLine[]>([]);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    smoothX: -1000,
    smoothY: -1000,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const MAX_LINES = 40;
    const EDGE_FADE = 150;
    const MOUSE_RADIUS = 30; // Radius of the imaginary circle around mouse
    const INFLUENCE_RADIUS = MOUSE_RADIUS * 4; // Wider influence zone for smooth approach

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Smooth easing function
    const easeOutQuad = (t: number) => t * (2 - t);

    const createLine = (randomX = false): SpeedLine => {
      const canvasEl = canvasRef.current!;
      const y = Math.random() * canvasEl.height * 0.7 + canvasEl.height * 0.1;
      return {
        x: randomX ? Math.random() * canvasEl.width : -Math.random() * 100,
        y,
        baseY: y,
        velocityY: 0,
        speed: 2 + Math.random() * 6,
        length: 120 + Math.random() * 200,
        opacity: 0.1 + Math.random() * 0.25,
        trail: [],
      };
    };

    const initLines = () => {
      linesRef.current = [];
      for (let i = 0; i < 25; i++) {
        linesRef.current.push(createLine(true));
      }
    };

    resize();
    initLines();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse position interpolation
      mouseRef.current.smoothX +=
        (mouseRef.current.x - mouseRef.current.smoothX) * 0.15;
      mouseRef.current.smoothY +=
        (mouseRef.current.y - mouseRef.current.smoothY) * 0.15;

      const mouseX = mouseRef.current.smoothX;
      const mouseY = mouseRef.current.smoothY;

      // Spawn new lines occasionally
      if (linesRef.current.length < MAX_LINES && Math.random() < 0.15) {
        linesRef.current.push(createLine());
      }

      // Update and draw lines
      for (let i = linesRef.current.length - 1; i >= 0; i--) {
        const line = linesRef.current[i];

        // Calculate distance to mouse
        const dx = line.x - mouseX;
        const dy = line.y - mouseY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        // Calculate target deflection based on distance to mouse
        let targetDeflection = 0;

        if (distToMouse < INFLUENCE_RADIUS) {
          // Normalize distance (0 = at mouse, 1 = at influence edge)
          const normalizedDist = distToMouse / INFLUENCE_RADIUS;

          // Use easing for smooth falloff
          const influence = easeOutQuad(1 - normalizedDist);

          // Direction to push (perpendicular to approach angle, curving around)
          const pushDirection = dy >= 0 ? 1 : -1;

          // Stronger push when closer to the circle
          if (distToMouse < MOUSE_RADIUS) {
            // Inside the imaginary circle - strong deflection to go around
            const circleInfluence = 1 - distToMouse / MOUSE_RADIUS;
            targetDeflection =
              pushDirection *
              (MOUSE_RADIUS - distToMouse) *
              0.15 *
              (1 + circleInfluence);
          } else {
            // Outside but in influence zone - gentle curve
            targetDeflection = pushDirection * influence * 3;
          }
        }

        // Smooth velocity towards target deflection (spring-like behavior)
        const springStrength = 0.08;
        const damping = 0.85;

        line.velocityY += (targetDeflection - line.velocityY) * springStrength;
        line.velocityY *= damping;

        // Also gently pull back towards base Y when far from mouse
        if (distToMouse > INFLUENCE_RADIUS) {
          const returnForce = (line.baseY - line.y) * 0.02;
          line.velocityY += returnForce;
        }

        // Move line
        line.x += line.speed;
        line.y += line.velocityY;

        // Store trail points for curved line drawing
        line.trail.push({ x: line.x, y: line.y });

        // Keep trail length limited
        const maxTrailPoints = Math.ceil(line.length / 3);
        if (line.trail.length > maxTrailPoints) {
          line.trail.shift();
        }

        // Remove line when it goes off screen
        if (line.x - line.length > canvas.width) {
          linesRef.current.splice(i, 1);
          continue;
        }

        // Calculate edge fade
        const headX = line.x;
        const tailX =
          line.trail.length > 0 ? line.trail[0].x : line.x - line.length;

        let leftFade = 1;
        if (tailX < EDGE_FADE) {
          leftFade = Math.max(0, tailX / EDGE_FADE);
        }

        let rightFade = 1;
        if (headX > canvas.width - EDGE_FADE) {
          rightFade = Math.max(0, (canvas.width - headX) / EDGE_FADE);
        }

        const centerY = canvas.height * 0.4;
        const distFromCenter = Math.abs(line.y - centerY);
        const maxDist = canvas.height * 0.5;
        const verticalFade = Math.max(0, 1 - (distFromCenter / maxDist) * 0.7);

        const finalOpacity = line.opacity * leftFade * rightFade * verticalFade;

        if (finalOpacity <= 0) continue;

        // Draw the curved speed line using Catmull-Rom spline for smoother curves
        if (line.trail.length > 2) {
          ctx.beginPath();

          // Start from the first point
          ctx.moveTo(line.trail[0].x, line.trail[0].y);

          // Use Catmull-Rom to Bezier conversion for smooth curves
          for (let j = 0; j < line.trail.length - 1; j++) {
            const p0 = line.trail[Math.max(0, j - 1)];
            const p1 = line.trail[j];
            const p2 = line.trail[Math.min(line.trail.length - 1, j + 1)];
            const p3 = line.trail[Math.min(line.trail.length - 1, j + 2)];

            // Catmull-Rom to Bezier control points
            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;
            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
          }

          // Create gradient along the path
          const gradient = ctx.createLinearGradient(
            line.trail[0].x,
            line.trail[0].y,
            line.x,
            line.y
          );
          gradient.addColorStop(0, `rgba(184, 255, 87, 0)`);
          gradient.addColorStop(
            0.3,
            `rgba(184, 255, 87, ${finalOpacity * 0.4})`
          );
          gradient.addColorStop(
            0.7,
            `rgba(184, 255, 87, ${finalOpacity * 0.8})`
          );
          gradient.addColorStop(1, `rgba(184, 255, 87, ${finalOpacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();

          // Add subtle glow at the head
          if (finalOpacity > 0.15 && headX < canvas.width - 20) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(184, 255, 87, ${finalOpacity * 0.4})`;
            ctx.arc(line.x, line.y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
}
