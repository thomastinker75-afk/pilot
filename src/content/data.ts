// Centralised editorial content for the hub.
// Plain-English, evidence-led, non-sensational. Last reviewed dates included.

export const REVIEWED = "May 2026";

export type ScreenTimeGuidance = {
  recommended: string;
  sources: { label: string; org: string; region: string; url: string }[];
  consequences: string[];
};

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
  screenTime: ScreenTimeGuidance;
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
    screenTime: {
      recommended:
        "Under 18 months: avoid screens except video calls. 18–24 months: only short, high-quality co-viewed content. 2–4 years: no more than 1 hour per day of any screen (TV, tablet, phone, console) — and ideally much less.",
      sources: [
        { label: "Guidelines on physical activity, sedentary behaviour and sleep for children under 5", org: "World Health Organization", region: "Global", url: "https://www.who.int/publications/i/item/9789241550536" },
        { label: "Media and Young Minds (policy statement)", org: "American Academy of Pediatrics", region: "USA", url: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds" },
        { label: "Screen time and young children — position statement", org: "Canadian Paediatric Society", region: "Canada", url: "https://cps.ca/en/documents/position/screen-time-and-young-children" },
        { label: "À chaque âge son écran (3-6-9-12 framework)", org: "Serge Tisseron / French Ministry of Health", region: "France", url: "https://www.sergetisseron.com/3-6-9-12/" },
      ],
      consequences: [
        "Delayed language acquisition and smaller vocabularies — repeatedly shown in studies of heavy-screen toddlers (e.g. JAMA Pediatrics, 2020).",
        "Shorter and more disrupted sleep; melatonin suppression from evening screens.",
        "Reduced parent–child interaction, which is the single biggest predictor of early brain development.",
        "Higher risk of attention and self-regulation problems by school entry (CHILD Cohort Study, Canada, 2019).",
      ],
    },
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
    screenTime: {
      recommended:
        "No more than 1 hour per day of recreational screen time (TV, tablet, console, phone combined), with screens off at least an hour before bed and no screens during meals.",
      sources: [
        { label: "Guidelines for physical activity, sedentary behaviour and sleep — under 5s extended to early school years", org: "World Health Organization", region: "Global", url: "https://www.who.int/publications/i/item/9789241550536" },
        { label: "Media use in school-aged children and adolescents", org: "American Academy of Pediatrics", region: "USA", url: "https://publications.aap.org/pediatrics/article/138/5/e20162592/60321/Media-Use-in-School-Aged-Children-and-Adolescents" },
        { label: "24-Hour Movement Guidelines for Children and Youth", org: "Canadian Society for Exercise Physiology", region: "Canada", url: "https://csepguidelines.ca/guidelines/children-youth/" },
        { label: "Pas d’écran avant 6 ans (3-6-9-12 framework)", org: "Serge Tisseron / Société Française de Pédiatrie", region: "France", url: "https://www.sergetisseron.com/3-6-9-12/" },
      ],
      consequences: [
        "Worse executive function and school readiness — children with >2h/day of screens score significantly lower on developmental screening (JAMA Pediatrics, 2019).",
        "Higher rates of obesity through reduced physical activity and snack-while-watching habits (WHO European Childhood Obesity Surveillance, 2022).",
        "Sleep onset delays of 30–60 minutes; chronic short sleep at this age predicts mood and learning problems.",
        "Earlier and steeper drop in face-to-face play skills, which underpin friendships and emotional regulation.",
      ],
    },
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
    screenTime: {
      recommended:
        "Up to 1.5–2 hours per day of recreational screen time across all devices, with clear screen-free zones (bedrooms, mealtimes) and a hard stop at least 60 minutes before bed.",
      sources: [
        { label: "Media Use in School-Aged Children and Adolescents", org: "American Academy of Pediatrics", region: "USA", url: "https://publications.aap.org/pediatrics/article/138/5/e20162592/60321/Media-Use-in-School-Aged-Children-and-Adolescents" },
        { label: "24-Hour Movement Guidelines (5–17 years)", org: "Canadian Society for Exercise Physiology", region: "Canada", url: "https://csepguidelines.ca/guidelines/children-youth/" },
        { label: "Guidelines on the use of digital devices by children (RACP)", org: "Royal Australasian College of Physicians", region: "Australia / NZ", url: "https://www.racp.edu.au/news-and-events/media-releases/screen-time-guidelines" },
        { label: "Screen time recommendations for school-aged children", org: "Chinese Center for Disease Control and Prevention", region: "China", url: "https://www.chinacdc.cn/en/" },
      ],
      consequences: [
        "Reduced sleep duration — every extra hour of evening screen use is linked to ~15 minutes less sleep (Sleep Medicine Reviews, 2021).",
        "Higher rates of cyberbullying involvement when unsupervised on group chats (EU Kids Online, 2020).",
        "Worse reading comprehension and vocabulary growth in heavy users (OECD PISA analyses).",
        "Early signs of problematic gaming: irritability when stopped, sneaking devices at night, declining grades.",
      ],
    },
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
    screenTime: {
      recommended:
        "Around 2 hours per day of recreational screen time (outside school work), with phones out of the bedroom overnight and a tech-free wind-down before sleep.",
      sources: [
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
        { label: "Children and parents: media use and attitudes report", org: "Ofcom", region: "UK", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
        { label: "Recommendations on the regulation of smartphones for children", org: "French government expert commission (Enfants et écrans)", region: "France", url: "https://www.elysee.fr/emmanuel-macron/2024/04/30/enfants-et-ecrans" },
        { label: "Adolescent Screen Time and Mental Health (meta-analysis)", org: "JAMA Pediatrics", region: "International", url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2737909" },
      ],
      consequences: [
        "Higher rates of depression and anxiety in heavy users (>3h/day on social media roughly doubles the risk — JAMA Psychiatry, 2019).",
        "Significant sleep loss; teens who keep phones in bedrooms sleep on average 1 hour less per night (Sleep Health, 2018).",
        "Body-image disturbance and disordered eating, especially among girls on image-led platforms.",
        "Attention fragmentation: heavy multitaskers show measurable drops in working memory and academic performance.",
      ],
    },
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

export type Evidence = {
  claim: string;
  publisher: string;
  title: string;
  url: string;
  year?: string;
  type: "Peer-reviewed" | "Regulator" | "Health authority" | "Charity / NGO" | "Investigative journalism" | "Platform policy";
};

export type AppGuide = {
  slug: string;
  name: string;
  category: "Social" | "Messaging" | "Video" | "Game";
  minAge: string;
  why: string;
  risks: string[];
  settings: string[];
  detail: {
    overview: string;
    ageRationale: string;
    evidence: Evidence[];
    parentTalkingPoints: string[];
    settingsHowTo: { label: string; url: string }[];
    videoTutorials: { title: string; channel: string; url: string }[];
    riskVideo?: { title: string; channel: string; youtubeId?: string; videoUrl?: string; poster?: string; note?: string };
  };
};

export const APPS: AppGuide[] = [
  {
    slug: "tiktok", name: "TikTok", category: "Social", minAge: "13+",
    why: "Short videos, trends, humour. The default ‘scrollable’ app for many teens.",
    risks: ["Endless algorithmic feed", "Body image / dieting content", "DMs from strangers on public accounts"],
    settings: ["Private account", "Restricted Mode", "Disable DMs from non-friends", "Family Pairing"],
    detail: {
      overview: "TikTok serves a personalised, never-ending feed of short videos. The ‘For You’ algorithm learns from how long a user lingers, not just what they like, which can rapidly narrow content towards intense or harmful themes.",
      ageRationale: "TikTok’s own terms set a minimum age of 13 (with a separate, more restricted ‘Under 13’ experience in some regions). The limit is driven by US COPPA and UK Age-Appropriate Design Code data-protection rules, not by a developmental assessment.",
      evidence: [
        { claim: "Independent audit found TikTok’s algorithm can push self-harm and eating-disorder content to accounts registered as 13-year-olds within minutes.", publisher: "Center for Countering Digital Hate", title: "Deadly by Design", year: "2022", url: "https://counterhate.com/research/deadly-by-design/", type: "Charity / NGO" },
        { claim: "Ofcom finds a majority of UK teenagers — and many under-13s — use TikTok, well below the platform’s own age limit.", publisher: "Ofcom (UK communications regulator)", title: "Children and parents: media use and attitudes report", year: "2024", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/", type: "Regulator" },
        { claim: "Ireland’s Data Protection Commission fined TikTok €345m for failing to protect children’s data, including default public accounts for under-16s.", publisher: "Data Protection Commission (Ireland)", title: "DPC announces €345 million fine of TikTok", year: "2023", url: "https://www.dataprotection.ie/en/news-media/press-releases/DPC-announces-345-million-euro-fine-of-TikTok", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Ask to see their ‘For You’ feed together — it’s the clearest window into what TikTok thinks of them.",
        "Agree a ‘no phones in bedroom overnight’ rule — TikTok sessions are strongly linked to sleep loss.",
      ],
      settingsHowTo: [
        { label: "TikTok Family Pairing guide", url: "https://www.tiktok.com/safety/en/guardians-guide/" },
        { label: "Internet Matters: TikTok safety guide", url: "https://www.internetmatters.org/parental-controls/social-media/tiktok-privacy-and-safety-settings/" },
      ],
      videoTutorials: [
        { title: "TikTok Family Pairing — set up parental controls", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+TikTok+Family+Pairing+parental+controls" },
        { title: "How to make a TikTok account private", channel: "TikTok (official)", url: "https://www.youtube.com/results?search_query=TikTok+official+how+to+make+account+private" },
        { title: "TikTok parents’ guide — what you need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+TikTok+parents+guide" },
      ],
      riskVideo: { title: "New study warns about impact of TikTok on adolescents", channel: "Good Morning America (ABC News)", youtubeId: "aFIpQLYMGXY", note: "Reports on National Institutes of Health research into how short-video feeds affect the developing teenage brain." },
    },
  },
  {
    slug: "snapchat", name: "Snapchat", category: "Messaging", minAge: "13+",
    why: "Photo messages that ‘disappear’ and Snap Map for live location sharing.",
    risks: ["False sense of privacy (screenshots exist)", "Live location with anyone added", "Streaks driving compulsive use"],
    settings: ["Ghost Mode on Snap Map", "Contact Me: Friends only", "Family Center"],
    detail: {
      overview: "Snapchat is built around disappearing photos, ‘Snap streaks’ that reward daily exchanges, and Snap Map which broadcasts a user’s live location to chosen friends.",
      ageRationale: "Minimum age 13 under Snap’s terms. The disappearing-message design and live location features are why regulators and child-safety charities treat it as higher risk than the age limit suggests.",
      evidence: [
        { claim: "US state lawsuit alleges Snapchat’s design facilitates the supply of fentanyl and illegal drugs to minors via disappearing messages.", publisher: "New Mexico Department of Justice", title: "AG Torrez lawsuit against Snap Inc.", year: "2024", url: "https://nmdoj.gov/press-release/attorney-general-torrez-files-lawsuit-against-snap-inc/", type: "Regulator" },
        { claim: "NSPCC data shows Snapchat is the platform most often used in recorded child sexual communication offences in England and Wales.", publisher: "NSPCC", title: "Snapchat now the most used app in grooming crimes", year: "2024", url: "https://www.nspcc.org.uk/about-us/news-opinion/2024/snapchat-grooming-crimes/", type: "Charity / NGO" },
        { claim: "CEOP Education warns that Snap Map can expose children’s real-time location to anyone they’ve accepted as a friend.", publisher: "CEOP Education (NCA)", title: "Snap Map: advice for parents", year: "2023", url: "https://www.ceopeducation.co.uk/parents/articles/snap-map-what-parents-need-to-know/", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Open Snap Map together and switch on Ghost Mode — it takes about 30 seconds.",
        "Talk about screenshots: ‘disappearing’ doesn’t mean gone. Anything sent can be saved.",
      ],
      settingsHowTo: [
        { label: "Snapchat Family Center", url: "https://parents.snapchat.com/" },
        { label: "NSPCC Net Aware: Snapchat", url: "https://www.net-aware.org.uk/networks/snapchat/" },
      ],
      videoTutorials: [
        { title: "Snapchat Family Center walkthrough", channel: "Snapchat (official)", url: "https://www.youtube.com/results?search_query=Snapchat+Family+Center+how+to+set+up" },
        { title: "How to turn on Ghost Mode on Snap Map", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Snap+Map+Ghost+Mode+parental+guide" },
        { title: "Snapchat — what parents need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Snapchat+parents+guide" },
      ],
      riskVideo: { title: "New report highlights Snapchat's harmful impact on kids", channel: "9NEWS (NBC affiliate)", youtubeId: "hgYhGoUQFWM", note: "Features Jonathan Haidt (author of The Anxious Generation) on Snapchat's addictive design and exposure of young users to harmful material." },
    },
  },
  {
    slug: "instagram", name: "Instagram", category: "Social", minAge: "13+",
    why: "Photos, reels, stories. Heavy on social comparison.",
    risks: ["Public profiles inviting DMs", "Reels algorithm rabbit holes", "Hidden ‘close friends’ accounts"],
    settings: ["Private account", "Sensitive Content Control: Less", "Hidden Words filter", "Family Center supervision"],
    detail: {
      overview: "Instagram combines a photo grid, Stories, and an algorithmic Reels feed. ‘Teen Accounts’ are now default-private for under-18s, but adult content, DMs and comparison pressure remain core issues.",
      ageRationale: "Minimum age 13. Meta’s own internal research, leaked in 2021, documented appearance-related harm to teenage girls — a key driver of subsequent Teen Account safeguards.",
      evidence: [
        { claim: "Internal Meta research found Instagram makes body-image issues worse for 1 in 3 teenage girls.", publisher: "The Wall Street Journal (investigative)", title: "Facebook Knows Instagram Is Toxic for Teen Girls", year: "2021", url: "https://www.wsj.com/articles/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739", type: "Investigative journalism" },
        { claim: "US Surgeon General formally advised that social media use including Instagram poses a ‘profound risk of harm’ to youth mental health.", publisher: "US Surgeon General", title: "Social Media and Youth Mental Health Advisory", year: "2023", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html", type: "Health authority" },
        { claim: "41 US states and DC sued Meta, alleging Instagram features (infinite scroll, likes, beauty filters) were designed to be addictive to minors.", publisher: "US Attorneys General coalition", title: "State of California et al. v. Meta Platforms", year: "2023", url: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-co-leads-bipartisan-coalition-suing-meta-harming-youth", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Sit together and switch the account to Teen Account / private — and check whether a ‘finsta’ also exists.",
        "Mute, don’t unfollow: muting accounts that trigger comparison spirals avoids social fallout.",
      ],
      settingsHowTo: [
        { label: "Instagram Family Center", url: "https://familycenter.instagram.com/" },
        { label: "Internet Matters: Instagram safety guide", url: "https://www.internetmatters.org/parental-controls/social-media/instagram-privacy-and-safety-settings/" },
      ],
      videoTutorials: [
        { title: "Instagram Teen Accounts & supervision setup", channel: "Meta (official)", url: "https://www.youtube.com/results?search_query=Instagram+Teen+Accounts+supervision+setup" },
        { title: "How to make Instagram private + hide story", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+Instagram+private+account" },
        { title: "Instagram parents’ ultimate guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Instagram+parents+guide" },
      ],
      riskVideo: { title: "Facebook Whistleblower Frances Haugen: The 60 Minutes Interview", channel: "60 Minutes (CBS News)", youtubeId: "_Lx5VmAdZSI", note: "Frances Haugen explains internal Meta research showing Instagram worsens body-image and mental-health outcomes for teenage girls." },
    },
  },
  {
    slug: "youtube", name: "YouTube", category: "Video", minAge: "13+ (Kids: under 13)",
    why: "Where most kids actually watch ‘TV’. Includes gaming streams and shorts.",
    risks: ["Auto-play into unrelated content", "Shorts — fast, addictive feed", "Comments containing strangers"],
    settings: ["Restricted Mode", "Supervised Account for under-13s", "Disable autoplay", "YouTube Kids for younger kids"],
    detail: {
      overview: "Standard YouTube is 13+, with a separate YouTube Kids app and Supervised Account option for younger children. Shorts (vertical short videos) behave more like TikTok than traditional YouTube.",
      ageRationale: "13+ is set by Google to comply with US COPPA and equivalent data-protection rules. YouTube Kids exists because the main platform isn’t designed for under-13s — but YouTube Kids itself has been criticised for moderation gaps.",
      evidence: [
        { claim: "US FTC fined YouTube $170 million for illegally collecting children’s data on the main platform.", publisher: "Federal Trade Commission (US)", title: "Google and YouTube Will Pay Record $170 Million for Alleged Violations of COPPA", year: "2019", url: "https://www.ftc.gov/news-events/news/press-releases/2019/09/google-youtube-will-pay-record-170-million-alleged-violations-childrens-privacy-law", type: "Regulator" },
        { claim: "Mozilla’s crowdsourced study found YouTube’s recommendation algorithm is the main driver of regretful viewing experiences.", publisher: "Mozilla Foundation", title: "YouTube Regrets", year: "2021", url: "https://foundation.mozilla.org/en/youtube/findings/", type: "Charity / NGO" },
        { claim: "Ofcom finds YouTube is the most-used online platform among UK children aged 3–17.", publisher: "Ofcom", title: "Children and parents: media use and attitudes report", year: "2024", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Auto-play is the single biggest setting to switch off for younger kids.",
        "For under-13s, use YouTube Kids or a Supervised Account rather than the main app.",
      ],
      settingsHowTo: [
        { label: "Google Family Link", url: "https://families.google/familylink/" },
        { label: "YouTube: Supervised experiences for kids and teens", url: "https://support.google.com/youtubekids/answer/10314940" },
      ],
      videoTutorials: [
        { title: "Set up a Supervised YouTube account", channel: "Google Families (official)", url: "https://www.youtube.com/results?search_query=Google+supervised+YouTube+account+setup" },
        { title: "How to turn off autoplay on YouTube", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=YouTube+turn+off+autoplay+parents" },
        { title: "YouTube & YouTube Kids — parents’ guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+YouTube+Kids+parents+guide" },
      ],
      riskVideo: { title: "The nightmare videos of children's YouTube — and what's wrong with the internet today", channel: "TED", youtubeId: "v9EKV2nSU8w", note: "Writer James Bridle's widely-cited talk on how YouTube's recommendation system surfaces disturbing content to children." },

    },
  },
  {
    slug: "whatsapp", name: "WhatsApp", category: "Messaging", minAge: "13+",
    why: "School class group chats live here. Used by every age.",
    risks: ["Being added to groups by strangers", "Forwarded misinformation", "Disappearing messages hiding bullying"],
    settings: ["Groups: My Contacts", "Last Seen: Contacts", "Two-step verification"],
    detail: {
      overview: "End-to-end encrypted messenger. The risk for children is rarely the encryption itself — it’s group chats with classmates that escalate quickly, and forwarded content from outside the group.",
      ageRationale: "WhatsApp’s minimum age is 13 in the UK and EU (lowered from 16 to align with most peers in 2024). The age limit is data-protection driven, not a developmental assessment of group-chat dynamics.",
      evidence: [
        { claim: "Internet Matters reports group chats are one of the most common settings for cyberbullying experienced by UK 9–16s.", publisher: "Internet Matters", title: "Cyberbullying: Children’s experiences", year: "2023", url: "https://www.internetmatters.org/issues/cyberbullying/", type: "Charity / NGO" },
        { claim: "UK Safer Internet Centre advises that WhatsApp groups are a key vector for sharing harmful and illegal content between peers.", publisher: "UK Safer Internet Centre", title: "Parent and carer resources", year: "2024", url: "https://saferinternet.org.uk/guide-and-resource/parents-and-carers", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Agree that they can leave any group, any time, no questions asked — and you’ll back them up with other parents.",
        "Set ‘Groups: My Contacts’ so strangers can’t add them to chats.",
      ],
      settingsHowTo: [
        { label: "WhatsApp privacy settings", url: "https://faq.whatsapp.com/3196575617535613" },
        { label: "NSPCC Net Aware: WhatsApp", url: "https://www.net-aware.org.uk/networks/whatsapp/" },
      ],
      videoTutorials: [
        { title: "WhatsApp privacy & group settings walkthrough", channel: "WhatsApp (official)", url: "https://www.youtube.com/results?search_query=WhatsApp+privacy+settings+how+to" },
        { title: "WhatsApp for parents — what you need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+WhatsApp+parents+guide" },
        { title: "Two-step verification on WhatsApp", channel: "NSPCC / Net Aware", url: "https://www.youtube.com/results?search_query=WhatsApp+two+step+verification+setup" },
      ],
      riskVideo: { title: "Parental controls for messaging & devices — real advice from a mum of two", channel: "Internet Matters", youtubeId: "zplUsBQeV_8", note: "Covers messaging-app risks including WhatsApp group chats." },
    },
  },
  {
    slug: "discord", name: "Discord", category: "Messaging", minAge: "13+",
    why: "Voice and text servers, especially for gamers and fandoms.",
    risks: ["Public servers with adult content", "Strangers in voice chat", "Crypto/scam DMs"],
    settings: ["Safe Direct Messaging: Filter all", "Disable DMs from server members", "Restrict friend requests"],
    detail: {
      overview: "Discord is organised into ‘servers’ — anything from a 5-friend chat to a 200,000-member public community. Voice channels, DMs and file sharing are all default features.",
      ageRationale: "Discord requires users to be 13+. Many public servers are 18+ themed and rely on self-declaration, which is why charities flag it as a higher-risk environment for under-16s.",
      evidence: [
        { claim: "NBC News investigation documented dozens of prosecutions over six years for grooming, kidnapping or sexual assault facilitated through Discord.", publisher: "NBC News (investigative)", title: "Discord struggles with child safety", year: "2023", url: "https://www.nbcnews.com/tech/social-media/discord-child-safety-grooming-extortion-rcna101620", type: "Investigative journalism" },
        { claim: "UK Safer Internet Centre highlights that Discord servers can expose children to explicit, extremist, and harmful content via communities they join voluntarily.", publisher: "UK Safer Internet Centre", title: "Parent and carer resources", year: "2024", url: "https://saferinternet.org.uk/guide-and-resource/parents-and-carers", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Ask which servers they’re in and who runs them — public vs friends-only matters more than the app itself.",
        "Switch Safe Direct Messaging to ‘Filter all’ and turn off DMs from server members.",
      ],
      settingsHowTo: [
        { label: "Discord Family Centre", url: "https://discord.com/family-center" },
        { label: "Discord safety: Parent hub", url: "https://discord.com/safety-parents" },
      ],
      videoTutorials: [
        { title: "Discord Family Centre — setup walkthrough", channel: "Discord (official)", url: "https://www.youtube.com/results?search_query=Discord+Family+Center+setup" },
        { title: "Discord safety settings for parents", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+Discord+parents+guide" },
        { title: "Discord — parents’ ultimate guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Discord+parents+guide" },
      ],
      riskVideo: { title: "Florida investigates Discord app over child safety concerns", channel: "WPLG Local 10 News (ABC affiliate)", youtubeId: "nEwGEoLYiBA", note: "News report on broad child-safety concerns around Discord servers and DMs." },
    },
  },
  {
    slug: "roblox", name: "Roblox", category: "Game", minAge: "All ages (rated by experience)",
    why: "Millions of user-made games and a social hangout for under-12s.",
    risks: ["Stranger chat in experiences", "User-made games with adult themes", "Robux scams and ‘free Robux’ links"],
    settings: ["Account Restrictions on", "Allowed Experiences: appropriate age", "Disable chat", "Spend controls"],
    detail: {
      overview: "Roblox is a platform of user-created ‘experiences’, not a single game. Content quality and risk vary wildly between experiences, and the in-game currency Robux drives much of the platform economy.",
      ageRationale: "Roblox itself has no minimum age but applies experience age ratings (Minors, 9+, 13+, 17+). The mismatch between marketing (‘for kids’) and content reality is the central concern for parents and regulators.",
      evidence: [
        { claim: "BBC News investigation documented sexual and gambling-style content accessible to child accounts on Roblox.", publisher: "BBC News (investigative)", title: "Roblox: The children’s game with a sex problem", year: "2024", url: "https://www.bbc.co.uk/news/technology-67772670", type: "Investigative journalism" },
        { claim: "Internet Matters flags Roblox as ‘worth a chat’ risk for under-13s due to user-generated content moderation gaps and in-game chat.", publisher: "Internet Matters", title: "Roblox parental controls guide", year: "2024", url: "https://www.internetmatters.org/parental-controls/gaming-consoles/roblox-parental-controls/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Treat Roblox like an app store, not a game — agree which experiences are okay and which aren’t.",
        "Turn on Account Restrictions for under-9s; this limits chat and curated experiences only.",
      ],
      settingsHowTo: [
        { label: "Roblox: Parent and caregiver guide", url: "https://en.help.roblox.com/hc/en-us/articles/203313120-Parents-Safety-and-Moderation-Guide" },
        { label: "Internet Matters: Roblox controls", url: "https://www.internetmatters.org/parental-controls/gaming-consoles/roblox-parental-controls/" },
      ],
      videoTutorials: [
        { title: "Roblox parental controls — full setup", channel: "Roblox (official)", url: "https://www.youtube.com/results?search_query=Roblox+official+parental+controls+setup" },
        { title: "Roblox safety — what parents need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+Roblox+parental+controls" },
        { title: "Roblox parents’ guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Roblox+parents+guide" },
      ],
      riskVideo: { title: "Roblox: The playground problem", channel: "Raising Digital · Investigation", videoUrl: "/__l5e/assets-v1/7837b59a-5d12-4eae-b257-1d73a6a2ec76/roblox-risks.mp4", note: "Original 95-second explainer based on Guardian reporting on the Revealing Reality investigation (April 2025)." },
    },
  },
  {
    slug: "fortnite", name: "Fortnite", category: "Game", minAge: "12+",
    why: "Battle royale with voice chat and live in-game events.",
    risks: ["Voice chat with strangers in squads", "Spending on V-Bucks / Battle Pass", "Long sessions, late nights"],
    settings: ["Cabined Account for under-13s", "Voice chat: friends only", "Parental controls PIN"],
    detail: {
      overview: "Fortnite is a free-to-play battle royale with seasonal updates, a paid Battle Pass, and live concert/film events. ‘Cabined Accounts’ limit features for under-13s until a parent verifies.",
      ageRationale: "PEGI rates Fortnite 12+ for frequent mild violence. Epic’s own ‘Cabined Account’ rules apply to under-13s and disable voice chat, friend lists, and purchases by default.",
      evidence: [
        { claim: "US FTC fined Epic Games $520 million for violating COPPA and using ‘dark patterns’ to trick children and parents into purchases.", publisher: "Federal Trade Commission (US)", title: "Fortnite maker Epic Games to pay more than half a billion dollars over FTC allegations", year: "2022", url: "https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations", type: "Regulator" },
        { claim: "Common Sense Media review highlights voice chat with strangers as the primary concern for under-13s playing Fortnite.", publisher: "Common Sense Media", title: "Fortnite parents’ guide", year: "2024", url: "https://www.commonsensemedia.org/game-reviews/fortnite", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Set a hard rule: voice chat with friends only, never ‘open’ to squad fill.",
        "Use the Epic Games parental PIN to require approval for any V-Bucks purchase.",
      ],
      settingsHowTo: [
        { label: "Epic Games parental controls", url: "https://www.epicgames.com/site/en-US/parental-controls" },
        { label: "Internet Matters: Fortnite guide", url: "https://www.internetmatters.org/hub/guidance/fortnite-battle-royale-parents-guide/" },
      ],
      videoTutorials: [
        { title: "Fortnite parental controls — full walkthrough", channel: "Epic Games (official)", url: "https://www.youtube.com/results?search_query=Epic+Games+Fortnite+parental+controls+how+to" },
        { title: "Cabined Accounts for under-13s explained", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Fortnite+Cabined+Account+parents+guide" },
        { title: "Fortnite — what parents need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Fortnite+parents+guide" },
      ],
      riskVideo: { title: "Call for gaming loot box ban", channel: "Sky News", youtubeId: "8osRlWJwkbk", note: "Sky News report on addiction concerns and gambling-style mechanics in Fortnite and similar games." },
    },
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
