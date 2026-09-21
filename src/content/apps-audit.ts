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
  tiktok: {
    whatItIs:
      "A short-video app built around an algorithmic ‘For You’ feed, plus DMs, live streams and a creator marketplace.",
    whoUses:
      "Most UK secondary-school pupils, and a large number of under-13s using accounts registered with a false birthday. Primary-age children mostly watch through a sibling's or parent's account.",
    ukControls:
      "Accounts registered as 13–15 are private by default with DMs off; 16–17 accounts have restricted DMs. Age estimation applies to live streaming, gifting and 18+ features, not the main feed. Family Pairing links a parent's account to a teen's to set screen time, restricted mode, search and DM limits.",
    topRisks: [
      "A recommendation feed that narrows quickly towards intense content — dieting, self-harm or misogyny — because it learns from how long a child lingers, not what they choose.",
      "Contact from adults through DMs, comments and live gifting on accounts that are public or registered as older.",
      "Compulsive night-time use: sessions are designed to be endless, and phone-in-bedroom use is strongly associated with lost sleep.",
    ],
    canChange: [
      "Set the account to private and link it with Family Pairing.",
      "Turn Restricted Mode on and switch DMs to ‘Friends’ or ‘No one’.",
      "Set daily screen-time limits and a wind-down time inside the app.",
      "Filter comments and keywords; turn off ‘Suggest your account to others’.",
    ],
    cannotControl: [
      "What the algorithm recommends — there is no parental control over the For You feed itself.",
      "Whether the registered birthday is true, which decides every teen default.",
      "Content your child sees on someone else's phone, or through a browser while logged out.",
      "Private ‘finsta’-style second accounts created with a different email.",
    ],
    conversationStarter:
      "“Can you show me your For You page? I want to see what TikTok thinks you're into — not to judge it, I'm just curious what it's decided about you.”",
    auditNote: "Audit: add explicit UK-2026 Teen Account, age-assurance and Family Pairing detail, and separate legal/platform controls from parent controls.",
  },

  instagram: {
    whatItIs:
      "Photo, Stories and Reels app from Meta, with DMs, close-friends lists and an algorithmic short-video feed.",
    whoUses:
      "Teens 13+, heavily. Younger children often appear via family accounts or unofficial accounts made with a false age.",
    ukControls:
      "Under-18s are placed in Teen Accounts: private by default, DMs restricted to people they follow, sensitive content set to the most limited setting, and a sleep-mode overnight. Meta uses facial age estimation (Yoti) and ID checks when an account's age looks wrong. Parents can supervise through the Family Center.",
    topRisks: [
      "Appearance and comparison pressure, which Meta's own internal research linked to worsening body image in teenage girls.",
      "DMs and follow requests from adults, especially where an account was registered as over 18.",
      "Reels rabbit holes and endless scrolling that pull attention long past the intended few minutes.",
    ],
    canChange: [
      "Confirm the account really is a Teen Account and set up Family Center supervision.",
      "Keep the account private; review followers together.",
      "Set Sensitive Content Control to ‘Less’ and add Hidden Words filters.",
      "Turn off activity status and story resharing.",
    ],
    cannotControl: [
      "Meta's recommendation ranking, or which Reels appear.",
      "Screenshots of your child's stories or messages by other people.",
      "Second accounts, or content viewed while logged out on a browser.",
      "What is said about your child in other people's group chats.",
    ],
    conversationStarter:
      "“Which accounts make you feel worse after looking at them? You can mute anyone without unfollowing — shall we do a few now?”",
    auditNote: "Audit: refresh around current Teen Account defaults and Meta's latest under-18 protections.",
  },

  snapchat: {
    whatItIs:
      "Messaging app built on disappearing photos and videos, with Snap Map location sharing, Stories, Streaks and the My AI chatbot.",
    whoUses:
      "The default friend-to-friend messenger for UK teens, and widely used by 10–12-year-olds despite the 13 limit.",
    ukControls:
      "Family Centre lets a linked parent see who their teen has messaged in the last seven days (not the content), report accounts and restrict sensitive Stories content. Age checks apply to some 18+ features; the sign-up age itself is self-declared.",
    topRisks: [
      "A false sense of privacy: ‘disappearing’ messages are routinely screenshotted, saved or recorded, and Snapchat is the platform named most often in recorded UK grooming offences.",
      "Snap Map broadcasting live location to every accepted friend, including people met only online.",
      "Streaks and constant notifications driving compulsive daily use and night-time checking.",
    ],
    canChange: [
      "Turn on Ghost Mode in Snap Map.",
      "Set ‘Contact Me’ and ‘View My Story’ to Friends only.",
      "Link Family Centre and turn on sensitive-content restrictions.",
      "Disable Quick Add so strangers aren't suggested.",
    ],
    cannotControl: [
      "The content of messages — Family Centre shows who, never what.",
      "Whether a recipient screenshots or screen-records a snap.",
      "My AI's responses, beyond clearing the chat.",
      "Friend requests your child chooses to accept.",
    ],
    conversationStarter:
      "“Who's actually on your Snap Map right now? Let's look together — and if there's anyone on there you've never met in person, tell me about them.”",
    auditNote: "Audit: needs a current 2026 check of Family Centre, Snap Map and My AI.",
  },

  whatsapp: {
    whatItIs:
      "End-to-end encrypted messenger used for one-to-one chats, class and club group chats, communities, voice/video calls and channels.",
    whoUses:
      "Practically every UK family, plus school year groups, sports clubs and friendship groups from about Year 6 upwards.",
    ukControls:
      "None specific to the UK. The minimum age is self-declared at 13 and there is no age assurance. Safety depends entirely on in-app privacy settings.",
    topRisks: [
      "Group chats escalating into pile-ons, exclusion or bullying that adults never see, made harder to evidence by disappearing messages.",
      "Being added to large groups or communities by someone who only has the child's number, exposing their profile photo and ‘about’ text.",
      "Scams and sextortion attempts from unknown numbers, including fake ‘Hi Mum’ and job-offer messages, and forwarded misinformation or graphic video.",
    ],
    canChange: [
      "Set ‘Who can add me to groups’ to My Contacts, or My Contacts Except…",
      "Restrict profile photo, About and Last Seen to contacts only.",
      "Turn on Silence Unknown Callers and two-step verification.",
      "Turn off automatic media download so graphic forwards don't save to the gallery.",
    ],
    cannotControl: [
      "Message content — the encryption means neither you nor WhatsApp can read chats.",
      "What classmates forward, screenshot or say about your child.",
      "Disappearing messages, which remove the evidence of bullying.",
      "Whether someone shares your child's number with a stranger.",
    ],
    conversationStarter:
      "“If a group chat turned nasty, would you screenshot it before leaving? Let's agree that you show me first and we decide together — you won't lose the phone over it.”",
    auditNote: "Audit: add group/community safety, disappearing messages, unknown callers and scams.",
  },

  discord: {
    whatItIs:
      "Chat platform of text, voice and video ‘servers’ — originally for gamers, now used for friendship groups, fandoms, homework help and communities of every kind.",
    whoUses:
      "Teens who game, plus fandom and study communities. Younger children are often invited into servers linked to Roblox, Minecraft or Fortnite.",
    ukControls:
      "Under the Online Safety Act, UK accounts get age-appropriate defaults, and 18+ content is gated behind facial age estimation or ID via Persona. The global ‘teen by default’ rollout is scheduled for the second half of 2026. The Family Centre links a parent's account to a teen's for weekly activity summaries.",
    topRisks: [
      "Direct messages from adults met in public servers — the most common route into grooming and sextortion on the platform.",
      "Servers with no meaningful moderation, where extreme, sexual or self-harm content circulates freely.",
      "Voice chat and screen sharing with strangers, often late at night while gaming.",
    ],
    canChange: [
      "Link the Family Centre and review weekly activity emails.",
      "Set ‘Safe Direct Messaging’ to scan all messages and block DMs from server members.",
      "Turn off friend requests from ‘Everyone’.",
      "Review the server list together and leave any your child can't explain.",
    ],
    cannotControl: [
      "What is said in servers you can't see — the Family Centre shows names, not content.",
      "Private servers created by classmates, or invite links shared elsewhere.",
      "Whether a teen passes the 18+ age check with borrowed ID.",
      "Voice chat content, which is not moderated in real time.",
    ],
    conversationStarter:
      "“Which servers are you actually in? Show me the list — I want to know which ones are your school friends and which ones are people you only know online.”",
    auditNote: "Audit: high priority — UK age assurance changes and current terminology.",
  },

  telegram: {
    whatItIs:
      "Messenger with very large public groups and broadcast channels, username-based contact without sharing a phone number, and minimal content moderation.",
    whoUses:
      "Older teens, particularly for fandom channels, piracy, crypto talk, memes and content removed from other platforms.",
    ukControls:
      "None. Age is self-declared and there is no UK age assurance. Telegram moderates far less than mainstream platforms.",
    topRisks: [
      "Public channels distributing illegal and extreme material — pornography, self-harm content, drugs, weapons, stolen data and pirated media — findable by search.",
      "Contact from anonymous accounts by username alone, with no mutual-friend or contact requirement.",
      "Crypto, ‘investment’, money-mule and sextortion scams that target teenagers directly in group chats.",
    ],
    canChange: [
      "Set ‘Who can add me to groups’ and ‘Who can find me by number’ to My Contacts.",
      "Turn on the built-in content filter for sensitive media where offered.",
      "Enable two-step verification and hide the phone number.",
      "Remove the app, or block reinstalls, if channel content is the main use.",
    ],
    cannotControl: [
      "What is posted in public channels — there is no parental control layer.",
      "Whether channels reappear after removal under a new name.",
      "Secret chats, which are device-only and self-destructing.",
      "Anonymous contact attempts from accounts with no identifying details.",
    ],
    conversationStarter:
      "“What do you use Telegram for that WhatsApp doesn't do? I'm not assuming the worst — I just want to understand what's on there.”",
    auditNote: "Audit: emphasise public groups/channels, anonymous contacts, illicit content and scams over ordinary messaging.",
  },

  youtube: {
    whatItIs:
      "The world's largest video platform: long-form video, Shorts, live streams, comments and an algorithmic recommendation system — plus a separate YouTube Kids app and supervised experiences.",
    whoUses:
      "Ofcom finds YouTube is the most-used platform by UK children aged 3–17. For most families it has replaced television.",
    ukControls:
      "Google applies age estimation in the UK and asks for ID or a card for age-restricted content. For under-13s there is YouTube Kids or a supervised Google account with three content settings: Explore (9+), Explore More (13+) and Most of YouTube.",
    topRisks: [
      "Autoplay and recommendations moving a child from an innocent video to unrelated, disturbing or extreme content within a few steps.",
      "Shorts behaving like TikTok — a fast, endless feed with no natural stopping point.",
      "Comment sections and live-chat, where strangers interact with children directly, and creator-run Discord or Patreon links that lead off-platform.",
    ],
    canChange: [
      "Use YouTube Kids or a supervised account for under-13s and choose the content setting deliberately.",
      "Turn off autoplay and turn on Restricted Mode.",
      "Turn off watch and search history to slow down rabbit holes; clear it when it goes wrong.",
      "Disable comments and block channels on YouTube Kids.",
    ],
    cannotControl: [
      "Which videos the recommendation system serves next.",
      "Content on a signed-out browser, a games console, a smart TV or a friend's device.",
      "Live-chat messages during a stream.",
      "Where a creator sends viewers off-platform.",
    ],
    conversationStarter:
      "“Show me the last three videos YouTube suggested to you. Has it ever recommended something that made you feel weird?”",
    auditNote: "Audit: expand supervised experiences, YouTube Kids vs ordinary YouTube, Shorts and recommendation history.",
  },

  twitch: {
    whatItIs:
      "Live-streaming platform, mostly gaming, with live chat, private Whispers, paid subscriptions, ‘bits’ donations and clips.",
    whoUses:
      "Teens who follow gaming creators and esports, and younger children watching Minecraft, Fortnite and Roblox streamers.",
    ukControls:
      "Minimum age 13, self-declared; 18+ where a child streams without a parent present. Mature-content streams carry a label rather than a hard age check. There is no parent dashboard.",
    topRisks: [
      "Live chat that is impossible to pre-moderate — sexual comments, hate speech and links appear in real time on channels aimed at young viewers.",
      "Whispers (private messages) from adult viewers, and the pull towards a streamer's Discord where contact is unmoderated.",
      "Money: subscriptions, bits and donations, plus heavy exposure to gambling, casino and loot-box streams.",
    ],
    canChange: [
      "Watch signed out, or on a supervised account with mature-content streams avoided.",
      "Turn Whispers off from strangers and block channels.",
      "Remove payment cards and disable in-app purchases at device level.",
      "Set the streaming rules: no streaming their own gameplay under 13, camera off, no real name.",
    ],
    cannotControl: [
      "Live chat and what viewers type during a stream.",
      "What a streamer says or shows in the moment.",
      "Gambling-style content, which is widespread and only partly restricted.",
      "Off-platform contact through a streamer's Discord or social accounts.",
    ],
    conversationStarter:
      "“Which streamers do you watch, and have any of them ever asked viewers to message them privately or join their Discord?”",
    auditNote: "Audit: add DMs/Whispers, live chat, donations/subscriptions and gambling-style content.",
  },

  kick: {
    whatItIs:
      "A newer live-streaming rival to Twitch, funded by and closely tied to an online casino, with deliberately looser content moderation.",
    whoUses:
      "Teens who follow creators banned or restricted elsewhere; smaller than Twitch but growing fast, and often unfamiliar to parents.",
    ukControls:
      "Minimum age 13, self-declared. Moderation is lighter than mainstream platforms and policies change frequently, so any guidance dates quickly.",
    topRisks: [
      "Gambling streams are a core part of the platform, normalising casino play for young viewers.",
      "Weaker moderation means sexual, violent and hateful content and ‘IRL’ shock streams surface more readily.",
      "Live chat and creator communities with little enforcement, and creators who moved there specifically after bans elsewhere.",
    ],
    canChange: [
      "Block the site and app with Screen Time or Family Link.",
      "Watch together if it is used at all, and unfollow gambling-category creators.",
      "Remove saved cards and disable purchases on the device.",
      "Recheck what your child watches every few months — the content mix shifts.",
    ],
    cannotControl: [
      "Live content in the moment; there is no meaningful parental control layer.",
      "Chat messages from other viewers.",
      "Which creators the platform promotes on its front page.",
      "Policy changes, which are frequent and rarely announced clearly.",
    ],
    conversationStarter:
      "“Do you watch anyone on Kick? I'd like to see one of their streams with you — I've read the site is much less moderated than Twitch.”",
    auditNote: "Audit: good differentiator; keep updated frequently because policies and content change.",
  },

  roblox: {
    whatItIs:
      "A platform of millions of user-made games (‘experiences’) with in-game chat, avatar items and a real-money currency, Robux.",
    whoUses:
      "Enormously popular with UK primary and lower-secondary children, plus a large adult creator community sharing the same spaces.",
    ukControls:
      "Roblox now requires facial age estimation or ID before chat is available where rolled out, and groups users into age bands so children chat mostly with their own age group. Parents can link their own account to manage games, chat, spending and screen time. Kids accounts cover ages 5–8, Select 9–15 and standard Roblox 16+; Restricted content is 18+. Options vary by age and region.",
    topRisks: [
      "Adults and children sharing the same experiences, which is why Roblox appears repeatedly in UK grooming reports and investigative journalism.",
      "Money: Robux purchases, third-party ‘free Robux’ scams and gambling-style resale of items.",
      "User-made experiences that copy adult content, or condition-based games that slip past ratings, plus off-platform moves to Discord.",
    ],
    canChange: [
      "Link a parent account and review the games and chat permissions available for the child’s age and region.",
      "Check the account age together; an age check is required if chat is enabled. Never use an adult’s age check for a child.",
      "Set monthly spending limits and remove saved payment details.",
      "Restrict who can message, invite or join, and turn off chat entirely for younger children.",
    ],
    cannotControl: [
      "The content of thousands of new user-made experiences published every day.",
      "Whether the age estimate is accurate, or whether an older friend's account is used instead.",
      "What is said once the conversation moves to Discord or another app.",
      "Whether a child spends their own money via gift cards.",
    ],
    conversationStarter:
      "“Who do you play with on Roblox that you don't know from school? And has anyone ever asked you to chat somewhere else, like Discord?”",
    auditNote: "Audit: critical 2026 rewrite — age checks, age-grouped chat and expanded parental controls.",
  },

  fortnite: {
    whatItIs:
      "Free-to-play battle royale plus a huge library of creator-made islands, concerts and party modes, with voice and text chat and a cosmetics store.",
    whoUses:
      "Very widely played from about age 8 upwards on console, PC and mobile, often as the main way friends socialise after school.",
    ukControls:
      "PEGI 12. Epic uses cabined accounts for younger children — chat, purchases and personalised content off until a parent gives consent — and Epic parental controls run through a PIN with weekly playtime reports by email.",
    topRisks: [
      "Open voice chat in random squads, where a child can end up in a party with adults they don't know.",
      "Spending pressure: V-Bucks, battle passes, limited-time skins and peer pressure to keep up.",
      "Creator-made islands that are barely moderated, plus late-night play driven by squad commitments.",
    ],
    canChange: [
      "Set the Epic parental-controls PIN and enable weekly playtime reports.",
      "Set voice chat to ‘Party only’ or off, and text chat to ‘Nobody’.",
      "Require the PIN for every purchase and remove stored cards.",
      "Turn on the mature-language filter and restrict who can add friends.",
    ],
    cannotControl: [
      "What squadmates say over voice chat.",
      "Content inside creator-made islands, which is user-generated.",
      "Console-level chat if a second account or a friend's console is used.",
      "The pull of limited-time events designed to make missing out feel costly.",
    ],
    conversationStarter:
      "“Who's in your squad tonight? If someone in a random party says something off, you can mute them instantly — do you know how?”",
    auditNote: "Audit: refresh Epic parental controls, voice/text chat, creator islands, purchases and age ratings.",
  },

  minecraft: {
    whatItIs:
      "A sandbox building game. Single-player and family Realms are calm and creative; public third-party servers are a different product entirely.",
    whoUses:
      "Children from about age 6 through the teens, on console, PC, tablet and phone.",
    ukControls:
      "PEGI 7 for the game itself. Microsoft child accounts add multiplayer, chat and friend controls, and Microsoft recommends 13+ for online play. There is no UK identity check.",
    topRisks: [
      "Public third-party servers with open voice and text chat, moderated only by their own volunteer owners — the documented grooming route.",
      "Mods, skins and ‘free cape’ downloads from outside official stores, carrying malware and account theft.",
      "Server Discords, where the real conversation happens outside any game control.",
    ],
    canChange: [
      "Use a Microsoft child account and set multiplayer to friends only.",
      "Keep play on single-player, a family Realm or a whitelisted server.",
      "Turn chat off on servers, and only install add-ons from the official marketplace.",
      "Review the joined-servers list together.",
    ],
    cannotControl: [
      "Moderation on third-party servers — that belongs to the server owner, not Microsoft.",
      "Voice chat carried out over Discord alongside the game.",
      "Who else is on a public server at any moment.",
      "Content in mods installed on a PC you don't administer.",
    ],
    conversationStarter:
      "“Are you playing on your own world, our Realm, or a public server? If it's a public one, let's look at its rules page together.”",
    auditNote: "Audit: separate PEGI rating from recommended age; cover Realms, public servers and third-party server risk.",
  },

  vrchat: {
    whatItIs:
      "Social virtual reality: user-made 3D worlds entered as an avatar, with live voice chat and full-body movement, mostly on Meta Quest headsets.",
    whoUses:
      "Teens with a headset, and a substantial number of under-13s. Adult users are the majority.",
    ukControls:
      "Minimum age 13. Age verification is optional and unlocks features rather than gating entry, so children can access most worlds. Meta Quest parental supervision sits at headset level, not inside VRChat.",
    topRisks: [
      "Adult-themed worlds discoverable by any account, and sexual content encountered within minutes in reporting by BBC Panorama and others.",
      "Harassment that feels physical — avatars crowding, following or simulating contact — which is far more distressing in VR than on a screen.",
      "Open voice chat with adults in every public room, with no recording or transcript for a parent to review.",
    ],
    canChange: [
      "Set up Meta Quest parental supervision and approve apps individually.",
      "Set the VRChat trust system to Friends or Friends+ only.",
      "Mute strangers by default and turn on personal space / safe bubble.",
      "Keep the headset in a shared room, not the bedroom.",
    ],
    cannotControl: [
      "The content of user-made worlds, which anyone can publish.",
      "Live voice chat, which is not moderated or logged.",
      "Whether your child removes safety settings once the headset is on.",
      "Who is in a public world at any given moment.",
    ],
    conversationStarter:
      "“Has anyone in VR ever got too close or said something that made you want to take the headset off? Taking it off straight away is always the right move.”",
    auditNote: "Audit: update age-verification/safety tooling and explain VR-specific physical and social risks.",
  },

  "gta-online": {
    whatItIs:
      "An 18-rated open-world crime game with a persistent online mode of up to 30 players, open voice chat and real-money currency purchases.",
    whoUses:
      "Officially adults. In practice widely played by 12–17-year-olds on console and PC.",
    ukControls:
      "PEGI 18 — the highest rating, given for explicit sexual content, sustained violence and drug use. There is no in-game UK age assurance; the only gate is the console or store account age.",
    topRisks: [
      "The rated content itself: strip clubs, torture, prostitution, drugs and sustained violence are gameplay, not background.",
      "Open lobbies with adult strangers on voice chat, including harassment and griefing.",
      "Real-money Shark Cards and a grind deliberately designed to make buying currency feel necessary.",
    ],
    canChange: [
      "Set console family settings so the 18 rating actually blocks the game.",
      "If it is played anyway: invite-only or solo sessions, voice chat off.",
      "Remove stored cards and set console spending limits.",
      "Offer a co-op alternative for younger teens.",
    ],
    cannotControl: [
      "The game's content — there is no family-friendly configuration; the rating is the point.",
      "What strangers say in a public lobby.",
      "Play at a friend's house or on a friend's account.",
      "Mods on PC, which can add further adult content.",
    ],
    conversationStarter:
      "“I know your friends play it. I'm not pretending I can stop you seeing it entirely — but I do want to talk about why it's rated 18, because it isn't just swearing.”",
    auditNote: "Audit: the key point is that PEGI 18 applies for good reasons; explain interactions and spending rather than a ‘safe configuration’.",
  },

  yubo: {
    whatItIs:
      "A social-discovery app: swipe to add strangers, then join live video rooms with them. Often described as ‘Tinder for teens’.",
    whoUses:
      "13–17-year-olds looking to meet new people beyond their school circle, in a pool separated from adults.",
    ukControls:
      "Facial age estimation runs on all users and 13–17s are separated from adults. Recheck current age bands, identity requirements and location/discovery controls, as these change often.",
    topRisks: [
      "The core purpose is meeting strangers, and the app has been linked to grooming, sexual assault and sextortion cases in BBC reporting and a French regulator sanction.",
      "Live video with people never met offline, often from a bedroom.",
      "Location-based discovery revealing roughly where a child is.",
    ],
    canChange: [
      "Reduce location precision and turn off discovery by location.",
      "Confirm age verification is complete so the teen pool applies.",
      "Limit who can join or view livestreams and use block/report actively.",
      "Remove the app if the purpose is meeting strangers rather than friends.",
    ],
    cannotControl: [
      "Who appears in the swipe deck.",
      "What happens live on camera in another user's room.",
      "Whether age separation holds if someone lies convincingly.",
      "Contact that moves to Snapchat or Instagram after a first match.",
    ],
    conversationStarter:
      "“What does Yubo give you that Snapchat doesn't? If it's meeting new people, let's talk about what that actually means when they're strangers on video.”",
    auditNote: "Audit: recheck current age bands, identity/age-estimation requirements and location/discovery controls before launch.",
  },

  "x-twitter": {
    whatItIs:
      "A public posting platform for news, sport, memes and fandoms, which also hosts consensual adult content behind an age wall.",
    whoUses:
      "Older teens following sport, gaming, politics and fandoms; less used by younger children than TikTok or Snapchat.",
    ukControls:
      "UK users must pass age assurance — account signals such as email and account age, or ID verification — before seeing sensitive media. Known under-18s cannot view it at all and get protected-post defaults. A VPN that changes apparent location defeats the check.",
    topRisks: [
      "Pornography and graphic violence are hosted on the platform; the UK gate is real but circumventable.",
      "Targeted harassment through replies and quote-posts, which are public and pile up quickly.",
      "Misinformation and extreme political content amplified by paid accounts.",
    ],
    canChange: [
      "Check whether the account is registered with a true birthday; that decides everything else.",
      "Set the sensitive-media filter to hide, and protect posts.",
      "Turn off DMs from people they don't follow.",
      "Block VPN app installs with Screen Time or Family Link.",
    ],
    cannotControl: [
      "What appears in the algorithmic ‘For You’ timeline.",
      "Replies and quote-posts from strangers.",
      "The age check if a VPN or false birthday is in use.",
      "Content viewed logged-out in a browser.",
    ],
    conversationStarter:
      "“Has X ever asked you to prove your age? If it hasn't, I'd like to look at the birthday on your account together.”",
    auditNote: "Audit: critical rewrite — UK age assurance and sensitive-content behaviour have changed.",
  },

  reddit: {
    whatItIs:
      "A network of user-run forums (‘subreddits’) covering every interest, with voting, anonymous accounts, DMs and chat.",
    whoUses:
      "Older teens, especially for gaming, hobbies, revision help and advice communities. Rarely a first app for younger children.",
    ukControls:
      "UK users must confirm their age — via an Apple/Google age-range signal or a Persona selfie or ID — before seeing mature or restricted content. 13–18 accounts get protective defaults automatically. On iOS the NSFW toggle has been removed from the app; it can only be changed in a browser. A VPN defeats the location-based check.",
    topRisks: [
      "Mature and NSFW communities behind an age wall a determined teen may try to pass with borrowed ID.",
      "Anonymous DMs and chat invitations from adults, with no real identity behind any account.",
      "Pile-ons, doxxing and self-harm or eating-disorder communities, all moderated by unpaid volunteers.",
    ],
    canChange: [
      "Confirm the account age is correct so teen defaults apply.",
      "Turn off NSFW in a browser (it is missing from the iOS app).",
      "Set chat requests to Nobody or Followers, and mute subreddits.",
      "Block VPN app installs with Screen Time or Family Link.",
    ],
    cannotControl: [
      "What is posted in any subreddit — moderation is volunteer-run and uneven.",
      "The age check if a VPN or an adult's ID is used.",
      "Anonymous accounts contacting your child.",
      "Content read logged-out in a browser.",
    ],
    conversationStarter:
      "“Has Reddit asked you to verify your age? I'm not going to be angry — I just want to know what you can see.”",
    auditNote: "Audit: critical rewrite — UK mature-content age verification has changed.",
  },

  bereal: {
    whatItIs:
      "A once-a-day photo prompt: a two-minute window to post a simultaneous front and back camera shot, shared with friends and optionally a global feed.",
    whoUses:
      "Teens and university students; smaller than the main platforms but sticky within friendship groups.",
    ukControls:
      "Minimum age 13, self-declared, with no UK age check. Discovery, location and privacy behaviour change with updates and should be rechecked regularly.",
    topRisks: [
      "Location attached to posts by default, showing where a child is at a predictable time each day.",
      "The Discovery feed and friend-of-friend reactions exposing posts beyond the intended circle.",
      "Pressure to post immediately — in class, on the bus, or somewhere they shouldn't be photographing.",
    ],
    canChange: [
      "Turn location off before posting and set sharing to friends only.",
      "Keep the account out of the Discovery feed.",
      "Review the friend list together and remove people never met.",
      "Agree the two-minute timer is not a real deadline.",
    ],
    cannotControl: [
      "Screenshots of a child's BeReal by friends.",
      "Friend-of-friend visibility of reactions.",
      "Changes to discovery and privacy defaults after an update.",
      "The social pressure of a daily posting streak.",
    ],
    conversationStarter:
      "“Does your BeReal show where you are? Let's check — I'd rather your daily photo didn't come with a map pin.”",
    auditNote: "Audit: needs a current recheck of discovery, location and privacy behaviour.",
  },

  "ngl-sendit": {
    whatItIs:
      "Anonymous message apps bolted onto Instagram and Snapchat stories. They are separate services with different histories, not one product: NGL was fined by the US FTC for generating fake ‘anonymous’ messages; Sendit is a Snapchat-linked Q&A app; YOLO was removed from Snapchat entirely after a lawsuit following a teenager's death.",
    whoUses:
      "11–16-year-olds, usually for a few intense weeks after a friendship group starts posting links.",
    ukControls:
      "None. Rated 17+ on the App Store but with no age check of any kind.",
    topRisks: [
      "Anonymous bullying and threats with no way to identify the sender.",
      "Fake replies generated by the app itself to drive paid ‘hints’ — the specific deception the FTC fined NGL for.",
      "Sextortion and coercion arriving through a channel a child cannot block.",
    ],
    canChange: [
      "Delete the app — there is no safe configuration.",
      "Remove the link from the Instagram or Snapchat bio.",
      "Block reinstalls with Screen Time or Family Link.",
      "Screenshot and report threatening messages before deleting.",
    ],
    cannotControl: [
      "Who sends anonymous messages.",
      "Whether the messages are even real.",
      "Copycat apps launching under new names.",
      "The social pressure to post the link when everyone else does.",
    ],
    conversationStarter:
      "“Some of those anonymous messages are written by the app itself to make you pay for a hint. Can I show you what the regulator found?”",
    auditNote: "Audit: keep the category, but distinguish the services individually rather than treating them as identical.",
  },

  "omegle-style": {
    whatItIs:
      "Random video-chat services — Monkey, Azar, ChatHub and others — that pair a user with a stranger on camera, filling the niche Omegle left when it shut down in 2023.",
    whoUses:
      "Teens, often in groups as a dare. Also used alone, which is where the serious harm happens.",
    ukControls:
      "Nominally 18+, with no meaningful age check. Children get in easily. Parents are more likely to search a brand name than the category, so check the phone for these specific apps.",
    topRisks: [
      "Live nudity and sexual acts from adult strangers, usually within a handful of skips.",
      "Grooming and recorded sextortion — the child is on camera, and the stranger may be recording.",
      "No effective age verification, moderation or reporting route.",
    ],
    canChange: [
      "Block these apps and their websites at device level.",
      "Turn off app installs so replacements can't be added.",
      "Check the phone for the current brand names, which change often.",
      "Agree that if something happened, they can tell you without losing the phone.",
    ],
    cannotControl: [
      "Who the service pairs your child with.",
      "Whether a stranger records the call.",
      "New copycat apps appearing under different names.",
      "Access through a browser rather than an app.",
    ],
    conversationStarter:
      "“If something on a video-chat app has already happened, you're not in trouble — but I need to know, because we can get the images taken down.”",
    auditNote: "Audit: good category, but create individual guides for the major current brand names parents search.",
  },

  "character-ai": {
    whatItIs:
      "A roleplay and story platform of user-made AI characters. Since late 2025 verified under-18s cannot have open-ended conversations at all — they get Reading Mode, where they can browse and read but not chat.",
    whoUses:
      "Teens and young adults, often for company, story writing or roleplay. Younger children have been documented on the platform via false birthdays.",
    ukControls:
      "Minimum age 13, and 16 in Europe. Age assurance is mandatory for every account, with ID requested when the automatic estimate is uncertain. Parental Insights sends a linked parent a weekly activity summary.",
    topRisks: [
      "A teen registering as an adult to keep full chat access — now the main risk, rather than the teen product itself.",
      "Parasocial dependence: an AI that is always available, always agreeable and never busy.",
      "Sexual and self-harm content documented in US lawsuits about the earlier teen experience.",
    ],
    canChange: [
      "Turn on Parental Insights for the weekly email.",
      "Check the birthday on the account and whether an age check was ever completed.",
      "Block the app entirely with Screen Time or Family Link.",
      "Agree limits on late-night use.",
    ],
    cannotControl: [
      "What a character says in a conversation — output is generated, not curated.",
      "Whether an adult-registered account passes the age check.",
      "The emotional attachment a child forms to a character.",
      "Dozens of competing AI companion apps with no such restrictions.",
    ],
    conversationStarter:
      "“What do you talk to it about? I'm genuinely curious — and if it's stuff you'd rather not tell me, that's worth knowing too.”",
    auditNote: "Audit: critical rewrite — one of the biggest accuracy issues. Applied.",
  },

  replika: {
    whatItIs:
      "An AI companion app designed around an ongoing relationship with a single persistent character, including romantic and, for adults, intimate roleplay.",
    whoUses:
      "Mainly adults. Part of the wider AI companions cluster alongside Character.AI, and teens do find it.",
    ukControls:
      "17+ on the App Store and 18+ in Replika's own terms. Italy's data regulator ordered it to stop processing Italian users' data over child-protection failings. Age assurance is weak.",
    topRisks: [
      "Romantic and sexual roleplay designed for adults, reachable by a teenager with a false birthday.",
      "Emotional dependence on a companion engineered to encourage daily return, with paid tiers unlocking intimacy.",
      "Personal disclosures shared with a commercial service rather than a person or professional.",
    ],
    canChange: [
      "Block the app and similar AI companion apps at device level.",
      "Talk about AI companions as a category, not just this one app.",
      "Route real emotional needs to a person: a counsellor, a helpline, you.",
      "Remove payment methods so paid tiers can't be unlocked.",
    ],
    cannotControl: [
      "What the AI says or where a conversation goes.",
      "Whether a teen signs up with a false age.",
      "The many alternative companion apps appearing constantly.",
      "How the data shared in conversation is used.",
    ],
    conversationStarter:
      "“Do you ever talk to an AI when you're feeling low? I'd rather you talked to me — but tell me honestly, because I'd like to understand why it helps.”",
    auditNote: "Audit: retain, but present as part of a wider AI companions cluster.",
  },
};
