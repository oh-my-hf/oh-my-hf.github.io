/** Central site/app configuration. Update download URLs and version when releasing. */
export const REPO_URL = 'https://github.com/oh-my-huggingface/oh-my-huggingface';

export const DOWNLOAD_URLS = {
  macOS: `${REPO_URL}/releases/latest/download/ohmyhf-mac.dmg`,
  windows: `${REPO_URL}/releases/latest/download/ohmyhf-windows-setup.exe`,
  linuxAppImage: `${REPO_URL}/releases/latest/download/ohmyhf-linux.AppImage`,
  linuxDeb: `${REPO_URL}/releases/latest/download/ohmyhf-linux.deb`,
} as const;

/** Semver string shown in the download section once a release exists. */
export const version = '0.1.0';

/**
 * When false, download CTAs render as "Coming soon" / "Watch on GitHub".
 * Flip to true when the first GitHub Release is published.
 */
export const released = false;
