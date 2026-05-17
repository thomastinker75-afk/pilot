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
  kind: "Slang" | "Acronym" | "Emoji" | "Number";
  meaning: string;
  context: string;
  example?: string;
  riskLevel: "Usually fine" | "Worth a chat" | "Investigate";
};

// A–Z dictionary of slang, acronyms, emoji and numbers UK teens use online.
// Sources: editorial review of Luna teen dictionary, BBC / Common Sense Media,
// Internet Matters, NSPCC Net Aware, ongoing TikTok / Reddit trend scans.
// Reviewed monthly — last review date is REVIEWED above.
export const GLOSSARY: GlossaryEntry[] = [
  // Numbers
  { term: "67", kind: "Number", meaning: "Viral TikTok meme from the drill song ‘Doot Doot’. Means nothing — used as a nonsense punchline.", context: "Usually harmless. Said with an exaggerated voice and palms-up gesture.", example: "“What time is it?” — “67.”", riskLevel: "Usually fine" },
  { term: "212", kind: "Number", meaning: "Reference to Azealia Banks’ track — sometimes used to call someone bold or confrontational.", context: "Mostly harmless music reference.", riskLevel: "Usually fine" },
  { term: "420", kind: "Number", meaning: "Code for cannabis use.", context: "If it shows up with 🍃 or transaction talk, worth a calm conversation.", riskLevel: "Worth a chat" },
  { term: "1437", kind: "Number", meaning: "‘I love you forever’ — letter count of each word.", context: "Romantic. Common in teen relationships.", riskLevel: "Usually fine" },
  { term: "143", kind: "Number", meaning: "‘I love you’ — letter count.", context: "Romantic shorthand.", riskLevel: "Usually fine" },
  { term: "182", kind: "Number", meaning: "‘I hate you’.", context: "Falling-out language.", riskLevel: "Usually fine" },
  { term: "53X", kind: "Number", meaning: "Disguised spelling of ‘sex’ to dodge filters.", context: "Used to bypass moderation. Worth investigating context.", riskLevel: "Investigate" },
  { term: "CD9", kind: "Acronym", meaning: "‘Code 9’ — parent nearby, change the subject.", context: "Used to hide conversations from adults.", riskLevel: "Worth a chat" },

  // A
  { term: "Aight", kind: "Slang", meaning: "Okay / alright.", context: "Casual agreement.", riskLevel: "Usually fine" },
  { term: "Alpha", kind: "Slang", meaning: "Someone seen as dominant or powerful in social settings.", context: "Often ironic. Linked to ‘manosphere’ content when used seriously by boys.", riskLevel: "Worth a chat" },
  { term: "AF", kind: "Acronym", meaning: "‘As f***’ — used to emphasise.", context: "Very common. Usually harmless.", example: "“That’s cool af.”", riskLevel: "Usually fine" },
  { term: "Ate", kind: "Slang", meaning: "Did something really well.", context: "Compliment, especially about outfits or performances.", example: "“She ate that performance.”", riskLevel: "Usually fine" },
  { term: "Aura", kind: "Slang", meaning: "Your social vibe. You gain or lose ‘aura points’ for cool or cringe behaviour.", context: "Playful self-rating. Watch for it being used to mock peers.", riskLevel: "Usually fine" },

  // B
  { term: "Bae", kind: "Slang", meaning: "Partner / loved one. Stands for ‘before anyone else’.", context: "Romantic or platonic.", riskLevel: "Usually fine" },
  { term: "Banger", kind: "Slang", meaning: "An amazing song or thing.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Based", kind: "Slang", meaning: "An opinion that’s confident and grounded — you agree with it.", context: "Used across the political spectrum, including in ‘edgy’ corners. Context matters.", riskLevel: "Worth a chat" },
  { term: "Basic", kind: "Slang", meaning: "Unoriginal, mainstream.", context: "Mild put-down.", riskLevel: "Usually fine" },
  { term: "Beef", kind: "Slang", meaning: "A feud or argument.", context: "Friendship drama. Escalates online quickly.", riskLevel: "Usually fine" },
  { term: "Bed rotting", kind: "Slang", meaning: "Staying in bed all day on devices, avoiding life.", context: "Often a joke, but can flag low mood or burnout.", riskLevel: "Worth a chat" },
  { term: "Beige flag", kind: "Slang", meaning: "A neutral quirk in a partner — neither red nor green.", context: "Harmless TikTok trend.", riskLevel: "Usually fine" },
  { term: "Beg / Beggy", kind: "Slang", meaning: "Someone who tries too hard for attention or approval.", context: "Used as an insult in UK schools.", riskLevel: "Worth a chat" },
  { term: "Bet", kind: "Slang", meaning: "‘Okay’ or ‘let’s do it’.", context: "Casual agreement.", riskLevel: "Usually fine" },
  { term: "BFFR", kind: "Acronym", meaning: "‘Be f***ing for real’ — call for honesty.", context: "Used playfully between friends.", riskLevel: "Usually fine" },
  { term: "Big yikes", kind: "Slang", meaning: "Extremely embarrassing.", context: "Reaction phrase.", riskLevel: "Usually fine" },
  { term: "Bop", kind: "Slang", meaning: "A great song. Can also be a sexist put-down for a girl — context-dependent.", context: "Watch for the second meaning in mixed group chats.", riskLevel: "Worth a chat" },
  { term: "Bounce", kind: "Slang", meaning: "To leave.", context: "Casual.", riskLevel: "Usually fine" },
  { term: "Brain rot", kind: "Slang", meaning: "Mental fog from too much short-form content.", context: "Self-aware meme. Can flag genuine overwhelm.", riskLevel: "Worth a chat" },
  { term: "Brat", kind: "Slang", meaning: "Messy, confident, self-expressive (after Charli XCX’s album).", context: "Positive aesthetic, not the old meaning.", riskLevel: "Usually fine" },
  { term: "Brokie", kind: "Slang", meaning: "Someone with no money.", context: "Light teasing.", riskLevel: "Usually fine" },
  { term: "Bruh", kind: "Slang", meaning: "‘Dude’ / exasperation.", context: "Very common.", riskLevel: "Usually fine" },
  { term: "Bussin’", kind: "Slang", meaning: "Delicious — usually food.", context: "Positive.", riskLevel: "Usually fine" },

  // C
  { term: "Canon event", kind: "Slang", meaning: "A defining, unavoidable life moment (from Spider-Verse).", context: "Often used to justify bad decisions.", riskLevel: "Usually fine" },
  { term: "Cap / No cap", kind: "Slang", meaning: "‘Cap’ = a lie; ‘no cap’ = no lie.", context: "Very common.", riskLevel: "Usually fine" },
  { term: "Caught in 4K", kind: "Slang", meaning: "Caught red-handed on video.", context: "Calling someone out.", riskLevel: "Usually fine" },
  { term: "Cheugy", kind: "Slang", meaning: "Outdated or trying too hard.", context: "Mild insult, often aimed at millennials.", riskLevel: "Usually fine" },
  { term: "Chuzz", kind: "Slang", meaning: "Derogatory term for an ‘unattractive girl’ — from ‘chopped huzz’.", context: "Sexist insult, often in comment sections. Worth talking about.", riskLevel: "Investigate" },
  { term: "Clapped", kind: "Slang", meaning: "Ugly or worn out (UK).", context: "Often a personal insult.", riskLevel: "Worth a chat" },
  { term: "Clown", kind: "Slang", meaning: "Someone foolish, or self-deprecation for being naive.", context: "Light. Watch for repeated targeting of one person.", riskLevel: "Usually fine" },
  { term: "Cooked", kind: "Slang", meaning: "Doomed, in trouble.", context: "Often about exams.", riskLevel: "Usually fine" },
  { term: "Cope", kind: "Slang", meaning: "‘Deal with it’ — dismissive end to an argument.", context: "Mildly aggressive.", riskLevel: "Usually fine" },
  { term: "Cringe", kind: "Slang", meaning: "Embarrassing.", context: "Ubiquitous.", riskLevel: "Usually fine" },
  { term: "Cursed", kind: "Slang", meaning: "Off-putting, creepy in a funny way.", context: "Reaction word.", riskLevel: "Usually fine" },
  { term: "Curve", kind: "Slang", meaning: "To reject someone romantically.", context: "Common in dating talk.", riskLevel: "Usually fine" },

  // D
  { term: "Dank", kind: "Slang", meaning: "Cool / niche (usually memes).", context: "Harmless.", riskLevel: "Usually fine" },
  { term: "Dead / I’m dead", kind: "Slang", meaning: "Laughing extremely hard.", context: "Not literal.", riskLevel: "Usually fine" },
  { term: "Deadass", kind: "Slang", meaning: "‘I’m serious’.", context: "Emphatic.", riskLevel: "Usually fine" },
  { term: "Deets", kind: "Slang", meaning: "Details.", context: "Casual.", riskLevel: "Usually fine" },
  { term: "Delulu", kind: "Slang", meaning: "Delusional — usually about a crush or fan obsession.", context: "Almost always playful.", riskLevel: "Usually fine" },
  { term: "Demure", kind: "Slang", meaning: "Modest, mindful (ironic TikTok trend).", context: "Harmless meme.", riskLevel: "Usually fine" },
  { term: "Down bad", kind: "Slang", meaning: "Desperately into someone.", context: "Romantic. Self-deprecating.", riskLevel: "Usually fine" },
  { term: "Do it for the plot", kind: "Slang", meaning: "Make a risky choice for a good story.", context: "Can encourage genuinely risky behaviour.", riskLevel: "Worth a chat" },
  { term: "Drip", kind: "Slang", meaning: "Stylish outfit.", context: "Compliment.", riskLevel: "Usually fine" },
  { term: "Dub / W", kind: "Slang", meaning: "A win.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Dusty", kind: "Slang", meaning: "Unkempt, low-status (insult).", context: "Personal put-down.", riskLevel: "Worth a chat" },

  // E
  { term: "Eepy", kind: "Slang", meaning: "Sleepy / cute.", context: "Harmless.", riskLevel: "Usually fine" },
  { term: "Extra", kind: "Slang", meaning: "Over the top / dramatic.", context: "Mild critique.", riskLevel: "Usually fine" },

  // F
  { term: "Feral", kind: "Slang", meaning: "Acting wild or unhinged (positively).", context: "Self-deprecating humour.", riskLevel: "Usually fine" },
  { term: "Finsta", kind: "Slang", meaning: "‘Fake Instagram’ — a private secondary account for close friends.", context: "Often hidden from parents. Worth understanding why.", riskLevel: "Worth a chat" },
  { term: "Fire", kind: "Slang", meaning: "Excellent.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Fit / Fit check", kind: "Slang", meaning: "Outfit / showing off outfit.", context: "Fashion talk.", riskLevel: "Usually fine" },
  { term: "Flex", kind: "Slang", meaning: "To brag.", context: "Common.", riskLevel: "Usually fine" },
  { term: "FR", kind: "Acronym", meaning: "‘For real’ — agreement.", context: "Very common.", riskLevel: "Usually fine" },
  { term: "FYP", kind: "Acronym", meaning: "‘For You Page’ — TikTok’s algorithmic feed.", context: "What the algorithm shows them shapes mood and worldview.", riskLevel: "Worth a chat" },

  // G
  { term: "Ghosted", kind: "Slang", meaning: "Cut off without explanation.", context: "Common in dating and friendships.", riskLevel: "Usually fine" },
  { term: "Glazing", kind: "Slang", meaning: "Over-praising someone for no reason.", context: "Casual put-down.", riskLevel: "Usually fine" },
  { term: "Glow up", kind: "Slang", meaning: "Positive transformation in looks/confidence.", context: "Compliment. Can fuel appearance pressure.", riskLevel: "Worth a chat" },
  { term: "GOAT / GOATest", kind: "Acronym", meaning: "Greatest Of All Time.", context: "High praise.", riskLevel: "Usually fine" },
  { term: "Goblin mode", kind: "Slang", meaning: "Going feral / unhinged.", context: "Self-aware joke.", riskLevel: "Usually fine" },
  { term: "Grind", kind: "Slang", meaning: "Working hard.", context: "Hustle talk.", riskLevel: "Usually fine" },
  { term: "Gyatt", kind: "Slang", meaning: "Exclamation reacting to a curvy figure.", context: "Often boys-side language; can be sexualised. Worth a conversation about respect.", riskLevel: "Worth a chat" },

  // H
  { term: "Hits different", kind: "Slang", meaning: "Feels uniquely good.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Hop off", kind: "Slang", meaning: "‘Get off my back / log off’.", context: "Dismissive.", riskLevel: "Usually fine" },
  { term: "Huzz", kind: "Slang", meaning: "Disrespectful term for girls — internet variant of ‘hoes’.", context: "Common in boy group chats. Worth talking about misogyny.", riskLevel: "Investigate" },
  { term: "Hype", kind: "Slang", meaning: "Excitement / popularity.", context: "Common.", riskLevel: "Usually fine" },

  // I
  { term: "Ick", kind: "Slang", meaning: "Sudden turn-off — usually a tiny thing a crush did.", context: "Lighthearted.", riskLevel: "Usually fine" },
  { term: "IRL", kind: "Acronym", meaning: "In Real Life.", context: "Used to contrast with online life.", riskLevel: "Usually fine" },
  { term: "IYKYK", kind: "Acronym", meaning: "‘If you know, you know’ — in-joke.", context: "Often harmless. Can signal an exclusionary group chat.", riskLevel: "Usually fine" },

  // J
  { term: "Jarring", kind: "Slang", meaning: "Annoying / cringey (UK).", context: "Mild insult.", riskLevel: "Usually fine" },

  // K
  { term: "Karen", kind: "Slang", meaning: "Entitled, rude (often middle-aged) woman trope.", context: "Used about parents and teachers.", riskLevel: "Usually fine" },
  { term: "KMS / KYS", kind: "Acronym", meaning: "‘Kill myself’ / ‘kill yourself’ — used as hyperbole, also as serious bullying.", context: "Never assume it’s a joke. Open a calm conversation.", riskLevel: "Investigate" },

  // L
  { term: "Lit", kind: "Slang", meaning: "Exciting or cool.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "L / Take the L", kind: "Slang", meaning: "Loss / accepting defeat.", context: "Gaming origin.", riskLevel: "Usually fine" },
  { term: "LMAO", kind: "Acronym", meaning: "‘Laughing my ass off’.", context: "Standard reaction.", riskLevel: "Usually fine" },
  { term: "Locked in", kind: "Slang", meaning: "Focused, in the zone.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Lore", kind: "Slang", meaning: "Backstory about a person or fandom.", context: "Often gossip.", riskLevel: "Usually fine" },
  { term: "LOML", kind: "Acronym", meaning: "‘Love of my life’ — usually for best friend.", context: "Affectionate.", riskLevel: "Usually fine" },
  { term: "Lowkey / Highkey", kind: "Slang", meaning: "Quietly / loudly feeling something.", context: "Very common.", riskLevel: "Usually fine" },

  // M
  { term: "Main character", kind: "Slang", meaning: "Living life like you’re the star of the show.", context: "Positive self-talk.", riskLevel: "Usually fine" },
  { term: "Mango mustard", kind: "Slang", meaning: "Gen-Alpha brain-rot joke — 6+7 letters = ‘67’.", context: "Nonsense humour.", riskLevel: "Usually fine" },
  { term: "Mid", kind: "Slang", meaning: "Mediocre.", context: "Mild put-down. Watch for it being aimed at looks.", riskLevel: "Worth a chat" },
  { term: "Mogging", kind: "Slang", meaning: "Showing off looks to feel superior.", context: "Linked to ‘looksmaxxing’ communities — worth a conversation.", riskLevel: "Worth a chat" },
  { term: "Mood", kind: "Slang", meaning: "‘I relate’.", context: "Common reaction.", riskLevel: "Usually fine" },
  { term: "Mute", kind: "Slang", meaning: "Silently ignore someone on a platform.", context: "Common.", riskLevel: "Usually fine" },

  // N
  { term: "NGL", kind: "Acronym", meaning: "‘Not gonna lie’.", context: "Honesty marker.", riskLevel: "Usually fine" },
  { term: "Neek", kind: "Slang", meaning: "UK insult mixing nerd + geek.", context: "Mild bullying.", riskLevel: "Worth a chat" },
  { term: "NPC", kind: "Slang", meaning: "‘Non-player character’ — someone seen as bland or robotic.", context: "Common insult about peers.", riskLevel: "Worth a chat" },
  { term: "Normie", kind: "Slang", meaning: "Someone outside internet culture.", context: "Mild.", riskLevel: "Usually fine" },

  // O
  { term: "Ohio", kind: "Slang", meaning: "Synonym for strange or cringey.", context: "Meme word.", riskLevel: "Usually fine" },
  { term: "OOMF", kind: "Acronym", meaning: "‘One of my followers / friends’.", context: "Vague reference, often subtweeting.", riskLevel: "Usually fine" },
  { term: "OP", kind: "Acronym", meaning: "‘Overpowered’ — too good. Also ‘original poster’.", context: "Context-dependent.", riskLevel: "Usually fine" },
  { term: "Op", kind: "Slang", meaning: "‘Opposition’ — rival/enemy.", context: "Drill / gang content. Worth understanding the friend group.", riskLevel: "Investigate" },
  { term: "Outta pocket", kind: "Slang", meaning: "Out of line / controversial.", context: "Reaction phrase.", riskLevel: "Usually fine" },

  // P
  { term: "Periodt", kind: "Slang", meaning: "Emphasis — ‘end of story’.", context: "Empowering.", riskLevel: "Usually fine" },
  { term: "Pookie", kind: "Slang", meaning: "Term of endearment.", context: "Friends or partner.", riskLevel: "Usually fine" },
  { term: "POS", kind: "Acronym", meaning: "‘Parent over shoulder’ — change topic.", context: "Used to hide chats from adults.", riskLevel: "Worth a chat" },
  { term: "POV", kind: "Acronym", meaning: "‘Point of view’ — TikTok framing.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Pushing P", kind: "Slang", meaning: "Doing things the right way / showing class.", context: "Hip-hop origin.", riskLevel: "Usually fine" },

  // R
  { term: "Ratio", kind: "Slang", meaning: "When replies outnumber likes — you’ve ‘lost’ online.", context: "Public shaming.", riskLevel: "Worth a chat" },
  { term: "Real", kind: "Slang", meaning: "‘True / I agree’.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Rent free", kind: "Slang", meaning: "Something stuck in your head.", context: "Harmless.", riskLevel: "Usually fine" },
  { term: "Rizz", kind: "Slang", meaning: "Charisma / flirting skill.", context: "Very common with boys.", riskLevel: "Usually fine" },
  { term: "Roadman", kind: "Slang", meaning: "UK streetwear / urban persona.", context: "Style identity. Sometimes linked to drill culture.", riskLevel: "Worth a chat" },

  // S
  { term: "Salty", kind: "Slang", meaning: "Bitter / resentful.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Serving", kind: "Slang", meaning: "Looking amazing.", context: "Compliment.", riskLevel: "Usually fine" },
  { term: "Sheesh", kind: "Slang", meaning: "Exclamation of awe.", context: "Reaction.", riskLevel: "Usually fine" },
  { term: "Ship", kind: "Slang", meaning: "Want two people to be a couple.", context: "Fandom and friend talk.", riskLevel: "Usually fine" },
  { term: "Side eye", kind: "Slang", meaning: "A judgemental look.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Sigma", kind: "Slang", meaning: "Lone-wolf, ‘main character’ male energy.", context: "Often ironic, but rooted in ‘manosphere’ ideas about masculinity.", riskLevel: "Worth a chat" },
  { term: "Simp", kind: "Slang", meaning: "Overly devoted to someone (usually romantic).", context: "Common insult. Can carry misogynistic undertones.", riskLevel: "Worth a chat" },
  { term: "Situationship", kind: "Slang", meaning: "Undefined romantic relationship.", context: "Real teen experience worth discussing.", riskLevel: "Usually fine" },
  { term: "Skibidi", kind: "Slang", meaning: "Nonsense meme word — can mean ‘cool’ or ‘bad’.", context: "Pure Gen-Alpha humour.", riskLevel: "Usually fine" },
  { term: "Slay", kind: "Slang", meaning: "Performed brilliantly.", context: "Compliment.", riskLevel: "Usually fine" },
  { term: "Sliding into DMs", kind: "Slang", meaning: "Privately messaging someone, usually romantically.", context: "Normal flirting — also used by groomers.", riskLevel: "Worth a chat" },
  { term: "Smol", kind: "Slang", meaning: "Cute / tiny.", context: "Harmless.", riskLevel: "Usually fine" },
  { term: "Smurfing", kind: "Slang", meaning: "An adult or skilled gamer using a junior account to play against children.", context: "Concerning in your child’s game lobby.", riskLevel: "Worth a chat" },
  { term: "Snaked", kind: "Slang", meaning: "Betrayed.", context: "Friendship drama.", riskLevel: "Usually fine" },
  { term: "Snatched", kind: "Slang", meaning: "Toned / styled to perfection.", context: "Compliment about appearance — can fuel body pressure.", riskLevel: "Worth a chat" },
  { term: "Social battery", kind: "Slang", meaning: "Energy for social situations.", context: "Self-aware mental health language.", riskLevel: "Usually fine" },
  { term: "Stan", kind: "Slang", meaning: "Obsessed fan.", context: "Fandom term. Can tip into unhealthy parasocial behaviour.", riskLevel: "Usually fine" },
  { term: "Sus", kind: "Slang", meaning: "Suspicious.", context: "Among Us origin.", riskLevel: "Usually fine" },

  // T
  { term: "TBH", kind: "Acronym", meaning: "‘To be honest’.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Tea", kind: "Slang", meaning: "Gossip.", context: "‘Spill the tea’.", riskLevel: "Usually fine" },
  { term: "Thirsty / Thirst trap", kind: "Slang", meaning: "Desperate for attention; sexy post designed to get reactions.", context: "Image-pressure language. Worth talking about audience and consent.", riskLevel: "Worth a chat" },
  { term: "Throw shade", kind: "Slang", meaning: "Passive-aggressive comments.", context: "Drama signal.", riskLevel: "Usually fine" },
  { term: "Trad / Tradwife", kind: "Slang", meaning: "‘Traditional’ gender roles aesthetic on TikTok.", context: "Increasingly tied to extremist content. Worth a conversation.", riskLevel: "Worth a chat" },

  // U
  { term: "Unalive", kind: "Slang", meaning: "‘Kill’ — used to dodge platform moderation.", context: "Common in mental-health and dark-humour content. Take seriously if used about self.", riskLevel: "Investigate" },

  // V
  { term: "Valid", kind: "Slang", meaning: "Acceptable / true.", context: "Affirming.", riskLevel: "Usually fine" },
  { term: "Vibe / Vibe check", kind: "Slang", meaning: "Mood; assessing someone’s mood.", context: "Casual.", riskLevel: "Usually fine" },
  { term: "Vent account", kind: "Slang", meaning: "Anonymous account for sharing low feelings.", context: "Can be supportive — can also reinforce distress. Worth knowing it exists.", riskLevel: "Worth a chat" },

  // W
  { term: "W", kind: "Slang", meaning: "A win.", context: "Positive.", riskLevel: "Usually fine" },
  { term: "Womp womp", kind: "Slang", meaning: "Mock-sympathy sound — ‘too bad’.", context: "Dismissive.", riskLevel: "Usually fine" },
  { term: "WTF", kind: "Acronym", meaning: "‘What the f***’ — shock.", context: "Common.", riskLevel: "Usually fine" },
  { term: "WYA / WYD", kind: "Acronym", meaning: "‘Where you at’ / ‘what you doing’.", context: "Casual check-in.", riskLevel: "Usually fine" },

  // X
  { term: "X-rated", kind: "Slang", meaning: "Sexually explicit content.", context: "If paired with DMs or photo-sharing talk, take seriously.", riskLevel: "Investigate" },

  // Y
  { term: "Yap / Yapper", kind: "Slang", meaning: "Someone who talks a lot.", context: "Casual.", riskLevel: "Usually fine" },
  { term: "Yas", kind: "Slang", meaning: "Enthusiastic yes.", context: "Common.", riskLevel: "Usually fine" },
  { term: "Yeet", kind: "Slang", meaning: "Throw with force; general exclamation.", context: "Older but still used.", riskLevel: "Usually fine" },
  { term: "YOLO", kind: "Acronym", meaning: "‘You only live once’.", context: "Used to justify risky behaviour.", riskLevel: "Worth a chat" },

  // Z
  { term: "Zesty", kind: "Slang", meaning: "Used to call a boy flamboyant — often homophobic in intent.", context: "Worth addressing as a bullying term.", riskLevel: "Worth a chat" },

  // Emoji — meanings that aren't obvious
  { term: "🍃", kind: "Emoji", meaning: "Often cannabis.", context: "Can be autumn vibes — read the chat.", riskLevel: "Worth a chat" },
  { term: "💊", kind: "Emoji", meaning: "Drugs, often pills.", context: "Concerning alongside money talk or 🔌.", riskLevel: "Investigate" },
  { term: "🔌", kind: "Emoji", meaning: "‘The plug’ — a supplier (often drugs).", context: "High-risk in DMs.", riskLevel: "Investigate" },
  { term: "❄️", kind: "Emoji", meaning: "Cocaine.", context: "In dealer / party chats. Otherwise just winter.", riskLevel: "Investigate" },
  { term: "🍄", kind: "Emoji", meaning: "Magic mushrooms.", context: "Drug reference in context.", riskLevel: "Investigate" },
  { term: "🍆", kind: "Emoji", meaning: "Penis.", context: "Sexual content. Common in nudes-related chat.", riskLevel: "Investigate" },
  { term: "🍑", kind: "Emoji", meaning: "Bum / sexual.", context: "Sexualised.", riskLevel: "Worth a chat" },
  { term: "💦", kind: "Emoji", meaning: "Sexual fluid / arousal.", context: "Sexualised.", riskLevel: "Worth a chat" },
  { term: "👅", kind: "Emoji", meaning: "Sexual suggestion.", context: "Flirty DMs.", riskLevel: "Worth a chat" },
  { term: "🌽", kind: "Emoji", meaning: "‘Corn’ — slang for porn (dodges moderation).", context: "Used to talk about adult content openly.", riskLevel: "Investigate" },
  { term: "🥵", kind: "Emoji", meaning: "Finding someone attractive.", context: "Flirty.", riskLevel: "Usually fine" },
  { term: "😈", kind: "Emoji", meaning: "Mischief — often sexual undertone.", context: "Flirty.", riskLevel: "Worth a chat" },
  { term: "💀", kind: "Emoji", meaning: "‘I’m dead’ — laughing.", context: "Replaced 😂. Not literal.", riskLevel: "Usually fine" },
  { term: "😭", kind: "Emoji", meaning: "Laughing or overwhelmed (not crying).", context: "Common.", riskLevel: "Usually fine" },
  { term: "🤡", kind: "Emoji", meaning: "‘I’m a clown / they’re a clown’ — fool.", context: "Self-deprecating or insult.", riskLevel: "Usually fine" },
  { term: "🧢", kind: "Emoji", meaning: "‘Cap’ — a lie.", context: "Calling out a lie.", riskLevel: "Usually fine" },
  { term: "🐐", kind: "Emoji", meaning: "GOAT — Greatest Of All Time.", context: "Compliment.", riskLevel: "Usually fine" },
  { term: "🚩", kind: "Emoji", meaning: "Red flag — warning about a person.", context: "Relationship talk.", riskLevel: "Usually fine" },
  { term: "🫶", kind: "Emoji", meaning: "Heart hands — love / support.", context: "Affirming.", riskLevel: "Usually fine" },
  { term: "👀", kind: "Emoji", meaning: "‘I’m watching’ / curious / suggestive.", context: "Context-dependent.", riskLevel: "Usually fine" },
  { term: "🦋", kind: "Emoji", meaning: "Crush butterflies; also self-harm awareness in some communities.", context: "Mostly romantic. Read context.", riskLevel: "Worth a chat" },
  { term: "🖤", kind: "Emoji", meaning: "Black heart — can signal sadness or edgy aesthetic.", context: "Often just style. Watch for clusters with sad content.", riskLevel: "Worth a chat" },
  { term: "🌈", kind: "Emoji", meaning: "LGBTQ+ pride / queer identity.", context: "Identity marker.", riskLevel: "Usually fine" },
  { term: "🍒", kind: "Emoji", meaning: "Virginity / breasts (context-dependent).", context: "Sexualised in DMs.", riskLevel: "Worth a chat" },
  { term: "🥶", kind: "Emoji", meaning: "‘Cold’ — impressive, ruthless.", context: "Compliment.", riskLevel: "Usually fine" },
  { term: "🫠", kind: "Emoji", meaning: "Melting — overwhelmed.", context: "Mental load humour.", riskLevel: "Usually fine" },
  { term: "🥲", kind: "Emoji", meaning: "Smiling through it — quietly upset.", context: "Worth checking in.", riskLevel: "Worth a chat" },
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
