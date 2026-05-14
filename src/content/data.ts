// Centralised editorial content for the hub.
// Plain-English, evidence-led, non-sensational. Last reviewed dates included.

export const REVIEWED = "May 2026";

export type AgeBand = {
  slug: string;
  range: string;
  headline: string;
  summary: string;
  behaviours: string[];
  risks: string[];
  settings: string[];
  conversation: string[];
  redFlags: string[];
};

export const AGE_BANDS: AgeBand[] = [
  {
    slug: "0-4",
    range: "0–4",
    headline: "Co-viewing years",
    summary:
      "Screens enter family life early. The goal at this age is shared, calm, short sessions — not solo scrolling.",
    behaviours: [
      "Watching cartoons or nursery videos with a parent",
      "Tapping on a tablet for short play",
      "Mirroring what older siblings watch",
    ],
    risks: [
      "Auto-play pulling toddlers into unsuitable content",
      "Screen use replacing sleep, talking or movement",
      "Accidental purchases inside ‘free’ apps",
    ],
    settings: [
      "Turn off auto-play on YouTube and streaming apps",
      "Use a dedicated kids profile (YouTube Kids, Netflix Kids)",
      "Disable in-app purchases on the device",
    ],
    conversation: [
      "Watch the first episode together so you know the show",
      "Name what they’re watching out loud — builds language",
    ],
    redFlags: [
      "Distress when a screen is turned off, every time",
      "Sleep disruption after evening screen use",
    ],
  },
  {
    slug: "5-7",
    range: "5–7",
    headline: "First apps and games",
    summary:
      "Kids start asking for their own logins and games. Set the defaults now — they’re much harder to claw back later.",
    behaviours: [
      "Playing simple games (Roblox, Minecraft, mobile games)",
      "Watching YouTube for long stretches",
      "Asking to message grandparents on a parent’s phone",
    ],
    risks: [
      "Stranger chat in games marketed as ‘for kids’",
      "Loud, fast, ad-heavy content shaping attention",
      "Accidental access to age-inappropriate videos",
    ],
    settings: [
      "Use Apple Family Sharing or Google Family Link",
      "Turn on Screen Time / Digital Wellbeing limits",
      "Disable chat in Roblox account settings",
    ],
    conversation: [
      "“If anyone you don’t know talks to you in a game, tell me — you won’t be in trouble.”",
    ],
    redFlags: [
      "Secretive behaviour with the device",
      "Repeating phrases or slang that feel ‘older’ than them",
    ],
  },
  {
    slug: "8-10",
    range: "8–10",
    headline: "Group chats begin",
    summary:
      "Friends’ devices change everything. Even without their own phone, kids this age are usually inside group chats.",
    behaviours: [
      "WhatsApp / iMessage group chats with classmates",
      "Roblox, Fortnite, Minecraft with voice chat",
      "Watching gaming streamers on YouTube",
    ],
    risks: [
      "Group-chat fallouts and exclusion",
      "First exposure to scary or sexual content",
      "Pressure to share embarrassing photos for ‘jokes’",
    ],
    settings: [
      "Restrict messaging to known contacts only",
      "Turn off voice chat with strangers in games",
      "Enable SafeSearch on Google and YouTube",
    ],
    conversation: [
      "Look at their chat list together once a week — make it routine, not a raid",
    ],
    redFlags: [
      "Sudden mood shifts after using a device",
      "Asking strangely specific questions about adult topics",
    ],
  },
  {
    slug: "11-13",
    range: "11–13",
    headline: "First phone & secondary school",
    summary:
      "The biggest jump. Social comparison, group chats and late-night scrolling all start here.",
    behaviours: [
      "TikTok, Snapchat, Instagram (often under-age)",
      "Sharing location with friends",
      "Late-night messaging",
    ],
    risks: [
      "Body image pressure and comparison spirals",
      "Snap streaks driving compulsive use",
      "Strangers sliding into DMs",
    ],
    settings: [
      "Private accounts on every social app",
      "Disable ‘suggest my account to others’",
      "No phones in the bedroom overnight",
    ],
    conversation: [
      "Agree a family media plan together — write it down",
      "Promise no-blame reporting if anything weird happens",
    ],
    redFlags: [
      "Hiding the screen when you walk in",
      "New ‘older’ online friends you’ve never heard of",
    ],
  },
  {
    slug: "14-15",
    range: "14–15",
    headline: "Identity online",
    summary:
      "Teens are forming identity in public. Safety here is less about blocks and more about trust and conversation.",
    behaviours: [
      "Posting publicly, building a following",
      "Private messaging with romantic interests",
      "Gaming communities (Discord, Twitch)",
    ],
    risks: [
      "Sharing nudes or being pressured to",
      "Coercion, blackmail (sextortion)",
      "Algorithmic rabbit-holes (extreme diet, self-harm, hate)",
    ],
    settings: [
      "Two-factor auth on every account",
      "Review who can DM them on each platform",
      "Discuss ‘nothing leaves the phone you wouldn’t want printed’",
    ],
    conversation: [
      "Make it clear: if a nude is leaked, you will help — no punishment",
      "Talk about consent and screenshots",
    ],
    redFlags: [
      "Sudden withdrawal, secrecy, sleep loss",
      "Mentions of someone older they’ve ‘only met online’",
    ],
  },
  {
    slug: "16-17",
    range: "16–17",
    headline: "Independence & risk",
    summary:
      "Almost adults online. The risks shift to scams, identity, finances and digital footprint.",
    behaviours: [
      "Banking apps, BNPL, crypto curiosity",
      "Job and uni applications online",
      "Adult relationships and dating apps (often under-age)",
    ],
    risks: [
      "Scams: job, romance, investment, deepfake extortion",
      "Permanent digital footprint affecting jobs and uni",
      "Gambling-style mechanics in games and trading apps",
    ],
    settings: [
      "Strong, unique passwords + a password manager",
      "Lock down old social accounts they’ve forgotten",
      "Set spending limits on payment apps",
    ],
    conversation: [
      "Talk about what they’d do if blackmailed online",
      "Agree it’s fine to call you for a ride — no questions",
    ],
    redFlags: [
      "Unexplained money in or out",
      "Talk of ‘easy money’ opportunities online",
    ],
  },
];

export type AppGuide = {
  slug: string;
  name: string;
  category: "Social" | "Messaging" | "Video" | "Game";
  minAge: string;
  why: string;
  risks: string[];
  settings: string[];
};

export const APPS: AppGuide[] = [
  {
    slug: "tiktok", name: "TikTok", category: "Social", minAge: "13+",
    why: "Short videos, trends, humour. The default ‘scrollable’ app for many teens.",
    risks: ["Endless algorithmic feed", "Body image / dieting content", "DMs from strangers on public accounts"],
    settings: ["Private account", "Restricted Mode", "Disable DMs from non-friends", "Family Pairing"],
  },
  {
    slug: "snapchat", name: "Snapchat", category: "Messaging", minAge: "13+",
    why: "Photo messages that ‘disappear’ and Snap Map for live location sharing.",
    risks: ["False sense of privacy (screenshots exist)", "Live location with anyone added", "Streaks driving compulsive use"],
    settings: ["Ghost Mode on Snap Map", "Contact Me: Friends only", "Family Center"],
  },
  {
    slug: "instagram", name: "Instagram", category: "Social", minAge: "13+",
    why: "Photos, reels, stories. Heavy on social comparison.",
    risks: ["Public profiles inviting DMs", "Reels algorithm rabbit holes", "Hidden ‘close friends’ accounts"],
    settings: ["Private account", "Sensitive Content Control: Less", "Hidden Words filter", "Family Center supervision"],
  },
  {
    slug: "youtube", name: "YouTube", category: "Video", minAge: "13+ (Kids: under 13)",
    why: "Where most kids actually watch ‘TV’. Includes gaming streams and shorts.",
    risks: ["Auto-play into unrelated content", "Shorts — fast, addictive feed", "Comments containing strangers"],
    settings: ["Restricted Mode", "Supervised Account for under-13s", "Disable autoplay", "YouTube Kids for younger kids"],
  },
  {
    slug: "whatsapp", name: "WhatsApp", category: "Messaging", minAge: "13+",
    why: "School class group chats live here. Used by every age.",
    risks: ["Being added to groups by strangers", "Forwarded misinformation", "Disappearing messages hiding bullying"],
    settings: ["Groups: My Contacts", "Last Seen: Contacts", "Two-step verification"],
  },
  {
    slug: "discord", name: "Discord", category: "Messaging", minAge: "13+",
    why: "Voice and text servers, especially for gamers and fandoms.",
    risks: ["Public servers with adult content", "Strangers in voice chat", "Crypto/scam DMs"],
    settings: ["Safe Direct Messaging: Filter all", "Disable DMs from server members", "Restrict friend requests"],
  },
  {
    slug: "roblox", name: "Roblox", category: "Game", minAge: "All ages (rated by experience)",
    why: "Millions of user-made games and a social hangout for under-12s.",
    risks: ["Stranger chat in experiences", "User-made games with adult themes", "Robux scams and ‘free Robux’ links"],
    settings: ["Account Restrictions on", "Allowed Experiences: appropriate age", "Disable chat", "Spend controls"],
  },
  {
    slug: "fortnite", name: "Fortnite", category: "Game", minAge: "12+",
    why: "Battle royale with voice chat and live in-game events.",
    risks: ["Voice chat with strangers in squads", "Spending on V-Bucks / Battle Pass", "Long sessions, late nights"],
    settings: ["Cabined Account for under-13s", "Voice chat: friends only", "Parental controls PIN"],
  },
];

export type GlossaryEntry = {
  term: string;
  kind: "Slang" | "Acronym" | "Emoji";
  meaning: string;
  context: string;
  riskLevel: "Usually fine" | "Worth a chat" | "Investigate";
};

export const GLOSSARY: GlossaryEntry[] = [
  { term: "IYKYK", kind: "Acronym", meaning: "‘If you know, you know’ — an in-joke or shared reference.", context: "Often harmless. Sometimes signals an exclusionary group chat.", riskLevel: "Usually fine" },
  { term: "Mid", kind: "Slang", meaning: "Average, unimpressive.", context: "Casual put-down. Watch for it being aimed at appearance.", riskLevel: "Usually fine" },
  { term: "Snaked", kind: "Slang", meaning: "Betrayed or two-faced behaviour.", context: "Falling-out language. Common in friendship drama.", riskLevel: "Usually fine" },
  { term: "POS", kind: "Acronym", meaning: "‘Parent over shoulder’ — pause the conversation.", context: "Used to hide chats. Worth knowing it exists.", riskLevel: "Worth a chat" },
  { term: "Sliding into DMs", kind: "Slang", meaning: "Privately messaging someone, often romantically.", context: "Normal teen flirting — but used by groomers too.", riskLevel: "Worth a chat" },
  { term: "Smurfing", kind: "Slang", meaning: "An older or skilled gamer using a fake junior account.", context: "In your child’s game lobby this can mean adults playing against children.", riskLevel: "Worth a chat" },
  { term: "🍃", kind: "Emoji", meaning: "Often refers to cannabis.", context: "Can be a leaf emoji, autumn vibes — context matters.", riskLevel: "Worth a chat" },
  { term: "💊", kind: "Emoji", meaning: "Drugs, often prescription pills.", context: "In dealer DMs or song lyrics. Look at who is sending it.", riskLevel: "Investigate" },
  { term: "🔌", kind: "Emoji", meaning: "‘The plug’ — someone who can supply something (often drugs).", context: "Almost always concerning when paired with payment talk.", riskLevel: "Investigate" },
  { term: "Op", kind: "Slang", meaning: "‘Opposition’ — a rival or enemy.", context: "Common in drill / gang content. Worth understanding the group.", riskLevel: "Investigate" },
];

export type Checklist = {
  slug: string;
  title: string;
  device: string;
  steps: string[];
};

export const CHECKLISTS: Checklist[] = [
  {
    slug: "iphone-first-setup",
    title: "iPhone for a child — first setup",
    device: "iOS",
    steps: [
      "Create the child’s Apple ID through Family Sharing (don’t reuse yours)",
      "Turn on Screen Time → Content & Privacy Restrictions",
      "Set Communication Limits: Contacts only, during screen time and downtime",
      "Disable in-app purchases; require ‘Ask to Buy’",
      "Enable Find My + Stolen Device Protection",
      "Turn on Communication Safety (blurs nudity in Messages)",
    ],
  },
  {
    slug: "android-first-setup",
    title: "Android phone for a child — first setup",
    device: "Android",
    steps: [
      "Set up the device with a child Google account via Family Link",
      "Approve every app install from the parent device",
      "Set daily screen time and bedtime in Family Link",
      "Enable SafeSearch in Google account settings",
      "Turn on Play Store content restrictions (age rating)",
      "Disable location sharing for non-essential apps",
    ],
  },
  {
    slug: "youtube-safer",
    title: "Make YouTube safer in 5 minutes",
    device: "Any",
    steps: [
      "Switch to a Supervised Account if under 13",
      "Turn on Restricted Mode in account settings",
      "Disable autoplay",
      "Clear watch history; pause history if needed",
      "Block creators that show up unwanted",
    ],
  },
  {
    slug: "social-lockdown",
    title: "Lock down a teen’s social accounts",
    device: "Any",
    steps: [
      "Set every account to Private",
      "Disable ‘suggest my account to others’",
      "Remove location from posts and profiles",
      "Turn on two-factor authentication",
      "Review followers — remove anyone they can’t name in real life",
    ],
  },
];
