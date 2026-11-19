export const AGE_JOURNEYS: Record<string, { apps: string[]; checklists: string[]; intro: string }> =
  {
    "0-4": {
      apps: ["youtube"],
      checklists: ["youtube-safer"],
      intro: "For shared viewing and devices managed by an adult.",
    },
    "5-7": {
      apps: ["minecraft", "roblox", "youtube"],
      checklists: ["youtube-safer"],
      intro:
        "Understand the games and videos your child asks about, then check the device together.",
    },
    "8-10": {
      apps: ["roblox", "minecraft", "fortnite"],
      checklists: ["youtube-safer", "social-lockdown"],
      intro:
        "Compare content ratings, play partners and communication settings before agreeing to a game or account.",
    },
    "11-13": {
      apps: ["snapchat", "whatsapp", "tiktok", "instagram", "roblox"],
      checklists: ["iphone-first-setup", "android-first-setup", "social-lockdown"],
      intro:
        "Start with the apps your child uses or asks for, then follow the checklist for their phone.",
    },
    "14-15": {
      apps: ["discord", "instagram", "twitch", "kick", "reddit", "x-twitter", "bereal"],
      checklists: ["social-lockdown", "iphone-first-setup", "android-first-setup"],
      intro:
        "Review messaging, public profiles and live communities together, alongside device settings.",
    },
    "16-17": {
      apps: [
        "telegram",
        "yubo",
        "character-ai",
        "replika",
        "ngl-sendit",
        "omegle-style",
        "vrchat",
        "gta-online",
      ],
      checklists: ["social-lockdown", "iphone-first-setup", "android-first-setup"],
      intro:
        "Use these explainers to discuss requests, adult-only services and contact with unfamiliar people.",
    },
  };
export const CHECKLIST_JOURNEYS: Record<string, { ages: string[]; apps: string[] }> = {
  "iphone-first-setup": {
    ages: ["11-13", "14-15"],
    apps: ["roblox", "snapchat", "whatsapp", "tiktok"],
  },
  "android-first-setup": {
    ages: ["11-13", "14-15"],
    apps: ["roblox", "snapchat", "whatsapp", "youtube"],
  },
  "youtube-safer": { ages: ["0-4", "5-7", "8-10"], apps: ["youtube"] },
  "social-lockdown": {
    ages: ["11-13", "14-15", "16-17"],
    apps: ["snapchat", "instagram", "discord", "whatsapp"],
  },
};
