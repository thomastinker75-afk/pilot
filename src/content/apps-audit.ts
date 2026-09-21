// Audit-structured supplement for the Apps & Games guides.
// This layers the audited section order on top of the existing APPS data
// without modifying it:
// What it is -> Who actually uses it -> Official age -> UK-specific age controls
// -> Top 3 risks -> What parents can change -> What parents cannot control
// -> Conversation starter -> Sources -> Last UK verification

export type AppAudit = {
  whatItIs: string;
  whoUses: string;
  ukControls: string;
  topRisks: [string, string, string];
  canChange: string[];
  cannotControl: string[];
  conversationStarter: string;
  auditNote?: string;
};

export const APP_AUDITS: Record<string, AppAudit> = {
  "tiktok": {
    "whatItIs": "A short-video app built around an algorithmic ‘For You’ feed, plus DMs, live streams and a creator marketplace.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Age-dependent features and parental controls exist. A source review does not establish whether every account is correctly aged.",
    "topRisks": [
      "Unwanted or upsetting recommendations",
      "Appearance comparison or dieting content",
      "Unwanted contact through available messaging or comments"
    ],
    "canChange": [
      "Set the account to private and link it with Family Pairing.",
      "Turn Restricted Mode on and switch DMs to ‘Friends’ or ‘No one’.",
      "Set daily screen-time limits and a wind-down time inside the app.",
      "Filter comments and keywords; turn off ‘Suggest your account to others’."
    ],
    "cannotControl": [
      "Every individual recommendation. Family Pairing keyword filters and account controls can influence the feed but cannot guarantee suitability.",
      "Whether the registered birthday is true, which decides every teen default.",
      "Content your child sees on someone else's phone, or through a browser while logged out.",
      "Private ‘finsta’-style second accounts created with a different email."
    ],
    "conversationStarter": "“Can you show me your For You page? I want to see what TikTok thinks you're into — not to judge it, I'm just curious what it's decided about you.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "instagram": {
    "whatItIs": "Photo, Stories and Reels app from Meta, with DMs, close-friends lists and an algorithmic short-video feed.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Meta uses facial age estimation (Yoti) and ID checks to confirm teen accounts in the UK.",
    "topRisks": [
      "Appearance and comparison pressure, which Meta's own internal research linked to worsening body image in teenage girls.",
      "DMs and follow requests from adults, especially where an account was registered as over 18.",
      "Reels rabbit holes and endless scrolling that pull attention long past the intended few minutes."
    ],
    "canChange": [
      "Confirm the account really is a Teen Account and set up Family Center supervision.",
      "Keep the account private; review followers together.",
      "Set Sensitive Content Control to ‘Less’ and add Hidden Words filters.",
      "Turn off activity status and story resharing."
    ],
    "cannotControl": [
      "Meta's recommendation ranking, or which Reels appear.",
      "Screenshots of your child's stories or messages by other people.",
      "Second accounts, or content viewed while logged out on a browser.",
      "What is said about your child in other people's group chats."
    ],
    "conversationStarter": "“Which accounts make you feel worse after looking at them? You can mute anyone without unfollowing — shall we do a few now?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "snapchat": {
    "whatItIs": "Messaging app built on disappearing photos and videos, with Snap Map location sharing, Stories, Streaks and the My AI chatbot.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Age checks apply to 18+ content and some features; account age is still self-declared at sign-up.",
    "topRisks": [
      "Disappearing messages may still be saved, screenshotted or recorded by a recipient.",
      "Snap Map broadcasting live location to every accepted friend, including people met only online.",
      "Streaks and constant notifications driving compulsive daily use and night-time checking."
    ],
    "canChange": [
      "Turn on Ghost Mode in Snap Map.",
      "Set ‘Contact Me’ and ‘View My Story’ to Friends only.",
      "Link Family Centre and turn on sensitive-content restrictions.",
      "Disable Quick Add so strangers aren't suggested."
    ],
    "cannotControl": [
      "The content of messages — Family Centre shows who, never what.",
      "Whether a recipient screenshots or screen-records a snap.",
      "Every response from My AI. Check current Family Centre controls for the restrictions available.",
      "Friend requests your child chooses to accept."
    ],
    "conversationStarter": "“Who's actually on your Snap Map right now? Let's look together — and if there's anyone on there you've never met in person, tell me about them.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "whatsapp": {
    "whatItIs": "End-to-end encrypted messenger used for one-to-one chats, class and club group chats, communities, voice/video calls and channels.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "WhatsApp now documents parent-managed accounts for under-13s. Check availability in your app and region; this review has not tested the UK setup flow.",
    "topRisks": [
      "Group chats escalating into pile-ons, exclusion or bullying that adults never see, made harder to evidence by disappearing messages.",
      "Being added to large groups or communities by someone who only has the child's number, exposing their profile photo and ‘about’ text.",
      "Scams and sextortion attempts from unknown numbers, including fake ‘Hi Mum’ and job-offer messages, and forwarded misinformation or graphic video."
    ],
    "canChange": [
      "Set ‘Who can add me to groups’ to My Contacts, or My Contacts Except…",
      "Restrict profile photo, About and Last Seen to contacts only.",
      "Turn on Silence Unknown Callers and two-step verification.",
      "Turn off automatic media download so graphic forwards don't save to the gallery."
    ],
    "cannotControl": [
      "Messages through a parent dashboard: encryption does not prevent a child from showing a parent a conversation on their device.",
      "What classmates forward, screenshot or say about your child.",
      "Disappearing messages, which remove the evidence of bullying.",
      "Whether someone shares your child's number with a stranger."
    ],
    "conversationStarter": "“If a group chat turns nasty, come to me and we will get help together. Do not copy or forward sexual images of anyone who may be under 18.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "discord": {
    "whatItIs": "Chat platform of text, voice and video ‘servers’ — originally for gamers, now used for friendship groups, fandoms, homework help and communities of every kind.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "UK users must pass facial age estimation or ID to view 18+ content; teen defaults apply otherwise.",
    "topRisks": [
      "Unwanted direct messages from people met in public servers.",
      "Servers with no meaningful moderation, where extreme, sexual or self-harm content circulates freely.",
      "Voice chat and screen sharing with strangers, often late at night while gaming."
    ],
    "canChange": [
      "Link the Family Centre and review weekly activity emails.",
      "Review Sensitive Content Filters and message-request settings; filters do not scan message text, voice or calls.",
      "Turn off friend requests from ‘Everyone’.",
      "Review the server list together and leave any your child can't explain."
    ],
    "cannotControl": [
      "What is said in servers you can't see — the Family Centre shows names, not content.",
      "Private servers created by classmates, or invite links shared elsewhere.",
      "Whether a teen passes the 18+ age check with borrowed ID.",
      "Voice chat content, which is not moderated in real time."
    ],
    "conversationStarter": "“Which servers are you actually in? Show me the list — I want to know which ones are your school friends and which ones are people you only know online.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "telegram": {
    "whatItIs": "Messenger with very large public groups and broadcast channels, username-based contact without sharing a phone number, and minimal content moderation.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Telegram terms require UK users to be at least 18. Enforcement effectiveness has not been independently verified.",
    "topRisks": [
      "Public channels distributing illegal and extreme material — pornography, self-harm content, drugs, weapons, stolen data and pirated media — findable by search.",
      "Contact from anonymous accounts by username alone, with no mutual-friend or contact requirement.",
      "Crypto, ‘investment’, money-mule and sextortion scams that target teenagers directly in group chats."
    ],
    "canChange": [
      "Set ‘Who can add me to groups’ and ‘Who can find me by number’ to My Contacts.",
      "Turn on the built-in content filter for sensitive media where offered.",
      "Enable two-step verification and hide the phone number.",
      "Remove the app, or block reinstalls, if channel content is the main use."
    ],
    "cannotControl": [
      "What is posted in public channels — there is no parental control layer.",
      "Whether channels reappear after removal under a new name.",
      "Secret chats, which are device-only and self-destructing.",
      "Anonymous contact attempts from accounts with no identifying details."
    ],
    "conversationStarter": "“What do you use Telegram for that WhatsApp doesn't do? I'm not assuming the worst — I just want to understand what's on there.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "youtube": {
    "whatItIs": "The world's largest video platform: long-form video, Shorts, live streams, comments and an algorithmic recommendation system — plus a separate YouTube Kids app and supervised experiences.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Google applies age estimation in the UK and asks for ID or a card for age-restricted content.",
    "topRisks": [
      "Autoplay and recommendations moving a child from an innocent video to unrelated, disturbing or extreme content within a few steps.",
      "Shorts behaving like TikTok — a fast, endless feed with no natural stopping point.",
      "Comment sections and live-chat, where strangers interact with children directly, and creator-run Discord or Patreon links that lead off-platform."
    ],
    "canChange": [
      "Choose the appropriate account type and content setting.",
      "Review Autoplay and Shorts feed limits.",
      "Review history, subscriptions and recommendations together."
    ],
    "cannotControl": [
      "Whether filters catch every unsuitable video.",
      "What appears through another account or service."
    ],
    "conversationStarter": "“Show me the last three videos YouTube suggested to you. Has it ever recommended something that made you feel weird?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "twitch": {
    "whatItIs": "Twitch combines live broadcasts with chat and private Whispers. Moderation tools can reduce unwanted interactions but cannot guarantee that every live exchange is suitable.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Age checks apply to mature streams and some features only.",
    "topRisks": [
      "Live chat that is impossible to pre-moderate — sexual comments, hate speech and links appear in real time on channels aimed at young viewers.",
      "Whispers (private messages) from adult viewers, and the pull towards a streamer's Discord where contact is unmoderated.",
      "Money: subscriptions, bits and donations, plus heavy exposure to gambling, casino and loot-box streams."
    ],
    "canChange": [
      "Review privacy and notification settings.",
      "Use available chat filtering and blocking tools.",
      "Agree which streams to watch and check in together."
    ],
    "cannotControl": [
      "What a broadcaster or viewer says before moderation acts.",
      "Whether moderation will catch every unsuitable interaction.",
      "Other services people suggest moving to."
    ],
    "conversationStarter": "“Which streamers do you watch, and have any of them ever asked viewers to message them privately or join their Discord?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "kick": {
    "whatItIs": "A live-streaming service with creator channels and live chat.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Limited checks on adult-labelled content; sign-up age is self-declared.",
    "topRisks": [
      "Unpredictable live content",
      "Gambling-related or other adult content",
      "Unwanted contact and spending pressure"
    ],
    "canChange": [
      "Block the site and app with Screen Time or Family Link.",
      "Watch together if it is used at all, and unfollow gambling-category creators.",
      "Remove saved cards and disable purchases on the device.",
      "Recheck what your child watches every few months — the content mix shifts."
    ],
    "cannotControl": [
      "What appears in a live broadcast before moderation acts.",
      "Whether every account follows platform rules."
    ],
    "conversationStarter": "“Which streams do you watch? Can we look together and discuss anything that makes you uncomfortable?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "roblox": {
    "whatItIs": "A platform of millions of user-made games (‘experiences’) with in-game chat, avatar items and a real-money currency, Robux.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Facial age estimation or ID is required for chat, with age-grouped communication.",
    "topRisks": [
      "Adults and children sharing the same experiences, which is why Roblox appears repeatedly in UK grooming reports and investigative journalism.",
      "Money: Robux purchases, third-party ‘free Robux’ scams and gambling-style resale of items.",
      "User-made experiences that copy adult content, or condition-based games that slip past ratings, plus off-platform moves to Discord."
    ],
    "canChange": [
      "Link a parent account and review the games and chat permissions available for the child’s age and region.",
      "Check the account age together; an age check is required if chat is enabled. Never use an adult’s age check for a child.",
      "Set monthly spending limits and remove saved payment details.",
      "Restrict who can message, invite or join, and turn off chat entirely for younger children."
    ],
    "cannotControl": [
      "The content of thousands of new user-made experiences published every day.",
      "Whether the age estimate is accurate, or whether an older friend's account is used instead.",
      "What is said once the conversation moves to Discord or another app.",
      "Whether a child spends their own money via gift cards."
    ],
    "conversationStarter": "“Who do you play with on Roblox that you don't know from school? And has anyone ever asked you to chat somewhere else, like Discord?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "fortnite": {
    "whatItIs": "Free-to-play battle royale plus a huge library of creator-made islands, concerts and party modes, with voice and text chat and a cosmetics store.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Epic uses cabined accounts for under-13s but no UK-wide identity check.",
    "topRisks": [
      "Open voice chat in random squads, where a child can end up in a party with adults they don't know.",
      "Spending pressure: V-Bucks, battle passes, limited-time skins and peer pressure to keep up.",
      "Creator-made islands that are barely moderated, plus late-night play driven by squad commitments."
    ],
    "canChange": [
      "Set the Epic parental-controls PIN and enable weekly playtime reports.",
      "Set voice chat to ‘Party only’ or off, and text chat to ‘Nobody’.",
      "Require the PIN for every purchase and remove stored cards.",
      "Turn on the mature-language filter and restrict who can add friends."
    ],
    "cannotControl": [
      "What squadmates say over voice chat.",
      "Content inside creator-made islands, which is user-generated.",
      "Console-level chat if a second account or a friend's console is used.",
      "The pull of limited-time events designed to make missing out feel costly."
    ],
    "conversationStarter": "“Who's in your squad tonight? If someone in a random party says something off, you can mute them instantly — do you know how?”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "minecraft": {
    "whatItIs": "A sandbox building game. Single-player and family Realms are calm and creative; public third-party servers are a different product entirely.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Microsoft child accounts add controls, but no UK identity check.",
    "topRisks": [
      "Contact with other players on third-party servers; voice chat may be provided by separate apps or mods.",
      "Mods, skins and ‘free cape’ downloads from outside official stores, carrying malware and account theft.",
      "Server Discords, where the real conversation happens outside any game control."
    ],
    "canChange": [
      "Use a Microsoft child account and review multiplayer and communication permissions.",
      "Keep play on single-player, a family Realm or a whitelisted server.",
      "Turn chat off on servers, and only install add-ons from the official marketplace.",
      "Review the joined-servers list together."
    ],
    "cannotControl": [
      "Moderation on third-party servers — that belongs to the server owner, not Microsoft.",
      "Voice chat carried out over Discord alongside the game.",
      "Who else is on a public server at any moment.",
      "Content in mods installed on a PC you don't administer."
    ],
    "conversationStarter": "“Are you playing on your own world, our Realm, or a public server? If it's a public one, let's look at its rules page together.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "vrchat": {
    "whatItIs": "VRChat offers user-created social worlds and avatars. Other users’ live speech and behaviour can be unpredictable; review both the service’s safety controls and the device’s account requirements.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "VRChat described further age-assurance and content-gating work as in development in June 2026. Do not treat an announced feature as universally available.",
    "topRisks": [
      "Adult-themed worlds discoverable by any account, and sexual content encountered within minutes in reporting by BBC Panorama and others.",
      "Unwanted proximity or simulated contact from other avatars.",
      "Open voice chat with adults in every public room, with no recording or transcript for a parent to review."
    ],
    "canChange": [
      "Set up Meta Quest parental supervision and approve apps individually.",
      "Choose private instances and review VRChat’s current safety settings; instance access and avatar trust settings are different controls.",
      "Mute strangers by default and turn on personal space / safe bubble.",
      "Keep the headset in a shared room, not the bedroom."
    ],
    "cannotControl": [
      "What others say or display before you mute, block or leave.",
      "Whether every user-created space is suitable for a teenager."
    ],
    "conversationStarter": "“Has anyone in VR ever got too close or said something that made you want to take the headset off? Taking it off straight away is always the right move.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "gta-online": {
    "whatItIs": "An 18-rated open-world crime game with a persistent online mode of up to 30 players, open voice chat and real-money currency purchases.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "The rating is verified; in-game UK age-assurance coverage has not been established in this review.",
    "topRisks": [
      "The rated content itself: strip clubs, torture, prostitution, drugs and sustained violence are gameplay, not background.",
      "Open lobbies with adult strangers on voice chat, including harassment and griefing.",
      "Real-money Shark Cards and a grind deliberately designed to make buying currency feel necessary."
    ],
    "canChange": [
      "Set console family settings so the 18 rating actually blocks the game.",
      "If it is played anyway: invite-only or solo sessions, voice chat off.",
      "Remove stored cards and set console spending limits.",
      "Offer a co-op alternative for younger teens."
    ],
    "cannotControl": [
      "The game's content — there is no family-friendly configuration; the rating is the point.",
      "What strangers say in a public lobby.",
      "Play at a friend's house or on a friend's account.",
      "Mods on PC, which can add further adult content."
    ],
    "conversationStarter": "“I know your friends play it. I'm not pretending I can stop you seeing it entirely — but I do want to talk about why it's rated 18, because it isn't just swearing.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "yubo": {
    "whatItIs": "An adult-only social-discovery app for meeting new people.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Yubo's June 2026 terms require users to be at least 18 and describe automated age estimation at sign-up. This does not guarantee that every user's age is correct.",
    "topRisks": [
      "Contact with people not known offline",
      "Unpredictable live content",
      "Pressure to share personal information"
    ],
    "canChange": [
      "Restrict access for under-18s using device controls.",
      "Use official support and reporting tools if a child already has an account."
    ],
    "cannotControl": [
      "Another person’s behaviour or identity.",
      "Content shared outside the platform."
    ],
    "conversationStarter": "“What does Yubo give you that Snapchat doesn't? If it's meeting new people, let's talk about what that actually means when they're strangers on video.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "x-twitter": {
    "whatItIs": "A public posting platform for news, sport, memes and fandoms, which also hosts consensual adult content behind an age wall.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "UK users must pass age assurance (account signals or ID) to see sensitive media.",
    "topRisks": [
      "Pornography and graphic violence are hosted on the platform; the UK gate is real but circumventable.",
      "Targeted harassment through replies and quote-posts, which are public and pile up quickly.",
      "Misinformation and extreme political content amplified by paid accounts."
    ],
    "canChange": [
      "Check whether the account is registered with a true birthday; that decides everything else.",
      "Set the sensitive-media filter to hide, and protect posts.",
      "Turn off DMs from people they don't follow.",
      "Block VPN app installs with Screen Time or Family Link."
    ],
    "cannotControl": [
      "What appears in the algorithmic ‘For You’ timeline.",
      "Replies and quote-posts from strangers.",
      "Whether every age check and content filter works correctly in practice.",
      "Content viewed logged-out in a browser."
    ],
    "conversationStarter": "“Has X ever asked you to prove your age? If it hasn't, I'd like to look at the birthday on your account together.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "reddit": {
    "whatItIs": "Reddit consists of user-run communities, with posts, comments, chat and private messages. Content and moderation vary by community. Reddit describes age checks for UK access to mature content; that policy does not guarantee that every unsuitable item is filtered.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Reddit describes age verification for UK access to mature content. Consult its current help page for the process and data handling; this review did not test its effectiveness.",
    "topRisks": [
      "Mature and NSFW communities behind an age wall a determined teen may try to pass with borrowed ID.",
      "Anonymous DMs and chat invitations from adults, with no real identity behind any account.",
      "Pile-ons, doxxing and self-harm or eating-disorder communities, all moderated by unpaid volunteers."
    ],
    "canChange": [
      "Confirm the account age is correct so teen defaults apply.",
      "Turn off NSFW in a browser (it is missing from the iOS app).",
      "Set chat requests to Nobody or Followers, and mute subreddits.",
      "Block VPN app installs with Screen Time or Family Link."
    ],
    "cannotControl": [
      "What is posted in any subreddit — moderation is volunteer-run and uneven.",
      "Whether every age check and content filter works correctly in practice.",
      "Anonymous accounts contacting your child.",
      "Content read logged-out in a browser."
    ],
    "conversationStarter": "“Has Reddit asked you to verify your age? I'm not going to be angry — I just want to know what you can see.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "bereal": {
    "whatItIs": "A once-a-day photo prompt: a two-minute window to post a simultaneous front and back camera shot, shared with friends and optionally a global feed.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Age is self-declared at sign-up.",
    "topRisks": [
      "Location attached to posts by default, showing where a child is at a predictable time each day.",
      "The Discovery feed and friend-of-friend reactions exposing posts beyond the intended circle.",
      "Pressure to post immediately — in class, on the bus, or somewhere they shouldn't be photographing."
    ],
    "canChange": [
      "Turn location off before posting and set sharing to friends only.",
      "Keep the account out of the Discovery feed.",
      "Review the friend list together and remove people never met.",
      "Agree the two-minute timer is not a real deadline."
    ],
    "cannotControl": [
      "Screenshots of a child's BeReal by friends.",
      "Friend-of-friend visibility of reactions.",
      "Changes to discovery and privacy defaults after an update.",
      "The social pressure of a daily posting streak."
    ],
    "conversationStarter": "“Does your BeReal show where you are? Let's check — I'd rather your daily photo didn't come with a map pin.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "ngl-sendit": {
    "whatItIs": "Separate anonymous-question services. Their rules and regulatory histories should not be treated as interchangeable.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "These are separate services with different rules. Their terms do not demonstrate the effectiveness of age checks.",
    "topRisks": [
      "Unwanted or hurtful anonymous messages",
      "Uncertainty about who sent a message",
      "Pressure to pay for additional features"
    ],
    "canChange": [
      "Discuss whether anonymous replies are helpful or harmful",
      "Remove shared question links if unwanted messages arrive",
      "Seek help for threats before deleting accounts or evidence"
    ],
    "cannotControl": [
      "Who sends anonymous messages.",
      "Whether the messages are even real.",
      "Copycat apps launching under new names.",
      "The social pressure to post the link when everyone else does."
    ],
    "conversationStarter": "“If a message worries you, you can tell me without losing my support. We can block, report and find the right help together.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "omegle-style": {
    "whatItIs": "Random-video services connect people who may not know each other. Similar names can refer to different operators. Check the exact app and its current rules rather than treating Monkey, Azar and every ChatHub-branded service as one product.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Services differ. Monkey describes age detection and moderation; their effectiveness has not been independently tested here.",
    "topRisks": [
      "Unpredictable live content",
      "Unwanted contact or pressure from strangers",
      "Someone recording or sharing a conversation"
    ],
    "canChange": [
      "Don’t install — block via device-level parental controls"
    ],
    "cannotControl": [
      "Who the service pairs your child with.",
      "Whether a stranger records the call.",
      "New copycat apps appearing under different names.",
      "Access through a browser rather than an app."
    ],
    "conversationStarter": "“If something on a video-chat app has already happened, you're not in trouble — but I need to know, because we can get the images taken down.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "character-ai": {
    "whatItIs": "Character.AI offers user-created characters and entertainment features. Its July 2026 help pages say all users undergo age assurance and verified under-18s cannot chat with characters. Reading Mode includes viewing previous chats and creative features. A September update confirms that under-18 open-ended chat remains unavailable.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Mandatory age assurance; under-18s lose open-ended chat and get Reading Mode.",
    "topRisks": [
      "Treating generated responses as reliable personal advice",
      "Sharing sensitive personal information",
      "Emotional reliance on a simulated character"
    ],
    "canChange": [
      "Turn on Parental Insights for the weekly email.",
      "Check the birthday on the account and whether an age check was ever completed.",
      "Block the app entirely with Screen Time or Family Link.",
      "Agree limits on late-night use."
    ],
    "cannotControl": [
      "What a character says in a conversation — output is generated, not curated.",
      "Whether an adult-registered account passes the age check.",
      "The emotional attachment a child forms to a character.",
      "Dozens of competing AI companion apps with no such restrictions."
    ],
    "conversationStarter": "“What do you talk to it about? I'm genuinely curious — and if it's stuff you'd rather not tell me, that's worth knowing too.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  },
  "replika": {
    "whatItIs": "An AI companion app designed around an ongoing relationship with a single persistent character, including romantic and, for adults, intimate roleplay.",
    "whoUses": "See the account eligibility and content-rating information below; this guide does not estimate the age distribution of actual users.",
    "ukControls": "Replika’s terms explicitly prohibit use by anyone under 18, whether registered or not. An app-store content rating is separate from this eligibility rule.",
    "topRisks": [
      "Romantic and sexual roleplay designed for adults, reachable by a teenager with a false birthday.",
      "Emotional dependence on a companion engineered to encourage daily return, with paid tiers unlocking intimacy.",
      "Personal disclosures shared with a commercial service rather than a person or professional."
    ],
    "canChange": [
      "Block the app and similar AI companion apps at device level.",
      "Talk about AI companions as a category, not just this one app.",
      "Route real emotional needs to a person: a counsellor, a helpline, you.",
      "Remove payment methods so paid tiers can't be unlocked."
    ],
    "cannotControl": [
      "Whether an AI response is accurate or appropriate.",
      "What personal information a user chooses to disclose."
    ],
    "conversationStarter": "“Do you ever talk to an AI when you're feeling low? I'd rather you talked to me — but tell me honestly, because I'd like to understand why it helps.”",
    "auditNote": "Source-based editorial review, 21 September 2026. Platform policy is distinct from independently tested effectiveness."
  }
};
