// Centralised editorial content for the hub.
// Plain-English, evidence-led, non-sensational. Last reviewed dates included.

export const REVIEWED = "May 2026";

export type ScreenTimeGuidance = {
  recommended: string;
  ukContext?: string;
  sources: { label: string; org: string; region: string; url: string }[];
  consequences: string[];
};

export type ExpertResource = {
  title: string;
  source: string;
  type: "Study" | "Article" | "Report" | "Video" | "Book";
  url: string;
  note?: string;
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
  deepDive: ExpertResource[];
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
        "UK guidance does not set an hour limit for under-5s. The NHS and RCPCH advise judging screen use by whether it is displacing sleep, play, activity and family conversation. Internationally, the WHO recommends no screens under 1 year, none except video calls before 18 months, and no more than 1 hour a day for 2–4 year-olds.",
      ukContext:
        "The Royal College of Paediatrics and Child Health deliberately declined to set a UK screen-time threshold, saying the evidence is not strong enough. Treat WHO, AAP and Canadian numbers as international guidance, not UK policy.",
      sources: [
        { label: "The health impacts of screen time — guide for clinicians and parents", org: "Royal College of Paediatrics and Child Health", region: "UK", url: "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents" },
        { label: "Screen time advice for children and families", org: "NHS / Start for Life", region: "UK", url: "https://www.nhs.uk/start-for-life/toddler/" },
        { label: "Guidelines on physical activity, sedentary behaviour and sleep for children under 5", org: "World Health Organization", region: "Global (international guidance)", url: "https://www.who.int/publications/i/item/9789241550536" },
        { label: "Media and Young Minds (policy statement)", org: "American Academy of Pediatrics", region: "USA (international guidance)", url: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds" },
        { label: "Screen time and young children — position statement", org: "Canadian Paediatric Society", region: "Canada (international guidance)", url: "https://cps.ca/en/documents/position/screen-time-and-young-children" },
      ],
      consequences: [
        "Heavy toddler screen use is associated with delayed language and smaller vocabularies (JAMA Pediatrics, 2020). Screens are one factor among many, not a proven sole cause.",
        "Evening screen use is associated with shorter, more disrupted sleep.",
        "More screen time is associated with less parent–child talk — and parent–child interaction is a strong predictor of early development.",
        "Higher screen use in the pre-school years has been associated with more attention and self-regulation difficulties at school entry (CHILD Cohort Study, Canada, 2019).",
      ],
    },
    deepDive: [
      { type: "Report", source: "World Health Organization", title: "Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age", url: "https://www.who.int/publications/i/item/9789241550536", note: "The WHO's primary global guidance — explains why under-2s should avoid screens entirely." },
      { type: "Study", source: "JAMA Pediatrics (2020)", title: "Associations Between Screen-Based Media Use and Brain White Matter Integrity in Preschool-Aged Children", url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2754101", note: "MRI study showing measurable differences in language and literacy brain regions in heavy-screen toddlers." },
      { type: "Study", source: "JAMA Pediatrics (2019)", title: "Screen Time and Parent-Child Talk When Children Are Aged 12 to 36 Months", url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2725319", note: "Each extra minute of screen time reduced parent words heard by the child." },
      { type: "Article", source: "American Academy of Pediatrics — HealthyChildren.org", title: "How to Make a Family Media Use Plan", url: "https://www.healthychildren.org/English/family-life/Media/Pages/How-to-Make-a-Family-Media-Use-Plan.aspx" },
      { type: "Video", source: "TED — Dimitri Christakis, MD", title: "Media and Children", url: "https://www.youtube.com/watch?v=BoT7qH_uVNo", note: "Paediatrician summarising the evidence on infant/toddler screen exposure." },
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
    screenTime: {
      recommended:
        "There is no official UK hour limit at this age. UK guidance focuses on sleep, physical activity, what is being watched and family context. Some international guidelines (AAP, Canada) suggest around 1 hour a day of recreational screens as a working target.",
      ukContext:
        "Treat “one hour a day” as an international suggestion rather than a UK rule. The practical UK questions are: is your child sleeping enough, moving enough, eating without a screen, and is the content suitable?",
      sources: [
        { label: "The health impacts of screen time — guide for clinicians and parents", org: "Royal College of Paediatrics and Child Health", region: "UK", url: "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents" },
        { label: "Physical activity guidelines: children and young people (5 to 18)", org: "UK Chief Medical Officers / NHS", region: "UK", url: "https://www.gov.uk/government/publications/physical-activity-guidelines-children-and-young-people-aged-5-to-18-years" },
        { label: "Media use in school-aged children and adolescents", org: "American Academy of Pediatrics", region: "USA (international guidance)", url: "https://publications.aap.org/pediatrics/article/138/5/e20162592/60321/Media-Use-in-School-Aged-Children-and-Adolescents" },
        { label: "24-Hour Movement Guidelines for Children and Youth", org: "Canadian Society for Exercise Physiology", region: "Canada (international guidance)", url: "https://csepguidelines.ca/guidelines/children-youth/" },
      ],
      consequences: [
        "Screen use above about 2 hours a day at this age has been associated with lower developmental screening scores (JAMA Pediatrics, 2019) — an association, not proof of cause.",
        "Screen-heavy lifestyles are associated with higher obesity rates, largely through reduced activity and snacking while watching (WHO European COSI, 2022).",
        "Evening screens are associated with delayed sleep onset; short sleep at this age is linked to mood and learning problems.",
        "Less time in face-to-face play is associated with slower development of friendship and emotional-regulation skills.",
      ],
    },
    deepDive: [
      { type: "Study", source: "JAMA Pediatrics (2019)", title: "Association Between Screen Time and Children's Performance on a Developmental Screening Test", url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2722666", note: "Canadian cohort — >2h/day at age 3 predicted worse developmental scores at age 5." },
      { type: "Report", source: "WHO European Region (2022)", title: "Childhood Obesity Surveillance Initiative (COSI)", url: "https://www.who.int/europe/initiatives/who-european-childhood-obesity-surveillance-initiative-(cosi)", note: "Links screen-heavy lifestyles in 6–9 year-olds to rising obesity across 33 countries." },
      { type: "Study", source: "Sleep Medicine Reviews (2021)", title: "Screen time and sleep among school-aged children and adolescents: a systematic review", url: "https://www.sciencedirect.com/science/article/abs/pii/S1087079214001075" },
      { type: "Article", source: "Common Sense Media", title: "The Common Sense Census: Media Use by Kids Age Zero to Eight", url: "https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-kids-age-zero-to-eight-2020" },
      { type: "Video", source: "BBC Panorama", title: "Smartphone Kids", url: "https://www.bbc.co.uk/iplayer/episodes/b00wk6h0/panorama", note: "Documentary on early phone/tablet use and behaviour." },
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
    screenTime: {
      recommended:
        "No UK body sets an hour limit for 8–10s. Some international guidelines suggest around 1.5–2 hours a day of recreational screens; UK guidance instead prioritises sleep, an hour of daily activity, screen-free bedrooms and mealtimes, and knowing what they are using.",
      ukContext:
        "The 1.5–2 hour figure comes from US, Canadian and Australian guidance. Use it as a rough anchor for family rules, not as an established UK standard.",
      sources: [
        { label: "The health impacts of screen time — guide for clinicians and parents", org: "Royal College of Paediatrics and Child Health", region: "UK", url: "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents" },
        { label: "Children and parents: media use and attitudes", org: "Ofcom", region: "UK", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
        { label: "Media Use in School-Aged Children and Adolescents", org: "American Academy of Pediatrics", region: "USA (international guidance)", url: "https://publications.aap.org/pediatrics/article/138/5/e20162592/60321/Media-Use-in-School-Aged-Children-and-Adolescents" },
        { label: "24-Hour Movement Guidelines (5–17 years)", org: "Canadian Society for Exercise Physiology", region: "Canada (international guidance)", url: "https://csepguidelines.ca/guidelines/children-youth/" },
        { label: "Guidelines on the use of digital devices by children", org: "Royal Australasian College of Physicians", region: "Australia / NZ (international guidance)", url: "https://www.racp.edu.au/news-and-events/media-releases/screen-time-guidelines" },
      ],
      consequences: [
        "Each extra hour of evening screen use is associated with roughly 15 minutes less sleep (Sleep Medicine Reviews, 2021).",
        "Unsupervised group-chat use is associated with higher involvement in cyberbullying, as victim or participant (EU Kids Online, 2020).",
        "Heavy recreational screen use is associated with weaker reading comprehension (OECD PISA analyses) — other factors such as home reading habits also play a part.",
        "Watch for early signs of problematic gaming: irritability when stopped, sneaking devices at night, slipping schoolwork.",
      ],
    },
    deepDive: [
      { type: "Report", source: "EU Kids Online (2020)", title: "EU Kids Online 2020: Survey results from 19 countries", url: "https://www.lse.ac.uk/media-and-communications/research/research-projects/eu-kids-online/eu-kids-online-2020", note: "Largest European study on children's online risks and group-chat dynamics." },
      { type: "Study", source: "The Lancet Child & Adolescent Health (2018)", title: "Associations between 24-hour movement behaviours and global cognition in US children (ABCD Study)", url: "https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(18)30278-5/fulltext", note: "Only 1 in 20 US kids met screen-time guidelines; those who did scored higher on cognition tests." },
      { type: "Report", source: "OECD PISA", title: "21st-Century Readers: Developing Literacy Skills in a Digital World", url: "https://www.oecd.org/en/publications/21st-century-readers_a83d84cb-en.html", note: "Heavy recreational screen use correlates with weaker reading comprehension across 79 countries." },
      { type: "Article", source: "Internet Matters", title: "Online gaming advice hub", url: "https://www.internetmatters.org/resources/online-gaming-advice/", note: "Practical UK guidance on Roblox, Fortnite and Minecraft chat risks." },
      { type: "Video", source: "Childnet International", title: "Trust Me — critical thinking online", url: "https://www.childnet.com/resources/trust-me/", note: "Short films for 7–11s on misleading content and online manipulation." },
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
    screenTime: {
      recommended:
        "There is no UK hour limit for this age. Protect the non-negotiables first: 9–11 hours of sleep, phones out of the bedroom overnight, an hour of daily activity and a tech-free wind-down. Around 2 hours a day of recreational scrolling is a common family benchmark drawn from international advice.",
      ukContext:
        "Ofcom reports what UK children actually do; it does not set limits. The UK Chief Medical Officers' advice centres on sleep, activity and safe use rather than a daily screen quota.",
      sources: [
        { label: "Children and parents: media use and attitudes report", org: "Ofcom", region: "UK", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
        { label: "The health impacts of screen time — guide for clinicians and parents", org: "Royal College of Paediatrics and Child Health", region: "UK", url: "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents" },
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA (international guidance)", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
        { label: "Recommendations on the regulation of smartphones for children", org: "French government expert commission (Enfants et écrans)", region: "France (international guidance)", url: "https://www.elysee.fr/emmanuel-macron/2024/04/30/enfants-et-ecrans" },
      ],
      consequences: [
        "Studies have found an association between more than about 3 hours a day on social media and higher rates of depression and anxiety symptoms (JAMA Psychiatry, 2019). That does not mean screen time alone caused the outcome.",
        "Keeping phones in bedrooms is associated with around an hour less sleep per night (Sleep Health, 2018).",
        "Heavy use of image-led platforms is associated with body-image disturbance and disordered eating, particularly among girls.",
        "Frequent media multitasking is associated with lower working-memory and academic performance scores; the direction of cause is still debated.",
      ],
    },
    deepDive: [
      { type: "Report", source: "US Surgeon General (2023)", title: "Social Media and Youth Mental Health — Advisory", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html", note: "Landmark advisory: heavy use ≈ doubled risk of depression and anxiety symptoms." },
      { type: "Study", source: "JAMA Psychiatry (2019)", title: "Associations Between Time Spent Using Social Media and Internalizing and Externalizing Problems Among US Youth", url: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2749480" },
      { type: "Study", source: "Sleep Health (2018)", title: "Adolescent sleep and the impact of technology use before sleep", url: "https://www.sleephealthjournal.org/article/S2352-7218(18)30055-0/fulltext", note: "Phones in bedrooms cost teens ~1 hour of sleep per night on average." },
      { type: "Book", source: "Jonathan Haidt — The Anxious Generation", title: "After Babel — research summaries", url: "https://www.afterbabel.com/", note: "Free deep-dive essays behind the bestselling book on smartphones and adolescent mental health." },
      { type: "Video", source: "TED — Jean Twenge", title: "iGen: What today's super-connected kids tell us about ourselves", url: "https://www.youtube.com/watch?v=mDPGcMlPyhI" },
      { type: "Report", source: "Ofcom (UK, 2024)", title: "Children and parents: media use and attitudes", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
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
      "Sharing nudes, or being pressured into it",
      "Sextortion — a stranger poses as a peer, obtains an image, then demands money or more images",
      "AI deepfake nudes made from ordinary photos taken from social accounts",
      "Intimate-image abuse: images shared on without consent (a criminal offence in the UK)",
      "Algorithmic rabbit-holes (extreme diet, self-harm, misogyny, hate)",
    ],
    settings: [
      "Two-factor auth on every account",
      "Review who can DM them on each platform",
      "Lock down photo-sharing: private accounts, no public face photos",
      "Discuss ‘nothing leaves the phone you wouldn’t want printed’",
    ],
    conversation: [
      "Make it clear: if a nude is leaked or faked, you will help — no punishment, no phone confiscation",
      "Explain sextortion out loud: stop replying, don't pay, screenshot, report, tell an adult",
      "Explain that AI-made fake nudes happen to people who never sent anything — and that reporting works (Report Remove, IWF)",
      "Talk about consent and screenshots",
    ],
    redFlags: [
      "Sudden withdrawal, secrecy, sleep loss",
      "Mentions of someone older they’ve ‘only met online’",
    ],
    screenTime: {
      recommended:
        "No hour cap is realistic at this age, and the UK sets none. Protect 8–10 hours of sleep, daily activity, schoolwork and offline friendships; use roughly 2 hours a day of pure social scrolling as a talking point rather than a rule.",
      ukContext:
        "US bodies (Surgeon General, APA) publish the firmest numbers. UK guidance stays focused on sleep, activity, content and support — treat the figures below as international guidance.",
      sources: [
        { label: "Children and parents: media use and attitudes report", org: "Ofcom", region: "UK", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
        { label: "The health impacts of screen time — guide for clinicians and parents", org: "Royal College of Paediatrics and Child Health", region: "UK", url: "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents" },
        { label: "APA Health Advisory on Social Media Use in Adolescence", org: "American Psychological Association", region: "USA (international guidance)", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA (international guidance)", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
      ],
      consequences: [
        "Studies have found an association between more than 3 hours a day on social media and depression, self-harm and suicidal ideation (Lancet Child & Adolescent Health, 2019). Sleep loss and cyberbullying appear to explain much of the link — screen time alone is not shown to be the cause.",
        "Sextortion and image-based abuse have risen sharply; the Internet Watch Foundation recorded record UK case numbers in 2024.",
        "AI ‘nudify’ tools can turn an ordinary photo into a fake nude in seconds, and UK teens have been targeted in school settings.",
        "Recommender feeds have been shown to surface pro-anorexia, self-harm and misogynistic content to teen test accounts within minutes (Amnesty International, 2023).",
        "Chronic short sleep is associated with worse mood, immune function and school performance.",
      ],
    },
    deepDive: [
      { type: "Study", source: "The Lancet Child & Adolescent Health (2019)", title: "Association between social media use and depression among 13–16 year olds in England", url: "https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(19)30186-5/fulltext", note: "Sleep loss and cyberbullying explain much of the association." },
      { type: "Report", source: "Internet Watch Foundation (2024)", title: "Annual Report — Sextortion and self-generated child sexual abuse imagery", url: "https://www.iwf.org.uk/annual-report-2023/", note: "Record numbers of UK teen sextortion cases." },
      { type: "Article", source: "Internet Watch Foundation / NSPCC", title: "Report Remove — get a nude image of yourself taken off the internet", url: "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/", note: "UK service for under-18s; works for real and AI-generated images." },
      { type: "Report", source: "Internet Watch Foundation (2024)", title: "AI-generated child sexual abuse imagery — update report", url: "https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/", note: "How ‘nudify’ apps are being used against real children." },
      { type: "Article", source: "National Crime Agency / CEOP", title: "Sextortion: what to do if you or your child is targeted", url: "https://www.ceopeducation.co.uk/parents/articles/is-your-child-being-blackmailed-online/", note: "UK police guidance: stop contact, don't pay, keep evidence, report." },
      { type: "Report", source: "Amnesty International (2023)", title: "Driven into the Darkness: How TikTok's For You feed encourages self-harm and suicidal ideation", url: "https://www.amnesty.org/en/documents/pol40/7350/2023/en/", note: "Algorithm audit of teen test accounts." },
      { type: "Article", source: "APA (American Psychological Association)", title: "Health Advisory on Social Media Use in Adolescence", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
      { type: "Video", source: "Netflix", title: "The Social Dilemma", url: "https://www.thesocialdilemma.com/", note: "Documentary on persuasive design and teen mental health." },
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
      "Money-mule recruitment — being paid to let money pass through their bank account (a criminal offence in the UK)",
      "Fake job and ‘easy money’ adverts on TikTok, Snapchat, Telegram and WhatsApp",
      "Student-finance and university scams: fake Student Loans Company texts, bogus accommodation deposits",
      "Investment, crypto and trading-app scams, often promoted by influencers",
      "Online gambling and gambling-style mechanics (loot boxes, spread betting, ‘prediction’ apps)",
      "Romance scams and deepfake extortion",
      "Permanent digital footprint affecting jobs and uni",
    ],
    settings: [
      "Strong, unique passwords + a password manager",
      "Lock down old social accounts they’ve forgotten",
      "Set spending limits and turn on transaction alerts in banking apps",
      "Use GAMSTOP self-exclusion and bank gambling blocks if betting apps appear",
    ],
    conversation: [
      "Talk about what they’d do if blackmailed online",
      "“No legitimate job asks to use your bank account” — explain money muling and that it can freeze their account for years",
      "Agree that anything urgent about money or student finance gets checked with you first",
      "Show them Action Fraud and how to report a scam",
      "Agree it’s fine to call you for a ride — no questions",
    ],
    redFlags: [
      "Unexplained money in or out",
      "Talk of ‘easy money’ opportunities online",
      "New payment or crypto apps they won't discuss",
    ],
    screenTime: {
      recommended:
        "No hour cap at this age, and the UK sets none. Protect 8–10 hours of sleep, daily activity and at least one regular offline social activity. Studies have found an association between recreational screen use above about 4 hours a day and worse mental health.",
      ukContext:
        "The firmest numbers come from US research and advisories. UK guidance emphasises sleep, activity and healthy use rather than a daily quota.",
      sources: [
        { label: "Physical activity guidelines: children and young people (5 to 18)", org: "UK Chief Medical Officers", region: "UK", url: "https://www.gov.uk/government/publications/physical-activity-guidelines-children-and-young-people-aged-5-to-18-years" },
        { label: "Children and parents: media use and attitudes report", org: "Ofcom", region: "UK", url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/" },
        { label: "APA Health Advisory on Social Media Use in Adolescence", org: "American Psychological Association", region: "USA (international guidance)", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA (international guidance)", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
      ],
      consequences: [
        "Heavy social media use (over about 3 hours a day) is associated with higher rates of anxiety, depression and loneliness. Association is not proof that screens alone caused it.",
        "Financial harm from gambling-style game mechanics, crypto scams and money-mule recruitment via TikTok, Snapchat and Telegram — mule accounts can be closed and credit refused for up to six years.",
        "A lasting digital footprint: nudes, drunken posts and group-chat screenshots resurface during university and job applications.",
        "Short sleep is linked to poorer driving safety, mood regulation and exam performance.",
      ],
    },
    deepDive: [
      { type: "Article", source: "Action Fraud (City of London Police)", title: "Report a scam or online fraud — UK national reporting centre", url: "https://www.actionfraud.police.uk/", note: "Where to report fraud and cybercrime in England, Wales and Northern Ireland (Scotland: Police Scotland, 101)." },
      { type: "Article", source: "Cifas", title: "Money mules — how young people are recruited and what it costs them", url: "https://www.cifas.org.uk/insight/fraud-risk-focus-blog/money-mules", note: "UK fraud-prevention service: mule accounts closed, banking refused for up to six years." },
      { type: "Article", source: "Take Five to Stop Fraud (UK Finance)", title: "Stop. Challenge. Protect. — spotting job, investment and impersonation scams", url: "https://www.takefive-stopfraud.org.uk/", note: "UK banking-industry campaign with scripts for checking any money request." },
      { type: "Article", source: "Student Loans Company / GOV.UK", title: "Spotting student finance scams", url: "https://www.gov.uk/government/news/student-finance-scams-what-to-look-out-for", note: "Fake SLC texts and emails spike around each term's payment dates." },
      { type: "Report", source: "Financial Conduct Authority", title: "ScamSmart — investment and crypto scam warnings", url: "https://www.fca.org.uk/scamsmart", note: "Check any investment firm against the FCA register before money moves." },
      { type: "Report", source: "UK Gambling Commission (2024)", title: "Young People and Gambling Survey", url: "https://www.gamblingcommission.gov.uk/statistics-and-research/publication/young-people-and-gambling-2024", note: "Loot boxes and in-game spending as routes into problem gambling." },
      { type: "Article", source: "GamCare / GAMSTOP", title: "Free UK gambling support and self-exclusion", url: "https://www.gamcare.org.uk/", note: "National GamCare helpline 0808 8020 133; GAMSTOP blocks UK-licensed gambling sites." },
      { type: "Report", source: "FBI / IC3", title: "Financial Sextortion Targeting Minors — Public Service Announcement", url: "https://www.ic3.gov/Media/Y2023/PSA230118", note: "Tactics used against teen boys via Instagram and Snapchat." },
      { type: "Study", source: "Preventive Medicine Reports (2018)", title: "Associations between screen time and lower psychological well-being among children and adolescents", url: "https://www.sciencedirect.com/science/article/pii/S2211335518301827", note: "Twenge & Campbell — large US dataset; an association, not a causal test." },
      { type: "Article", source: "Pew Research Center", title: "Teens, Social Media and Technology 2024", url: "https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/" },
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
  lastCheckedUK: string;
  officialMinAge: string;
  ukAgeAssurance: "Yes" | "No" | "Partial";
  ukAgeAssuranceNote?: string;
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
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Age-estimation checks apply to 18+ features and live streaming, not to the main feed.",
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
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Age checks apply to 18+ content and some features; account age is still self-declared at sign-up.",
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
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "Meta uses facial age estimation (Yoti) and ID checks to confirm teen accounts in the UK.",
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
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "Google applies age estimation in the UK and asks for ID or a card for age-restricted content.",
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
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "No", ukAgeAssuranceNote: "Age is self-declared; there is no UK age check.",
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
    slug: "discord", name: "Discord", category: "Messaging", minAge: "13+ (18+ content now verified)",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "UK users must pass facial age estimation or ID to view 18+ content; teen defaults apply otherwise.",
    why: "Voice and text servers, especially for gamers and fandoms.",
    risks: [
      "Public servers with adult content — UK users must now pass an age check to see 18+ material, but the check is beatable",
      "Strangers in voice channels and DM requests from server members",
      "Scam, crypto and 'free Nitro' phishing DMs, plus sextortion attempts that move to private chat",
    ],
    settings: [
      "UK: age-assurance check (face scan or ID) now gates 18+ content — check whether the account has been verified and how",
      "Safe Direct Messaging defaults to filtering for everyone; under-18 accounts get the strictest defaults automatically",
      "Set DM requests from server members to off and friend requests to 'Friends of friends' or 'No one'",
      "Link your account in Discord Family Centre to see their servers, friends and messages (not message content)",
    ],
    detail: {
      overview: "Discord is organised into 'servers' — anything from a 5-friend chat to a 200,000-member public community, with voice channels, DMs and file sharing built in. Two big changes matter for parents. First, under the UK Online Safety Act every UK account — new and existing — now gets age-appropriate default settings, including automatic filtering of sensitive content, and anything flagged 18+ (age-restricted channels, servers and explicit media) is locked until the user proves they're an adult, usually via a facial age scan or ID. Second, Discord has announced a global 'teen-by-default' model where unverified accounts worldwide get the teen experience; after a privacy backlash over its verification vendors, the global rollout was pushed back to the second half of 2026 — but the UK rules are already in force.",
      ageRationale: "Discord's own minimum is 13+. The change is on the adult side: 18+ content used to be gated by a simple self-declared birthday, and is now gated in the UK by a real age check — facial age estimation or an ID upload through a verification vendor. In practice the wall is weaker than it looks. A VPN makes the account look like it's outside the UK and removes the check entirely; UK daily VPN use roughly doubled to about 2.2 million users after the Online Safety Act age rules came in, and Ofcom's 2026 research found around a quarter of children have used a VPN to get round restrictions, while 39% of 11–17-year-olds have successfully beaten an age check — most often by simply lying about their age. The Verge even demonstrated the face scan being passed with a video-game character's face. Treat age assurance as a speed bump, not a lock, and pair it with device-level controls (Screen Time / Family Link) that block VPN apps from being installed.",
      evidence: [
        { claim: "Discord's own help centre confirms that under the UK Online Safety Act, all new and existing UK users receive updated age-appropriate default settings, and age-restricted content requires an age check.", publisher: "Discord Help Center", title: "Age Assurance for UK Users", year: "2026", url: "https://support.discord.com/hc/en-us/articles/33362401287959-Age-Assurance-for-UK-Users", type: "Platform policy" },
        { claim: "Discord explains how the age check works — facial age estimation or ID via a verification vendor — and which features are gated until it's passed.", publisher: "Discord Help Center", title: "How to Complete Age Assurance on Discord", year: "2026", url: "https://support.discord.com/hc/en-us/articles/30326565624343-How-to-Complete-Age-Assurance-on-Discord", type: "Platform policy" },
        { claim: "Discord's leadership acknowledged the backlash to its global age-verification plans and delayed the worldwide 'teen-by-default' rollout to the second half of 2026 to expand verification options.", publisher: "Discord (official blog)", title: "Getting Global Age Assurance Right: What We Got Wrong and What's Changing", year: "2026", url: "https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing", type: "Platform policy" },
        { claim: "Discord ended its partnership with verification vendor Persona after a UK age-check test triggered a public outcry over government ID collection.", publisher: "Ars Technica", title: "Fury over Discord's age checks explodes after shady Persona test in UK", year: "2026", url: "https://arstechnica.com/tech-policy/2026/02/discord-and-persona-end-partnership-after-shady-uk-age-test-sparks-outcry/", type: "Investigative journalism" },
        { claim: "Reporters defeated Discord and Reddit's UK facial age checks using a video-game character's face from Death Stranding's photo mode — no real adult needed.", publisher: "The Verge", title: "Reddit and Discord's UK age verification can be defeated by Death Stranding's photo mode", year: "2025", url: "https://www.theverge.com/report/714402/uk-age-verification-bypass-death-stranding-reddit-discord", type: "Investigative journalism" },
        { claim: "Ofcom found around a quarter of children have used a VPN to get around age restrictions, and UK daily VPN use roughly doubled to about 2.2 million users after the Online Safety Act age rules took effect.", publisher: "Ofcom", title: "Research on age assurance and circumvention", year: "2026", url: "https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-for-online-safety--what-you-need-to-know-as-a-user", type: "Regulator" },
        { claim: "NBC News investigation documented dozens of prosecutions over six years for grooming, kidnapping or sexual assault facilitated through Discord.", publisher: "NBC News (investigative)", title: "Discord struggles with child safety", year: "2023", url: "https://www.nbcnews.com/tech/social-media/discord-child-safety-grooming-extortion-rcna101620", type: "Investigative journalism" },
        { claim: "UK Safer Internet Centre highlights that Discord servers can expose children to explicit, extremist, and harmful content via communities they join voluntarily.", publisher: "UK Safer Internet Centre", title: "Parent and carer resources", year: "2024", url: "https://saferinternet.org.uk/guide-and-resource/parents-and-carers", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Ask whether their account has been through the age check — if an under-18 can see age-restricted channels, they've either verified as an adult, used a VPN, or beaten the face scan. Each answer starts a different conversation.",
        "Ask directly about VPN apps: a VPN makes the account look non-UK and switches off the age check entirely. Check the installed-apps list and use Screen Time or Family Link to block new app installs.",
        "Ask which servers they're in and who runs them — public vs friends-only matters more than the app itself.",
        "Set up Family Centre together rather than in secret — you see servers and friends, not message content, which keeps trust intact.",
      ],
      settingsHowTo: [
        { label: "Discord: Age Assurance for UK Users (official)", url: "https://support.discord.com/hc/en-us/articles/33362401287959-Age-Assurance-for-UK-Users" },
        { label: "Discord: How to complete age assurance (official)", url: "https://support.discord.com/hc/en-us/articles/30326565624343-How-to-Complete-Age-Assurance-on-Discord" },
        { label: "Discord Family Centre", url: "https://discord.com/family-center" },
        { label: "Discord safety: Parent hub", url: "https://discord.com/safety-parents" },
        { label: "Ofcom: age checks for online safety — what you need to know", url: "https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-for-online-safety--what-you-need-to-know-as-a-user" },
      ],
      videoTutorials: [
        { title: "Discord Family Centre — setup walkthrough", channel: "Discord (official)", url: "https://www.youtube.com/results?search_query=Discord+Family+Center+setup" },
        { title: "Discord UK age verification explained", channel: "BBC / tech news coverage", url: "https://www.youtube.com/results?search_query=Discord+UK+age+verification+Online+Safety+Act" },
        { title: "Discord — parents' ultimate guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Discord+parents+guide" },
      ],
      riskVideo: { title: "Florida investigates Discord app over child safety concerns", channel: "WPLG Local 10 News (ABC affiliate)", youtubeId: "nEwGEoLYiBA", note: "News report on broad child-safety concerns around Discord servers and DMs." },
    },
  },
  {
    slug: "roblox", name: "Roblox", category: "Game", minAge: "All ages (rated by experience)",
    lastCheckedUK: "September 2026", officialMinAge: "All ages (experience-based)", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "Facial age estimation or ID is required for chat, with age-grouped communication.",
    why: "Millions of user-made games and a social hangout for under-12s — now with mandatory age checks before anyone can chat.",
    risks: ["User-made games with adult themes", "Strangers bypassing age checks by playing along", "Robux scams and ‘free Robux’ links"],
    settings: ["Chat now requires a facial age check or ID", "Age-grouped chat (under-13s only with same age band)", "Parent-managed account link", "Spend controls"],
    detail: {
      overview: "Roblox is a platform of user-created ‘experiences’, not a single game — and since late 2025 it has been rebuilt around age checks. Since January 2026, no one can use text or voice chat anywhere in the world until Roblox verifies their age, using facial age estimation (a quick video selfie analysed by AI) or ID verification. Chat is then limited to age bands, so a child can only chat with users estimated to be of a similar age, and minors cannot chat freely with unknown adults. No age check, no chat.",
      ageRationale: "Roblox itself has no minimum age but applies experience age ratings (Minimal/Mild for under-9s, Moderate 13+, Restricted 17+). The new system goes further: unverified accounts get no chat at all, and parental controls for linked accounts let parents approve chat, set spending limits, and see who their child interacts with. The remaining risk is the experience catalogue itself — ratings are applied to user-made content after creation, and adult-themed experiences are still found before moderation catches them.",
      evidence: [
        { claim: "Roblox made facial age estimation or ID verification mandatory for chat globally in January 2026, the first gaming platform to do so, with chat limited to similar age groups and minors blocked from chatting with unknown adults.", publisher: "Roblox (official newsroom)", title: "A New Era of Safety: Facial Age Checks Now Required to Chat on Roblox", year: "2026", url: "https://about.roblox.com/newsroom/2026/01/roblox-age-checks-required-to-chat", type: "Platform policy" },
        { claim: "Roblox explains how age checks work — facial age estimation, ID verification and, for minors, parent consent — and what each verified age band can access.", publisher: "Roblox Support (official help centre)", title: "Understanding Age Checks on Roblox", year: "2026", url: "https://en.help.roblox.com/hc/en-us/articles/39143693116052-Understanding-Age-Checks-on-Roblox", type: "Platform policy" },
        { claim: "BBC News investigation documented sexual and gambling-style content accessible to child accounts on Roblox.", publisher: "BBC News (investigative)", title: "Roblox: The children’s game with a sex problem", year: "2024", url: "https://www.bbc.co.uk/news/technology-67772670", type: "Investigative journalism" },
        { claim: "Revealing Reality researchers found children as young as five could contact adults on Roblox, describing the risks as ‘deeply disturbing’.", publisher: "The Guardian", title: "Risks to children playing Roblox ‘deeply disturbing’, say researchers", year: "2025", url: "https://www.theguardian.com/technology/2025/apr/14/risks-children-roblox-deeply-disturbing-researchers", type: "Investigative journalism" },
      ],
      parentTalkingPoints: [
        "Age checks changed everything: ask your child whether their account is age-verified — if not, they can’t chat, which is the safest state.",
        "Do the facial age check together rather than letting them borrow an adult’s face or ID — a misclassified adult account opens chat with unknown adults.",
        "Link your own Roblox parent account so you can see their friends, sessions and spending, and approve changes.",
        "The experience catalogue is still the weak point — agree which experiences are okay, and use ‘Allowed Experiences’ for younger children.",
      ],
      settingsHowTo: [
        { label: "Roblox: Understanding Age Checks", url: "https://en.help.roblox.com/hc/en-us/articles/39143693116052-Understanding-Age-Checks-on-Roblox" },
        { label: "Roblox: Parent and caregiver guide", url: "https://en.help.roblox.com/hc/en-us/articles/203313120-Parents-Safety-and-Moderation-Guide" },
        { label: "Internet Matters: Roblox controls", url: "https://www.internetmatters.org/parental-controls/gaming-consoles/roblox-parental-controls/" },
      ],
      videoTutorials: [
        { title: "Roblox parental controls — full setup", channel: "Roblox (official)", url: "https://www.youtube.com/results?search_query=Roblox+official+parental+controls+setup" },
        { title: "Roblox age checks explained", channel: "News coverage", url: "https://www.youtube.com/results?search_query=Roblox+facial+age+estimation+chat+news" },
        { title: "Roblox parents’ guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Roblox+parents+guide" },
      ],
      riskVideo: { title: "Roblox: The playground problem", channel: "Raising Digital · Investigation", videoUrl: "/__l5e/assets-v1/7837b59a-5d12-4eae-b257-1d73a6a2ec76/roblox-risks.mp4", note: "Original 95-second explainer based on Guardian reporting on the Revealing Reality investigation (April 2025)." },
    },
  },
  {
    slug: "fortnite", name: "Fortnite", category: "Game", minAge: "12+",
    lastCheckedUK: "September 2026", officialMinAge: "13 (Epic terms; PEGI 12)", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Epic uses cabined accounts for under-13s but no UK-wide identity check.",
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
  {
    slug: "telegram", name: "Telegram", category: "Messaging", minAge: "17+ (App Store) / 13+ (Telegram terms)",
    lastCheckedUK: "September 2026", officialMinAge: "13 (17+ on the App Store)", ukAgeAssurance: "No", ukAgeAssuranceNote: "No UK age assurance; age is self-declared.",
    why: "Huge group chats and ‘channels’ broadcasting to thousands. Popular for fandoms, leaks and crypto.",
    risks: ["Public channels with extreme / sexual content", "Strangers in large groups", "Weak moderation of CSAM and scams"],
    settings: ["Phone Number: Nobody", "Who can add me to groups: My Contacts", "Disable auto-download of media", "Sensitive Content filter on"],
    detail: {
      overview: "Telegram mixes private chats, huge public groups (up to 200,000 members) and one-way ‘channels’. Most chats are NOT end-to-end encrypted by default — only ‘Secret Chats’ are.",
      ageRationale: "Apple’s App Store rates Telegram 17+ due to frequent/intense mature themes. Telegram’s own terms set 13+, but its loose moderation is why child-safety bodies flag it as higher risk.",
      evidence: [
        { claim: "Telegram’s CEO was arrested in France in 2024 over the platform’s alleged failure to act on CSAM, drug trafficking and fraud in groups and channels.", publisher: "BBC News", title: "Telegram boss Pavel Durov charged in France", year: "2024", url: "https://www.bbc.com/news/articles/c4ng9nz0g5xo", type: "Investigative journalism" },
        { claim: "Internet Watch Foundation reports Telegram is repeatedly used to share child sexual abuse material via large channels.", publisher: "Internet Watch Foundation", title: "Annual Report 2023", year: "2023", url: "https://www.iwf.org.uk/annual-report-2023/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Ask which channels they’re subscribed to — channels, not chats, are where most harmful content lives.",
        "Turn off auto-download so explicit images/videos don’t land in their gallery automatically.",
      ],
      settingsHowTo: [
        { label: "Telegram privacy & security settings", url: "https://telegram.org/faq#q-what-are-your-thoughts-on-internet-privacy" },
        { label: "Internet Matters: Telegram parents’ guide", url: "https://www.internetmatters.org/hub/news-blogs/what-is-telegram-app-what-parents-need-to-know/" },
      ],
      videoTutorials: [
        { title: "Telegram — what parents need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+Telegram+parents+guide" },
        { title: "How to lock down Telegram privacy settings", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Telegram+privacy+settings+parents" },
      ],
    },
  },
  {
    slug: "twitch", name: "Twitch", category: "Video", minAge: "13+",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Age checks apply to mature streams and some features only.",
    why: "Live game streaming with chat. Streamers become parasocial role models.",
    risks: ["Live, unmoderated chat", "Grooming via Whispers / DMs", "Exposure to adult ‘Just Chatting’ streams"],
    settings: ["Whispers: Friends only", "Block links in chat", "Hide mature streams", "Two-factor authentication"],
    detail: {
      overview: "Twitch streams live video — usually games — with a real-time chat. Streamers can also DM viewers (‘Whispers’). Content moderation happens after the fact, not before.",
      ageRationale: "Twitch terms require users to be 13+. BBC and others have documented grooming and predatory behaviour towards minors, particularly via Whispers and small-channel chats.",
      evidence: [
        { claim: "BBC investigation found predators using Twitch to target children, with the platform slow to remove offending accounts.", publisher: "BBC News (investigative)", title: "Twitch ‘failing’ to deal with child predators", year: "2022", url: "https://www.bbc.co.uk/news/technology-61628026", type: "Investigative journalism" },
        { claim: "Bloomberg investigation documented hundreds of accounts following thousands of children on Twitch.", publisher: "Bloomberg", title: "Twitch Has a Massive Child-Predator Problem", year: "2022", url: "https://www.bloomberg.com/news/features/2022-05-25/twitch-tv-has-a-child-predator-problem-amazon-knows-it", type: "Investigative journalism" },
      ],
      parentTalkingPoints: [
        "Ask who they watch — and if anyone has ever DM’d them. Whispers are where the risk concentrates.",
        "Agree they’ll never share their handle on other platforms (Discord, Snap) — that’s how groomers move them off-platform.",
      ],
      settingsHowTo: [
        { label: "Twitch safety & privacy settings", url: "https://safety.twitch.tv/s/article/Guide-Personal-Safety-Settings" },
        { label: "Internet Matters: Twitch guide", url: "https://www.internetmatters.org/hub/esafety-news/twitch-what-parents-need-to-know/" },
      ],
      videoTutorials: [
        { title: "Twitch safety settings walkthrough", channel: "Twitch (official)", url: "https://www.youtube.com/results?search_query=Twitch+safety+settings+how+to" },
        { title: "Twitch — what parents need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Twitch+parents+guide" },
      ],
    },
  },
  {
    slug: "kick", name: "Kick", category: "Video", minAge: "13+",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Limited checks on adult-labelled content; sign-up age is self-declared.",
    why: "Twitch competitor with looser rules. Popular for gambling and shock streams.",
    risks: ["Live gambling content (slots, crash games)", "Minimal moderation", "Streamers explicitly courting under-18 audiences"],
    settings: ["No mature-content filter — supervise directly", "Use device-level screen time / DNS blocks", "Disable account creation if possible"],
    detail: {
      overview: "Kick is a live-streaming platform that markets itself as more streamer-friendly than Twitch. It tolerates content (gambling, shock material) that Twitch bans, which is the core safeguarding concern.",
      ageRationale: "Kick’s terms require users to be 13+, but it has a documented track record of light moderation and prominent partnerships with crypto-casino brand Stake.com, making it inappropriate for most under-16s.",
      evidence: [
        { claim: "New York Times investigation linked Kick’s rise to Stake.com gambling streams openly viewable by minors.", publisher: "The New York Times", title: "How Stake Built a Crypto-Gambling Empire on Streaming", year: "2023", url: "https://www.nytimes.com/2023/10/07/business/stake-kick-crypto-gambling.html", type: "Investigative journalism" },
        { claim: "Australia’s eSafety Commissioner has named Kick among platforms of concern for child safety due to weak moderation.", publisher: "eSafety Commissioner (Australia)", title: "Basic Online Safety Expectations transparency reports", year: "2024", url: "https://www.esafety.gov.au/industry/basic-online-safety-expectations/transparency-reports", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "If they watch Kick for a specific streamer, check if that streamer also posts on YouTube — usually a safer alternative.",
        "Talk plainly about gambling: slot streams are paid promotion, not skill.",
      ],
      settingsHowTo: [
        { label: "Kick community guidelines", url: "https://kick.com/community-guidelines" },
        { label: "Block sites via Google Family Link / Apple Screen Time", url: "https://families.google/familylink/" },
      ],
      videoTutorials: [
        { title: "What is Kick? A parent’s explainer", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=what+is+Kick+streaming+parents+guide" },
        { title: "Blocking apps with Apple Screen Time", channel: "Apple Support", url: "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+app+how+to" },
      ],
    },
  },
  {
    slug: "yubo", name: "Yubo", category: "Social", minAge: "13+ (with separate 13–17 community)",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "Yubo runs facial age estimation on all users and separates 13–17 from adults.",
    why: "‘Live, swipe and chat with new friends.’ Often called ‘Tinder for teens’.",
    risks: ["Strangers connecting by location", "Live video with people they’ve never met", "History of grooming and sextortion cases"],
    settings: ["Disable location precision", "Age-verification ON", "Limit livestream audience", "Block & report"],
    detail: {
      overview: "Yubo is a social-discovery app where users swipe to add friends and join live video rooms. It separates users into 13–17 and 18+ pools, with age estimation, but pools have been bypassed in the past.",
      ageRationale: "Yubo is 13+. It has been linked to multiple high-profile grooming, sexual-assault and ‘swatting’ cases, leading France’s data regulator and the UK NCA to issue formal warnings.",
      evidence: [
        { claim: "BBC investigation linked Yubo to grooming, sexual assault and an extremist mass-shooting plot.", publisher: "BBC News (investigative)", title: "Yubo: The ‘Tinder for teens’ used by predators", year: "2022", url: "https://www.bbc.co.uk/news/technology-61610556", type: "Investigative journalism" },
        { claim: "French data regulator CNIL formally sanctioned Yubo over child-safety and data-protection failings.", publisher: "CNIL (France)", title: "Sanction against TWELVE APP (Yubo)", year: "2022", url: "https://www.cnil.fr/en/cookies-cnil-fines-twelve-app-yubo-eu175000", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Yubo’s whole purpose is meeting strangers. If they want to chat with school friends, suggest WhatsApp or iMessage instead.",
        "If they insist on using it, set a rule: no livestreams alone in their bedroom.",
      ],
      settingsHowTo: [
        { label: "Yubo safety centre", url: "https://safety.yubo.live/" },
        { label: "Internet Matters: Yubo guide", url: "https://www.internetmatters.org/hub/esafety-news/yubo-app-what-parents-need-to-know/" },
      ],
      videoTutorials: [
        { title: "Yubo — what parents need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+Yubo+parents+guide" },
        { title: "Common Sense Media review of Yubo", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Yubo+review" },
      ],
    },
  },
  {
    slug: "x-twitter", name: "X (formerly Twitter)", category: "Social", minAge: "13+ (18+ for sensitive media)",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "UK users must pass age assurance (account signals or ID) to see sensitive media.",
    why: "News, memes, fandoms, sports — and trending political content. UK users now face age checks before seeing sensitive media.",
    risks: ["Pornographic content still hosted on the platform — now behind an age wall a teen can try to cheat", "Targeted harassment via replies / quote-posts", "Misinformation amplified by paid blue ticks"],
    settings: ["UK age assurance required for sensitive media", "Known under-18s get protected-post defaults automatically", "Sensitive-media filter ON for under-18s", "Disable DMs from non-followers", "Mute words & accounts"],
    detail: {
      overview: "X still hosts adult content (including pornography), but the old picture — ‘adult content available by default’ — is no longer accurate for UK users. Under the Online Safety Act (and matching Irish/EU rules), X introduced age assurance in July 2025: before showing sensitive media it estimates or verifies age using signals like the email address used at sign-up, account age, and contacts — and can ask for ID-based verification. Accounts X knows belong to under-18s cannot view sensitive media at all, and known minors get more protective defaults, including protected (private) posts. The EU has also opened formal proceedings against X under the Digital Services Act over risks to minors.",
      ageRationale: "Minimum age 13 globally; 18+ for sensitive/adult media in the UK, where the Online Safety Act requires ‘robust’ age assurance rather than self-declaration. X’s 2023 policy formally permitting ‘consensually produced adult nudity and behaviour’ is still why most child-safety organisations do not recommend it for under-16s. Important caveat: the UK check is triggered by location, so a VPN that makes the phone look like it is in another country side-steps it entirely — the same loophole documented for Reddit. UK daily VPN use roughly doubled after the July 2025 rules (about 2.2 million users, up from 1.2 million), and Ofcom found around a quarter of children have used a VPN to get round restrictions while 39% of 11–17-year-olds have beaten an age check, most often by lying about their age. Treat X’s age assurance as a speed bump, not a lock: pair it with device-level controls (Screen Time / Family Link) that block VPN apps being installed.",
      evidence: [
        { claim: "X confirms it uses age assurance for UK users: sensitive media is restricted for under-18s, age is estimated from account signals (email, account age) or verified via ID, and known minors receive protected-post defaults.", publisher: "X Help Center", title: "Age assurance", year: "2025", url: "https://help.x.com/en/rules-and-policies/age-assurance", type: "Platform policy" },
        { claim: "X introduced age assurance measures to comply with Irish, UK and EU regulations; video-sharing platforms that allow pornography must have effective age assurance.", publisher: "RTÉ News", title: "X introduces age assurance measures to meet regulations", year: "2025", url: "https://www.rte.ie/news/business/2025/0728/1525685-x-introduces-age-assurance-measures-to-meet-regulations/", type: "Investigative journalism" },
        { claim: "X verifies users’ ages using signals such as their email address and contacts book as new rules come in to protect young users from harmful content.", publisher: "The Times", title: "X to block children from watching porn by checking email address", year: "2025", url: "https://www.thetimes.com/uk/technology-uk/article/x-verification-email-address-contacts-ptdfmpwpw", type: "Investigative journalism" },
        { claim: "EU Commission opened formal proceedings against X under the Digital Services Act over deceptive design and risk to minors.", publisher: "European Commission", title: "Commission opens formal proceedings against X under DSA", year: "2023", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_23_6709", type: "Regulator" },
        { claim: "Analysis showing most Online Safety Act age-verification requirements — including on platforms like X — can be circumvented with a simple VPN that changes the user’s apparent location.", publisher: "The Verge", title: "The UK’s new age-gating rules are easy to bypass", year: "2025", url: "https://www.theverge.com/analysis/713773/uk-online-safety-act-age-verification-bypass-vpn", type: "Investigative journalism" },
        { claim: "Ofcom’s statutory report on age assurance found daily UK VPN use rose to about 2.2 million from 1.2 million before the July 2025 rules, with around a quarter of children using VPNs to circumvent restrictions.", publisher: "Ofcom", title: "Report on the use of age assurance (s157, Online Safety Act 2023)", year: "2026", url: "https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-helping-make-online-experiences-safer-for-uk-children-but-job-not-done-and-tech-industry-must-act-to-strengthen-protections", type: "Regulator" },
        { claim: "UK government research on children’s circumvention behaviours online documents VPNs, false birthdates and borrowed accounts as the main ways children get past age checks.", publisher: "Department for Science, Innovation and Technology", title: "Children’s circumvention behaviours online", year: "2026", url: "https://www.gov.uk/government/publications/childrens-circumvention-behaviours-online/childrens-circumvention-behaviours-online", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "Sensitive media is no longer ‘on by default’ in the UK — X now checks age first. Ask your teen: ‘Has X ever asked you to prove your age?’ If they can still see everything, either the account is registered with a false birthdate or something is masking their location.",
        "A VPN defeats the whole thing. The UK check depends on X seeing a UK location, so an app that makes the phone look like it is in another country removes the gate. Check the phone for VPN apps, and block new app installs with Screen Time (iPhone) or Family Link (Android).",
        "If X knows the account holder is under 18, posts are protected by default — if your teen’s posts are public and they see sensitive media, the birthday on the account is worth an honest conversation.",
      ],
      settingsHowTo: [
        { label: "X Help Center: Age assurance", url: "https://help.x.com/en/rules-and-policies/age-assurance" },
        { label: "X safety and privacy settings", url: "https://help.x.com/en/safety-and-security" },
        { label: "Common Sense Media: X parent guide", url: "https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-twitter-x" },
      ],
      videoTutorials: [
        { title: "How to lock down X / Twitter for teens", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Twitter+X+parents+guide" },
        { title: "X UK age verification explained", channel: "News coverage", url: "https://www.youtube.com/results?search_query=X+twitter+UK+age+verification+Online+Safety+Act" },
        { title: "Hide sensitive content on X", channel: "X (official help)", url: "https://www.youtube.com/results?search_query=X+twitter+hide+sensitive+content+how+to" },
      ],
    },
  },
  {
    slug: "reddit", name: "Reddit", category: "Social", minAge: "13+ (18+ for mature content)",
    lastCheckedUK: "September 2026", officialMinAge: "13 (18 for mature content)", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "UK users verify via Apple age range or Persona selfie/ID for mature communities.",
    why: "Forums (‘subreddits’) for every interest — UK users now face mandatory age checks before seeing mature or restricted content.",
    risks: ["Mature/NSFW communities still exist — now behind an age wall a teen can try to cheat", "Anonymous DMs and chat requests", "Pile-ons, doxxing and volunteer-only moderation"],
    settings: ["UK age confirmation required for mature/restricted content", "Disable NSFW via mobile web or desktop (iOS app hides the toggle)", "Chat requests: Nobody / Followers only", "Mute subreddits"],
    detail: {
      overview: "Reddit is a network of user-run forums (‘subreddits’). Most communities are safe and genuinely useful, but mature and restricted ones exist. Under the UK Online Safety Act, Reddit now requires UK users to confirm their age before accessing NSFW or restricted content — you can verify via your Apple account (an age-range signal, not your full birthdate) or through Reddit’s partner Persona with a selfie or government ID. Reddit says it never sees or stores your photos; Persona deletes them within 3 days. If a UK user doesn’t verify, they get limited access and are blocked from restricted mature content. This replaced the old system where a teen could simply tick ‘I am over 18’.",
      ageRationale: "Minimum age 13 globally, 18+ for mature/NSFW content. Since July 2025 the UK Online Safety Act forces Reddit to use ‘robust’ age checks — not self-declaration — before showing restricted content to anyone. The real risk is no longer a toggle in settings; it is a teen completing Persona age verification (using a borrowed adult ID or selfie) to unlock NSFW. Reddit’s iOS app has also removed the NSFW toggle entirely — you must use a browser to change it. Important caveat: the UK check is triggered by location, so a VPN that makes the phone look like it is in another country side-steps it entirely. UK VPN use roughly doubled after the rules came in (about 2.2 million daily users, up from 1.2 million), and Ofcom’s July 2026 research found around a quarter of children have used a VPN to get round restrictions, while 39% of 11–17-year-olds have successfully beaten an age check — most often by simply lying about their age. Ministers have called the loophole ‘unacceptably slow’ to close and there is no ban on VPNs. Treat the age check as a speed bump, not a lock: pair it with device-level controls (Screen Time / Family Link) that block VPN apps being installed.",
      evidence: [
        { claim: "Reddit confirms UK users must complete age confirmation via Apple account or Persona (selfie/ID) to access restricted content under the Online Safety Act; unverified users face limited access.", publisher: "Reddit Help", title: "United Kingdom: Online Safety Act", year: "2026", url: "https://support.reddithelp.com/hc/en-us/articles/47163677520276-United-Kingdom-Online-Safety-Act", type: "Platform policy" },
        { claim: "Reddit explains why it asks for your age: account eligibility (13, or local minimum like 16 in Australia), 18+ for NSFW, and automatic teen-protective defaults for 13–18-year-olds. Verification via Apple/Google age-range signal or Persona selfie/ID; Persona deletes data within 3 days and Reddit never sees the photos.", publisher: "Reddit Help", title: "Why is Reddit asking for my age?", year: "2026", url: "https://support.reddithelp.com/hc/en-us/articles/36429514849428-Why-is-Reddit-asking-for-my-age", type: "Platform policy" },
        { claim: "UK Online Safety Act restricted-content categories for under-18s include sexually explicit content, self-harm/suicide/eating-disorder content, hate, bullying, graphic violence, dangerous challenges, substance-ingestion content, body-shaming, and content romanticising depression or despair.", publisher: "Reddit Help", title: "UK Online Safety Act: Information for UK users", year: "2025", url: "https://support.reddithelp.com/hc/en-us/articles/35409604240020-UK-Online-Safety-Act-Information-for-UK-users", type: "Platform policy" },
        { claim: "Reddit rolled out Persona age verification (selfie or government ID) for UK users in July 2025, ahead of Ofcom’s child-protection deadline, blocking unverified users from restricted mature content.", publisher: "BBC News", title: "Reddit starts verifying ages of users in the UK", year: "2025", url: "https://www.bbc.com/news/articles/cj4ep1znk4zo", type: "Investigative journalism" },
        { claim: "Reddit uses Persona’s selfie-and-document age verification to comply with the UK Online Safety Act; Reddit stores only birthdates and verification status, not the photos.", publisher: "The Verge", title: "Reddit is rolling out age verification in the UK", year: "2025", url: "https://www.theverge.com/news/707125/reddit-age-verification-uk-online-safety", type: "Investigative journalism" },
        { claim: "Ofcom’s Children’s Online User Experiences research highlights Reddit among platforms where children encounter harmful content despite age limits.", publisher: "Ofcom", title: "Children’s online user experiences", year: "2024", url: "https://www.ofcom.org.uk/online-safety/protecting-children/childrens-online-user-experiences/", type: "Regulator" },
        { claim: "Ofcom’s statutory report on age assurance found daily UK VPN use rose to about 2.2 million from 1.2 million before the July 2025 rules, with around a quarter of children using VPNs to circumvent restrictions.", publisher: "Ofcom", title: "Report on the use of age assurance (s157, Online Safety Act 2023)", year: "2026", url: "https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-helping-make-online-experiences-safer-for-uk-children-but-job-not-done-and-tech-industry-must-act-to-strengthen-protections", type: "Regulator" },
        { claim: "UK government research on children’s circumvention behaviours online documents VPNs, false birthdates and borrowed accounts as the main ways children get past age checks.", publisher: "Department for Science, Innovation and Technology", title: "Children’s circumvention behaviours online", year: "2026", url: "https://www.gov.uk/government/publications/childrens-circumvention-behaviours-online/childrens-circumvention-behaviours-online", type: "Regulator" },
        { claim: "Analysis showing most Online Safety Act age-verification requirements — including Reddit’s — can be circumvented with a simple VPN that changes the user’s apparent location.", publisher: "The Verge", title: "The UK’s new age-gating rules are easy to bypass", year: "2025", url: "https://www.theverge.com/analysis/713773/uk-online-safety-act-age-verification-bypass-vpn", type: "Investigative journalism" },
      ],
      parentTalkingPoints: [
        "The old ‘tick a box to say you’re 18’ gate is gone in the UK — Reddit now asks for Apple account age or a Persona selfie/ID. Ask your teen straight out: ‘Have you been asked to verify?’ If they have NSFW access, they completed a real age check, possibly with borrowed details.",
        "A VPN defeats the whole thing. The UK check depends on Reddit seeing a UK location, so an app that makes the phone look like it is in another country removes the gate. Check the phone for VPN apps, and block new app installs with Screen Time (iPhone) or Family Link (Android).",
        "On iPhone the NSFW toggle has been removed from the Reddit app itself — to change it you must log in via a browser (mobile web or desktop). Check there, not in the app settings.",
        "Reddit enables safe-by-default protections for 13–18-year-olds automatically. If your teen’s account is somehow set up as an adult, those protections are off — that’s the signal to check.",
        "Show them how to mute a subreddit so they don’t have to argue about every community; focus the conversation on the NSFW age-check, not on individual forums.",
      ],
      settingsHowTo: [
        { label: "Reddit — United Kingdom: Online Safety Act (age confirmation)", url: "https://support.reddithelp.com/hc/en-us/articles/47163677520276-United-Kingdom-Online-Safety-Act" },
        { label: "Reddit — Why is Reddit asking for my age?", url: "https://support.reddithelp.com/hc/en-us/articles/36429514849428-Why-is-Reddit-asking-for-my-age" },
        { label: "Reddit — UK Online Safety Act: Information for UK users", url: "https://support.reddithelp.com/hc/en-us/articles/35409604240020-UK-Online-Safety-Act-Information-for-UK-users" },
        { label: "Reddit safety and privacy settings", url: "https://support.reddithelp.com/hc/en-us/articles/360043068032" },
        { label: "Common Sense Media: Reddit guide", url: "https://www.commonsensemedia.org/website-reviews/reddit" },
      ],
      videoTutorials: [
        { title: "Reddit for parents — what you need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Reddit+parents+guide" },
        { title: "Reddit UK age verification explained", channel: "BBC News", url: "https://www.youtube.com/results?search_query=Reddit+UK+age+verification+Online+Safety+Act" },
        { title: "How to disable NSFW and mute subreddits", channel: "Reddit help", url: "https://www.youtube.com/results?search_query=Reddit+disable+NSFW+block+subreddit" },
      ],
    },
  },
  {
    slug: "bereal", name: "BeReal", category: "Social", minAge: "13+",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "No", ukAgeAssuranceNote: "Age is self-declared at sign-up.",
    why: "Once-a-day photo prompt designed to feel ‘authentic’. Friend-of-friend feed.",
    risks: ["Location attached to posts by default", "‘RealMojis’ from friends-of-friends", "Pressure to post in unsafe situations (class, driving)"],
    settings: ["Discovery: Friends only", "Disable location on posts", "Lock account for over-18 visibility"],
    detail: {
      overview: "BeReal sends a daily notification — users have two minutes to post a front+back camera photo. Posts can include precise location and are visible to friends and, optionally, the global Discovery feed.",
      ageRationale: "Minimum age 13. The location-by-default design and the social pressure of the 2-minute window are the main parent concerns flagged by Internet Matters and Common Sense Media.",
      evidence: [
        { claim: "Common Sense Media review warns that BeReal’s default settings expose location and that the ‘authentic’ framing encourages over-sharing.", publisher: "Common Sense Media", title: "BeReal parents’ guide", year: "2023", url: "https://www.commonsensemedia.org/app-reviews/bereal", type: "Charity / NGO" },
        { claim: "Internet Matters flags BeReal’s pressure-prompt design as a wellbeing risk for anxious teens.", publisher: "Internet Matters", title: "BeReal — what parents need to know", year: "2023", url: "https://www.internetmatters.org/hub/esafety-news/bereal-app-what-parents-need-to-know/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Agree they won’t post in class, on public transport or in the car — the 2-minute timer isn’t a real deadline.",
        "Switch off location on the camera screen before they post.",
      ],
      settingsHowTo: [
        { label: "BeReal safety and privacy", url: "https://help.bereal.com/hc/en-us/categories/4406950928657-Safety-Privacy" },
        { label: "Internet Matters: BeReal guide", url: "https://www.internetmatters.org/hub/esafety-news/bereal-app-what-parents-need-to-know/" },
      ],
      videoTutorials: [
        { title: "BeReal — what parents need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+BeReal+parents+guide" },
        { title: "Disable location on BeReal", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=BeReal+location+settings+how+to" },
      ],
    },
  },
  {
    slug: "ngl-sendit", name: "NGL / Sendit / Yolo", category: "Social", minAge: "17+ (App Store)",
    lastCheckedUK: "September 2026", officialMinAge: "13 (17+ on the App Store)", ukAgeAssurance: "No", ukAgeAssuranceNote: "No meaningful age check.",
    why: "Anonymous Q&A apps that bolt on to Instagram / Snap stories.",
    risks: ["Anonymous bullying and threats", "Fake ‘replies’ generated by the app to drive engagement", "Sextortion via anonymous messages"],
    settings: ["Don’t install — there are no safe settings; remove from device"],
    detail: {
      overview: "NGL (‘Not Gonna Lie’) and similar apps let users receive anonymous messages via a link shared on Instagram or Snap. They’ve been repeatedly investigated for staging fake replies and for serving as a vector for cyberbullying and sextortion.",
      ageRationale: "App stores rate NGL 17+. The FTC has explicitly named NGL as deceptive and harmful to teens, and Yolo / Sendit have been removed from Snap Kit after sextortion incidents.",
      evidence: [
        { claim: "FTC banned NGL from offering its service to under-18s and fined it $5m over deceptive AI-generated messages and aggressive marketing to teens.", publisher: "Federal Trade Commission (US)", title: "FTC and Los Angeles DA to ban anonymous messaging app NGL from offering its service to minors", year: "2024", url: "https://www.ftc.gov/news-events/news/press-releases/2024/07/ftc-los-angeles-da-ban-anonymous-messaging-app-ngl-offering-its-service-minors-over-charges-it", type: "Regulator" },
        { claim: "Snap removed Yolo and LMK from its platform after a lawsuit linked them to the suicide of a teen targeted with anonymous bullying.", publisher: "NPR", title: "Snapchat removes anonymous messaging apps after teen’s death", year: "2021", url: "https://www.npr.org/2021/05/10/995453530/snapchat-removes-anonymous-messaging-apps-yolo-and-lmk-after-teens-death", type: "Investigative journalism" },
      ],
      parentTalkingPoints: [
        "If you find NGL/Sendit/Yolo on their phone, delete it — there’s no ‘safe configuration’.",
        "Talk about the FTC finding: many ‘anonymous messages’ they receive are written by the app itself to make them want to pay for hints.",
      ],
      settingsHowTo: [
        { label: "FTC consumer advice: anonymous messaging apps", url: "https://consumer.ftc.gov/consumer-alerts/2024/07/parents-anonymous-messaging-apps-are-bad-news-teens" },
        { label: "How to uninstall apps & block re-install (Apple)", url: "https://support.apple.com/en-gb/HT201304" },
      ],
      videoTutorials: [
        { title: "FTC warns parents about NGL", channel: "FTC (official)", url: "https://www.youtube.com/results?search_query=FTC+NGL+anonymous+messaging+app+teens" },
        { title: "Anonymous apps and teen safety", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+anonymous+messaging+apps" },
      ],
    },
  },
  {
    slug: "omegle-style", name: "Random video chat (Monkey, Azar, ChatHub)", category: "Social", minAge: "18+",
    lastCheckedUK: "September 2026", officialMinAge: "18", ukAgeAssurance: "No", ukAgeAssuranceNote: "Adult-only claims are self-declared; children get in easily.",
    why: "Random video chat with strangers — the niche Omegle filled before it shut down in 2023.",
    risks: ["Exposure to live nudity from strangers", "Grooming and recorded sextortion", "Almost no age verification"],
    settings: ["Don’t install — block via device-level parental controls"],
    detail: {
      overview: "Apps in this category pair the user with a random stranger via video. After Omegle shut down in 2023 following a landmark child-trafficking lawsuit, copycat apps like Monkey, Azar and ChatHub absorbed the same audience — and the same risks.",
      ageRationale: "These services are 18+ in their terms but make almost no attempt to verify age. They are repeatedly named in NCA, NSPCC and FBI warnings about live grooming and sextortion of minors.",
      evidence: [
        { claim: "Omegle shut down in 2023 after settling a lawsuit brought by a girl groomed on the site aged 11 — the judge ruled the platform’s design itself was the harm.", publisher: "BBC News", title: "Omegle: Video chat site shuts down after abuse claims", year: "2023", url: "https://www.bbc.co.uk/news/technology-67364634", type: "Investigative journalism" },
        { claim: "NCA / CEOP repeatedly warn that random video-chat apps are a primary vector for live-streamed child sexual abuse and sextortion.", publisher: "CEOP (National Crime Agency, UK)", title: "Sextortion: alert for parents and carers", year: "2024", url: "https://www.ceopeducation.co.uk/parents/articles/sextortion-an-alert-for-parents-and-carers/", type: "Regulator" },
      ],
      parentTalkingPoints: [
        "These apps exist for one thing: randomly seeing strangers on camera. There is no child-safe version.",
        "Use Screen Time / Family Link to block category ‘Social Networking’ or specific apps by bundle ID.",
      ],
      settingsHowTo: [
        { label: "Apple Screen Time — block apps", url: "https://support.apple.com/en-gb/HT201304" },
        { label: "Google Family Link — block apps", url: "https://families.google/familylink/" },
      ],
      videoTutorials: [
        { title: "Block apps with Apple Screen Time", channel: "Apple Support", url: "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+apps+how+to" },
        { title: "Random video chat apps — what parents need to know", channel: "Internet Matters", url: "https://www.youtube.com/results?search_query=Internet+Matters+random+video+chat+apps" },
      ],
    },
  },
  {
    slug: "minecraft", name: "Minecraft (online / servers)", category: "Game", minAge: "7+ (PEGI) — online 13+ recommended",
    lastCheckedUK: "September 2026", officialMinAge: "13 for online play (PEGI 7)", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Microsoft child accounts add controls, but no UK identity check.",
    why: "Sandbox building game. Solo play is fine; third-party servers are where risk lives.",
    risks: ["Open voice chat on third-party servers", "Grooming on unofficial servers", "Skins / mods downloaded from outside stores"],
    settings: ["Microsoft Family — friends-only multiplayer", "Disable chat on servers", "Whitelist allowed servers only"],
    detail: {
      overview: "Minecraft itself is appropriate for primary-age kids. The risk is multiplayer: third-party ‘servers’ run by anyone, often with open chat and adult moderators, and free downloadable mods that bypass official stores.",
      ageRationale: "PEGI rates Minecraft 7+. Mojang/Microsoft recommend 13+ for online play because chat moderation depends on each server’s owner, not on Mojang.",
      evidence: [
        { claim: "UK NCA / CEOP have repeatedly warned that grooming occurs on third-party Minecraft servers via voice and text chat.", publisher: "CEOP Education", title: "Minecraft: advice for parents and carers", year: "2023", url: "https://www.ceopeducation.co.uk/parents/articles/minecraft-what-parents-need-to-know/", type: "Regulator" },
        { claim: "BBC investigation found extremist and grooming content on private Minecraft servers used by UK children.", publisher: "BBC News", title: "Minecraft used by predators to target children", year: "2023", url: "https://www.bbc.co.uk/news/technology-65614257", type: "Investigative journalism" },
      ],
      parentTalkingPoints: [
        "Single-player and ‘realms’ with school friends are very different from public servers. Ask which one they play.",
        "If they want a public server, look it up together — most legit ones have a clear age policy and Discord rules.",
      ],
      settingsHowTo: [
        { label: "Microsoft Family Safety for Minecraft", url: "https://www.minecraft.net/en-us/article/minecraft-and-microsoft-family" },
        { label: "Internet Matters: Minecraft guide", url: "https://www.internetmatters.org/hub/guidance/minecraft-a-parents-guide/" },
      ],
      videoTutorials: [
        { title: "Minecraft parental controls — full walkthrough", channel: "Microsoft (official)", url: "https://www.youtube.com/results?search_query=Microsoft+Family+Minecraft+parental+controls" },
        { title: "Minecraft for parents — what you need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Minecraft+parents+guide" },
      ],
    },
  },
  {
    slug: "vrchat", name: "VRChat", category: "Game", minAge: "13+ (often played by under-13s)",
    lastCheckedUK: "September 2026", officialMinAge: "13", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Age verification is optional and unlocks extra features rather than gating entry.",
    why: "Social VR worlds in headsets like Meta Quest. Voice-only, full-body avatars, no moderation in many rooms.",
    risks: ["Adult-themed worlds visible to children", "Sexual harassment and ‘virtual groping’", "Voice chat with anyone in the room"],
    settings: ["Trust system: Friends+ only", "Disable open voice", "Use Meta Quest parental supervision"],
    detail: {
      overview: "VRChat lets users move between user-created 3D ‘worlds’ as customised avatars, with live voice chat. Many worlds are 18+ themed but discoverable by anyone with an account.",
      ageRationale: "VRChat’s terms are 13+ but child-safety bodies — including the BBC, NSPCC and Center for Countering Digital Hate — have documented children encountering sexual content and harassment within minutes.",
      evidence: [
        { claim: "BBC Panorama reporter, posing as a 13-year-old, encountered avatars simulating sex, racist abuse and a grooming attempt within VRChat.", publisher: "BBC Panorama", title: "Children in the metaverse — investigation", year: "2022", url: "https://www.bbc.co.uk/news/technology-60415317", type: "Investigative journalism" },
        { claim: "Center for Countering Digital Hate found incidents of abuse including harassment of minors every 7 minutes in VRChat ‘Metaverse’ worlds.", publisher: "Center for Countering Digital Hate", title: "Facebook’s Metaverse", year: "2021", url: "https://counterhate.com/research/facebooks-metaverse/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "VR feels different to a screen — harassment can be genuinely distressing. Agree they’ll take the headset off and tell you if anything feels off.",
        "Use Meta Quest’s parental supervision to set VRChat to age-appropriate worlds only.",
      ],
      settingsHowTo: [
        { label: "Meta Quest parental supervision", url: "https://www.meta.com/help/quest/articles/accounts/account-settings-and-management/parent-account/" },
        { label: "VRChat safety & trust system", url: "https://hello.vrchat.com/blog/vrchat-safety-and-trust-system" },
      ],
      videoTutorials: [
        { title: "VRChat — what parents need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+VRChat+parents+guide" },
        { title: "Meta Quest parental controls walkthrough", channel: "Meta (official)", url: "https://www.youtube.com/results?search_query=Meta+Quest+parental+controls+how+to" },
      ],
    },
  },
  {
    slug: "gta-online", name: "GTA V / GTA Online", category: "Game", minAge: "18+ (PEGI)",
    lastCheckedUK: "September 2026", officialMinAge: "18 (PEGI)", ukAgeAssurance: "No", ukAgeAssuranceNote: "Store-level age gates only; no UK age assurance in game.",
    why: "Open-world crime game. Hugely popular with under-18s despite the rating.",
    risks: ["Graphic violence, sexual content, drugs as core gameplay", "Open voice chat with strangers in lobbies", "Real-money microtransactions (Shark Cards)"],
    settings: ["Disable voice chat", "Solo / invite-only sessions", "Console-level spend limits"],
    detail: {
      overview: "Grand Theft Auto V’s online mode mixes story missions with persistent lobbies of up to 30 strangers. Sexual content, torture and drugs are part of the rated content — this is a genuine adult game.",
      ageRationale: "PEGI 18 and ESRB Mature. The rating is for explicit sex, sustained violence and drug use, not just ‘bad language’ — it is not a borderline call.",
      evidence: [
        { claim: "PEGI rates GTA V 18 for explicit sexual content, drug use and violence — the highest age rating it issues.", publisher: "PEGI (Pan European Game Information)", title: "Grand Theft Auto V rating summary", year: "2024", url: "https://pegi.info/search-pegi?q=Grand+Theft+Auto+V", type: "Regulator" },
        { claim: "Common Sense Media review states GTA V is ‘not for kids’ and details extensive sexual, violent and drug content.", publisher: "Common Sense Media", title: "Grand Theft Auto V — parents’ review", year: "2024", url: "https://www.commonsensemedia.org/game-reviews/grand-theft-auto-v", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "The ‘all my friends play it’ argument is real, but so is the 18 rating. Try a co-op alternative (Fortnite Zero Build, Sea of Thieves) for younger teens.",
        "If they do play, set the console to invite-only sessions and disable voice chat with strangers.",
      ],
      settingsHowTo: [
        { label: "PlayStation parental controls", url: "https://www.playstation.com/en-gb/support/account/ps5-parental-controls-spending-limits/" },
        { label: "Xbox Family Settings app", url: "https://www.xbox.com/en-GB/apps/family-settings-app" },
      ],
      videoTutorials: [
        { title: "PlayStation parental controls — full guide", channel: "PlayStation (official)", url: "https://www.youtube.com/results?search_query=PlayStation+parental+controls+how+to" },
        { title: "Xbox Family Settings app walkthrough", channel: "Xbox (official)", url: "https://www.youtube.com/results?search_query=Xbox+Family+Settings+app+how+to" },
      ],
    },
  },
  {
    slug: "character-ai", name: "Character.AI", category: "Social", minAge: "13+ (16+ in Europe) — no chat for under-18s",
    lastCheckedUK: "September 2026", officialMinAge: "13 (16 in Europe)", ukAgeAssurance: "Yes", ukAgeAssuranceNote: "Mandatory age assurance; under-18s lose open-ended chat and get Reading Mode.",
    why: "AI ‘characters’ you can write stories and roleplay with — from a tutor to a fictional partner.",
    risks: ["Teens lying about their age to get adult chat access", "Parasocial dependence on an AI ‘friend’", "Self-harm and sexual content documented in US lawsuits about the old teen experience"],
    settings: ["Expect an age check — a selfie estimate or ID may be required", "Turn on Parental Insights so you get a weekly activity email", "Block the app entirely with Screen Time or Family Link if you'd rather they didn't use it"],
    detail: {
      overview: "Character.AI is a roleplay and story-writing platform built around user-made AI characters. Since late 2025 it no longer lets under-18s have open-ended conversations at all: anyone verified as under 18 gets 'Reading Mode', where they can browse and read characters and stories but cannot chat. Every user now has to pass an age check. The change followed US lawsuits alleging the earlier teen experience contributed to a 14-year-old's suicide and exposed younger children to sexual and self-harm content.",
      ageRationale: "Character.AI's own rules require users to be at least 13, and at least 16 in Europe. On top of that, from November 2025 the company removed open-ended chat for anyone verified as under 18 and moved them to Reading Mode, so in practice the platform's conversational product is 18+. Age assurance is mandatory for everyone; if the automatic estimate is unsure, the account is asked for ID. The practical risk for parents is no longer 'is the teen model safe' — it is whether a teen has simply entered a false birthday or passed themselves off as an adult.",
      evidence: [
        { claim: "Character.AI announced it would remove open-ended chat for under-18 users and roll out age assurance for all accounts.", publisher: "Character.AI", title: "Taking Bold Steps to Keep Teen Users Safe on Character.AI", year: "2025", url: "https://blog.character.ai/u18-chat-announcement/", type: "Platform policy" },
        { claim: "Under-18 verified users are placed in ‘Reading Mode’, where they can browse characters and content but chat features are unavailable.", publisher: "Character.AI Help Center", title: "What is Reading Mode?", year: "2025", url: "https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode", type: "Platform policy" },
        { claim: "Account holders must be at least 13 years old, and at least 16 years old in Europe.", publisher: "Character.AI Help Center", title: "Safety Center", year: "2025", url: "https://support.character.ai/hc/en-us/articles/21704914723995-Safety-Center", type: "Platform policy" },
        { claim: "All users must complete an age assurance check, which determines whether they get the adult or the under-18 experience.", publisher: "Character.AI Help Center", title: "What is Age Assurance?", year: "2025", url: "https://support.character.ai/hc/en-us/articles/53182286684059-What-is-Age-Assurance", type: "Platform policy" },
        { claim: "US lawsuit alleges Character.AI chatbots encouraged a 14-year-old’s suicide and that the platform’s design was unreasonably dangerous to minors.", publisher: "The New York Times", title: "Can A.I. Be Blamed for a Teen’s Suicide?", year: "2024", url: "https://www.nytimes.com/2024/10/23/technology/characterai-lawsuit-teen-suicide.html", type: "Investigative journalism" },
        { claim: "A second lawsuit alleged the platform exposed a 9-year-old to ‘hypersexualised content’ and suggested self-harm to a 17-year-old.", publisher: "The Washington Post", title: "Character.AI sued over content shown to minors", year: "2024", url: "https://www.washingtonpost.com/technology/2024/12/10/character-ai-lawsuit-children-harm/", type: "Investigative journalism" },
        { claim: "Common Sense Media rates AI companion apps including Character.AI as ‘unacceptable risk’ for under-18s.", publisher: "Common Sense Media", title: "AI Risk Assessment: Social AI Companions", year: "2025", url: "https://www.commonsensemedia.org/ai-ratings/social-ai-companions", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "If your teen still has full chat on Character.AI, their account is almost certainly registered as an adult. That is the conversation to have — not the app itself.",
        "Ask what they were getting out of it. Company, a listening ear, help writing a story? Then find a real-world version of that.",
        "Be clear the AI isn't a friend and isn't qualified to handle low moods. Agree together on a real person they'll go to instead.",
        "Losing chat access felt like a real loss to many teens. Acknowledge that rather than treating it as a win.",
      ],
      settingsHowTo: [
        { label: "Character.AI: Age Assurance help centre", url: "https://support.character.ai/hc/en-us/categories/50705410179995-Age-Assurance" },
        { label: "Character.AI: What is Reading Mode?", url: "https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode" },
        { label: "Character.AI: Safety Center (age rules, Parental Insights)", url: "https://support.character.ai/hc/en-us/articles/21704914723995-Safety-Center" },
        { label: "Common Sense Media: AI companion risk assessment", url: "https://www.commonsensemedia.org/ai-ratings/social-ai-companions" },
      ],
      videoTutorials: [
        { title: "AI companions — what every parent needs to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+AI+companion+apps+parents" },
        { title: "Block apps with Screen Time / Family Link", channel: "Apple / Google", url: "https://www.youtube.com/results?search_query=block+app+Screen+Time+Family+Link" },
      ],
    },
  },

  {
    slug: "replika", name: "Replika", category: "Social", minAge: "17+ (App Store) / 18+ (terms)",
    lastCheckedUK: "September 2026", officialMinAge: "18", ukAgeAssurance: "Partial", ukAgeAssuranceNote: "Adult-only terms with app-store gates and some age checks, easily bypassed.",
    why: "‘AI friend / partner’ chatbot with paid romantic and ‘adult’ modes.",
    risks: ["Sexual roleplay even on free tier", "Emotional dependence and isolation", "Designed to drive paid upgrades"],
    settings: ["Not appropriate for under-18s — block / uninstall"],
    detail: {
      overview: "Replika is marketed as an AI companion. Italy’s data regulator temporarily banned it in 2023 after finding it could expose minors to sexually explicit conversations, and design choices push users towards an emotionally intense, paid relationship.",
      ageRationale: "Replika’s own terms set 18+; the App Store rates it 17+. Italy’s Garante banned it in 2023 specifically because it failed to keep minors out and exposed them to sexual content.",
      evidence: [
        { claim: "Italy’s Garante (data regulator) banned Replika over risks to minors and emotionally vulnerable users.", publisher: "Garante per la Protezione dei Dati Personali (Italy)", title: "Replika: stop al trattamento dei dati degli utenti italiani", year: "2023", url: "https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9852506", type: "Regulator" },
        { claim: "Common Sense Media risk assessment rates Replika as ‘unacceptable risk’ for under-18s.", publisher: "Common Sense Media", title: "AI Risk Assessment: Social AI Companions", year: "2025", url: "https://www.commonsensemedia.org/ai-ratings/social-ai-companions", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Replika is built for paying adults who want a romantic AI partner. It is not a teen wellbeing app.",
        "If you find it on their device, uninstall and talk about who they go to when they feel lonely.",
      ],
      settingsHowTo: [
        { label: "Apple Screen Time — block apps", url: "https://support.apple.com/en-gb/HT201304" },
        { label: "Google Family Link — block apps", url: "https://families.google/familylink/" },
      ],
      videoTutorials: [
        { title: "AI companion apps — parents’ guide", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+AI+companion+apps+parents" },
        { title: "Block apps with Apple Screen Time", channel: "Apple Support", url: "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+apps+how+to" },
      ],
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

export type ChecklistSection = {
  title: string;
  intro?: string;
  steps: string[];
  visual?: ChecklistVisual;
};

export type ChecklistVisual = {
  youtubeId?: string;
  startSeconds?: number;
  title: string;
  source: string;
  sourceUrl: string;
  kind: "Official video" | "Official illustrated guide";
  description: string;
};

export type ChecklistTutorial = {
  title: string;
  source: string;
  type: "Video" | "Official guide" | "Article";
  url: string;
  note?: string;
};

export type ChecklistCapability = {
  label: string;
  detail: string;
};

export type ChecklistHeroVideo = {
  src?: string;
  youtubeId?: string;
  title?: string;
  poster?: string;
  caption?: string;
};

export type Checklist = {
  slug: string;
  title: string;
  device: string;
  summary: string;
  steps: string[];
  overview?: string;
  heroVideo?: ChecklistHeroVideo;
  sections?: ChecklistSection[];
  capabilities?: ChecklistCapability[];
  tutorials?: ChecklistTutorial[];
  emergency?: string;
  notes?: string[];
};


export const CHECKLISTS: Checklist[] = [
  {
    slug: "android-first-setup",
    title: "Android phone for a child — full setup with Google Family Link",
    device: "Android",
    summary:
      "Create a supervised child Google account, install Family Link, and lock down screen time, app installs and content — step by step.",
    steps: [
      "Create a child Google account (under 13 / local age of digital consent)",
      "Install Family Link on the parent phone and on the child phone",
      "Link the two accounts and finish on-device setup",
      "Set daily screen time, bedtime and app-specific limits",
      "Require parent approval for every Play Store install",
      "Turn on SafeSearch, Chrome filters and YouTube supervision",
      "Confirm the child can still make emergency calls when locked",
    ],
    overview:
      "Family Link is Google's official parental-control app. It works with any child Google account where the child is under your country's digital-consent age (13 in the US, 13–16 in the EU, 13 in the UK). The setup below takes about 20 minutes and only needs to be done once.",
    heroVideo: {
      youtubeId: "BYRQvANa7OE",
      title: "How to set up Google Family Link — Internet Matters",
      caption: "Short walkthrough from UK online-safety non-profit Internet Matters (Feb 2026). Then follow the detailed steps below.",
    },
    sections: [
      {
        title: "1 · Before you start",
        visual: {
          youtubeId: "d2zPq1lfqQs",
          title: "Family Link overview",
          source: "Google",
          sourceUrl: "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          kind: "Official video",
          description: "Google’s official introduction to Family Link and its parent controls.",
        },
        intro: "Have both phones unlocked and on Wi-Fi. You'll need the child's date of birth and your own Google password.",
        steps: [
          "Update both phones to the latest Android version (Settings → System → System update).",
          "On your phone, install 'Google Family Link' from the Play Store.",
          "You do NOT have to factory-reset to add supervision. On a phone already in use you can simply add the child's account: Settings → Google → Parental controls → Get started, or Settings → Accounts → Add account → Google.",
          "A reset is only worth doing in two cases: the phone previously belonged to someone else, or the child already has an unsupervised adult Google account signed in as the device owner that cannot be removed. Otherwise skip it — a reset wipes photos and messages for no safety gain.",
          "If you do reset (Settings → System → Reset options → Erase all data), back up photos first and have the existing Google password to hand — factory reset protection will ask for it on the next boot.",
        ],
      },
      {
        title: "2 · Create the child's Google account",
        visual: {
          youtubeId: "0dy1St39xeo",
          title: "Set up a supervised child account",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo",
          kind: "Official video",
          description: "The official account setup flow for a parent and child.",
        },
        intro: "Do this from your phone, inside Family Link — not from the child's device.",
        steps: [
          "Open Family Link → tap the '+' icon → 'Add a child' → 'Create an account for your child'.",
          "Enter the child's real first name, birthday and a new Gmail address (e.g. firstname.lastname.kid@gmail.com).",
          "Choose a strong password that YOU keep — the child does not need it for daily use.",
          "Read and accept the Parental Consent screen, then verify you are an adult. In the UK this is usually a small temporary card authorisation (around £0.30) that is refunded or simply never taken — the exact amount and method vary, and Google may instead accept an existing valid payment method already on your account. Do not expect a fixed figure: follow whatever the screen asks for.",
          "If the card check fails, add or update a payment method at pay.google.com first, then restart the consent step. A card with no funds or a prepaid card is the most common reason this stalls.",
        ],
      },
      {
        title: "3 · Set up the child's phone",
        visual: {
          youtubeId: "d2zPq1lfqQs",
          startSeconds: 18,
          title: "Connect the child's device",
          source: "Google",
          sourceUrl: "https://www.youtube.com/watch?v=d2zPq1lfqQs&t=18s",
          kind: "Official video",
          description: "Google’s Family Link device-supervision overview.",
        },
        intro: "Now move to the child's device.",
        steps: [
          "On the welcome screen, choose 'Set up for a child'. If you missed it, do Settings → Accounts → Add account → Google → and sign in with the new child account.",
          "Sign in with the child's new Gmail and password.",
          "When prompted, scan the QR code shown in Family Link on your phone to link the two devices.",
          "Accept the permissions Family Link needs (location, app usage, install approvals).",
          "Choose which existing apps to allow — block anything they shouldn't have right now; you can always allow it later.",
        ],
      },
      {
        title: "4 · Screen time, bedtime & downtime",
        visual: {
          youtubeId: "d2zPq1lfqQs",
          startSeconds: 31,
          title: "Set time and app limits",
          source: "Google",
          sourceUrl: "https://www.youtube.com/watch?v=d2zPq1lfqQs&t=31s",
          kind: "Official video",
          description: "Family Link’s time controls shown by Google.",
        },
        intro: "Open Family Link on your phone → tap the child → 'Controls' → 'Screen time'.",
        steps: [
          "Set a daily limit per day of the week (e.g. 1h on school days, 2h at weekends).",
          "Set 'Bedtime' — the phone locks for calls only between those hours.",
          "Set 'App limits' for specific apps (e.g. TikTok 30 min/day, YouTube 45 min/day).",
          "Turn on 'Always allowed' for apps the child needs regardless of limits: Phone, Messages, Maps, your family chat app.",
        ],
      },
      {
        title: "5 · App installs & purchases",
        visual: {
          youtubeId: "d2zPq1lfqQs",
          startSeconds: 47,
          title: "Manage apps with Family Link",
          source: "Google",
          sourceUrl: "https://www.youtube.com/watch?v=d2zPq1lfqQs&t=47s",
          kind: "Official video",
          description: "Google’s view of app activity and app-level controls.",
        },
        steps: [
          "In Family Link → Controls → 'Google Play' → turn on 'Require approval for: All content'.",
          "Set content maturity limits (Apps & games: PEGI 7 / ESRB Everyone for young kids; raise as they grow).",
          "Disable in-app purchases: 'Purchase approvals' → 'All content'.",
          "When the child taps 'Install' in the Play Store, you'll get a push notification to approve or deny from your phone.",
        ],
      },
      {
        title: "6 · Web, search & YouTube",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 12,
          title: "Choose a supervised YouTube experience",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=12s",
          kind: "Official video",
          description: "YouTube’s official supervised-account demonstration.",
        },
        steps: [
          "Controls → 'Google Search' → turn on SafeSearch (filters explicit results).",
          "Controls → 'Chrome' → choose 'Try to block explicit sites' and add specific sites you want blocked or allowed.",
          "For YouTube under 13: use the YouTube Kids app instead, and block the main YouTube app.",
          "For YouTube 13+: enable 'Supervised experience' in YouTube settings and pick a content setting (Explore / Explore More / Most of YouTube).",
        ],
      },
      {
        title: "7 · Location, find-my-phone & data",
        visual: {
          youtubeId: "d2zPq1lfqQs",
          startSeconds: 57,
          title: "Family Link location tools",
          source: "Google",
          sourceUrl: "https://www.youtube.com/watch?v=d2zPq1lfqQs&t=57s",
          kind: "Official video",
          description: "Google’s overview of Family Link location controls.",
        },
        steps: [
          "Controls → 'Location' → turn on 'See your child's location'. You'll see the child phone's live location in Family Link.",
          "Turn on 'Find My Device' (Settings → Security on the child phone) so a lost phone can be located and remotely locked.",
          "Review which apps can access location (Family Link → 'App activity') and switch unnecessary ones to 'Don't allow'.",
        ],
      },
    ],
    capabilities: [
      { label: "Daily & per-app screen-time limits", detail: "Different limits for school days vs weekends; lock specific apps after a quota." },
      { label: "Bedtime lock", detail: "Phone goes to a lock screen at night — calls still work." },
      { label: "Approve every app install", detail: "Push notification to the parent before Play Store download or in-app purchase." },
      { label: "SafeSearch & Chrome filters", detail: "Filters explicit Google results and lets you allow/block specific sites." },
      { label: "Live location & lost-phone tools", detail: "See where the child's phone is, ring it, or lock it remotely." },
      { label: "Activity reports", detail: "Weekly summary of which apps were used and for how long." },
      { label: "Remote lock", detail: "Lock the device instantly from your phone when needed (dinner, homework, bedtime)." },
    ],
    emergency:
      "Emergency calls always work. When the screen-time limit is reached or during bedtime/downtime, the child can still tap 'Emergency' on the lock screen to dial 999 / 112 / 911. You can also mark Phone and Messages as 'Always allowed' so they can call you and named contacts at any time.",
    tutorials: [
      { title: "Get started with Family Link", source: "Google Families (official)", type: "Official guide", url: "https://families.google.com/familylink/" },
      { title: "Set up Family Link — official help article", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7101025" },
      
      { title: "Manage screen time with Family Link", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7103340" },
      { title: "Approve or block apps your child wants to download", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7385553" },
      { title: "Add supervision to a device your child already uses", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7101025", note: "Confirms supervision can be added to an existing phone — a factory reset is not required in most cases." },
      { title: "Verify your identity as a parent (payment method check)", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7101025", note: "The verification charge amount and method vary by country and card." },
      { title: "Parental controls on Android — UK guide with screenshots", source: "Internet Matters (UK)", type: "Article", url: "https://www.internetmatters.org/parental-controls/smartphones-and-other-devices/google-family-link-parental-controls/" },
    ],
    notes: [
      "Family Link can supervise a teen account past 13, but the teen can technically unlink it themselves once they're old enough — you'll be notified.",
      "Some apps (notably WhatsApp) don't enforce Google's age rules, so block them in Family Link if you don't want them installed.",
      "You do not need to wipe a phone to supervise it. Only reset if the device came from someone else or has an adult account locked in as owner.",
      "The adult-verification charge during account creation is a small temporary authorisation, not a purchase — the exact amount differs by country and card, so treat any figure you read online as an example only.",
    ],
  },
  {
    slug: "iphone-first-setup",
    title: "iPhone for a child — full setup with Family Sharing & Screen Time",
    device: "iOS",
    summary:
      "Create a Child Apple Account inside Family Sharing, then use Screen Time and Communication Safety to lock down content, time and contacts.",
    steps: [
      "Create a Child Apple Account through Family Sharing",
      "Sign the child in on their iPhone with the new account",
      "Turn on Screen Time and set a Screen Time Passcode only you know",
      "Set Downtime, App Limits and Always-Allowed apps",
      "Turn on Content & Privacy Restrictions (App Store, web, Siri, explicit content)",
      "Turn on Ask to Buy; verify Communication Safety is on (it's enabled by default on current software)",
      "Enable Find My and Stolen Device Protection",
    ],
    overview:
      "Apple's parental controls live in two places: Family Sharing (which links your accounts) and Screen Time (which sets the rules). You configure most things from your own iPhone once the child's Apple Account is linked.",
    heroVideo: {
      youtubeId: "8siFNH-brM4",
      title: "How to create a child account with Family Sharing on iPhone or iPad — Apple Support",
      caption: "Official Apple Support walkthrough (2:37) for creating the child's Apple Account. Then follow the detailed steps below to lock down Screen Time.",
    },
    sections: [
      {
        title: "1 · Create the Child Apple Account",
        visual: {
          youtubeId: "8siFNH-brM4",
          title: "Create a Child Apple Account",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4",
          kind: "Official video",
          description: "Apple’s official Family Sharing child-account walkthrough.",
        },
        intro: "On YOUR iPhone, open Settings → tap your name at the top → Family.",
        steps: [
          "Tap 'Add Member' → 'Create Child Account' → Continue.",
          "Enter the child's name and birthday (this sets the right default restrictions).",
          "Agree to the Parent Privacy Disclosure and verify yourself (Face ID / Touch ID / CVV on your Apple-ID payment card).",
          "Create the child's Apple ID (an @icloud.com email) and a password YOU keep.",
          "Choose 'Ask to Buy' = On. Every paid download or in-app purchase now needs your approval.",
        ],
      },
      {
        title: "2 · Sign the child in on their iPhone",
        visual: {
          youtubeId: "8siFNH-brM4",
          startSeconds: 74,
          title: "Connect the child to Family Sharing",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4&t=74s",
          kind: "Official video",
          description: "The device and family-account stage in Apple’s walkthrough.",
        },
        steps: [
          "If the iPhone is new: at the 'Hello' screen choose 'Set Up for a Child in My Family' (iOS 16+).",
          "If the iPhone is already set up: Settings → sign out of any existing Apple Account → sign in with the new Child Apple Account.",
          "Accept the prompts to enable iCloud Backup, Find My iPhone and Screen Time.",
        ],
      },
      {
        title: "3 · Screen Time — the most important step",
        visual: {
          youtubeId: "8siFNH-brM4",
          title: "Set up Screen Time",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4",
          kind: "Official video",
          description: "Apple’s official Screen Time walkthrough.",
        },
        intro: "On your phone: Settings → Family → tap the child → Screen Time.",
        steps: [
          "Tap 'Turn on Screen Time' if it isn't already.",
          "Set a 4-digit Screen Time Passcode the child does NOT know — this stops them changing limits.",
          "Set 'Downtime': hours when only allowed apps and phone calls work (e.g. 21:00–07:00).",
          "Set 'App Limits' by category (Social, Games) or per-app (TikTok 30 min, Roblox 45 min).",
          "Set 'Always Allowed' apps — Phone, Messages, Maps and your family chat should stay on even during downtime.",
          "Turn on 'Block at End of Limit' so the limit actually enforces.",
        ],
      },
      {
        title: "4 · Content & Privacy Restrictions",
        visual: {
          youtubeId: "8siFNH-brM4",
          title: "Set up parental controls",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4",
          kind: "Official video",
          description: "Apple demonstrates its current parental-control menus.",
        },
        intro: "Same Screen Time screen → 'Content & Privacy Restrictions' → toggle on.",
        steps: [
          "iTunes & App Store Purchases → 'Installing Apps' = Don't Allow (or Require Password). 'In-app Purchases' = Don't Allow.",
          "Allowed Apps → switch off anything inappropriate (Safari, Camera, FaceTime) for very young kids.",
          "Content Restrictions → set the highest age rating the child can install. On iOS 26+ Apple's ratings are 4+, 9+, 13+, 16+, 18+; on earlier iOS they are 4+, 9+, 12+, 17+. Pick a cap suited to the child (e.g. 9+ for a young child, 13+ for an older one). Also set age ratings for Movies, TV shows, Books and Music.",
          "Content Restrictions → Web Content → 'Limit Adult Websites' (or 'Allowed Websites Only' for under-10s).",
          "Content Restrictions → Siri → block explicit language and explicit web search.",
        ],
      },
      {
        title: "5 · Communication, contacts & Messages",
        visual: {
          youtubeId: "8siFNH-brM4",
          startSeconds: 62,
          title: "Review communication controls",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4&t=62s",
          kind: "Official video",
          description: "Apple’s parental-controls walkthrough at the communication settings.",
        },
        steps: [
          "Screen Time → 'Communication Limits' → choose who they can call/iMessage/FaceTime during the day and during downtime (e.g. 'Contacts Only').",
          "Screen Time → 'Communication Safety' → check it is ON. On iOS 17+ it is enabled by default for child accounts under 18 on iPhone, iPad, Mac and Apple Watch, and for 13–17-year-olds on Apple Vision Pro — so you're verifying, not switching it on from scratch. It detects and blurs nudity in Messages, AirDrop, Contact Posters, FaceTime video messages and the system Photos picker; analysis happens on-device. Source: support.apple.com/en-gb/105069",
          "Manage their contacts list (Settings → Family → child → Contacts) so 'Contacts Only' is meaningful.",
        ],
      },
      {
        title: "6 · Safety & device security",
        visual: {
          youtubeId: "8siFNH-brM4",
          startSeconds: 70,
          title: "Review device safety settings",
          source: "Apple Support",
          sourceUrl: "https://www.youtube.com/watch?v=8siFNH-brM4&t=70s",
          kind: "Official video",
          description: "The safety and access controls in Apple’s official walkthrough.",
        },
        steps: [
          "Settings → Family → child → Location Sharing → On. The child's iPhone appears in Find My.",
          "On the child phone: Settings → [name] → Find My → 'Find My iPhone' On, 'Send Last Location' On.",
          "On the child phone: Settings → Face ID & Passcode → 'Stolen Device Protection' On (iOS 17.3+).",
          "Set up Emergency Contacts in the Health app: Health → Medical ID → Edit → add yourself as an emergency contact (works from the lock screen).",
        ],
      },
    ],
    capabilities: [
      { label: "Downtime", detail: "Only chosen apps and phone calls work outside allowed hours." },
      { label: "App Limits", detail: "Daily quota per app or per category; locks the app when reached." },
      { label: "Always Allowed", detail: "Apps that escape every limit — keep Phone, Messages, Maps." },
      { label: "Ask to Buy", detail: "Push approval to your phone for any download or in-app purchase." },
      { label: "Communication Limits", detail: "Restrict who can contact the child and who they can contact." },
      { label: "Communication Safety", detail: "On-device nudity blur in Messages, AirDrop, Contact Posters, FaceTime and Photos. Enabled by default for child accounts on iOS 17+ — verify it stays on." },
      { label: "Web Content", detail: "Limit adult websites system-wide, or restrict to an allowlist." },
      { label: "Find My + Stolen Device Protection", detail: "Locate a lost iPhone; require Face ID for risky changes." },
    ],
    emergency:
      "Even when an app limit is hit or during full Downtime, the child can swipe up on the lock screen and tap 'Emergency' to call 999 / 112 / 911. Medical ID is visible without unlocking, so emergency contacts added in the Health app can always be reached. Phone and Messages set as 'Always Allowed' means they can also call or text you at any time.",
    tutorials: [
      { title: "Set up a Child Apple Account with Family Sharing", source: "Apple Support (official)", type: "Official guide", url: "https://support.apple.com/en-gb/108714" },
      { title: "Use Screen Time on your iPhone", source: "Apple Support (official)", type: "Official guide", url: "https://support.apple.com/en-gb/108806" },
      { title: "Use parental controls on your child's iPhone", source: "Apple Support (official)", type: "Official guide", url: "https://support.apple.com/en-gb/105121" },
      { title: "Communication Safety on iPhone", source: "Apple Support (official)", type: "Official guide", url: "https://support.apple.com/en-gb/105069" },
      { title: "How to set up parental controls on iPhone (walkthrough)", source: "Apple Support · YouTube", type: "Video", url: "https://www.youtube.com/watch?v=8siFNH-brM4" },
      { title: "App Store age ratings values and definitions (4+/9+/13+/16+/18+ on iOS 26)", source: "Apple Developer", type: "Official guide", url: "https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/" },
      { title: "Updated age ratings in App Store Connect (July 2025)", source: "Apple Developer News", type: "Official guide", url: "https://developer.apple.com/news/?id=ks775ehf" },
      { title: "iPhone parental controls — UK guide with current screenshots", source: "Internet Matters (UK)", type: "Article", url: "https://www.internetmatters.org/parental-controls/smartphones-and-other-devices/apple-iphone-parental-controls/", note: "Screen-by-screen images kept up to date with the current iOS release." },
      { title: "Set up Screen Time (video walkthrough)", source: "Apple Support · YouTube", type: "Video", url: "https://www.youtube.com/watch?v=8siFNH-brM4" },
    ],
    notes: [
      "The Screen Time Passcode is the linchpin — if a curious teen learns it, the whole system is bypassed. Don't reuse your phone passcode.",
      "Apple updated its App Store age ratings in July 2025 (iOS 26+) to 4+, 9+, 13+, 16+ and 18+ — more granular than the old 4+/9+/12+/17+ tiers still shown on devices below iOS 26. In Screen Time → Content Restrictions you can cap which ratings the child may install, so set it deliberately rather than leaving it at the default. Source: developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/",
    ],
  },
  {
    slug: "youtube-safer",
    title: "Make YouTube safer in 5 minutes",
    device: "Any",
    summary: "Seven concrete settings — autoplay, supervised content level, history, Shorts, recommendations and Restricted Mode — with the exact tap-path for phone, tablet and TV.",
    steps: [
      "Turn off Autoplay (app: player toggle; web: Up next toggle)",
      "Set the supervised content level, or move under-9s to YouTube Kids",
      "Pause and clear Watch history and Search history",
      "Reduce or remove Shorts (collapse the shelf, or use Kids/supervised where Shorts are limited)",
      "Clean subscriptions and train recommendations with 'Don't recommend channel'",
      "Turn on Restricted Mode on every device and browser they use",
      "Re-check on the TV, tablet and school laptop — settings do not travel between them",
    ],
    overview:
      "YouTube is the most-used app by children in the UK. Each setting below is per-account AND per-device: turning Restricted Mode on in the phone app does nothing to the smart TV. Budget five minutes for the phone now, then repeat on any other screen they use. Nothing here replaces talking about what they watch.",
    heroVideo: {
      youtubeId: "0dy1St39xeo",
      title: "Parental controls and supervised experiences on YouTube — Google",
      caption: "Official Google walkthrough of supervised experiences. The exact tap-paths for every setting are written out below.",
    },
    sections: [
      {
        title: "1 · Turn off Autoplay (30 seconds)",
        visual: {
          youtubeId: "0dy1St39xeo",
          title: "YouTube family controls overview",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo",
          kind: "Official video",
          description: "YouTube’s official family-controls walkthrough; pause while following the written path.",
        },
        intro: "Autoplay is what turns one video into two hours. It is set per device and per profile.",
        steps: [
          "Phone/tablet app: start any video → the row of icons at the top of the player → tap the Autoplay toggle so it reads Off.",
          "Also: profile picture (top right) → Settings → Autoplay → turn off 'Autoplay next video' for Wi-Fi and mobile data.",
          "Computer: youtube.com → play a video → under the player, toggle 'Autoplay' off.",
          "Smart TV / console / Fire Stick: Settings → Autoplay → Off. This is a separate switch from the phone.",
          "Check it stuck: close the app, reopen, play a video and let it end — it should stop, not roll on.",
        ],
      },
      {
        title: "2 · Set the right account type and content level",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 18,
          title: "Choose a supervised experience",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=18s",
          kind: "Official video",
          description: "YouTube shows the supervised experience and parent controls.",
        },
        intro: "Under 13s should not be on a standard YouTube account. Choose one of the three routes below.",
        steps: [
          "Under 9: use the YouTube Kids app. In Kids → lock icon (bottom right) → enter the passcode → Settings → choose the child's profile → set the age category (Preschool / Younger / Older) and turn OFF 'Search'.",
          "Roughly 9–12: create a supervised account in Google Family Link → tap the child → Controls → YouTube → then choose a content setting: 'Explore' (approx 9+), 'Explore More' (approx 13+) or 'Most of YouTube'.",
          "13+ with their own account: you cannot set a content level remotely — do steps 1, 3, 4, 5 and 6 with them instead.",
          "In a supervised account, purchases, comments, live chat, uploads and creating playlists are switched off by Google — this is the strongest single lever available.",
          "Check it stuck: open YouTube on the child's device — a supervised account shows their name and a 'supervised' label under the profile picture.",
        ],
      },
      {
        title: "3 · Review, clear and pause history",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 33,
          title: "Review viewing controls",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=33s",
          kind: "Official video",
          description: "The official walkthrough alongside the exact history path.",
        },
        intro: "History is what feeds the recommendations. Cleaning it visibly changes the home page within a day.",
        steps: [
          "App: profile picture → Settings → Manage all history (this opens myactivity.google.com).",
          "Read the last two weeks with your child — this is the single most useful two minutes of the whole checklist.",
          "Tap Delete → 'Delete all time' to clear watch history, then repeat for search history.",
          "Turn OFF 'YouTube History' if you want recommendations to stop personalising, or set 'Auto-delete' to 3 months as a middle ground.",
          "Note the trade-off: with history off, the home page gets generic rather than safe — it does not filter anything.",
        ],
      },
      {
        title: "4 · Deal with Shorts",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 42,
          title: "Use YouTube wellbeing controls",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=42s",
          kind: "Official video",
          description: "YouTube’s official parent-control overview beside the Shorts actions.",
        },
        intro: "Shorts is the most compulsive surface in the app and the hardest to filter, because content moves fast and moderation lags.",
        steps: [
          "Home feed: tap the three dots on the Shorts shelf → 'Hide' — it collapses the shelf for 30 days, then returns. Repeat monthly.",
          "Inside a Short: three dots → 'Not interested' or 'Don't recommend channel' — this is what actually trains the feed.",
          "For under-13s: YouTube Kids has no Shorts feed of this kind, and supervised 'Explore' level heavily limits it. That is the reliable route.",
          "Set a timer instead of relying on willpower: profile picture → Settings → 'Remind me to take a break' and 'Remind me when it's bedtime'.",
          "Honest limit: there is no switch that removes Shorts entirely from a standard account. Account type is the only real control.",
        ],
      },
      {
        title: "5 · Clean subscriptions and retrain recommendations",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 52,
          title: "Manage what appears on YouTube",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=52s",
          kind: "Official video",
          description: "The platform’s own walkthrough beside recommendation controls.",
        },
        steps: [
          "Tap 'Subscriptions' → 'Manage' (or the channel list) and unsubscribe from anything you don't recognise — ask who each one is.",
          "On the home page, hold or tap the three dots on any unwanted thumbnail → 'Don't recommend channel'. Do this ten times in a row; the feed shifts noticeably.",
          "Use 'Not interested' → 'Tell us why' for content that is borderline rather than clearly bad.",
          "Add three or four channels together that they actually like — a positively trained feed sticks better than a purely blocked one.",
          "Check it stuck: reload the home page after a day and see what is left.",
        ],
      },
      {
        title: "6 · Restricted Mode — on every device and browser",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 62,
          title: "Review content controls",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=62s",
          kind: "Official video",
          description: "YouTube’s official controls overview; use the written device-specific paths.",
        },
        intro: "Restricted Mode is an automated filter for mature content. It is useful but leaky, and it is stored per browser, per app and per device.",
        steps: [
          "Phone/tablet app: profile picture → Settings → General → 'Restricted Mode' → On.",
          "Computer: youtube.com → profile picture (top right) → scroll to 'Restricted Mode' → On. Repeat in every browser and in a signed-out/guest profile.",
          "Smart TV / games console: Settings → Restricted Mode (labelled 'Restricted Mode' or 'Safety Mode') → On.",
          "Whole-network option: your broadband provider's parental filter (BT, Sky, Virgin, TalkTalk all offer one free) can force Restricted Mode for every device on the home Wi-Fi — it does not cover mobile data.",
          "Honest limit: Restricted Mode relies on automated signals and creator age-flags. It misses things and over-blocks others. Treat it as a filter, not a guarantee.",
        ],
      },
      {
        title: "7 · Repeat where they actually watch",
        visual: {
          youtubeId: "0dy1St39xeo",
          startSeconds: 72,
          title: "Check every viewing device",
          source: "YouTube",
          sourceUrl: "https://www.youtube.com/watch?v=0dy1St39xeo&t=72s",
          kind: "Official video",
          description: "The official walkthrough beside the final multi-device check.",
        },
        intro: "Most households do the phone and forget the rest. YouTube settings do not sync across these.",
        steps: [
          "Smart TV and streaming stick — usually the least-protected screen in the house.",
          "Games console (PlayStation, Xbox, Switch) — each has its own YouTube app and its own settings.",
          "Tablet, including a shared family iPad with a signed-in adult account.",
          "School laptop or Chromebook — check both the browser signed in and signed out.",
          "Anyone else's account they use on the family TV — a parent's signed-in account has no restrictions at all.",
        ],
      },
    ],
    capabilities: [
      { label: "Autoplay off", detail: "Stops the endless roll-on. Per device — phone, TV and computer each need doing." },
      { label: "Supervised content level", detail: "Explore / Explore More / Most of YouTube, set from Family Link. Also disables comments, live chat and uploads." },
      { label: "YouTube Kids profiles", detail: "Age category per child plus a switch to turn search off entirely." },
      { label: "History control", detail: "Clear, pause or auto-delete watch and search history to reset recommendations." },
      { label: "Don't recommend channel", detail: "The strongest available signal for reshaping the feed on a standard account." },
      { label: "Restricted Mode", detail: "Automated filter for mature content. Per app, per browser, per device — and imperfect." },
      { label: "Break and bedtime reminders", detail: "Built-in nudges that work well with a supervised account." },
    ],
    notes: [
      "There is no single master switch. YouTube safety is an account type (supervised or Kids) plus a handful of per-device toggles.",
      "Restricted Mode can be turned off again in the same menu by anyone who knows where it is — on a supervised or Kids account it is locked behind your Family Link or passcode, which is why account type matters more than toggles.",
      "Signing out and watching logged-out removes most of this. If that becomes a pattern, handle it at the device level with Screen Time or Family Link rather than inside YouTube.",
      "A parent's signed-in account on the family TV bypasses every child setting — worth checking who is signed in there.",
    ],
    tutorials: [
      { title: "Supervised experiences on YouTube", source: "YouTube Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/10314940", note: "Explains the Explore / Explore More / Most of YouTube content levels and what each disables." },
      { title: "Turn Restricted Mode on or off", source: "YouTube Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/174084", note: "Per-device instructions for phone, computer and TV." },
      { title: "Manage Autoplay", source: "YouTube Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/6327615" },
      { title: "Manage your YouTube watch and search history", source: "Google Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/95725" },
      { title: "Set up YouTube Kids and choose a content level", source: "YouTube Kids Help (official)", type: "Official guide", url: "https://support.google.com/youtubekids/answer/6172308" },
      { title: "Manage your child's YouTube settings in Family Link", source: "Google Help (official)", type: "Official guide", url: "https://support.google.com/families/answer/7087030" },
      { title: "Parents' guide to YouTube", source: "Internet Matters (UK)", type: "Article", url: "https://www.internetmatters.org/parental-controls/entertainment-search-engines/youtube-safety-settings/", note: "UK non-profit, with annotated screenshots for each setting." },
    ],
  },
  {
    slug: "social-lockdown",
    title: "Lock down a teen's social accounts",
    device: "Any",
    summary: "Five settings that matter — private account, discovery off, location off, two-factor on, follower cleanout — with the exact menu path for Instagram, TikTok, Snapchat and Discord.",
    steps: [
      "Set the account to Private (and confirm the Teen Account default is actually applied)",
      "Turn off 'suggest my account to others' and contact syncing",
      "Strip location: no location tags, no Snap Map, no place in bio",
      "Turn on two-factor authentication with an app, not SMS",
      "Clean the follower/friend list — remove anyone they cannot name in real life",
    ],
    overview:
      "Teens rarely need a new app blocked; they need the accounts they already have tightened. Do this sitting next to them, one app at a time — roughly ten minutes each. Explain each change as you make it, or it quietly gets reversed next week.",
    sections: [
      {
        title: "1 · Instagram",
        visual: {
          youtubeId: "A9PUMeAQRbA",
          title: "Instagram Teen Accounts",
          source: "Instagram",
          sourceUrl: "https://www.youtube.com/watch?v=A9PUMeAQRbA",
          kind: "Official video",
          description: "Instagram’s official introduction to automatic teen protections.",
        },
        intro: "Under-18 accounts should already be Teen Accounts (private by default, restricted DMs, sensitive-content limits). Verify rather than assume — and check the age on the account is the real one.",
        steps: [
          "Private: profile → three lines (top right) → Settings and privacy → Account privacy → 'Private account' ON.",
          "Discovery: Settings → 'Suggested content' / 'Similar account suggestions' → turn OFF suggesting their account to others. Also Settings → Account Centre → Your information → turn off contact syncing.",
          "Messages: Settings → Messages and story replies → 'Others on Instagram' = Don't receive requests; Story replies = People you follow.",
          "Tags and mentions: Settings → Tags and mentions → set both to 'People you follow'. Turn on manual approval for tags.",
          "Location: never add a location to a post or Reel; remove any place, school or town from the bio.",
          "2FA: Account Centre → Password and security → Two-factor authentication → Authentication app.",
          "Supervision: Account Centre → Supervision → invite your account. It shows time spent, new followers and reported accounts — it does not show message content.",
        ],
      },
      {
        title: "2 · TikTok",
        visual: {
          youtubeId: "kyONXkjYm-s",
          title: "Teen safety and privacy defaults",
          source: "TikTok",
          sourceUrl: "https://www.youtube.com/watch?v=kyONXkjYm-s",
          kind: "Official video",
          description: "TikTok’s official explanation of teen-account defaults.",
        },
        intro: "13–15 accounts are private by default with DMs off. 16–17 accounts are not fully locked, so check them properly.",
        steps: [
          "Private: profile → three lines → Settings and privacy → Privacy → 'Private account' ON.",
          "Discovery: Privacy → 'Suggest your account to others' → turn off all four options (contacts, Facebook friends, people who open your links, people with mutual connections).",
          "Sync: Privacy → 'Sync contacts and Facebook friends' → off, and tap 'Remove previously synced contacts'.",
          "Messaging: Privacy → Direct messages → 'No one' (or Friends only for older teens).",
          "Comments, duets, stitches, downloads: Privacy → set each to Friends or No one.",
          "Location: never mention school or town in a bio; TikTok also infers location from the device — turn location permission off in the phone's app settings.",
          "2FA: Settings → Security and permissions → 2-step verification → authenticator app.",
          "Family Pairing: Settings → Family Pairing → link your phone to set screen time, restricted mode, DM limits and search restrictions that the teen cannot undo.",
        ],
      },
      {
        title: "3 · Snapchat",
        visual: {
          youtubeId: "3qkNYcRnwYc",
          title: "Understand your teen's Snapchat experience",
          source: "Snapchat",
          sourceUrl: "https://www.youtube.com/watch?v=3qkNYcRnwYc",
          kind: "Official video",
          description: "Snapchat’s current official Family Center walkthrough, including friends, messages, location and time use.",
        },
        intro: "Snapchat's risk is contact discovery and location, not a public feed. Both are fixable in two minutes.",
        steps: [
          "Contact me: profile → gear icon → Privacy Controls → 'Contact Me' → 'My Friends'.",
          "Story: Privacy Controls → 'View My Story' → 'My Friends' or a custom list.",
          "Snap Map: open the Map → gear icon → 'Ghost Mode' ON. Check it is not set to expire in 3 or 24 hours.",
          "Quick Add: Privacy Controls → 'See Me in Quick Add' → OFF. This is how strangers find teens.",
          "Contact sync: Settings → 'Mobile Number' / 'Contacts' → turn off syncing and delete previously synced contacts.",
          "2FA: Settings → Two-Factor Authentication → authenticator app.",
          "Family Centre: Settings → Family Centre → invite your account. You see who they message — not what is said.",
          "Friends list: go through it together and remove anyone they have never met. Snapchat friend lists are where unknown adults accumulate.",
        ],
      },
      {
        title: "4 · Discord",
        visual: {
          youtubeId: "uVwBW1b2HlM",
          title: "The Discord Family Center",
          source: "Discord",
          sourceUrl: "https://www.youtube.com/watch?v=uVwBW1b2HlM",
          kind: "Official video",
          description: "Discord’s official Family Center introduction and activity overview.",
        },
        intro: "Discord risk lives in servers and DMs from server members, not in a profile. UK accounts now get age-appropriate defaults, but server settings are still per-server.",
        steps: [
          "DMs: User Settings → Privacy & Safety → 'Keep me safe' for content filtering, and turn OFF 'Allow direct messages from server members'.",
          "Friend requests: Privacy & Safety → Who can add you as a friend → uncheck 'Everyone'; leave 'Friends of Friends' and 'Server members' off too if you can.",
          "Per-server: right-click each server → Privacy Settings → turn off direct messages from that server's members.",
          "Servers: open the server list together and ask what each one is. Leave any large public server they cannot explain.",
          "2FA: User Settings → My Account → Enable Two-Factor Auth (authenticator app).",
          "Family Centre: User Settings → Family Centre → link your account for a weekly email of who they messaged and which servers they joined — content is not shown.",
        ],
      },
      {
        title: "5 · Finish on every account",
        visual: {
          youtubeId: "A9PUMeAQRbA",
          title: "Recheck teen protections",
          source: "Instagram",
          sourceUrl: "https://www.youtube.com/watch?v=A9PUMeAQRbA",
          kind: "Official video",
          description: "An official example of the protections to verify before completing the cross-platform sweep.",
        },
        steps: [
          "Search their username in a signed-out browser — whatever you can see, a stranger can see.",
          "Check the profile photo, bio and pinned posts for school uniform, school name, street or house number.",
          "Check the date of birth on the account. A teen who signed up as 18+ loses every teen protection — fixing the age is often the biggest single win.",
          "Save the reporting routes together: in-app report, then CEOP (ceop.police.uk) for adult contact, and Report Remove (childline.org.uk) to get an image taken down.",
          "Put a date in the calendar to redo this in three months. Apps change defaults; accounts drift.",
        ],
      },
    ],
    capabilities: [
      { label: "Private account", detail: "Stops non-followers seeing posts. The single highest-value toggle on every platform." },
      { label: "Discovery off", detail: "Removes them from suggestions and Quick Add, where most unknown-adult contact begins." },
      { label: "DM restriction", detail: "Friends-only or off. On Discord it must also be set per server." },
      { label: "Ghost Mode / no location tags", detail: "Prevents live or implied location sharing with friends-of-friends." },
      { label: "Two-factor authentication", detail: "Stops account takeover — a common route into sextortion." },
      { label: "Parental linking", detail: "Instagram Supervision, TikTok Family Pairing, Snapchat Family Centre, Discord Family Centre." },
    ],
    notes: [
      "None of the parental link-ups show message content. They show who and when. That is by design — plan on conversation, not surveillance.",
      "Settings protect against strangers finding your child. They do nothing about content the algorithm pushes, or about people your child chooses to add.",
      "Every platform resets or renames settings periodically. Re-check quarterly; a lockdown done once in Year 7 is not still in place in Year 9.",
      "If an account was created with a false adult date of birth, correcting it restores teen defaults — but some platforms require ID to change an age, so check before you start.",
    ],
    tutorials: [
      { title: "Instagram Teen Accounts (default protections)", source: "Meta (official)", type: "Official guide", url: "https://about.instagram.com/blog/announcements/instagram-teen-accounts" },
      { title: "Set your Instagram account to private", source: "Instagram Help (official)", type: "Official guide", url: "https://help.instagram.com/116024195217477" },
      { title: "TikTok Family Pairing", source: "TikTok (official)", type: "Official guide", url: "https://www.tiktok.com/safety/en/guardians-guide/" },
      { title: "TikTok privacy settings for teen accounts", source: "TikTok Support (official)", type: "Official guide", url: "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings" },
      { title: "Snapchat Family Center", source: "Snap (official)", type: "Official guide", url: "https://parents.snapchat.com/" },
      { title: "Snap Map and Ghost Mode", source: "Snapchat Support (official)", type: "Official guide", url: "https://help.snapchat.com/hc/en-gb/articles/7012301666580" },
      { title: "Discord Family Centre", source: "Discord (official)", type: "Official guide", url: "https://discord.com/family-center" },
      { title: "Social media privacy checklists with screenshots", source: "Internet Matters (UK)", type: "Article", url: "https://www.internetmatters.org/parental-controls/social-media/", note: "Step-by-step guides with current screenshots for each platform." },
      { title: "Report to CEOP", source: "National Crime Agency (UK)", type: "Official guide", url: "https://www.ceop.police.uk/safety-centre/", note: "Use if an adult has contacted your child online." },
    ],
  },
];
