// Centralised editorial content for the hub.
// Plain-English, evidence-led, non-sensational. Last reviewed dates included.

export const REVIEWED = "May 2026";

export type ScreenTimeGuidance = {
  recommended: string;
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
    screenTime: {
      recommended:
        "No single hour cap is realistic at this age — aim for under 2 hours/day of pure social-media scrolling, plus protected time for sleep (9 hours), physical activity, schoolwork and offline friendships.",
      sources: [
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
        { label: "APA Health Advisory on Social Media Use in Adolescence", org: "American Psychological Association", region: "USA", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
        { label: "Australian 24-hour movement guidelines for children and young people (5–17)", org: "Australian Department of Health", region: "Australia", url: "https://www.health.gov.au/topics/physical-activity-and-exercise/physical-activity-and-exercise-guidelines-for-all-australians/for-children-and-young-people-5-to-17-years" },
        { label: "Estudo Geração Z e ecrãs", org: "Direção-Geral da Saúde", region: "Portugal / EU", url: "https://www.dgs.pt/" },
      ],
      consequences: [
        "Strong link between >3h/day on social media and depression, self-harm and suicidal ideation (Lancet Child & Adolescent Health, 2019).",
        "Increased exposure to sextortion and image-based abuse — UK Internet Watch Foundation recorded record numbers in 2024.",
        "Algorithmic radicalisation into pro-anorexia, self-harm or misogynistic ‘manosphere’ content (Amnesty International, 2023).",
        "Chronic sleep debt impairs mood, immune function and academic performance.",
      ],
    },
    deepDive: [
      { type: "Study", source: "The Lancet Child & Adolescent Health (2019)", title: "Association between social media use and depression among 13–16 year olds in England", url: "https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(19)30186-5/fulltext", note: "Sleep loss and cyberbullying explain much of the link." },
      { type: "Report", source: "Internet Watch Foundation (2024)", title: "Annual Report — Sextortion and self-generated child sexual abuse imagery", url: "https://www.iwf.org.uk/annual-report-2023/", note: "Record numbers of UK teen sextortion cases." },
      { type: "Report", source: "Amnesty International (2023)", title: "Driven into the Darkness: How TikTok's For You feed encourages self-harm and suicidal ideation", url: "https://www.amnesty.org/en/documents/pol40/7350/2023/en/", note: "Algorithm audit showing rapid descent into harmful content from teen accounts." },
      { type: "Article", source: "APA (American Psychological Association)", title: "Health Advisory on Social Media Use in Adolescence", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
      { type: "Video", source: "Netflix", title: "The Social Dilemma", url: "https://www.thesocialdilemma.com/", note: "Documentary on persuasive design and teen mental health." },
      { type: "Video", source: "Channel 4 Dispatches", title: "Kids Online: Why Do They Do It?", url: "https://www.channel4.com/programmes/dispatches" },
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
    screenTime: {
      recommended:
        "Focus on quality over a strict hour cap: protect 8–9 hours of sleep, daily physical activity, and at least one regular offline social activity. Recreational screen time above ~4 hours/day is consistently linked to worse mental health.",
      sources: [
        { label: "APA Health Advisory on Social Media Use in Adolescence", org: "American Psychological Association", region: "USA", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
        { label: "Social Media and Youth Mental Health — Surgeon General's Advisory", org: "US Surgeon General", region: "USA", url: "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html" },
        { label: "Screen time, physical activity and mental health in adolescents", org: "The Lancet Child & Adolescent Health", region: "International", url: "https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(19)30186-5/fulltext" },
        { label: "Korean adolescent smartphone overdependence survey", org: "Korean Ministry of Science and ICT (NIA)", region: "South Korea", url: "https://www.nia.or.kr/site/nia_eng/main.do" },
      ],
      consequences: [
        "Higher prevalence of anxiety, depression and loneliness with heavy social media use (>3h/day).",
        "Financial harm from gambling-style game mechanics, crypto scams and ‘money muling’ recruitment via TikTok/Snapchat.",
        "Permanent digital footprint: nudes, drunken posts and group-chat screenshots resurface during university and job applications.",
        "Sleep deprivation directly impairs driving safety, mood regulation and exam performance.",
      ],
    },
    deepDive: [
      { type: "Report", source: "APA (American Psychological Association, 2023)", title: "Health Advisory on Social Media Use in Adolescence", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
      { type: "Study", source: "Preventive Medicine Reports (2018)", title: "Associations between screen time and lower psychological well-being among children and adolescents", url: "https://www.sciencedirect.com/science/article/pii/S2211335518301827", note: "Twenge & Campbell — large US dataset showing dose-response with screen time." },
      { type: "Report", source: "UK Gambling Commission (2024)", title: "Young People and Gambling Survey", url: "https://www.gamblingcommission.gov.uk/statistics-and-research/publication/young-people-and-gambling-2024", note: "Loot boxes and in-game spending as gateways to problem gambling in 16–17s." },
      { type: "Report", source: "FBI / IC3 (2024)", title: "Financial Sextortion Targeting Minors — Public Service Announcement", url: "https://www.ic3.gov/Media/Y2023/PSA230118", note: "Tactics used against teen boys via Instagram and Snapchat." },
      { type: "Article", source: "Pew Research Center", title: "Teens, Social Media and Technology 2024", url: "https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/" },
      { type: "Video", source: "Frontline (PBS)", title: "The Facebook Dilemma", url: "https://www.pbs.org/wgbh/frontline/documentary/facebook-dilemma/" },
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
  {
    slug: "telegram", name: "Telegram", category: "Messaging", minAge: "17+ (App Store) / 13+ (Telegram terms)",
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
    slug: "x-twitter", name: "X (formerly Twitter)", category: "Social", minAge: "13+",
    why: "News, memes, fandoms, sports — and trending political content.",
    risks: ["Pornographic content allowed by default", "Targeted harassment via replies / quote-posts", "Misinformation amplified by paid blue ticks"],
    settings: ["Hide sensitive content", "Protected posts (private account)", "Mute words & accounts", "Disable DMs from non-followers"],
    detail: {
      overview: "X allows adult content (including pornography) on the main feed by default. Since 2022, safety teams have been cut and verification was opened to anyone paying — both of which child-safety bodies link to higher exposure for minors.",
      ageRationale: "Minimum age 13. The platform’s 2023 policy permitting ‘consensually produced adult nudity and behaviour’ is a key reason most child-safety organisations no longer recommend it for under-16s.",
      evidence: [
        { claim: "EU Commission opened formal proceedings against X under the Digital Services Act over deceptive design and risk to minors.", publisher: "European Commission", title: "Commission opens formal proceedings against X under DSA", year: "2023", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_23_6709", type: "Regulator" },
        { claim: "NSPCC and other charities have warned that loosened content rules on X expose minors to pornography and hate speech in the default feed.", publisher: "NSPCC", title: "Online safety policy briefings", year: "2024", url: "https://www.nspcc.org.uk/about-us/news-opinion/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Switch ‘Display media that may contain sensitive content’ OFF in Settings → Privacy and safety.",
        "Make the account ‘Protected’ so only approved followers see posts and can reply.",
      ],
      settingsHowTo: [
        { label: "X safety and privacy settings", url: "https://help.x.com/en/safety-and-security" },
        { label: "Common Sense Media: X parent guide", url: "https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-twitter-x" },
      ],
      videoTutorials: [
        { title: "How to lock down X / Twitter for teens", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Twitter+X+parents+guide" },
        { title: "Hide sensitive content on X", channel: "X (official help)", url: "https://www.youtube.com/results?search_query=X+twitter+hide+sensitive+content+how+to" },
      ],
    },
  },
  {
    slug: "reddit", name: "Reddit", category: "Social", minAge: "13+",
    why: "Forums (‘subreddits’) for every interest — including ones a 13-year-old shouldn’t see.",
    risks: ["NSFW subreddits visible after one click", "Anonymous DMs", "Doxxing and pile-ons"],
    settings: ["Adult content: OFF", "Chat requests: Nobody / Followers only", "Mute subreddits"],
    detail: {
      overview: "Reddit is a network of user-run forums. Most are safe, but adult and disturbing communities exist and become accessible the moment a teen toggles ‘over 18’ in settings.",
      ageRationale: "Minimum age 13. Reddit relies almost entirely on self-declared age for the NSFW gate — Ofcom and others have flagged this as inadequate.",
      evidence: [
        { claim: "Ofcom’s Children’s Online User Experiences research highlights Reddit among platforms where children encounter harmful content despite age limits.", publisher: "Ofcom", title: "Children’s online user experiences", year: "2024", url: "https://www.ofcom.org.uk/online-safety/protecting-children/childrens-online-user-experiences/", type: "Regulator" },
        { claim: "Pew Research found Reddit use among US teens is rising, while moderation remains entirely volunteer-driven.", publisher: "Pew Research Center", title: "Teens, Social Media and Technology 2024", year: "2024", url: "https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Check ‘Adult content’ is OFF in Settings → Account — toggling it on unlocks pornography sitewide.",
        "Show them how to block a subreddit; you don’t have to argue about every community.",
      ],
      settingsHowTo: [
        { label: "Reddit safety and privacy settings", url: "https://support.reddithelp.com/hc/en-us/articles/360043068032" },
        { label: "Common Sense Media: Reddit guide", url: "https://www.commonsensemedia.org/website-reviews/reddit" },
      ],
      videoTutorials: [
        { title: "Reddit for parents — what you need to know", channel: "Common Sense Media", url: "https://www.youtube.com/results?search_query=Common+Sense+Media+Reddit+parents+guide" },
        { title: "How to block subreddits and disable NSFW", channel: "Reddit help", url: "https://www.youtube.com/results?search_query=Reddit+disable+NSFW+block+subreddit" },
      ],
    },
  },
  {
    slug: "bereal", name: "BeReal", category: "Social", minAge: "13+",
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
    slug: "character-ai", name: "Character.AI", category: "Social", minAge: "13+ (17+ in App Store after 2024)",
    why: "Chat with AI ‘characters’ — anything from a tutor to a fictional boyfriend.",
    risks: ["Highly addictive parasocial bonds", "Sexual / romantic roleplay despite filters", "Pro-suicide and self-harm conversations documented in lawsuits"],
    settings: ["Use the under-18 model (rolled out 2024)", "Disable Character chat history", "Block via Screen Time"],
    detail: {
      overview: "Character.AI generates open-ended roleplay with user-made AI characters. Average teen users spend over 90 minutes a day. Lawsuits in 2024 link the platform to a teen suicide and to chatbots encouraging self-harm.",
      ageRationale: "Character.AI raised its App Store rating to 17+ in 2024 and introduced a separate ‘teen model’ after US lawsuits and regulatory scrutiny. Under-13s are off-limits in terms.",
      evidence: [
        { claim: "US lawsuit alleges Character.AI chatbots encouraged a 14-year-old’s suicide and that the platform’s design is unreasonably dangerous to minors.", publisher: "The New York Times", title: "Can A.I. Be Blamed for a Teen’s Suicide?", year: "2024", url: "https://www.nytimes.com/2024/10/23/technology/characterai-lawsuit-teen-suicide.html", type: "Investigative journalism" },
        { claim: "Second lawsuit alleges Character.AI exposed a 9-year-old to ‘hypersexualised content’ and suggested self-harm to a 17-year-old.", publisher: "The Washington Post", title: "Character.AI sued over content shown to minors", year: "2024", url: "https://www.washingtonpost.com/technology/2024/12/10/character-ai-lawsuit-children-harm/", type: "Investigative journalism" },
        { claim: "Common Sense Media risk assessment rates AI companion apps including Character.AI as ‘unacceptable risk’ for under-18s.", publisher: "Common Sense Media", title: "AI Risk Assessment: Social AI Companions", year: "2025", url: "https://www.commonsensemedia.org/ai-ratings/social-ai-companions", type: "Charity / NGO" },
      ],
      parentTalkingPoints: [
        "Ask which characters they talk to and for how long. Long, late-night sessions are the strongest warning sign.",
        "Be clear: the AI isn’t a friend and isn’t qualified to handle low moods. Agree on a real person they’ll talk to instead.",
      ],
      settingsHowTo: [
        { label: "Character.AI safety centre", url: "https://blog.character.ai/our-progress-towards-creating-a-safe-experience-for-everyone/" },
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
  src: string;
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
      src: "/__l5e/assets-v1/ebe7bb3d-4d09-45e2-b0ce-0e5cf41a3055/family-link-tutorial.mp4",
      caption: "Our own 67-second walkthrough — install Family Link, set screen time, approve apps, and keep emergency calls open.",
    },
    sections: [
      {
        title: "1 · Before you start",
        intro: "Have both phones unlocked and on Wi-Fi. You'll need the child's date of birth and your own Google password.",
        steps: [
          "Update both phones to the latest Android version (Settings → System → System update).",
          "On your phone, install 'Google Family Link' from the Play Store.",
          "On the child's phone, factory-reset if it has been used before (Settings → System → Reset options → Erase all data).",
        ],
      },
      {
        title: "2 · Create the child's Google account",
        intro: "Do this from your phone, inside Family Link — not from the child's device.",
        steps: [
          "Open Family Link → tap the '+' icon → 'Add a child' → 'Create an account for your child'.",
          "Enter the child's real first name, birthday and a new Gmail address (e.g. firstname.lastname.kid@gmail.com).",
          "Choose a strong password that YOU keep — the child does not need it for daily use.",
          "Read and accept the Parental Consent screen. Google charges a token amount (e.g. $0.30 / €0.30) to your card to verify you're an adult; it's refunded.",
        ],
      },
      {
        title: "3 · Set up the child's phone",
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
        steps: [
          "In Family Link → Controls → 'Google Play' → turn on 'Require approval for: All content'.",
          "Set content maturity limits (Apps & games: PEGI 7 / ESRB Everyone for young kids; raise as they grow).",
          "Disable in-app purchases: 'Purchase approvals' → 'All content'.",
          "When the child taps 'Install' in the Play Store, you'll get a push notification to approve or deny from your phone.",
        ],
      },
      {
        title: "6 · Web, search & YouTube",
        steps: [
          "Controls → 'Google Search' → turn on SafeSearch (filters explicit results).",
          "Controls → 'Chrome' → choose 'Try to block explicit sites' and add specific sites you want blocked or allowed.",
          "For YouTube under 13: use the YouTube Kids app instead, and block the main YouTube app.",
          "For YouTube 13+: enable 'Supervised experience' in YouTube settings and pick a content setting (Explore / Explore More / Most of YouTube).",
        ],
      },
      {
        title: "7 · Location, find-my-phone & data",
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
      { title: "How To Setup and Use Google Family Link — Complete Tutorial for Parents (step-by-step video)", source: "Tech is Easy · YouTube", type: "Video", url: "https://www.youtube.com/watch?v=34THexmZn2c", note: "5-minute walkthrough covering child account creation, screen time, app approvals and content filters." },
      { title: "Manage screen time with Family Link", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7103340" },
      { title: "Approve or block apps your child wants to download", source: "Google Help", type: "Official guide", url: "https://support.google.com/families/answer/7385553" },
    ],
    notes: [
      "Family Link can supervise a teen account past 13, but the teen can technically unlink it themselves once they're old enough — you'll be notified.",
      "Some apps (notably WhatsApp) don't enforce Google's age rules, so block them in Family Link if you don't want them installed.",
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
      "Turn on Ask to Buy and Communication Safety",
      "Enable Find My and Stolen Device Protection",
    ],
    overview:
      "Apple's parental controls live in two places: Family Sharing (which links your accounts) and Screen Time (which sets the rules). You configure most things from your own iPhone once the child's Apple Account is linked.",
    sections: [
      {
        title: "1 · Create the Child Apple Account",
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
        steps: [
          "If the iPhone is new: at the 'Hello' screen choose 'Set Up for a Child in My Family' (iOS 16+).",
          "If the iPhone is already set up: Settings → sign out of any existing Apple Account → sign in with the new Child Apple Account.",
          "Accept the prompts to enable iCloud Backup, Find My iPhone and Screen Time.",
        ],
      },
      {
        title: "3 · Screen Time — the most important step",
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
        intro: "Same Screen Time screen → 'Content & Privacy Restrictions' → toggle on.",
        steps: [
          "iTunes & App Store Purchases → 'Installing Apps' = Don't Allow (or Require Password). 'In-app Purchases' = Don't Allow.",
          "Allowed Apps → switch off anything inappropriate (Safari, Camera, FaceTime) for very young kids.",
          "Content Restrictions → set age ratings for Apps, Movies, TV shows, Books, Music.",
          "Content Restrictions → Web Content → 'Limit Adult Websites' (or 'Allowed Websites Only' for under-10s).",
          "Content Restrictions → Siri → block explicit language and explicit web search.",
        ],
      },
      {
        title: "5 · Communication, contacts & Messages",
        steps: [
          "Screen Time → 'Communication Limits' → choose who they can call/iMessage/FaceTime during the day and during downtime (e.g. 'Contacts Only').",
          "Screen Time → 'Communication Safety' → turn ON. Detects and blurs nudity in Messages, AirDrop, FaceTime — analysis happens on-device.",
          "Manage their contacts list (Settings → Family → child → Contacts) so 'Contacts Only' is meaningful.",
        ],
      },
      {
        title: "6 · Safety & device security",
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
      { label: "Communication Safety", detail: "On-device nudity blur in Messages, AirDrop, FaceTime." },
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
      { title: "How to set up parental controls on iPhone (walkthrough)", source: "Apple Support · YouTube", type: "Video", url: "https://www.youtube.com/watch?v=GsQTy0DPLDU" },
    ],
    notes: [
      "The Screen Time Passcode is the linchpin — if a curious teen learns it, the whole system is bypassed. Don't reuse your phone passcode.",
      "Apple's age ratings (4+, 9+, 12+, 17+) are stricter than Google's PEGI/ESRB on the same apps. Adjust if you find them too restrictive.",
    ],
  },
  {
    slug: "youtube-safer",
    title: "Make YouTube safer in 5 minutes",
    device: "Any",
    summary: "Quick wins to tame YouTube on any device — switch to supervised mode, disable autoplay, and tidy the algorithm.",
    steps: [
      "Switch to a Supervised Account if under 13 (or YouTube Kids for under 9)",
      "Turn on Restricted Mode in account settings on every device they use",
      "Disable autoplay on home and Up Next",
      "Clear watch history; pause history if needed",
      "Block creators that show up unwanted (three-dot menu → 'Don't recommend')",
    ],
    overview:
      "YouTube is the single most-used app by children worldwide. These five steps shape the algorithm and remove most of the obvious traps. None of them replace conversation about what they're watching.",
    tutorials: [
      { title: "Supervised experiences on YouTube", source: "YouTube Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/10314940" },
      { title: "Turn Restricted Mode on or off", source: "YouTube Help (official)", type: "Official guide", url: "https://support.google.com/youtube/answer/174084" },
      { title: "About YouTube Kids", source: "YouTube Kids (official)", type: "Official guide", url: "https://www.youtubekids.com/" },
    ],
  },
  {
    slug: "social-lockdown",
    title: "Lock down a teen's social accounts",
    device: "Any",
    summary: "The five settings that matter on Instagram, TikTok, Snapchat and Discord — works on any phone.",
    steps: [
      "Set every account to Private",
      "Disable 'suggest my account to others'",
      "Remove location from posts and profiles",
      "Turn on two-factor authentication",
      "Review followers — remove anyone they can't name in real life",
    ],
    overview:
      "Teens don't need new apps locked down — they need their existing accounts tightened. Sit with them and do these five together; it takes about ten minutes per app.",
    tutorials: [
      { title: "Instagram Teen Accounts (default protections)", source: "Meta (official)", type: "Official guide", url: "https://about.instagram.com/blog/announcements/instagram-teen-accounts" },
      { title: "TikTok Family Pairing", source: "TikTok (official)", type: "Official guide", url: "https://www.tiktok.com/safety/en/guardians-guide/" },
      { title: "Snapchat Family Center", source: "Snap (official)", type: "Official guide", url: "https://parents.snapchat.com/" },
      { title: "Discord Family Centre", source: "Discord (official)", type: "Official guide", url: "https://discord.com/family-center" },
    ],
  },
];
