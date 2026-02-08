// Site configuration - editable via admin panel
export interface SiteConfig {
  youtube: {
    channelId: string;
    channelHandle: string;
  };
  patreon: {
    username: string;
    url: string;
  };
  trailer: {
    videoId: string;
    title: string;
  };
}

export const defaultSiteConfig: SiteConfig = {
  youtube: {
    channelId: "UCgJwbyzi0jrX5BuwLS_pJ1A", // Replace with actual channel ID
    channelHandle: "@athiangames2417"
  },
  patreon: {
    username: "athiangames",
    url: "https://patreon.com/athiangames"
  },
  trailer: {
    videoId: "zTLjtnlbFjU", // Default to minimap video, replace with actual trailer
    title: "Athian Games Showreel"
  }
};

// Function to get site config (loads from JSON file if exists, otherwise uses default)
export function getSiteConfig(): SiteConfig {
  if (typeof window === 'undefined') {
    // Server-side: try to load from JSON file
    try {
      const fs = require('fs');
      const path = require('path');
      const configPath = path.join(process.cwd(), 'lib', 'config', 'siteConfig.json');

      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(fileContent);
      }
    } catch (error) {
      console.error('Failed to load config from file:', error);
    }
  }

  return defaultSiteConfig;
}
