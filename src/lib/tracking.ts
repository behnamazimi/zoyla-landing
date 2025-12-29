import posthog from "posthog-js";

// Event property type definitions
export interface LogoClickedEvent {
  location: "header";
}

export interface GitHubHeroClickedEvent {
  location: "hero_section";
}

export interface TwitterLinkClickedEvent {
  location: "footer";
  twitter_handle: string;
}

export interface ResourcesLinkClickedEvent {
  location: "footer";
}

export interface GitHubLinkClickedEvent {
  location: "header" | "hero_section" | "github_banner";
}

export interface GitHubStarBannerClickedEvent {
  // No properties
}

export interface DownloadClickedEvent {
  platform: string;
  arch: string;
  platform_label: string;
  variant: "primary" | "header";
  is_mobile: boolean;
}

export interface ReleasesPageClickedEvent {
  platform: string;
  arch: string;
  platform_label: string;
  variant: "primary" | "header";
  is_mobile: boolean;
}

export interface BrewInstallCommandCopiedEvent {
  // No properties
}

// Union type for all event properties
type TrackingEventProperties =
  | LogoClickedEvent
  | GitHubHeroClickedEvent
  | TwitterLinkClickedEvent
  | ResourcesLinkClickedEvent
  | GitHubLinkClickedEvent
  | GitHubStarBannerClickedEvent
  | DownloadClickedEvent
  | ReleasesPageClickedEvent
  | BrewInstallCommandCopiedEvent;

// Event name to properties mapping
type EventMap = {
  logo_clicked: LogoClickedEvent;
  github_hero_clicked: GitHubHeroClickedEvent;
  twitter_link_clicked: TwitterLinkClickedEvent;
  resources_link_clicked: ResourcesLinkClickedEvent;
  github_link_clicked: GitHubLinkClickedEvent;
  github_star_banner_clicked: GitHubStarBannerClickedEvent;
  download_clicked: DownloadClickedEvent;
  releases_page_clicked: ReleasesPageClickedEvent;
  brew_install_command_copied: BrewInstallCommandCopiedEvent;
};

/**
 * Type-safe tracking function that wraps PostHog capture
 * @param eventName - The name of the event to track
 * @param properties - Event-specific properties matching the event type
 */
export function track<T extends keyof EventMap>(
  eventName: T,
  properties: EventMap[T] | undefined = undefined
): void {
  // Check if PostHog is available (handles SSR and edge cases)
  if (typeof window === "undefined") {
    return;
  }

  try {
    posthog.capture(eventName, properties);
  } catch (error) {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Failed to track event:", eventName, error);
    }
  }
}
