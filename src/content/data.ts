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
    "slug": "0-4",
    "range": "0–4",
    "headline": "Co-viewing years",
    "summary": "Screens enter family life early. The goal at this age is shared, calm, short sessions — not solo scrolling.",
    "behaviours": [
      "Watching cartoons or nursery videos with a parent",
      "Tapping on a tablet for short play",
      "Mirroring what older siblings watch"
    ],
    "risks": [
      "Auto-play pulling toddlers into unsuitable content",
      "Screen use replacing sleep, talking or movement",
      "Accidental purchases inside ‘free’ apps"
    ],
    "settings": [
      "Turn off auto-play on YouTube and streaming apps",
      "Use a dedicated kids profile (YouTube Kids, Netflix Kids)",
      "Disable in-app purchases on the device"
    ],
    "conversation": [
      "Watch the first episode together so you know the show",
      "Name what they’re watching out loud — builds language"
    ],
    "redFlags": [
      "Distress when a screen is turned off, every time",
      "Sleep disruption after evening screen use"
    ],
    "screenTime": {
      "recommended": "The UK government’s March 2026 guidance for parents of under-fives recommends avoiding screens under age 2 except shared activities that support bonding, interaction and conversation. For ages 2–5, aim for no more than 1 hour a day. Choose slow-paced, age-appropriate content and use it together. Avoid screens at meals and during the hour before bed.",
      "ukContext": "This Department for Education and Department of Health and Social Care guidance replaces the assumption that government advice has no time target for young children. Screen-based assistive technology for children with special educational needs and disabilities should not be restricted in the same way. Separately, WHO’s global guidance does not recommend sedentary screen time for infants or one-year-olds, and recommends at most 1 hour for ages 2–4; less is better.",
      "sources": [
        {
          "label": "The health impacts of screen time — guide for clinicians and parents",
          "org": "Royal College of Paediatrics and Child Health",
          "region": "UK",
          "url": "https://www.rcpch.ac.uk/resources/health-impacts-screen-time-guide-clinicians-parents"
        },
        {
          "label": "New screen time guidance for parents of under-5s (26 March 2026)",
          "org": "Department for Education / Department of Health and Social Care",
          "region": "UK government",
          "url": "https://www.gov.uk/government/news/new-screen-time-guidance-for-parents-of-under-5s"
        },
        {
          "label": "Guidelines on physical activity, sedentary behaviour and sleep for children under 5",
          "org": "World Health Organization",
          "region": "Global (international guidance)",
          "url": "https://www.who.int/publications/i/item/9789241550536"
        },
        {
          "label": "Media and Young Minds (policy statement)",
          "org": "American Academy of Pediatrics",
          "region": "USA (international guidance)",
          "url": "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds"
        },
        {
          "label": "Screen time and young children — position statement",
          "org": "Canadian Paediatric Society",
          "region": "Canada (international guidance)",
          "url": "https://cps.ca/en/documents/position/screen-time-and-young-children"
        }
      ],
      "consequences": [
        "A small cross-sectional MRI study of 47 children aged 3–5 found associations between a screen-use measure, white-matter measures and some language/literacy assessments. It did not prove brain damage or establish effects in babies.",
        "An observational study of children aged 12–36 months linked more screen time with less parent–child talk. This does not prove that screens alone caused the difference.",
        "Shared conversation, play and sleep remain important parts of the day; follow the linked age-specific guidance and seek advice if development concerns you."
      ]
    },
    "deepDive": [
      {
        "type": "Report",
        "source": "World Health Organization",
        "title": "Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age",
        "url": "https://www.who.int/publications/i/item/9789241550536",
        "note": "WHO guidance on sedentary screen time, activity and sleep for infants and children aged 1–4."
      },
      {
        "type": "Study",
        "source": "JAMA Pediatrics (2020)",
        "title": "Associations Between Screen-Based Media Use and Brain White Matter Integrity in Preschool-Aged Children",
        "url": "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2754101",
        "note": "Cross-sectional study of 47 children aged 3–5; associations with MRI and cognitive measures, not proof of causal brain damage."
      },
      {
        "type": "Study",
        "source": "JAMA Pediatrics (2024)",
        "title": "Screen Time and Parent-Child Talk When Children Are Aged 12 to 36 Months",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10913002/",
        "note": "An observational study found more screen time was associated with less parent–child talk; it does not establish cause."
      },
      {
        "type": "Article",
        "source": "American Academy of Pediatrics — HealthyChildren.org",
        "title": "How to Make a Family Media Use Plan",
        "url": "https://www.healthychildren.org/English/family-life/Media/Pages/How-to-Make-a-Family-Media-Use-Plan.aspx"
      },
      {
        "type": "Video",
        "source": "TED — Dimitri Christakis, MD",
        "title": "Media and Children",
        "url": "https://www.youtube.com/watch?v=BoT7qH_uVNo",
        "note": "Paediatrician summarising the evidence on infant/toddler screen exposure."
      }
    ]
  },
  {
    "slug": "5-7",
    "range": "5–7",
    "headline": "First apps and games",
    "summary": "Kids start asking for their own logins and games. Set the defaults now — they’re much harder to claw back later.",
    "behaviours": [
      "Playing simple games (Roblox, Minecraft, mobile games)",
      "Watching YouTube for long stretches",
      "Asking to message grandparents on a parent’s phone"
    ],
    "risks": [
      "Stranger chat in games marketed as ‘for kids’",
      "Loud, fast, ad-heavy content shaping attention",
      "Accidental access to age-inappropriate videos"
    ],
    "settings": [
      "Use Apple Family Sharing or Google Family Link",
      "Turn on Screen Time / Digital Wellbeing limits",
      "Disable chat in Roblox account settings"
    ],
    "conversation": [
      "“If anyone you don’t know talks to you in a game, tell me — you won’t be in trouble.”"
    ],
    "redFlags": [
      "Secretive behaviour with the device",
      "Repeating phrases or slang that feel ‘older’ than them"
    ],
    "screenTime": {
      "recommended": "Choose suitable content and protect sleep, movement, play and family time. For a five-year-old, also read the government’s 2–5 guidance linked in the younger age guide. Avoid treating a timer as the only measure of healthy use.",
      "ukContext": "Separate family rules from formal guidance. Canada’s linked guideline suggests no more than 2 hours of recreational screen time for ages 5–17; this is not a UK rule or a quota specifically for social media. The UK activity guidance and international sleep advice address other parts of the day.",
      "sources": [
        {
          "label": "UK Chief Medical Officers’ physical activity guidelines (July 2026)",
          "org": "UK Chief Medical Officers",
          "region": "UK",
          "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report/uk-chief-medical-officers-physical-activity-guidelines"
        },
        {
          "label": "24-Hour Movement Guidelines, ages 5–17",
          "org": "Canadian Society for Exercise Physiology",
          "region": "Canada (international guidance)",
          "url": "https://csepguidelines.ca/guidelines/children-youth/"
        },
        {
          "label": "Sleep duration guidance",
          "org": "NHLBI / US National Institutes of Health",
          "region": "USA (international guidance)",
          "url": "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep"
        }
      ],
      "consequences": [
        "The 2019 Canadian developmental study followed children at ages 2, 3 and 5. More screen time at earlier ages was associated with lower later screening scores; it did not establish a two-hour threshold for 5–7-year-olds.",
        "A review covering school-aged children and adolescents found screen time associated with shorter or later sleep; it did not prove cause.",
        "Consider what screen time may be replacing: play, movement, conversation and sleep. These are practical questions, not a diagnosis."
      ]
    },
    "deepDive": [
      {
        "type": "Study",
        "source": "JAMA Pediatrics (2019)",
        "title": "Association Between Screen Time and Children's Performance on a Developmental Screening Test",
        "url": "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2722666",
        "note": "Canadian observational cohort at ages 2, 3 and 5; higher earlier screen time was associated with lower later developmental screening scores."
      },
      {
        "type": "Report",
        "source": "WHO European Region (2022)",
        "title": "Childhood Obesity Surveillance Initiative (COSI)",
        "url": "https://www.who.int/europe/initiatives/who-european-childhood-obesity-surveillance-initiative-(cosi)",
        "note": "WHO childhood obesity surveillance programme; this overview is not evidence for a particular causal effect of screens."
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4437561/"
      },
      {
        "type": "Article",
        "source": "Common Sense Media",
        "title": "The Common Sense Census: Media Use by Kids Age Zero to Eight",
        "url": "https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-kids-age-zero-to-eight-2020"
      },
      {
        "type": "Video",
        "source": "BBC Panorama",
        "title": "Smartphone Kids",
        "url": "https://www.bbc.co.uk/iplayer/episodes/b00wk6h0/panorama",
        "note": "Documentary on early phone/tablet use and behaviour."
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25193149/",
        "note": "Review of 67 studies; most found associations with shorter or later sleep. Causation was not established and results varied."
      }
    ]
  },
  {
    "slug": "8-10",
    "range": "8–10",
    "headline": "Group chats begin",
    "summary": "Friends’ devices change everything. Even without their own phone, kids this age are usually inside group chats.",
    "behaviours": [
      "WhatsApp / iMessage group chats with classmates",
      "Roblox, Fortnite, Minecraft with voice chat",
      "Watching gaming streamers on YouTube"
    ],
    "risks": [
      "Group-chat fallouts and exclusion",
      "First exposure to scary or sexual content",
      "Pressure to share embarrassing photos for ‘jokes’"
    ],
    "settings": [
      "Restrict messaging to known contacts only",
      "Turn off voice chat with strangers in games",
      "Enable SafeSearch on Google and YouTube"
    ],
    "conversation": [
      "Look at their chat list together once a week — make it routine, not a raid"
    ],
    "redFlags": [
      "Sudden mood shifts after using a device",
      "Asking strangely specific questions about adult topics"
    ],
    "screenTime": {
      "recommended": "Protect sleep, movement, schoolwork and offline relationships. Choose content and agree manageable boundaries together. A time target alone cannot establish whether use is healthy or harmful.",
      "ukContext": "Separate family rules from formal guidance. Canada’s linked guideline suggests no more than 2 hours of recreational screen time for ages 5–17; this is not a UK rule or a quota specifically for social media. The UK activity guidance and international sleep advice address other parts of the day.",
      "sources": [
        {
          "label": "UK Chief Medical Officers’ physical activity guidelines (July 2026)",
          "org": "UK Chief Medical Officers",
          "region": "UK",
          "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report/uk-chief-medical-officers-physical-activity-guidelines"
        },
        {
          "label": "24-Hour Movement Guidelines, ages 5–17",
          "org": "Canadian Society for Exercise Physiology",
          "region": "Canada (international guidance)",
          "url": "https://csepguidelines.ca/guidelines/children-youth/"
        },
        {
          "label": "Sleep duration guidance",
          "org": "NHLBI / US National Institutes of Health",
          "region": "USA (international guidance)",
          "url": "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep"
        }
      ],
      "consequences": [
        "Studies of school-aged children and adolescents often associate screen use with shorter or later sleep; there is no single verified “minutes lost per extra hour” estimate used here.",
        "Discuss unwanted contact and bullying in games and chats. A child’s experience matters more than assuming every group is harmful.",
        "Notice persistent changes in sleep, schoolwork or relationships and ask what is happening; one behaviour alone does not diagnose problematic gaming."
      ]
    },
    "deepDive": [
      {
        "type": "Report",
        "source": "EU Kids Online (2020)",
        "title": "EU Kids Online 2020: Survey results from 19 countries",
        "url": "https://www.lse.ac.uk/media-and-communications/research/research-projects/eu-kids-online/eu-kids-online-2020",
        "note": "European survey of children’s internet experiences; a report, not a causal test of group chats."
      },
      {
        "type": "Study",
        "source": "The Lancet Child & Adolescent Health (2018)",
        "title": "Associations between 24-hour movement behaviours and global cognition in US children (ABCD Study)",
        "url": "https://www.thelancet.com/journals/lanchi/article/PIIS2352-4642(18)30278-5/fulltext",
        "note": "US observational research about movement, sleep, screen time and cognition. It cannot establish cause or a universal screen-time threshold."
      },
      {
        "type": "Report",
        "source": "OECD PISA",
        "title": "21st-Century Readers: Developing Literacy Skills in a Digital World",
        "url": "https://www.oecd.org/en/publications/21st-century-readers_a83d84cb-en.html",
        "note": "OECD report about literacy in a digital world; PISA concerns 15-year-olds, not a direct study of 8–10-year-olds."
      },
      {
        "type": "Article",
        "source": "Internet Matters",
        "title": "Online gaming advice hub",
        "url": "https://www.internetmatters.org/resources/online-gaming-advice/",
        "note": "Practical UK guidance on Roblox, Fortnite and Minecraft chat risks."
      },
      {
        "type": "Video",
        "source": "Childnet International",
        "title": "Trust Me — critical thinking online",
        "url": "https://www.childnet.com/resources/trust-me/",
        "note": "Short films for 7–11s on misleading content and online manipulation."
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25193149/",
        "note": "Review of 67 studies; most found associations with shorter or later sleep. Causation was not established and results varied."
      }
    ]
  },
  {
    "slug": "11-13",
    "range": "11–13",
    "headline": "First phone & secondary school",
    "summary": "The biggest jump. Social comparison, group chats and late-night scrolling all start here.",
    "behaviours": [
      "TikTok, Snapchat, Instagram (often under-age)",
      "Sharing location with friends",
      "Late-night messaging"
    ],
    "risks": [
      "Body image pressure and comparison spirals",
      "Snap streaks driving compulsive use",
      "Strangers sliding into DMs"
    ],
    "settings": [
      "Private accounts on every social app",
      "Disable ‘suggest my account to others’",
      "No phones in the bedroom overnight"
    ],
    "conversation": [
      "Agree a family media plan together — write it down",
      "Promise no-blame reporting if anything weird happens"
    ],
    "redFlags": [
      "Hiding the screen when you walk in",
      "New ‘older’ online friends you’ve never heard of"
    ],
    "screenTime": {
      "recommended": "Protect sleep, movement, schoolwork and offline relationships. The US sleep guidance linked below recommends 9–12 hours for ages 6–12 and 8–10 hours for ages 13–18; needs change across this age band. Agree a screen-free wind-down and review how your child is coping.",
      "ukContext": "Separate family rules from formal guidance. Canada’s linked guideline suggests no more than 2 hours of recreational screen time for ages 5–17; this is not a UK rule or a quota specifically for social media. The UK activity guidance and international sleep advice address other parts of the day.",
      "sources": [
        {
          "label": "UK Chief Medical Officers’ physical activity guidelines (July 2026)",
          "org": "UK Chief Medical Officers",
          "region": "UK",
          "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report/uk-chief-medical-officers-physical-activity-guidelines"
        },
        {
          "label": "24-Hour Movement Guidelines, ages 5–17",
          "org": "Canadian Society for Exercise Physiology",
          "region": "Canada (international guidance)",
          "url": "https://csepguidelines.ca/guidelines/children-youth/"
        },
        {
          "label": "Sleep duration guidance",
          "org": "NHLBI / US National Institutes of Health",
          "region": "USA (international guidance)",
          "url": "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep"
        }
      ],
      "consequences": [
        "Screen use and sleep are associated in many studies, but an exact one-hour loss should not be assumed for every child with a phone in their bedroom.",
        "The US Surgeon General’s advisory describes both potential benefits and risks of social media and limitations in the evidence. It cannot predict an individual child’s outcome.",
        "Ask about upsetting content, appearance comparisons and unwanted contact; seek support if distress persists."
      ]
    },
    "deepDive": [
      {
        "type": "Report",
        "source": "US Surgeon General (2023)",
        "title": "Social Media and Youth Mental Health — Advisory",
        "url": "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html",
        "note": "Landmark advisory: heavy use ≈ doubled risk of depression and anxiety symptoms."
      },
      {
        "type": "Study",
        "source": "JAMA Psychiatry (2019)",
        "title": "Associations Between Time Spent Using Social Media and Internalizing and Externalizing Problems Among US Youth",
        "url": "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2749480"
      },
      {
        "type": "Study",
        "source": "Sleep Health (2018)",
        "title": "Adolescent sleep and the impact of technology use before sleep",
        "url": "https://www.sleephealthjournal.org/article/S2352-7218(18)30055-0/fulltext",
        "note": "Phones in bedrooms cost teens ~1 hour of sleep per night on average."
      },
      {
        "type": "Book",
        "source": "Jonathan Haidt — The Anxious Generation",
        "title": "After Babel — research summaries",
        "url": "https://www.afterbabel.com/",
        "note": "Free deep-dive essays behind the bestselling book on smartphones and adolescent mental health."
      },
      {
        "type": "Video",
        "source": "TED — Jean Twenge",
        "title": "iGen: What today's super-connected kids tell us about ourselves",
        "url": "https://www.youtube.com/watch?v=mDPGcMlPyhI"
      },
      {
        "type": "Report",
        "source": "Ofcom (UK, 2024)",
        "title": "Children and parents: media use and attitudes",
        "url": "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/children-and-parents-media-use-and-attitudes-report-2024/"
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25193149/",
        "note": "Review of 67 studies; most found associations with shorter or later sleep. Causation was not established and results varied."
      }
    ]
  },
  {
    "slug": "14-15",
    "range": "14–15",
    "headline": "Identity online",
    "summary": "Teens are forming identity in public. Safety here is less about blocks and more about trust and conversation.",
    "behaviours": [
      "Posting publicly, building a following",
      "Private messaging with romantic interests",
      "Gaming communities (Discord, Twitch)"
    ],
    "risks": [
      "Sharing nudes, or being pressured into it",
      "Sextortion — a stranger poses as a peer, obtains an image, then demands money or more images",
      "AI deepfake nudes made from ordinary photos taken from social accounts",
      "Intimate-image abuse: images shared on without consent (a criminal offence in the UK)",
      "Algorithmic rabbit-holes (extreme diet, self-harm, misogyny, hate)"
    ],
    "settings": [
      "Two-factor auth on every account",
      "Review who can DM them on each platform",
      "Lock down photo-sharing: private accounts, no public face photos",
      "Discuss ‘nothing leaves the phone you wouldn’t want printed’"
    ],
    "conversation": [
      "Make it clear: if a nude is leaked or faked, you will help — no punishment, no phone confiscation",
      "Explain sextortion calmly: stop replying, don't pay, tell a trusted adult and report. Do not copy or forward sexual images of anyone who may be under 18; you do not need evidence before asking police for help.",
      "Explain that AI-made fake nudes happen to people who never sent anything — and that reporting works (Report Remove, IWF)",
      "Talk about consent and screenshots"
    ],
    "redFlags": [
      "Sudden withdrawal, secrecy, sleep loss",
      "Mentions of someone older they’ve ‘only met online’"
    ],
    "screenTime": {
      "recommended": "Protect sleep, movement, schoolwork and offline relationships. Choose content and agree manageable boundaries together. A time target alone cannot establish whether use is healthy or harmful.",
      "ukContext": "Separate family rules from formal guidance. Canada’s linked guideline suggests no more than 2 hours of recreational screen time for ages 5–17; this is not a UK rule or a quota specifically for social media. The UK activity guidance and international sleep advice address other parts of the day.",
      "sources": [
        {
          "label": "UK Chief Medical Officers’ physical activity guidelines (July 2026)",
          "org": "UK Chief Medical Officers",
          "region": "UK",
          "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report/uk-chief-medical-officers-physical-activity-guidelines"
        },
        {
          "label": "24-Hour Movement Guidelines, ages 5–17",
          "org": "Canadian Society for Exercise Physiology",
          "region": "Canada (international guidance)",
          "url": "https://csepguidelines.ca/guidelines/children-youth/"
        },
        {
          "label": "Sleep duration guidance",
          "org": "NHLBI / US National Institutes of Health",
          "region": "USA (international guidance)",
          "url": "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep"
        }
      ],
      "consequences": [
        "The 2019 English study examined frequency of social-media use, not a three-hour threshold. Associations with distress and wellbeing varied by sex; sleep, cyberbullying and activity accounted for part of the associations, especially among girls. It did not prove cause.",
        "Amnesty’s 2023 TikTok investigation concerned test accounts and self-harm-related recommendations. Historical experiments do not establish what every teenager sees today.",
        "Sexual images, including AI fakes, can be reported through the linked services. Do not copy or forward sexual images of anyone who may be under 18; ask police about existing material."
      ]
    },
    "deepDive": [
      {
        "type": "Study",
        "source": "The Lancet Child & Adolescent Health (2019)",
        "title": "Roles of cyberbullying, sleep, and physical activity in social-media and wellbeing associations",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31420213/",
        "note": "English longitudinal data, ages 13–16. Exposure was frequency of use, not hours; mediation differed between girls and boys."
      },
      {
        "type": "Report",
        "source": "Internet Watch Foundation (2023 report)",
        "title": "IWF annual report 2023",
        "url": "https://www.iwf.org.uk/annual-report-2023/",
        "note": "Reports handled by the organisation are not a population prevalence estimate or a count of all UK cases."
      },
      {
        "type": "Article",
        "source": "Internet Watch Foundation / NSPCC",
        "title": "Report Remove — get a nude image of yourself taken off the internet",
        "url": "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/report-remove/",
        "note": "UK service for under-18s; works for real and AI-generated images."
      },
      {
        "type": "Report",
        "source": "Internet Watch Foundation (2024)",
        "title": "AI-generated child sexual abuse imagery — update report",
        "url": "https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/",
        "note": "How ‘nudify’ apps are being used against real children."
      },
      {
        "type": "Article",
        "source": "Police.uk",
        "title": "Sextortion: what to do if you or your child is targeted",
        "url": "https://www.police.uk/advice/advice-and-information/online-safety/online-safety/sextortion/sextortion-reporting-it-to-us/",
        "note": "Report without waiting to collect evidence. Do not copy or forward sexual images of anyone who may be under 18."
      },
      {
        "type": "Report",
        "source": "Amnesty International (2023)",
        "title": "Driven into the Darkness: How TikTok's For You feed encourages self-harm and suicidal ideation",
        "url": "https://www.amnesty.org/en/documents/pol40/7350/2023/en/",
        "note": "Algorithm audit of teen test accounts."
      },
      {
        "type": "Article",
        "source": "APA (American Psychological Association)",
        "title": "Health Advisory on Social Media Use in Adolescence",
        "url": "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use"
      },
      {
        "type": "Video",
        "source": "Netflix",
        "title": "The Social Dilemma",
        "url": "https://www.thesocialdilemma.com/",
        "note": "Documentary on persuasive design and teen mental health."
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25193149/",
        "note": "Review of 67 studies; most found associations with shorter or later sleep. Causation was not established and results varied."
      }
    ]
  },
  {
    "slug": "16-17",
    "range": "16–17",
    "headline": "Independence & risk",
    "summary": "Almost adults online. The risks shift to scams, identity, finances and digital footprint.",
    "behaviours": [
      "Banking apps, BNPL, crypto curiosity",
      "Job and uni applications online",
      "Adult relationships and dating apps (often under-age)"
    ],
    "risks": [
      "Money-mule recruitment — being paid to let money pass through their bank account (a criminal offence in the UK)",
      "Fake job and ‘easy money’ adverts on TikTok, Snapchat, Telegram and WhatsApp",
      "Student-finance and university scams: fake Student Loans Company texts, bogus accommodation deposits",
      "Investment, crypto and trading-app scams, often promoted by influencers",
      "Online gambling and gambling-style mechanics (loot boxes, spread betting, ‘prediction’ apps)",
      "Romance scams and deepfake extortion",
      "Permanent digital footprint affecting jobs and uni"
    ],
    "settings": [
      "Strong, unique passwords + a password manager",
      "Lock down old social accounts they’ve forgotten",
      "Set spending limits and turn on transaction alerts in banking apps",
      "Use GAMSTOP self-exclusion and bank gambling blocks if betting apps appear"
    ],
    "conversation": [
      "Talk about what they’d do if blackmailed online",
      "“No legitimate job asks to use your bank account” — explain money muling and that it can freeze their account for years",
      "Agree that anything urgent about money or student finance gets checked with you first",
      "Show them Action Fraud and how to report a scam",
      "Agree it’s fine to call you for a ride — no questions"
    ],
    "redFlags": [
      "Unexplained money in or out",
      "Talk of ‘easy money’ opportunities online",
      "New payment or crypto apps they won't discuss"
    ],
    "screenTime": {
      "recommended": "Protect sleep, movement, schoolwork and offline relationships. Choose content and agree manageable boundaries together. A time target alone cannot establish whether use is healthy or harmful.",
      "ukContext": "Separate family rules from formal guidance. Canada’s linked guideline suggests no more than 2 hours of recreational screen time for ages 5–17; this is not a UK rule or a quota specifically for social media. The UK activity guidance and international sleep advice address other parts of the day.",
      "sources": [
        {
          "label": "UK Chief Medical Officers’ physical activity guidelines (July 2026)",
          "org": "UK Chief Medical Officers",
          "region": "UK",
          "url": "https://www.gov.uk/government/publications/physical-activity-guidelines-uk-chief-medical-officers-report/uk-chief-medical-officers-physical-activity-guidelines"
        },
        {
          "label": "24-Hour Movement Guidelines, ages 5–17",
          "org": "Canadian Society for Exercise Physiology",
          "region": "Canada (international guidance)",
          "url": "https://csepguidelines.ca/guidelines/children-youth/"
        },
        {
          "label": "Sleep duration guidance",
          "org": "NHLBI / US National Institutes of Health",
          "region": "USA (international guidance)",
          "url": "https://www.nhlbi.nih.gov/health/sleep/how-much-sleep"
        }
      ],
      "consequences": [
        "Research and advisories describe associations between some patterns of social-media use and poorer wellbeing, with important differences between people. A time threshold is not a diagnosis.",
        "Never let someone use your bank account to move unexplained money. If you suspect a scam, contact your bank promptly and use the official fraud-reporting service.",
        "Other people can copy or share online posts. Discuss consent and privacy without suggesting that being targeted is the child’s fault."
      ]
    },
    "deepDive": [
      {
        "type": "Article",
        "source": "Report Fraud / City of London Police",
        "title": "Report Fraud replaces Action Fraud",
        "url": "https://www.reportfraud.police.uk/news/report-fraud-service-goes-live/",
        "note": "England, Wales and Northern Ireland: Report Fraud. Scotland: Police Scotland on 101. Contact your bank promptly about suspected fraud."
      },
      {
        "type": "Article",
        "source": "Cifas",
        "title": "Money mules — how young people are recruited and what it costs them",
        "url": "https://www.cifas.org.uk/insight/fraud-risk-focus-blog/money-mules",
        "note": "Fraud-prevention guidance about recruitment and consequences; outcomes depend on the individual circumstances."
      },
      {
        "type": "Article",
        "source": "Take Five to Stop Fraud (UK Finance)",
        "title": "Stop. Challenge. Protect. — spotting job, investment and impersonation scams",
        "url": "https://www.takefive-stopfraud.org.uk/",
        "note": "UK banking-industry campaign with scripts for checking any money request."
      },
      {
        "type": "Article",
        "source": "Student Loans Company / GOV.UK",
        "title": "Spotting student finance scams",
        "url": "https://www.gov.uk/government/news/student-finance-scams-what-to-look-out-for",
        "note": "Fake SLC texts and emails spike around each term's payment dates."
      },
      {
        "type": "Report",
        "source": "Financial Conduct Authority",
        "title": "ScamSmart — investment and crypto scam warnings",
        "url": "https://www.fca.org.uk/scamsmart",
        "note": "Check any investment firm against the FCA register before money moves."
      },
      {
        "type": "Report",
        "source": "UK Gambling Commission (2024)",
        "title": "Young People and Gambling Survey",
        "url": "https://www.gamblingcommission.gov.uk/statistics-and-research/publication/young-people-and-gambling-2024",
        "note": "Survey of young people’s gambling activity; a survey does not establish that loot boxes cause problem gambling."
      },
      {
        "type": "Article",
        "source": "GamCare / GAMSTOP",
        "title": "Free UK gambling support and self-exclusion",
        "url": "https://www.gamcare.org.uk/",
        "note": "National GamCare helpline 0808 8020 133; GAMSTOP blocks UK-licensed gambling sites."
      },
      {
        "type": "Report",
        "source": "FBI / IC3",
        "title": "Financial Sextortion Targeting Minors — Public Service Announcement",
        "url": "https://www.ic3.gov/Media/Y2023/PSA230118",
        "note": "Tactics used against teen boys via Instagram and Snapchat."
      },
      {
        "type": "Study",
        "source": "Preventive Medicine Reports (2018)",
        "title": "Associations between screen time and lower psychological well-being among children and adolescents",
        "url": "https://www.sciencedirect.com/science/article/pii/S2211335518301827",
        "note": "Twenge & Campbell — large US dataset; an association, not a causal test."
      },
      {
        "type": "Article",
        "source": "Pew Research Center",
        "title": "Teens, Social Media and Technology 2024",
        "url": "https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/"
      },
      {
        "type": "Study",
        "source": "Sleep Medicine Reviews (2015)",
        "title": "Screen time and sleep among school-aged children and adolescents: a systematic literature review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25193149/",
        "note": "Review of 67 studies; most found associations with shorter or later sleep. Causation was not established and results varied."
      }
    ]
  }
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
  ukAgeAssurance: "Yes" | "No" | "Partial" | "Not established";
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
    "slug": "telegram",
    "name": "Telegram",
    "category": "Messaging",
    "minAge": "18+ in the UK",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "18 in the UK",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "Telegram terms require UK users to be at least 18. Enforcement effectiveness has not been independently verified.",
    "why": "Messaging, large groups and broadcast channels.",
    "risks": [
      "Unwanted content in public channels",
      "Contact from people not known offline",
      "Scams or pressure to share money and information"
    ],
    "settings": [
      "Phone Number: Nobody",
      "Who can add me to groups: My Contacts",
      "Disable auto-download of media",
      "Sensitive Content filter on"
    ],
    "detail": {
      "overview": "Telegram mixes private chats, huge public groups (up to 200,000 members) and one-way ‘channels’. Most chats are NOT end-to-end encrypted by default — only ‘Secret Chats’ are.",
      "ageRationale": "Telegram’s current terms require users in the UK, EU countries and Australia to be at least 18 to sign up. App-store ratings are separate from account eligibility.",
      "evidence": [
        {
          "claim": "Telegram sets a minimum sign-up age of 18 in the UK.",
          "publisher": "Telegram",
          "title": "Terms of Service",
          "year": "2026",
          "url": "https://telegram.org/tos",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Explain the UK 18+ rule. If a child already uses Telegram, discuss contacts calmly and get help for threats or exploitation.",
        "Turn off auto-download so explicit images/videos don’t land in their gallery automatically."
      ],
      "settingsHowTo": [
        {
          "label": "Telegram privacy & security settings",
          "url": "https://telegram.org/faq#q-what-are-your-thoughts-on-internet-privacy"
        },
        {
          "label": "Internet Matters: Telegram parents’ guide",
          "url": "https://www.internetmatters.org/hub/news-blogs/what-is-telegram-app-what-parents-need-to-know/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Telegram — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+Telegram+parents+guide"
        },
        {
          "title": "Search: How to lock down Telegram privacy settings",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Telegram+privacy+settings+parents"
        }
      ]
    }
  },
  {
    "slug": "tiktok",
    "name": "TikTok",
    "category": "Social",
    "minAge": "13+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Age-dependent features and parental controls exist. A source review does not establish whether every account is correctly aged.",
    "why": "Short videos, trends, humour. The default ‘scrollable’ app for many teens.",
    "risks": [
      "Unwanted or upsetting recommendations",
      "Appearance comparison or dieting content",
      "Unwanted contact through available messaging or comments"
    ],
    "settings": [
      "Private account",
      "Restricted Mode",
      "Disable DMs from non-friends",
      "Family Pairing"
    ],
    "detail": {
      "overview": "TikTok recommends short videos through its For You feed. Watch history and other interactions can influence recommendations. Family Pairing offers controls, including keyword filters, but does not guarantee that every video will be suitable.",
      "ageRationale": "TikTok sets age-dependent rules for accounts and features. Use the correct birthday and review Family Pairing together. An account minimum is not a clinical recommendation about suitability.",
      "evidence": [
        {
          "claim": "In a 2022 test, CCDH researchers used accounts registered as 13-year-olds and engaged with body-image and mental-health content. Some received suicide or eating-disorder recommendations within minutes. This is historical test-account research, not a measure of every teenager’s feed today.",
          "publisher": "Center for Countering Digital Hate",
          "title": "Deadly by Design",
          "year": "2022",
          "url": "https://counterhate.com/research/deadly-by-design/",
          "type": "Charity / NGO"
        },
        {
          "claim": "In September 2023, Ireland’s DPC announced €345 million in administrative fines over TikTok’s handling of children’s personal data during July–December 2020. The findings included public-by-default settings; they do not describe today’s defaults.",
          "publisher": "Data Protection Commission (Ireland)",
          "title": "DPC announces €345 million fine of TikTok",
          "year": "2023",
          "url": "https://www.dataprotection.ie/en/news-media/press-releases/DPC-announces-345-million-euro-fine-of-TikTok",
          "type": "Regulator"
        },
        {
          "claim": "Family Pairing includes keyword filtering for For You and Following feeds; TikTok later announced parent blocking and additional visibility tools. Availability can depend on region and rollout.",
          "publisher": "TikTok",
          "title": "Family Pairing content filtering",
          "url": "https://newsroom.tiktok.com/tiktok-family-paring-and-youth-council?lang=en-150",
          "year": "2023",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Look at the For You feed together and discuss what they enjoy or want to see less of.",
        "Agree when to stop using devices so sleep and other activities have time too."
      ],
      "settingsHowTo": [
        {
          "label": "TikTok Family Pairing guide",
          "url": "https://www.tiktok.com/safety/en/guardians-guide/"
        },
        {
          "label": "Internet Matters: TikTok safety guide",
          "url": "https://www.internetmatters.org/parental-controls/social-media/tiktok-privacy-and-safety-settings/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: TikTok Family Pairing — set up parental controls",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+TikTok+Family+Pairing+parental+controls"
        },
        {
          "title": "Search: How to make a TikTok account private",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=TikTok+official+how+to+make+account+private"
        },
        {
          "title": "Search: TikTok parents’ guide — what you need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+TikTok+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "New study warns about impact of TikTok on adolescents",
        "channel": "Good Morning America (ABC News)",
        "youtubeId": "aFIpQLYMGXY",
        "note": "Reports on National Institutes of Health research into how short-video feeds affect the developing teenage brain."
      }
    }
  },
  {
    "slug": "snapchat",
    "name": "Snapchat",
    "category": "Messaging",
    "minAge": "13+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Age checks apply to 18+ content and some features; account age is still self-declared at sign-up.",
    "why": "Photo messages that ‘disappear’ and Snap Map for live location sharing.",
    "risks": [
      "False sense of privacy (screenshots exist)",
      "Live location with anyone added",
      "Streaks driving compulsive use"
    ],
    "settings": [
      "Ghost Mode on Snap Map",
      "Contact Me: Friends only",
      "Family Center"
    ],
    "detail": {
      "overview": "Snapchat is built around disappearing photos, ‘Snap streaks’ that reward daily exchanges, and Snap Map which broadcasts a user’s live location to chosen friends.",
      "ageRationale": "Minimum age 13 under Snap’s terms. The disappearing-message design and live location features are why regulators and child-safety charities treat it as higher risk than the age limit suggests.",
      "evidence": [
        {
          "claim": "Family Centre requires the teen to accept an invitation and provides oversight without showing private conversation content.",
          "publisher": "Snapchat",
          "title": "Family Centre",
          "url": "https://parents.snapchat.com/family-center?lang=en-GB",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Open Snap Map together and switch on Ghost Mode — it takes about 30 seconds.",
        "Talk about screenshots: ‘disappearing’ doesn’t mean gone. Anything sent can be saved."
      ],
      "settingsHowTo": [
        {
          "label": "Snapchat: current Family Centre setup and features",
          "url": "https://parents.snapchat.com/family-center?lang=en-GB"
        },
        {
          "label": "Snapchat Family Center",
          "url": "https://parents.snapchat.com/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Snapchat Family Center walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Snapchat+Family+Center+how+to+set+up"
        },
        {
          "title": "Search: How to turn on Ghost Mode on Snap Map",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Snap+Map+Ghost+Mode+parental+guide"
        },
        {
          "title": "Search: Snapchat — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Snapchat+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "New report highlights Snapchat's harmful impact on kids",
        "channel": "9NEWS (NBC affiliate)",
        "youtubeId": "hgYhGoUQFWM",
        "note": "Features Jonathan Haidt (author of The Anxious Generation) on Snapchat's addictive design and exposure of young users to harmful material."
      }
    }
  },
  {
    "slug": "instagram",
    "name": "Instagram",
    "category": "Social",
    "minAge": "13+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Meta uses facial age estimation (Yoti) and ID checks to confirm teen accounts in the UK.",
    "why": "Photos, reels, stories. Heavy on social comparison.",
    "risks": [
      "Public profiles inviting DMs",
      "Reels algorithm rabbit holes",
      "Hidden ‘close friends’ accounts"
    ],
    "settings": [
      "Private account",
      "Sensitive Content Control: Less",
      "Hidden Words filter",
      "Family Center supervision"
    ],
    "detail": {
      "overview": "Instagram combines a photo grid, Stories, and an algorithmic Reels feed. ‘Teen Accounts’ are now default-private for under-18s, but adult content, DMs and comparison pressure remain core issues.",
      "ageRationale": "Minimum age 13. Meta’s own internal research, leaked in 2021, documented appearance-related harm to teenage girls — a key driver of subsequent Teen Account safeguards.",
      "evidence": [
        {
          "claim": "Meta announced expanded Teen Account content settings and age-assurance measures in June 2026; rollout announcements are not independent tests of effectiveness.",
          "publisher": "Meta",
          "title": "Strengthening Teen Accounts",
          "url": "https://about.fb.com/news/2026/06/strengthening-teen-accounts-with-new-safety-updates-on-instagram-and-facebook/",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "US Surgeon General formally advised that social media use including Instagram poses a ‘profound risk of harm’ to youth mental health.",
          "publisher": "US Surgeon General",
          "title": "Social Media and Youth Mental Health Advisory",
          "year": "2023",
          "url": "https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html",
          "type": "Health authority"
        }
      ],
      "parentTalkingPoints": [
        "Sit together and switch the account to Teen Account / private — and check whether a ‘finsta’ also exists.",
        "Mute, don’t unfollow: muting accounts that trigger comparison spirals avoids social fallout."
      ],
      "settingsHowTo": [
        {
          "label": "Instagram Family Center",
          "url": "https://familycenter.instagram.com/"
        },
        {
          "label": "Internet Matters: Instagram safety guide",
          "url": "https://www.internetmatters.org/parental-controls/social-media/instagram-privacy-and-safety-settings/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Instagram Teen Accounts & supervision setup",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Instagram+Teen+Accounts+supervision+setup"
        },
        {
          "title": "Search: How to make Instagram private + hide story",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+Instagram+private+account"
        },
        {
          "title": "Search: Instagram parents’ ultimate guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Instagram+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "Facebook Whistleblower Frances Haugen: The 60 Minutes Interview",
        "channel": "60 Minutes (CBS News)",
        "youtubeId": "_Lx5VmAdZSI",
        "note": "Frances Haugen explains internal Meta research showing Instagram worsens body-image and mental-health outcomes for teenage girls."
      }
    }
  },
  {
    "slug": "youtube",
    "name": "YouTube",
    "category": "Video",
    "minAge": "13+ (Kids: under 13)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13 independently; supervised options for younger children",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Google applies age estimation in the UK and asks for ID or a card for age-restricted content.",
    "why": "Where most kids actually watch ‘TV’. Includes gaming streams and shorts.",
    "risks": [
      "Auto-play into unrelated content",
      "Shorts — fast, addictive feed",
      "Comments containing strangers"
    ],
    "settings": [
      "Choose the appropriate supervised account",
      "Review Shorts feed limits",
      "Review Autoplay",
      "Check content settings and device-specific controls"
    ],
    "detail": {
      "overview": "Standard YouTube is 13+, with a separate YouTube Kids app and Supervised Account option for younger children. Shorts (vertical short videos) behave more like TikTok than traditional YouTube.",
      "ageRationale": "Independent accounts and parent-managed experiences have different eligibility rules. For a younger child, review YouTube Kids or a supervised kid account; a content setting is not an account-age rule.",
      "evidence": [
        {
          "claim": "Parents can set up supervised kid accounts for children below 13 or the relevant local age.",
          "publisher": "YouTube Help",
          "title": "Set up supervised kid accounts",
          "url": "https://support.google.com/youtube/answer/10314074?hl=en",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "In 2019, Google and YouTube agreed to pay $170 million to settle FTC and New York allegations about collecting children’s information without parental consent. This is a historical enforcement action.",
          "publisher": "Federal Trade Commission (US)",
          "title": "Google and YouTube Will Pay Record $170 Million for Alleged Violations of COPPA",
          "year": "2019",
          "url": "https://www.ftc.gov/news-events/news/press-releases/2019/09/google-youtube-will-pay-record-170-million-alleged-violations-childrens-privacy-law",
          "type": "Regulator"
        }
      ],
      "parentTalkingPoints": [
        "Review Autoplay and the current Shorts feed limit together.",
        "For younger children, consider YouTube Kids or a supervised kid account on regular YouTube."
      ],
      "settingsHowTo": [
        {
          "label": "Google Family Link",
          "url": "https://families.google/familylink/"
        },
        {
          "label": "YouTube: Supervised experiences for kids and teens",
          "url": "https://support.google.com/youtubekids/answer/10314940"
        },
        {
          "label": "Current supervised content settings",
          "url": "https://support.google.com/youtube/answer/10315823?hl=en"
        },
        {
          "label": "Supervised controls and Shorts limits",
          "url": "https://support.google.com/youtubekids/answer/13877231?hl=en-GB"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Set up a Supervised YouTube account",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Google+supervised+YouTube+account+setup"
        },
        {
          "title": "Search: How to turn off autoplay on YouTube",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=YouTube+turn+off+autoplay+parents"
        },
        {
          "title": "Search: YouTube & YouTube Kids — parents’ guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+YouTube+Kids+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "The nightmare videos of children's YouTube — and what's wrong with the internet today",
        "channel": "TED",
        "youtubeId": "v9EKV2nSU8w",
        "note": "Writer James Bridle's widely-cited talk on how YouTube's recommendation system surfaces disturbing content to children."
      }
    }
  },
  {
    "slug": "whatsapp",
    "name": "WhatsApp",
    "category": "Messaging",
    "minAge": "13+ independently; parent-managed accounts for younger users where available",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13 independently; younger parent-managed accounts where available",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "WhatsApp now documents parent-managed accounts for under-13s. Check availability in your app and region; this review has not tested the UK setup flow.",
    "why": "School class group chats live here. Used by every age.",
    "risks": [
      "Being added to groups by strangers",
      "Forwarded misinformation",
      "Disappearing messages hiding bullying"
    ],
    "settings": [
      "Groups: My Contacts",
      "Last Seen: Contacts",
      "Two-step verification"
    ],
    "detail": {
      "overview": "End-to-end encrypted messenger. The risk for children is rarely the encryption itself — it’s group chats with classmates that escalate quickly, and forwarded content from outside the group.",
      "ageRationale": "Distinguish an independent account from a parent-managed account. WhatsApp now publishes specific rules and privacy information for parent-created accounts for under-13s (or the higher local minimum). Check the current setup guidance and availability rather than entering a false birthday.",
      "evidence": [
        {
          "claim": "WhatsApp documents parent-managed accounts for children below the usual minimum age.",
          "publisher": "WhatsApp",
          "title": "Privacy disclosure for parent-managed accounts",
          "url": "https://www.whatsapp.com/legal/privacy-disclosure-for-parent-managed-accounts",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Agree that they can leave any group, any time, no questions asked — and you’ll back them up with other parents.",
        "Set ‘Groups: My Contacts’ so strangers can’t add them to chats."
      ],
      "settingsHowTo": [
        {
          "label": "WhatsApp parent-managed accounts",
          "url": "https://www.whatsapp.com/security/parent-managed-accounts"
        },
        {
          "label": "WhatsApp privacy settings",
          "url": "https://faq.whatsapp.com/3196575617535613"
        },
        {
          "label": "NSPCC Net Aware: WhatsApp",
          "url": "https://www.net-aware.org.uk/networks/whatsapp/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: WhatsApp privacy & group settings walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=WhatsApp+privacy+settings+how+to"
        },
        {
          "title": "Search: WhatsApp for parents — what you need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+WhatsApp+parents+guide"
        },
        {
          "title": "Search: Two-step verification on WhatsApp",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=WhatsApp+two+step+verification+setup"
        }
      ],
      "riskVideo": {
        "title": "Parental controls for messaging & devices — real advice from a mum of two",
        "channel": "Internet Matters",
        "youtubeId": "zplUsBQeV_8",
        "note": "Covers messaging-app risks including WhatsApp group chats."
      }
    }
  },
  {
    "slug": "discord",
    "name": "Discord",
    "category": "Messaging",
    "minAge": "13+ (18+ content now verified)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "UK users must pass facial age estimation or ID to view 18+ content; teen defaults apply otherwise.",
    "why": "Voice and text servers, especially for gamers and fandoms.",
    "risks": [
      "Public servers with adult content — UK users must now pass an age check to see 18+ material, but the check is beatable",
      "Strangers in voice channels and DM requests from server members",
      "Scam, crypto and 'free Nitro' phishing DMs, plus sextortion attempts that move to private chat"
    ],
    "settings": [
      "UK: age-assurance check (face scan or ID) now gates 18+ content — check whether the account has been verified and how",
      "Safe Direct Messaging defaults to filtering for everyone; under-18 accounts get the strictest defaults automatically",
      "Set DM requests from server members to off and friend requests to 'Friends of friends' or 'No one'",
      "Link your account in Discord Family Centre to see their servers, friends and messages (not message content)"
    ],
    "detail": {
      "overview": "Discord is organised into 'servers' — anything from a 5-friend chat to a 200,000-member public community, with voice channels, DMs and file sharing built in. Two big changes matter for parents. First, under the UK Online Safety Act every UK account — new and existing — now gets age-appropriate default settings, including automatic filtering of sensitive content, and anything flagged 18+ (age-restricted channels, servers and explicit media) is locked until the user proves they're an adult, usually via a facial age scan or ID. Second, Discord has announced a global 'teen-by-default' model where unverified accounts worldwide get the teen experience; after a privacy backlash over its verification vendors, the global rollout was pushed back to the second half of 2026 — but the UK rules are already in force.",
      "ageRationale": "Discord says UK users receive protective defaults. Confirmed adult status is required to access age-restricted spaces or change certain content and message-request settings. Its filters cover images and videos, not messages, voice or calls. Platform documentation describes policy, not independently measured effectiveness. This review has not established that a VPN reliably bypasses these checks.",
      "evidence": [
        {
          "claim": "Discord says UK users receive protective defaults. Confirmed adult status is required to access age-restricted spaces or change certain content and message-request settings. Its filters cover images and videos, not messages, voice or calls.",
          "publisher": "Discord",
          "title": "Current UK age-assurance guidance",
          "year": "2026",
          "url": "https://support.discord.com/hc/en-us/articles/33362401287959-Age-Assurance-for-UK-Users",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Ask which servers they're in and who runs them — public vs friends-only matters more than the app itself.",
        "Set up Family Centre together rather than in secret — you see servers and friends, not message content, which keeps trust intact.",
        "Review privacy and contact settings together. If unwanted content appears, help them report it without blaming them or assuming how it got through."
      ],
      "settingsHowTo": [
        {
          "label": "Discord: Age Assurance for UK Users (official)",
          "url": "https://support.discord.com/hc/en-us/articles/33362401287959-Age-Assurance-for-UK-Users"
        },
        {
          "label": "Discord: How to complete age assurance (official)",
          "url": "https://support.discord.com/hc/en-us/articles/30326565624343-How-to-Complete-Age-Assurance-on-Discord"
        },
        {
          "label": "Discord Family Centre",
          "url": "https://discord.com/family-center"
        },
        {
          "label": "Discord safety: Parent hub",
          "url": "https://discord.com/safety-parents"
        },
        {
          "label": "Ofcom: age checks for online safety — what you need to know",
          "url": "https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-for-online-safety--what-you-need-to-know-as-a-user"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Discord Family Centre — setup walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Discord+Family+Center+setup"
        },
        {
          "title": "Search: Discord UK age verification explained",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Discord+UK+age+verification+Online+Safety+Act"
        },
        {
          "title": "Search: Discord — parents' ultimate guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Discord+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "Florida investigates Discord app over child safety concerns",
        "channel": "WPLG Local 10 News (ABC affiliate)",
        "youtubeId": "nEwGEoLYiBA",
        "note": "News report on broad child-safety concerns around Discord servers and DMs."
      }
    }
  },
  {
    "slug": "roblox",
    "name": "Roblox",
    "category": "Game",
    "minAge": "All ages (rated by experience)",
    "lastCheckedUK": "21 September 2026",
    "officialMinAge": "All ages (experience-based)",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Facial age estimation or ID is required for chat, with age-grouped communication.",
    "why": "Millions of user-made games and a social hangout for under-12s — now with mandatory age checks before anyone can chat.",
    "risks": [
      "User-made games with adult themes",
      "Strangers bypassing age checks by playing along",
      "Robux scams and ‘free Robux’ links"
    ],
    "settings": [
      "Chat now requires a facial age check or ID",
      "Check the account age and available chat permissions",
      "Parent-managed account link",
      "Spend controls"
    ],
    "detail": {
      "overview": "Roblox hosts user-created games and social experiences. Age checks are required for chat. Its 2026 account system includes Roblox Kids for ages 5–8, Roblox Select for ages 9–15 and standard Roblox for age-checked users 16+. Chat options vary by age and region, and some allow Trusted Friends known outside Roblox. Age estimation is not infallible; check the assigned age and available controls together.",
      "ageRationale": "Account age, content ratings and permission to chat are different things. Roblox describes Kids accounts as accessing selected Minimal/Mild games and Select accounts as accessing selected Minimal/Mild/Moderate games. Restricted content is for ages 18+. Parents can link an account to manage games, chat, friends, screen time and spending. During the transition described by Roblox, some game access uses a self-declared age; chat still requires an age check. Check the official guide for current regional options.",
      "evidence": [
        {
          "claim": "Roblox describes Kids (5–8), Select (9–15) and standard (16+) accounts, Restricted content for 18+, linked parent controls and regional chat differences.",
          "publisher": "Roblox",
          "title": "What Families Need to Know About Roblox’s New Age-Based Protections",
          "year": "2026",
          "url": "https://about.roblox.com/newsroom/2026/05/what-families-should-know-roblox-kids-select",
          "type": "Platform policy"
        },
        {
          "claim": "Roblox explains how age checks work — facial age estimation, ID verification and, for minors, parent consent — and what each verified age band can access.",
          "publisher": "Roblox Support (official help centre)",
          "title": "Understanding Age Checks on Roblox",
          "year": "2026",
          "url": "https://en.help.roblox.com/hc/en-us/articles/39143693116052-Understanding-Age-Checks-on-Roblox",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Link your own parent account and check that your child’s account age is correct. Never use an adult’s ID or face to give a child an adult account.",
        "Review the chat permissions available for their age and region. An age check enables some features; it is not a guarantee that every interaction is safe.",
        "Review friends and games together, then choose game, screen-time and spending limits through the linked parent account.",
        "Agree what to do if anyone asks them to move a conversation to another app or offers free Robux."
      ],
      "settingsHowTo": [
        {
          "label": "Roblox: account ages, chat options and linked parent controls",
          "url": "https://about.roblox.com/newsroom/2026/05/what-families-should-know-roblox-kids-select"
        },
        {
          "label": "Roblox: Understanding Age Checks",
          "url": "https://en.help.roblox.com/hc/en-us/articles/39143693116052-Understanding-Age-Checks-on-Roblox"
        },
        {
          "label": "Roblox: Parent and caregiver guide",
          "url": "https://en.help.roblox.com/hc/en-us/articles/203313120-Parents-Safety-and-Moderation-Guide"
        },
        {
          "label": "Internet Matters: Roblox controls",
          "url": "https://www.internetmatters.org/parental-controls/gaming-consoles/roblox-parental-controls/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Roblox parental controls — full setup",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Roblox+official+parental+controls+setup"
        },
        {
          "title": "Search: Roblox age checks explained",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Roblox+facial+age+estimation+chat+news"
        },
        {
          "title": "Search: Roblox parents’ guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Roblox+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "Roblox: The playground problem",
        "channel": "Raising Digital · Investigation",
        "videoUrl": "/media/roblox-risks.mp4",
        "note": "Historical explainer based on April 2025 reporting. It predates the 2026 account and chat changes described above and is not a current settings tutorial."
      }
    }
  },
  {
    "slug": "fortnite",
    "name": "Fortnite",
    "category": "Game",
    "minAge": "12+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "Experience rating varies; child accounts supported",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Epic uses cabined accounts for under-13s but no UK-wide identity check.",
    "why": "Battle royale with voice chat and live in-game events.",
    "risks": [
      "Voice chat with strangers in squads",
      "Spending on V-Bucks / Battle Pass",
      "Long sessions, late nights"
    ],
    "settings": [
      "Cabined Account for under-13s",
      "Voice chat: friends only",
      "Parental controls PIN"
    ],
    "detail": {
      "overview": "Fortnite is a free-to-play battle royale with seasonal updates, a paid Battle Pass, and live concert/film events. ‘Cabined Accounts’ limit features for under-13s until a parent verifies.",
      "ageRationale": "Check the rating of the specific Fortnite experience. Epic supports younger players through Cabined Accounts: below 13 or the local age of digital consent, whichever is higher, certain features stay disabled pending parental consent. This is not a blanket 13+ sign-up rule. Voice/free-text chat and real-money purchases are among the restricted features; gift-card balance purchases have separate rules.",
      "evidence": [
        {
          "claim": "Younger players can play with Cabined Accounts while chat and certain purchase features require parental consent.",
          "publisher": "Epic Games",
          "title": "Cabined Accounts FAQ",
          "url": "https://www.epicgames.com/site/cabinedaccounts",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "In December 2022, the FTC announced two Epic settlements totalling $520 million: a $275 million COPPA penalty and $245 million in consumer refunds over billing practices. The total was not all a fine.",
          "publisher": "Federal Trade Commission (US)",
          "title": "Fortnite maker Epic Games to pay more than half a billion dollars over FTC allegations",
          "year": "2022",
          "url": "https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations",
          "type": "Regulator"
        }
      ],
      "parentTalkingPoints": [
        "Set a hard rule: voice chat with friends only, never ‘open’ to squad fill.",
        "Use the Epic Games parental PIN to require approval for any V-Bucks purchase."
      ],
      "settingsHowTo": [
        {
          "label": "Epic Games parental controls",
          "url": "https://www.epicgames.com/site/en-US/parental-controls"
        },
        {
          "label": "Internet Matters: Fortnite guide",
          "url": "https://www.internetmatters.org/hub/guidance/fortnite-battle-royale-parents-guide/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Fortnite parental controls — full walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Epic+Games+Fortnite+parental+controls+how+to"
        },
        {
          "title": "Search: Cabined Accounts for under-13s explained",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Fortnite+Cabined+Account+parents+guide"
        },
        {
          "title": "Search: Fortnite — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Fortnite+parents+guide"
        }
      ],
      "riskVideo": {
        "title": "Call for gaming loot box ban",
        "channel": "Sky News",
        "youtubeId": "8osRlWJwkbk",
        "note": "Sky News report on addiction concerns and gambling-style mechanics in Fortnite and similar games."
      }
    }
  },
  {
    "slug": "twitch",
    "name": "Twitch",
    "category": "Video",
    "minAge": "13+; minors need parental supervision",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Age checks apply to mature streams and some features only.",
    "why": "Live game streaming with chat. Streamers become parasocial role models.",
    "risks": [
      "Unpredictable live chat and broadcasts",
      "Grooming via Whispers / DMs",
      "Exposure to adult ‘Just Chatting’ streams"
    ],
    "settings": [
      "Whispers: Friends only",
      "Block links in chat",
      "Hide mature streams",
      "Two-factor authentication"
    ],
    "detail": {
      "overview": "Twitch combines live broadcasts with chat and private Whispers. Moderation tools can reduce unwanted interactions but cannot guarantee that every live exchange is suitable.",
      "ageRationale": "Twitch’s terms set a minimum of 13 (or a higher applicable local age). Users below the age of legal majority must use it under a parent or guardian’s supervision and agreement. This is not a guarantee of age-appropriate live content.",
      "evidence": [
        {
          "claim": "Minors above the minimum age must use Twitch with parental supervision and agreement.",
          "publisher": "Twitch",
          "title": "Terms of Service",
          "url": "https://legal.twitch.com/en/legal/terms-of-service/",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Ask what they enjoy watching and whether any contact has made them uncomfortable.",
        "Discuss pressure to keep secrets or move to private chats, and how to block, report and ask for help."
      ],
      "settingsHowTo": [
        {
          "label": "Twitch safety & privacy settings",
          "url": "https://safety.twitch.tv/s/article/Guide-Personal-Safety-Settings"
        },
        {
          "label": "Internet Matters: Twitch guide",
          "url": "https://www.internetmatters.org/hub/esafety-news/twitch-what-parents-need-to-know/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Twitch safety settings walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Twitch+safety+settings+how+to"
        },
        {
          "title": "Search: Twitch — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Twitch+parents+guide"
        }
      ]
    }
  },
  {
    "slug": "kick",
    "name": "Kick",
    "category": "Video",
    "minAge": "13+; under-18 viewers need parental supervision",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Limited checks on adult-labelled content; sign-up age is self-declared.",
    "why": "Twitch competitor with looser rules. Popular for gambling and shock streams.",
    "risks": [
      "Live gambling content (slots, crash games)",
      "Minimal moderation",
      "Streamers explicitly courting under-18 audiences"
    ],
    "settings": [
      "No mature-content filter — supervise directly",
      "Use device-level screen time / DNS blocks",
      "Disable account creation if possible"
    ],
    "detail": {
      "overview": "Kick is a live-streaming platform that markets itself as more streamer-friendly than Twitch. It tolerates content (gambling, shock material) that Twitch bans, which is the core safeguarding concern.",
      "ageRationale": "KICK’s safety guidance excludes users below 13 or the applicable digital-consent age and requires parental permission and supervision for viewers under 18. Check the current rules for your location.",
      "evidence": [
        {
          "claim": "KICK requires parental permission and supervision for viewers under 18.",
          "publisher": "KICK",
          "title": "Teen and minor safety",
          "url": "https://help.kick.com/es/articles/10137486-seguridad-de-adolescentes-y-menores",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "If they watch Kick for a specific streamer, check if that streamer also posts on YouTube — usually a safer alternative.",
        "Talk plainly about gambling: slot streams are paid promotion, not skill."
      ],
      "settingsHowTo": [
        {
          "label": "Kick community guidelines",
          "url": "https://kick.com/community-guidelines"
        },
        {
          "label": "Block sites via Google Family Link / Apple Screen Time",
          "url": "https://families.google/familylink/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: What is Kick? A parent’s explainer",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=what+is+Kick+streaming+parents+guide"
        },
        {
          "title": "Search: Blocking apps with Apple Screen Time",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+app+how+to"
        }
      ]
    }
  },
  {
    "slug": "yubo",
    "name": "Yubo",
    "category": "Social",
    "minAge": "18+",
    "lastCheckedUK": "21 September 2026",
    "officialMinAge": "18",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Yubo's June 2026 terms require users to be at least 18 and describe automated age estimation at sign-up. This does not guarantee that every user's age is correct.",
    "why": "Adult-only social-discovery app for meeting new people.",
    "risks": [
      "Contact with people not known offline",
      "Unpredictable live content",
      "Pressure to share personal information"
    ],
    "settings": [
      "Under-18s should not create an account",
      "Use device controls to restrict access where needed",
      "Use the official report and support tools for concerns"
    ],
    "detail": {
      "overview": "Yubo is a social-discovery app for meeting new people. It is now an adult-only service; older descriptions of separate teenage and adult communities are out of date.",
      "ageRationale": "Yubo's terms, updated 8 June 2026, require users to be at least 18. Parental permission does not override this minimum age.",
      "evidence": [
        {
          "claim": "Yubo requires users to be at least 18 and describes age estimation at sign-up.",
          "publisher": "Yubo",
          "title": "Terms of Service (8 June 2026)",
          "url": "https://www.yubo.live/legal/terms-of-service",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Explain that Yubo is now for adults, even if an older guide says 13+.",
        "If a child has an account, discuss it calmly and use official support; seek safeguarding help if someone has threatened or exploited them."
      ],
      "settingsHowTo": [
        {
          "label": "Yubo current minimum age and account rules",
          "url": "https://www.yubo.live/legal/terms-of-service"
        },
        {
          "label": "Yubo safety centre",
          "url": "https://safety.yubo.live/"
        },
        {
          "label": "Internet Matters: Yubo guide",
          "url": "https://www.internetmatters.org/hub/esafety-news/yubo-app-what-parents-need-to-know/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Yubo — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+Yubo+parents+guide"
        },
        {
          "title": "Search: Common Sense Media review of Yubo",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Yubo+review"
        }
      ]
    }
  },
  {
    "slug": "x-twitter",
    "name": "X (formerly Twitter)",
    "category": "Social",
    "minAge": "13+ (18+ for sensitive media)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "UK users must pass age assurance (account signals or ID) to see sensitive media.",
    "why": "News, memes, fandoms, sports — and trending political content. UK users now face age checks before seeing sensitive media.",
    "risks": [
      "Pornographic content still hosted on the platform — now behind an age wall a teen can try to cheat",
      "Targeted harassment via replies / quote-posts",
      "Misinformation amplified by paid blue ticks"
    ],
    "settings": [
      "UK age assurance required for sensitive media",
      "Known under-18s get protected-post defaults automatically",
      "Sensitive-media filter ON for under-18s",
      "Disable DMs from non-followers",
      "Mute words & accounts"
    ],
    "detail": {
      "overview": "X still hosts adult content (including pornography), but the old picture — ‘adult content available by default’ — is no longer accurate for UK users. Under the Online Safety Act (and matching Irish/EU rules), X introduced age assurance in July 2025: before showing sensitive media it estimates or verifies age using signals like the email address used at sign-up, account age, and contacts — and can ask for ID-based verification. Accounts X knows belong to under-18s cannot view sensitive media at all, and known minors get more protective defaults, including protected (private) posts. The EU has also opened formal proceedings against X under the Digital Services Act over risks to minors.",
      "ageRationale": "X describes several age-assurance methods for sensitive media, including account signals and user-provided verification. Check its current help page for the options offered to your account. Platform documentation describes policy, not independently measured effectiveness. This review has not established that a VPN reliably bypasses these checks.",
      "evidence": [
        {
          "claim": "X describes account signals, age estimation and user-provided verification options to restrict sensitive media.",
          "publisher": "X",
          "title": "Age Assurance on X",
          "url": "https://help.x.com/en/rules-and-policies/age-assurance",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Sensitive media is no longer ‘on by default’ in the UK — X now checks age first. Ask your teen: ‘Has X ever asked you to prove your age?’ If they can still see everything, either the account is registered with a false birthdate or something is masking their location.",
        "If X knows the account holder is under 18, posts are protected by default — if your teen’s posts are public and they see sensitive media, the birthday on the account is worth an honest conversation.",
        "Review privacy and contact settings together. If unwanted content appears, help them report it without blaming them or assuming how it got through."
      ],
      "settingsHowTo": [
        {
          "label": "X Help Center: Age assurance",
          "url": "https://help.x.com/en/rules-and-policies/age-assurance"
        },
        {
          "label": "X safety and privacy settings",
          "url": "https://help.x.com/en/safety-and-security"
        },
        {
          "label": "Common Sense Media: X parent guide",
          "url": "https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-twitter-x"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: How to lock down X / Twitter for teens",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Twitter+X+parents+guide"
        },
        {
          "title": "Search: X UK age verification explained",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=X+twitter+UK+age+verification+Online+Safety+Act"
        },
        {
          "title": "Search: Hide sensitive content on X",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=X+twitter+hide+sensitive+content+how+to"
        }
      ]
    }
  },
  {
    "slug": "reddit",
    "name": "Reddit",
    "category": "Social",
    "minAge": "13+ (18+ for mature content)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13 (18 for mature content)",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Reddit describes age verification for UK access to mature content. Consult its current help page for the process and data handling; this review did not test its effectiveness.",
    "why": "Forums (‘subreddits’) for every interest — UK users now face mandatory age checks before seeing mature or restricted content.",
    "risks": [
      "Mature/NSFW communities still exist — now behind an age wall a teen can try to cheat",
      "Anonymous DMs and chat requests",
      "Pile-ons, doxxing and volunteer-only moderation"
    ],
    "settings": [
      "UK age confirmation required for mature/restricted content",
      "Disable NSFW via mobile web or desktop (iOS app hides the toggle)",
      "Chat requests: Nobody / Followers only",
      "Mute subreddits"
    ],
    "detail": {
      "overview": "Reddit consists of user-run communities, with posts, comments, chat and private messages. Content and moderation vary by community. Reddit describes age checks for UK access to mature content; that policy does not guarantee that every unsuitable item is filtered.",
      "ageRationale": "Reddit requires age confirmation for UK users accessing mature or restricted content. Its current help page describes Apple account confirmation on iOS or Persona selfie or ID options. Platform documentation describes policy, not independently measured effectiveness. This review has not established that a VPN reliably bypasses these checks.",
      "evidence": [
        {
          "claim": "Reddit requires age confirmation for UK users accessing mature or restricted content. Its current help page describes Apple account confirmation on iOS or Persona selfie or ID options.",
          "publisher": "Reddit",
          "title": "Current UK age-assurance guidance",
          "year": "2026",
          "url": "https://support.reddithelp.com/hc/en-us/articles/47163677520276-United-Kingdom-Online-Safety-Act",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Review content and contact settings together.",
        "If unsuitable material appears, help report it without assuming how it got through an age check.",
        "Discuss the communities they use and how to mute, block or leave."
      ],
      "settingsHowTo": [
        {
          "label": "Reddit — United Kingdom: Online Safety Act (age confirmation)",
          "url": "https://support.reddithelp.com/hc/en-us/articles/47163677520276-United-Kingdom-Online-Safety-Act"
        },
        {
          "label": "Reddit — Why is Reddit asking for my age?",
          "url": "https://support.reddithelp.com/hc/en-us/articles/36429514849428-Why-is-Reddit-asking-for-my-age"
        },
        {
          "label": "Reddit — UK Online Safety Act: Information for UK users",
          "url": "https://support.reddithelp.com/hc/en-us/articles/35409604240020-UK-Online-Safety-Act-Information-for-UK-users"
        },
        {
          "label": "Reddit safety and privacy settings",
          "url": "https://support.reddithelp.com/hc/en-us/articles/360043068032"
        },
        {
          "label": "Common Sense Media: Reddit guide",
          "url": "https://www.commonsensemedia.org/website-reviews/reddit"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Reddit for parents — what you need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Reddit+parents+guide"
        },
        {
          "title": "Search: Reddit UK age verification explained",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Reddit+UK+age+verification+Online+Safety+Act"
        },
        {
          "title": "Search: How to disable NSFW and mute subreddits",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Reddit+disable+NSFW+block+subreddit"
        }
      ]
    }
  },
  {
    "slug": "bereal",
    "name": "BeReal",
    "category": "Social",
    "minAge": "13+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "Age is self-declared at sign-up.",
    "why": "Once-a-day photo prompt designed to feel ‘authentic’. Friend-of-friend feed.",
    "risks": [
      "Location attached to posts by default",
      "‘RealMojis’ from friends-of-friends",
      "Pressure to post in unsafe situations (class, driving)"
    ],
    "settings": [
      "Discovery: Friends only",
      "Disable location on posts",
      "Lock account for over-18 visibility"
    ],
    "detail": {
      "overview": "BeReal sends a daily notification — users have two minutes to post a front+back camera photo. Posts can include precise location and are visible to friends and, optionally, the global Discovery feed.",
      "ageRationale": "Minimum age 13. The location-by-default design and the social pressure of the 2-minute window are the main parent concerns flagged by Internet Matters and Common Sense Media.",
      "evidence": [
        {
          "claim": "BeReal’s September 2026 terms set a minimum age of 13 and note possible parental-consent requirements.",
          "publisher": "BeReal",
          "title": "Terms of Service",
          "url": "https://bereal.com/terms",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Agree they won’t post in class, on public transport or in the car — the 2-minute timer isn’t a real deadline.",
        "Switch off location on the camera screen before they post."
      ],
      "settingsHowTo": [
        {
          "label": "BeReal safety and privacy",
          "url": "https://help.bereal.com/hc/en-us/categories/4406950928657-Safety-Privacy"
        },
        {
          "label": "Internet Matters: BeReal guide",
          "url": "https://www.internetmatters.org/hub/esafety-news/bereal-app-what-parents-need-to-know/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: BeReal — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+BeReal+parents+guide"
        },
        {
          "title": "Search: Disable location on BeReal",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=BeReal+location+settings+how+to"
        }
      ]
    }
  },
  {
    "slug": "ngl-sendit",
    "name": "NGL / Sendit",
    "category": "Social",
    "minAge": "NGL: 18+; Sendit: 13+ with parental consent for minors",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "NGL: 18; Sendit: 13 with parental consent under 18",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "These are separate services with different rules. Their terms do not demonstrate the effectiveness of age checks.",
    "why": "Anonymous Q&A apps that bolt on to Instagram / Snap stories.",
    "risks": [
      "Anonymous bullying and threats",
      "Fake ‘replies’ generated by the app to drive engagement",
      "Sextortion via anonymous messages"
    ],
    "settings": [
      "Discuss whether anonymous replies are helpful or harmful",
      "Remove shared question links if unwanted messages arrive",
      "Seek help for threats before deleting accounts or evidence"
    ],
    "detail": {
      "overview": "NGL (‘Not Gonna Lie’) and similar apps let users receive anonymous messages via a link shared on Instagram or Snap. They’ve been repeatedly investigated for staging fake replies and for serving as a vector for cyberbullying and sextortion.",
      "ageRationale": "NGL does not permit under-18s. Sendit’s operator, Iconic Hearts, sets a minimum of 13 and requires parental consent for users under 18. A platform minimum is not a recommendation that an app is suitable for every child.",
      "evidence": [
        {
          "claim": "NGL excludes users under 18.",
          "publisher": "NGL",
          "title": "Terms",
          "url": "https://ngl.link/p/terms",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "Sendit requires users to be at least 13, with prior parental consent for minors.",
          "publisher": "Iconic Hearts",
          "title": "Terms of Service",
          "url": "https://iconichearts.com/terms",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "The FTC announced a 2024 settlement prohibiting NGL from offering anonymous messaging to under-18s and addressing allegedly deceptive messages and subscriptions.",
          "publisher": "Federal Trade Commission",
          "title": "NGL settlement announcement",
          "year": "2024",
          "url": "https://www.ftc.gov/news-events/news/press-releases/2024/07/ftc-order-will-ban-ngl-labs-its-founders-offering-anonymous-messaging-apps-kids-under-18-halt",
          "type": "Regulator"
        }
      ],
      "parentTalkingPoints": [
        "Explain that NGL is for adults; Sendit has different rules.",
        "Discuss how anonymous replies can affect them. If threatened, seek help without waiting to collect evidence."
      ],
      "settingsHowTo": [
        {
          "label": "FTC consumer advice: anonymous messaging apps",
          "url": "https://consumer.ftc.gov/consumer-alerts/2024/07/parents-anonymous-messaging-apps-are-bad-news-teens"
        },
        {
          "label": "How to uninstall apps & block re-install (Apple)",
          "url": "https://support.apple.com/en-gb/HT201304"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: FTC warns parents about NGL",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=FTC+NGL+anonymous+messaging+app+teens"
        },
        {
          "title": "Search: Anonymous apps and teen safety",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+anonymous+messaging+apps"
        }
      ]
    }
  },
  {
    "slug": "omegle-style",
    "name": "Random video chat (Monkey, Azar, ChatHub)",
    "category": "Social",
    "minAge": "Varies by service; Monkey is 18+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "Check the exact service; Monkey: 18",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "Services differ. Monkey describes age detection and moderation; their effectiveness has not been independently tested here.",
    "why": "Random video chat with strangers — the niche Omegle filled before it shut down in 2023.",
    "risks": [
      "Unpredictable live content",
      "Unwanted contact or pressure from strangers",
      "Someone recording or sharing a conversation"
    ],
    "settings": [
      "Don’t install — block via device-level parental controls"
    ],
    "detail": {
      "overview": "Random-video services connect people who may not know each other. Similar names can refer to different operators. Check the exact app and its current rules rather than treating Monkey, Azar and every ChatHub-branded service as one product.",
      "ageRationale": "Monkey’s current safety page sets an 18+ rule and describes detecting suspected underage accounts. This does not establish the rules or safeguards of every random-video service. For children, choose services and contact settings appropriate to their age rather than relying on an adult-only label.",
      "evidence": [
        {
          "claim": "Monkey states that its service is for adults and describes underage-account detection, reporting and blocking. These are operator claims, not independent effectiveness results.",
          "publisher": "Monkey",
          "title": "Safety Center",
          "url": "https://www.monkey.app/sc.html",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Ask which exact app or website they mean and who they speak to.",
        "For an unsuitable app, use device controls to restrict access. If there are threats, get help without waiting to collect evidence."
      ],
      "settingsHowTo": [
        {
          "label": "Apple Screen Time — block apps",
          "url": "https://support.apple.com/en-gb/HT201304"
        },
        {
          "label": "Google Family Link — block apps",
          "url": "https://families.google/familylink/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Block apps with Apple Screen Time",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+apps+how+to"
        },
        {
          "title": "Search: Random video chat apps — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Internet+Matters+random+video+chat+apps"
        }
      ]
    }
  },
  {
    "slug": "minecraft",
    "name": "Minecraft (online / servers)",
    "category": "Game",
    "minAge": "7+ (PEGI); multiplayer needs separate consideration",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "PEGI 7; child account permissions apply",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "Microsoft child accounts add controls, but no UK identity check.",
    "why": "Sandbox building game. Solo play is fine; third-party servers are where risk lives.",
    "risks": [
      "Open voice chat on third-party servers",
      "Grooming on unofficial servers",
      "Skins / mods downloaded from outside stores"
    ],
    "settings": [
      "Microsoft Family — friends-only multiplayer",
      "Disable chat on servers",
      "Whitelist allowed servers only"
    ],
    "detail": {
      "overview": "Minecraft offers building and exploration in single-player and multiplayer modes. Public servers, other players and third-party downloads need separate consideration from the base game’s content rating. Available controls vary by edition and version.",
      "ageRationale": "The content rating and account permissions are different. Minecraft’s official parental-control guidance describes parent-managed multiplayer and communication permissions for child accounts. The earlier claim of an official blanket 13+ multiplayer recommendation was not supported by the source checked.",
      "evidence": [
        {
          "claim": "Parents can manage multiplayer, friend and communication permissions for child accounts; the guidance also describes player reporting.",
          "publisher": "Minecraft",
          "title": "Parental Controls in Minecraft",
          "url": "https://www.minecraft.net/en-us/article/parental-controls",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Single-player and ‘realms’ with school friends are very different from public servers. Ask which one they play.",
        "If they want a public server, look it up together — most legit ones have a clear age policy and Discord rules."
      ],
      "settingsHowTo": [
        {
          "label": "Microsoft Family Safety for Minecraft",
          "url": "https://www.minecraft.net/en-us/article/minecraft-and-microsoft-family"
        },
        {
          "label": "Internet Matters: Minecraft guide",
          "url": "https://www.internetmatters.org/hub/guidance/minecraft-a-parents-guide/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: Minecraft parental controls — full walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Microsoft+Family+Minecraft+parental+controls"
        },
        {
          "title": "Search: Minecraft for parents — what you need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+Minecraft+parents+guide"
        }
      ]
    }
  },
  {
    "slug": "vrchat",
    "name": "VRChat",
    "category": "Game",
    "minAge": "13+",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "VRChat described further age-assurance and content-gating work as in development in June 2026. Do not treat an announced feature as universally available.",
    "why": "User-created social worlds with avatars and live voice chat, accessible in VR and on other supported devices.",
    "risks": [
      "Adult-themed worlds visible to children",
      "Sexual harassment and ‘virtual groping’",
      "Voice chat with anyone in the room"
    ],
    "settings": [
      "Review instance privacy separately from avatar trust settings",
      "Practise mute, block and leaving a world",
      "Review headset account and app permissions"
    ],
    "detail": {
      "overview": "VRChat offers user-created social worlds and avatars. Other users’ live speech and behaviour can be unpredictable; review both the service’s safety controls and the device’s account requirements.",
      "ageRationale": "The service sets an account minimum of 13. That does not establish that public social spaces or user-created content are suitable for every teenager.",
      "evidence": [
        {
          "claim": "VRChat’s June update says further age-assurance and content-gating work was still in development, without firm release dates.",
          "publisher": "VRChat",
          "title": "June 2026 safety update",
          "url": "https://hello.vrchat.com/blog/june-2026-safety-update",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "CCDH’s December 2021 investigation reported abusive incidents during its sampled VRChat sessions. Its seven-minute average describes that historical sample, not the frequency every user encounters today.",
          "publisher": "Center for Countering Digital Hate",
          "title": "Facebook’s Metaverse",
          "year": "2021",
          "url": "https://counterhate.com/research/facebooks-metaverse/",
          "type": "Charity / NGO"
        }
      ],
      "parentTalkingPoints": [
        "Agree they can leave or take off a headset whenever uncomfortable.",
        "Device-level parental controls do not guarantee that every world inside an app is suitable."
      ],
      "settingsHowTo": [
        {
          "label": "Meta Quest parental supervision",
          "url": "https://www.meta.com/help/quest/articles/accounts/account-settings-and-management/parent-account/"
        },
        {
          "label": "VRChat safety & trust system",
          "url": "https://hello.vrchat.com/blog/vrchat-safety-and-trust-system"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: VRChat — what parents need to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+VRChat+parents+guide"
        },
        {
          "title": "Search: Meta Quest parental controls walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Meta+Quest+parental+controls+how+to"
        }
      ]
    }
  },
  {
    "slug": "gta-online",
    "name": "GTA V / GTA Online",
    "category": "Game",
    "minAge": "18+ (PEGI)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "18 (PEGI)",
    "ukAgeAssurance": "Not established",
    "ukAgeAssuranceNote": "The rating is verified; in-game UK age-assurance coverage has not been established in this review.",
    "why": "An adult-rated crime game with an online multiplayer mode.",
    "risks": [
      "Graphic violence, sexual content, drugs as core gameplay",
      "Open voice chat with strangers in lobbies",
      "Real-money microtransactions (Shark Cards)"
    ],
    "settings": [
      "Disable voice chat",
      "Solo / invite-only sessions",
      "Console-level spend limits"
    ],
    "detail": {
      "overview": "GTA V contains strong violence, sexual content, strong language and drug use. Online play adds interaction with other players and purchases. Session and chat choices do not change the game’s content rating.",
      "ageRationale": "The UK PEGI rating is 18. ESRB uses a separate North American rating of Mature 17+, with descriptors for violence, sexual content, drugs and language. Ratings and account-age checks are different.",
      "evidence": [
        {
          "claim": "PEGI lists GTA V with adult-rated violence and strong language, with sexual content and drug use also described.",
          "publisher": "PEGI (Pan European Game Information)",
          "title": "Grand Theft Auto V rating summary",
          "url": "https://pegi.info/search-pegi?q=Grand+Theft+Auto+V",
          "type": "Regulator"
        },
        {
          "claim": "Common Sense Media review states GTA V is ‘not for kids’ and details extensive sexual, violent and drug content.",
          "publisher": "Common Sense Media",
          "title": "Grand Theft Auto V — parents’ review",
          "year": "2022",
          "url": "https://www.commonsensemedia.org/game-reviews/grand-theft-auto-v",
          "type": "Charity / NGO"
        },
        {
          "claim": "ESRB rates GTA V Mature 17+, with content descriptors and notices for user interaction and in-game purchases.",
          "publisher": "ESRB",
          "title": "Grand Theft Auto V rating",
          "url": "https://www.esrb.org/ratings/38445/grand-theft-auto-v/",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "Explain the PEGI 18 rating and choose an age-appropriate game together.",
        "If reviewing an existing account, check in-game session and voice-chat options as well as console purchase restrictions. Invite-only sessions are a game option, not a universal console setting."
      ],
      "settingsHowTo": [
        {
          "label": "PlayStation parental controls",
          "url": "https://www.playstation.com/en-gb/support/account/ps5-parental-controls-spending-limits/"
        },
        {
          "label": "Xbox Family Settings app",
          "url": "https://www.xbox.com/en-GB/apps/family-settings-app"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: PlayStation parental controls — full guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=PlayStation+parental+controls+how+to"
        },
        {
          "title": "Search: Xbox Family Settings app walkthrough",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Xbox+Family+Settings+app+how+to"
        }
      ]
    }
  },
  {
    "slug": "character-ai",
    "name": "Character.AI",
    "category": "Social",
    "minAge": "13+ (16+ in Europe) — no chat for under-18s",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "13 (16 in Europe)",
    "ukAgeAssurance": "Yes",
    "ukAgeAssuranceNote": "Mandatory age assurance; under-18s lose open-ended chat and get Reading Mode.",
    "why": "AI ‘characters’ you can write stories and roleplay with — from a tutor to a fictional partner.",
    "risks": [
      "Treating generated responses as reliable personal advice",
      "Sharing sensitive personal information",
      "Emotional reliance on a simulated character"
    ],
    "settings": [
      "Expect an age check — a selfie estimate or ID may be required",
      "Turn on Parental Insights so you get a weekly activity email",
      "Block the app entirely with Screen Time or Family Link if you'd rather they didn't use it"
    ],
    "detail": {
      "overview": "Character.AI offers user-created characters and entertainment features. Its July 2026 help pages say all users undergo age assurance and verified under-18s cannot chat with characters. Reading Mode includes viewing previous chats and creative features. A September update confirms that under-18 open-ended chat remains unavailable.",
      "ageRationale": "Account eligibility and permission to chat are separate. Character.AI describes an under-18 experience without open-ended character chat and age assurance to assign the experience. This review has not tested the system’s accuracy.",
      "evidence": [
        {
          "claim": "Character.AI announced it would remove open-ended chat for under-18 users and roll out age assurance for all accounts.",
          "publisher": "Character.AI",
          "title": "Taking Bold Steps to Keep Teen Users Safe on Character.AI",
          "year": "2025",
          "url": "https://blog.character.ai/u18-chat-announcement/",
          "type": "Platform policy"
        },
        {
          "claim": "Under-18 verified users are placed in ‘Reading Mode’, where they can browse characters and content but chat features are unavailable.",
          "publisher": "Character.AI Help Center",
          "title": "What is Reading Mode?",
          "year": "2025",
          "url": "https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode",
          "type": "Platform policy"
        },
        {
          "claim": "All users must complete an age assurance check, which determines whether they get the adult or the under-18 experience.",
          "publisher": "Character.AI Help Center",
          "title": "What is Age Assurance?",
          "year": "2025",
          "url": "https://support.character.ai/hc/en-us/articles/53182286684059-What-is-Age-Assurance",
          "type": "Platform policy"
        },
        {
          "claim": "The September 2026 update confirms the under-18 chat restriction and weekly Parental Insights emails for linked parents.",
          "publisher": "Character.AI",
          "title": "September safety update",
          "url": "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/",
          "year": "2026",
          "type": "Platform policy"
        }
      ],
      "parentTalkingPoints": [
        "If the account offers unexpected features, review its age and settings together and contact official support. Do not assume your child deliberately bypassed a check.",
        "Ask what they were getting out of it. Company, a listening ear, help writing a story? Then find a real-world version of that.",
        "Be clear the AI isn't a friend and isn't qualified to handle low moods. Agree together on a real person they'll go to instead.",
        "Losing chat access felt like a real loss to many teens. Acknowledge that rather than treating it as a win."
      ],
      "settingsHowTo": [
        {
          "label": "Character.AI: Age Assurance help centre",
          "url": "https://support.character.ai/hc/en-us/categories/50705410179995-Age-Assurance"
        },
        {
          "label": "Character.AI: What is Reading Mode?",
          "url": "https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode"
        },
        {
          "label": "Character.AI: Safety Center (age rules, Parental Insights)",
          "url": "https://support.character.ai/hc/en-us/articles/21704914723995-Safety-Center"
        },
        {
          "label": "Common Sense Media: AI companion risk assessment",
          "url": "https://www.commonsensemedia.org/ai-ratings/social-ai-companions"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: AI companions — what every parent needs to know",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+AI+companion+apps+parents"
        },
        {
          "title": "Search: Block apps with Screen Time / Family Link",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=block+app+Screen+Time+Family+Link"
        }
      ]
    }
  },
  {
    "slug": "replika",
    "name": "Replika",
    "category": "Social",
    "minAge": "18+ (terms)",
    "lastCheckedUK": "September 2026",
    "officialMinAge": "18",
    "ukAgeAssurance": "Partial",
    "ukAgeAssuranceNote": "The terms exclude under-18s. This source check does not establish age-check effectiveness.",
    "why": "‘AI friend / partner’ chatbot with paid romantic and ‘adult’ modes.",
    "risks": [
      "Sexual roleplay even on free tier",
      "Emotional dependence and isolation",
      "Designed to drive paid upgrades"
    ],
    "settings": [
      "Not appropriate for under-18s — block / uninstall"
    ],
    "detail": {
      "overview": "Replika is marketed as an AI companion. Italy’s data regulator temporarily banned it in 2023 after finding it could expose minors to sexually explicit conversations, and design choices push users towards an emotionally intense, paid relationship.",
      "ageRationale": "Replika’s terms explicitly prohibit use by anyone under 18, whether registered or not. An app-store content rating is separate from this eligibility rule.",
      "evidence": [
        {
          "claim": "Replika does not authorize under-18s to use the service.",
          "publisher": "Replika",
          "title": "Terms of Service, section 6.4",
          "url": "https://replika.com/legal/terms/en",
          "year": "2026",
          "type": "Platform policy"
        },
        {
          "claim": "In February 2023, Italy’s Garante imposed a provisional restriction on processing Italian users’ data, citing risks to minors and vulnerable users. This historical action is not a claim that a blanket ban remains in force today.",
          "publisher": "Garante per la Protezione dei Dati Personali (Italy)",
          "title": "Replika: stop al trattamento dei dati degli utenti italiani",
          "year": "2023",
          "url": "https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9852506",
          "type": "Regulator"
        }
      ],
      "parentTalkingPoints": [
        "Replika is built for paying adults who want a romantic AI partner. It is not a teen wellbeing app.",
        "If you find it on their device, uninstall and talk about who they go to when they feel lonely."
      ],
      "settingsHowTo": [
        {
          "label": "Apple Screen Time — block apps",
          "url": "https://support.apple.com/en-gb/HT201304"
        },
        {
          "label": "Google Family Link — block apps",
          "url": "https://families.google/familylink/"
        }
      ],
      "videoTutorials": [
        {
          "title": "Search: AI companion apps — parents’ guide",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Common+Sense+Media+AI+companion+apps+parents"
        },
        {
          "title": "Search: Block apps with Apple Screen Time",
          "channel": "YouTube search results — check the uploader and date",
          "url": "https://www.youtube.com/results?search_query=Apple+Screen+Time+block+apps+how+to"
        }
      ]
    }
  }
];

export type GlossaryEntry = {
  aliases?: string[];
  sourceUrl?: string;
  reviewNote?: string;
  matchable?: boolean;
  term: string;
  kind: "Slang" | "Acronym" | "Emoji" | "Number";
  meaning: string;
  context: string;
  example?: string;
  riskLevel: "Usually fine" | "Worth a chat" | "Investigate";
};

// Glossary wording review: 21 September 2026. See docs/glossary-review-2026-09-21.md.
// Source links support meanings, not universal usage or a diagnosis of a message.
export const GLOSSARY: GlossaryEntry[] = [
  {
    "term": "67",
    "kind": "Number",
    "meaning": "“Six seven”: a playful meme response without one fixed meaning; sometimes used for “so-so”.",
    "context": "May also simply be a number. A match cannot tell whether someone is referencing the meme.",
    "example": "“What time is it?” — “67.”",
    "riskLevel": "Usually fine",
    "aliases": [
      "6-7",
      "6 7",
      "six seven",
      "six-seven"
    ],
    "sourceUrl": "https://www.dictionary.com/culture/slang/67"
  },
  {
    "term": "212",
    "kind": "Number",
    "meaning": "May be a reference to the Azealia Banks song or simply a number.",
    "context": "A fixed slang meaning was not established in this review.",
    "riskLevel": "Usually fine",
    "matchable": false,
    "reviewNote": "Uncertain meaning — not used in automatic matching."
  },
  {
    "term": "420",
    "kind": "Number",
    "meaning": "Can refer to cannabis; it may also simply be a number.",
    "context": "If it shows up with 🍃 or transaction talk, worth a calm conversation.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/browse/420",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "1437",
    "kind": "Number",
    "meaning": "Sometimes interpreted as “I love you forever” from letter counts; not independently corroborated in this review.",
    "context": "Ask what the sender meant; it may simply be a number.",
    "riskLevel": "Usually fine",
    "reviewNote": "The letter-count interpretation is plausible, but an individual reliable source was not established in this review. Do not assume it is a hidden message.",
    "matchable": false
  },
  {
    "term": "143",
    "kind": "Number",
    "meaning": "‘I love you’ — letter count.",
    "context": "Established numeric shorthand, or simply a number; not necessarily a romantic message.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.netlingo.com/acronyms"
  },
  {
    "term": "182",
    "kind": "Number",
    "meaning": "‘I hate you’.",
    "context": "Documented numeric shorthand, or simply a number. Context determines whether it is an insult.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.netlingo.com/acronyms"
  },
  {
    "term": "53X",
    "kind": "Number",
    "meaning": "An older coded spelling of “sex”; it can also mean “53 times” in an ordinary numerical context.",
    "context": "Documented older internet shorthand, not evidence of a current trend or intent to bypass filters.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://www.dictionary.com/culture/slang/53x"
  },
  {
    "term": "CD9",
    "kind": "Acronym",
    "meaning": "‘Code 9’ — parent nearby, change the subject.",
    "context": "Documented shorthand for a parent being nearby. Its presence does not explain why someone wants privacy.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.netlingo.com/word/cd9.php"
  },
  {
    "term": "Aight",
    "kind": "Slang",
    "meaning": "Okay / alright.",
    "context": "Casual agreement.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Alpha",
    "kind": "Slang",
    "meaning": "Someone seen as dominant or powerful in social settings.",
    "context": "Often ironic. Linked to ‘manosphere’ content when used seriously by boys.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "AF",
    "kind": "Acronym",
    "meaning": "‘As f***’ — used to emphasise.",
    "context": "Very common. Usually harmless.",
    "example": "“That’s cool af.”",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Ate",
    "kind": "Slang",
    "meaning": "Did something really well.",
    "context": "Compliment, especially about outfits or performances.",
    "example": "“She ate that performance.”",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Aura",
    "kind": "Slang",
    "meaning": "Your social vibe. You gain or lose ‘aura points’ for cool or cringe behaviour.",
    "context": "Playful self-rating. Watch for it being used to mock peers.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bae",
    "kind": "Slang",
    "meaning": "An affectionate name for a partner or someone you love.",
    "context": "An affectionate nickname, related to baby or babe.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/"
  },
  {
    "term": "Banger",
    "kind": "Slang",
    "meaning": "An amazing song or thing.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Based",
    "kind": "Slang",
    "meaning": "Approval of an opinion or someone acting confidently and unapologetically.",
    "context": "Approval does not establish that an opinion is factual. Can be sincere or ironic.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/culture/slang/based",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Basic",
    "kind": "Slang",
    "meaning": "Unoriginal, mainstream.",
    "context": "Mild put-down.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Beef",
    "kind": "Slang",
    "meaning": "A feud or argument.",
    "context": "Friendship drama. Escalates online quickly.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bed rotting",
    "kind": "Slang",
    "meaning": "Spending a long time awake in bed, often resting or using devices.",
    "context": "Often a joke, but can flag low mood or burnout.",
    "riskLevel": "Worth a chat",
    "reviewNote": "The phrase alone does not establish depression, laziness or avoidance. Ask how the person feels.",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/"
  },
  {
    "term": "Beige flag",
    "kind": "Slang",
    "meaning": "A neutral quirk in a partner — neither red nor green.",
    "context": "Harmless TikTok trend.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Beg / Beggy",
    "kind": "Slang",
    "meaning": "Someone who tries too hard for attention or approval.",
    "context": "Used as an insult in UK schools.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bet",
    "kind": "Slang",
    "meaning": "‘Okay’ or ‘let’s do it’.",
    "context": "Casual agreement.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "BFFR",
    "kind": "Acronym",
    "meaning": "‘Be f***ing for real’ — call for honesty.",
    "context": "Used playfully between friends.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Big yikes",
    "kind": "Slang",
    "meaning": "Extremely embarrassing.",
    "context": "Reaction phrase.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bop",
    "kind": "Slang",
    "meaning": "A great song. Can also be a sexist put-down for a girl — context-dependent.",
    "context": "Watch for the second meaning in mixed group chats.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://knowyourmeme.com/memes/bop-slang",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Bounce",
    "kind": "Slang",
    "meaning": "To leave.",
    "context": "Casual.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Brain rot",
    "kind": "Slang",
    "meaning": "Trivial or repetitive online content, a fixation on it, or the feeling that too much of it has dulled your thinking.",
    "context": "An informal expression, not a medical diagnosis.",
    "riskLevel": "Worth a chat",
    "aliases": [
      "brainrot",
      "brain-rot"
    ],
    "sourceUrl": "https://www.dictionary.com/culture/slang/brainrot"
  },
  {
    "term": "Brat",
    "kind": "Slang",
    "meaning": "Messy, confident, self-expressive (after Charli XCX’s album).",
    "context": "Can refer to the Charli XCX aesthetic or retain its ordinary meaning of badly behaved. Not every use is a compliment.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Brokie",
    "kind": "Slang",
    "meaning": "Someone with no money.",
    "context": "Light teasing.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bruh",
    "kind": "Slang",
    "meaning": "‘Dude’ / exasperation.",
    "context": "Very common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Bussin’",
    "kind": "Slang",
    "meaning": "Delicious — usually food.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "aliases": [
      "bussin",
      "bussin'",
      "bussing"
    ],
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Canon event",
    "kind": "Slang",
    "meaning": "A defining, unavoidable life moment (from Spider-Verse).",
    "context": "Often used to justify bad decisions.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cap / No cap",
    "kind": "Slang",
    "meaning": "‘Cap’ = a lie; ‘no cap’ = no lie.",
    "context": "Very common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Caught in 4K",
    "kind": "Slang",
    "meaning": "Exposed or caught doing something; a video is not required.",
    "context": "Calling someone out.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cheugy",
    "kind": "Slang",
    "meaning": "Outdated or trying too hard.",
    "context": "Mild insult, often aimed at millennials.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Chuzz",
    "kind": "Slang",
    "meaning": "Derogatory term for an ‘unattractive girl’ — from ‘chopped huzz’.",
    "context": "Sexist insult, often in comment sections. Worth talking about.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Clapped",
    "kind": "Slang",
    "meaning": "Ugly or worn out (UK).",
    "context": "Often a personal insult.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Clown",
    "kind": "Slang",
    "meaning": "Someone foolish, or self-deprecation for being naive.",
    "context": "Light. Watch for repeated targeting of one person.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cooked",
    "kind": "Slang",
    "meaning": "Doomed, in trouble.",
    "context": "Often about exams.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cope",
    "kind": "Slang",
    "meaning": "‘Deal with it’ — dismissive end to an argument.",
    "context": "Mildly aggressive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cringe",
    "kind": "Slang",
    "meaning": "Embarrassing.",
    "context": "Ubiquitous.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Cursed",
    "kind": "Slang",
    "meaning": "Off-putting, creepy in a funny way.",
    "context": "Reaction word.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Curve",
    "kind": "Slang",
    "meaning": "To reject someone romantically.",
    "context": "Common in dating talk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Dank",
    "kind": "Slang",
    "meaning": "Cool / niche (usually memes).",
    "context": "Harmless.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Dead / I’m dead",
    "kind": "Slang",
    "meaning": "Laughing extremely hard.",
    "context": "Can be a laughing reaction, but “dead” also has its ordinary meaning. Do not dismiss a literal statement of harm.",
    "riskLevel": "Usually fine",
    "aliases": [
      "I'm dead",
      "im dead"
    ],
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Deadass",
    "kind": "Slang",
    "meaning": "‘I’m serious’.",
    "context": "Emphatic.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Deets",
    "kind": "Slang",
    "meaning": "Details.",
    "context": "Casual.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Delulu",
    "kind": "Slang",
    "meaning": "Delusional — usually about a crush or fan obsession.",
    "context": "Almost always playful.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Demure",
    "kind": "Slang",
    "meaning": "Modest, mindful (ironic TikTok trend).",
    "context": "Harmless meme.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Down bad",
    "kind": "Slang",
    "meaning": "Desperately into someone.",
    "context": "Romantic. Self-deprecating.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Do it for the plot",
    "kind": "Slang",
    "meaning": "Make a risky choice for a good story.",
    "context": "Can encourage genuinely risky behaviour.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Drip",
    "kind": "Slang",
    "meaning": "Stylish outfit.",
    "context": "Compliment.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Dub / W",
    "kind": "Slang",
    "meaning": "A win.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Dusty",
    "kind": "Slang",
    "meaning": "Unkempt, low-status (insult).",
    "context": "Personal put-down.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Eepy",
    "kind": "Slang",
    "meaning": "Sleepy / cute.",
    "context": "Harmless.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Extra",
    "kind": "Slang",
    "meaning": "Over the top / dramatic.",
    "context": "Mild critique.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Feral",
    "kind": "Slang",
    "meaning": "Acting wildly or with little restraint; can be playful or critical.",
    "context": "Self-deprecating humour.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Finsta",
    "kind": "Slang",
    "meaning": "‘Fake Instagram’ — a private secondary account for close friends.",
    "context": "A second account is not by itself evidence of harmful behaviour. Discuss privacy and who can contact them.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/culture/slang/finsta",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Fire",
    "kind": "Slang",
    "meaning": "Excellent.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Fit / Fit check",
    "kind": "Slang",
    "meaning": "Fit can mean an outfit, physically healthy, or attractive (UK). A fit check shows an outfit.",
    "context": "Read the surrounding words to choose the meaning.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/"
  },
  {
    "term": "Flex",
    "kind": "Slang",
    "meaning": "To brag.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "FR",
    "kind": "Acronym",
    "meaning": "‘For real’ — agreement.",
    "context": "Very common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "FYP",
    "kind": "Acronym",
    "meaning": "‘For You Page’ — TikTok’s algorithmic feed.",
    "context": "What the algorithm shows them shapes mood and worldview.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://arxiv.org/abs/2605.10690",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Ghosted",
    "kind": "Slang",
    "meaning": "Cut off without explanation.",
    "context": "Common in dating and friendships.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Glazing",
    "kind": "Slang",
    "meaning": "Praising someone excessively; often a criticism of flattery.",
    "context": "Casual put-down.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Glow up",
    "kind": "Slang",
    "meaning": "Positive transformation in looks/confidence.",
    "context": "Compliment. Can fuel appearance pressure.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "GOAT / GOATest",
    "kind": "Acronym",
    "meaning": "Greatest Of All Time.",
    "context": "High praise.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Goblin mode",
    "kind": "Slang",
    "meaning": "Unapologetically indulging your habits without trying to look polished or meet social expectations.",
    "context": "Often a humorous description of letting things slide; sometimes used more broadly for wild behaviour.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/goblin-mode"
  },
  {
    "term": "Grind",
    "kind": "Slang",
    "meaning": "Working hard.",
    "context": "Hustle talk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Gyatt",
    "kind": "Slang",
    "meaning": "Exclamation reacting to a curvy figure.",
    "context": "Often boys-side language; can be sexualised. Worth a conversation about respect.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Hits different",
    "kind": "Slang",
    "meaning": "Feels uniquely good.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Hop off",
    "kind": "Slang",
    "meaning": "‘Get off my back / log off’.",
    "context": "Dismissive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Huzz",
    "kind": "Slang",
    "meaning": "Disrespectful term for girls — internet variant of ‘hoes’.",
    "context": "Can be demeaning when used about girls or women. Discuss respectful language without assuming who uses it.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Hype",
    "kind": "Slang",
    "meaning": "Excitement / popularity.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Ick",
    "kind": "Slang",
    "meaning": "Sudden turn-off — usually a tiny thing a crush did.",
    "context": "Lighthearted.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "IRL",
    "kind": "Acronym",
    "meaning": "In Real Life.",
    "context": "Used to contrast with online life.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "IYKYK",
    "kind": "Acronym",
    "meaning": "‘If you know, you know’ — in-joke.",
    "context": "Often harmless. Can signal an exclusionary group chat.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Jarring",
    "kind": "Slang",
    "meaning": "Annoying / cringey (UK).",
    "context": "Mild insult.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Karen",
    "kind": "Slang",
    "meaning": "Entitled, rude (often middle-aged) woman trope.",
    "context": "Used about parents and teachers.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "KMS / KYS",
    "kind": "Acronym",
    "meaning": "‘Kill myself’ / ‘kill yourself’ — used as hyperbole, also as serious bullying.",
    "context": "Never assume it’s a joke. Open a calm conversation.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://www.netlingo.com/acronyms"
  },
  {
    "term": "Lit",
    "kind": "Slang",
    "meaning": "Exciting or cool.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "L / Take the L",
    "kind": "Slang",
    "meaning": "Loss / accepting defeat.",
    "context": "Gaming origin.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "LMAO",
    "kind": "Acronym",
    "meaning": "‘Laughing my ass off’.",
    "context": "Standard reaction.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Locked in",
    "kind": "Slang",
    "meaning": "Focused, in the zone.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Lore",
    "kind": "Slang",
    "meaning": "Backstory about a person or fandom.",
    "context": "Often gossip.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "LOML",
    "kind": "Acronym",
    "meaning": "“Love of my life”, used romantically or affectionately for a friend.",
    "context": "Affectionate.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Lowkey / Highkey",
    "kind": "Slang",
    "meaning": "Lowkey: quietly, somewhat or without making a fuss. Highkey: openly or strongly.",
    "context": "Very common.",
    "riskLevel": "Usually fine",
    "aliases": [
      "low-key",
      "high-key",
      "low key",
      "high key"
    ],
    "sourceUrl": "https://www.dictionary.com/culture/slang/lowkenuinely"
  },
  {
    "term": "Main character",
    "kind": "Slang",
    "meaning": "Living life like you’re the star of the show.",
    "context": "Can be a serious or playful way of treating life as a story with yourself at the centre.",
    "riskLevel": "Usually fine",
    "reviewNote": "Core meaning checked on 21 September 2026; not a measure of current popularity.",
    "sourceUrl": "https://www.dictionary.com/culture/pop-culture/main-character"
  },
  {
    "term": "Mango mustard",
    "kind": "Slang",
    "meaning": "An absurd meme phrase; no reliable fixed translation established in this review.",
    "context": "An intentionally absurd phrase. Ask what it means in this particular joke rather than treating it as a code.",
    "riskLevel": "Usually fine",
    "matchable": false,
    "reviewNote": "Uncertain meaning — not used in automatic matching."
  },
  {
    "term": "Mid",
    "kind": "Slang",
    "meaning": "Mediocre.",
    "context": "Mild put-down. Watch for it being aimed at looks.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Mogging",
    "kind": "Slang",
    "meaning": "Showing off looks to feel superior.",
    "context": "Linked to ‘looksmaxxing’ communities — worth a conversation.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Mood",
    "kind": "Slang",
    "meaning": "‘I relate’.",
    "context": "Common reaction.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Mute",
    "kind": "Slang",
    "meaning": "Silently ignore someone on a platform.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "NGL",
    "kind": "Acronym",
    "meaning": "‘Not gonna lie’.",
    "context": "Honesty marker.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Neek",
    "kind": "Slang",
    "meaning": "UK insult mixing nerd + geek.",
    "context": "Mild bullying.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "NPC",
    "kind": "Slang",
    "meaning": "‘Non-player character’ — someone seen as bland or robotic.",
    "context": "Common insult about peers.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Normie",
    "kind": "Slang",
    "meaning": "Someone outside internet culture.",
    "context": "Mild.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Ohio",
    "kind": "Slang",
    "meaning": "Synonym for strange or cringey.",
    "context": "Meme word.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "OOMF",
    "kind": "Acronym",
    "meaning": "‘One of my followers / friends’.",
    "context": "Vague reference, often subtweeting.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/acronyms/oomf",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "OP",
    "kind": "Acronym",
    "meaning": "‘Overpowered’ — too good. Also ‘original poster’.",
    "context": "Context-dependent.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://support.reddithelp.com/hc/en-us/articles/360043478311-How-can-I-tell-who-s-a-moderator-Reddit-administrator-or-the-original-poster-on-a-comment-thread",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Opp / Opps",
    "kind": "Slang",
    "meaning": "An opponent, rival or enemy.",
    "context": "May be joking or hostile. The term alone is not evidence of gang involvement.",
    "riskLevel": "Worth a chat",
    "aliases": [
      "op"
    ],
    "sourceUrl": "https://www.dictionary.com/articles/tiktok-slang-words"
  },
  {
    "term": "Outta pocket",
    "kind": "Slang",
    "meaning": "Out of line / controversial.",
    "context": "Reaction phrase.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Periodt",
    "kind": "Slang",
    "meaning": "Emphasis — ‘end of story’.",
    "context": "Empowering.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Pookie",
    "kind": "Slang",
    "meaning": "Term of endearment.",
    "context": "Friends or partner.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "POS",
    "kind": "Acronym",
    "meaning": "Can mean “piece of shit” (an insult), “parent over shoulder”, or “point of sale”.",
    "context": "These meanings differ substantially. Ask what the person meant rather than assuming secrecy.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/browse/pos"
  },
  {
    "term": "POV",
    "kind": "Acronym",
    "meaning": "‘Point of view’ — TikTok framing.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Pushing P",
    "kind": "Slang",
    "meaning": "Doing things the right way / showing class.",
    "context": "Hip-hop origin.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/pushing-p",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Ratio",
    "kind": "Slang",
    "meaning": "An unfavourable balance of replies and likes, or a challenge to get more engagement than another post.",
    "context": "Often used to signal disagreement; counts alone do not establish what everyone thinks.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/articles/tiktok-slang-words",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Real",
    "kind": "Slang",
    "meaning": "‘True / I agree’.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Rent free",
    "kind": "Slang",
    "meaning": "Something stuck in your head.",
    "context": "Harmless.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Rizz",
    "kind": "Slang",
    "meaning": "Charisma / flirting skill.",
    "context": "A compliment about charm; not specific to one gender.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/"
  },
  {
    "term": "Roadman",
    "kind": "Slang",
    "meaning": "UK streetwear / urban persona.",
    "context": "Style identity. Sometimes linked to drill culture.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Salty",
    "kind": "Slang",
    "meaning": "Bitter / resentful.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/browse/salty",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Serving",
    "kind": "Slang",
    "meaning": "Looking amazing.",
    "context": "Compliment.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Sheesh",
    "kind": "Slang",
    "meaning": "Exclamation of awe.",
    "context": "Reaction.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Ship",
    "kind": "Slang",
    "meaning": "Want two people to be a couple.",
    "context": "Fandom and friend talk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Side eye",
    "kind": "Slang",
    "meaning": "A judgemental look.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Sigma",
    "kind": "Slang",
    "meaning": "Lone-wolf, ‘main character’ male energy.",
    "context": "Often ironic, but rooted in ‘manosphere’ ideas about masculinity.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Simp",
    "kind": "Slang",
    "meaning": "Overly devoted to someone (usually romantic).",
    "context": "Common insult. Can carry misogynistic undertones.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Situationship",
    "kind": "Slang",
    "meaning": "Undefined romantic relationship.",
    "context": "Real teen experience worth discussing.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Skibidi",
    "kind": "Slang",
    "meaning": "Nonsense meme word — can mean ‘cool’ or ‘bad’.",
    "context": "Pure Gen-Alpha humour.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Slay",
    "kind": "Slang",
    "meaning": "Performed brilliantly.",
    "context": "Compliment.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Sliding into DMs",
    "kind": "Slang",
    "meaning": "Starting a private-message conversation, sometimes to flirt.",
    "context": "The phrase alone does not establish the sender’s intentions.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/culture/slang/slide-into-the-dms",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Smol",
    "kind": "Slang",
    "meaning": "Cute / tiny.",
    "context": "Harmless.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Smurfing",
    "kind": "Slang",
    "meaning": "A skilled player using an account or manipulating matchmaking to play below their true skill level.",
    "context": "A fair-play issue. It does not specifically mean an adult targeting children.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://playvalorant.com/en-us/news/game-updates/riot-mobile-verification-beta/"
  },
  {
    "term": "Snaked",
    "kind": "Slang",
    "meaning": "May mean betrayed or treated disloyally; the exact slang use needs context.",
    "context": "Friendship drama.",
    "riskLevel": "Usually fine",
    "reviewNote": "The source supports “snake” for a treacherous person, not every use of “snaked”. This inferred slang interpretation is excluded from automatic matching.",
    "sourceUrl": "https://www.merriam-webster.com/dictionary/snake",
    "matchable": false
  },
  {
    "term": "Snatched",
    "kind": "Slang",
    "meaning": "Toned / styled to perfection.",
    "context": "Compliment about appearance — can fuel body pressure.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Social battery",
    "kind": "Slang",
    "meaning": "Energy for social situations.",
    "context": "Self-aware mental health language.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Stan",
    "kind": "Slang",
    "meaning": "Obsessed fan.",
    "context": "Fandom term. Can tip into unhealthy parasocial behaviour.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Sus",
    "kind": "Slang",
    "meaning": "Suspicious.",
    "context": "Popularised further by Among Us, but the abbreviation predates the game.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/pretty-sus"
  },
  {
    "term": "TBH",
    "kind": "Acronym",
    "meaning": "‘To be honest’.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Tea",
    "kind": "Slang",
    "meaning": "Gossip.",
    "context": "‘Spill the tea’.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Thirsty / Thirst trap",
    "kind": "Slang",
    "meaning": "Desperate for attention; sexy post designed to get reactions.",
    "context": "Image-pressure language. Worth talking about audience and consent.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Throw shade",
    "kind": "Slang",
    "meaning": "Passive-aggressive comments.",
    "context": "Drama signal.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Trad / Tradwife",
    "kind": "Slang",
    "meaning": "Trad means traditional. Tradwife refers to a woman embracing traditional homemaking and gender roles.",
    "context": "Can describe an aesthetic or ideology. Discuss the specific beliefs expressed rather than inferring them from the label.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.dictionary.com/browse/tradwife"
  },
  {
    "term": "Unalive",
    "kind": "Slang",
    "meaning": "‘Kill’ — used to dodge platform moderation.",
    "context": "Common in mental-health and dark-humour content. Take seriously if used about self.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Valid",
    "kind": "Slang",
    "meaning": "Acceptable / true.",
    "context": "Affirming.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Vibe / Vibe check",
    "kind": "Slang",
    "meaning": "Mood; assessing someone’s mood.",
    "context": "Casual.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Vent account",
    "kind": "Slang",
    "meaning": "Anonymous account for sharing low feelings.",
    "context": "Can be supportive — can also reinforce distress. Worth knowing it exists.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "W",
    "kind": "Slang",
    "meaning": "A win.",
    "context": "Positive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Womp womp",
    "kind": "Slang",
    "meaning": "Mock-sympathy sound — ‘too bad’.",
    "context": "Dismissive.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "WTF",
    "kind": "Acronym",
    "meaning": "‘What the f***’ — shock.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "WYA / WYD",
    "kind": "Acronym",
    "meaning": "‘Where you at’ / ‘what you doing’.",
    "context": "Casual check-in.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "X-rated",
    "kind": "Slang",
    "meaning": "Sexually explicit content.",
    "context": "If paired with DMs or photo-sharing talk, take seriously.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Yap / Yapper",
    "kind": "Slang",
    "meaning": "Someone who talks a lot.",
    "context": "Casual.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Yas",
    "kind": "Slang",
    "meaning": "Enthusiastic yes.",
    "context": "Common.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/teen-slang-dictionary/",
    "reviewNote": "Core slang sense checked against the linked reference on 21 September 2026. Examples are illustrative; meaning depends on context."
  },
  {
    "term": "Yeet",
    "kind": "Slang",
    "meaning": "Throw with force; general exclamation.",
    "context": "Older but still used.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.merriam-webster.com/dictionary/yeet",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "YOLO",
    "kind": "Acronym",
    "meaning": "‘You only live once’.",
    "context": "Used to justify risky behaviour.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://www.oxfordlearnersdictionaries.com/us/definition/english/yolo",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "Zesty",
    "kind": "Slang",
    "meaning": "Lively or energetic; also used as a mocking label based on stereotypes about sexuality or femininity.",
    "context": "Ask how it was used. Address targeted insults without guessing anyone’s sexuality.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://knowyourmeme.com/memes/zesty-slang/",
    "reviewNote": "Core sense checked against the linked reference on 21 September 2026. Examples and context are illustrative, not evidence about a particular child."
  },
  {
    "term": "🍃",
    "kind": "Emoji",
    "meaning": "Leaves, nature or a breeze; sometimes a cannabis reference.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/leaf-fluttering-in-wind",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "💊",
    "kind": "Emoji",
    "meaning": "Medicine or a pill; can also refer to non-medical drug use.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://emojipedia.org/pill",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🔌",
    "kind": "Emoji",
    "meaning": "Electricity or charging; figuratively a connection or supplier.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://emojipedia.org/electric-plug",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "❄️",
    "kind": "Emoji",
    "meaning": "Snow, winter or cold; sometimes an insult implying oversensitivity.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/snowflake",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🍄",
    "kind": "Emoji",
    "meaning": "A mushroom, nature or food; sometimes a reference to psychedelic mushrooms.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://emojipedia.org/mushroom",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🍆",
    "kind": "Emoji",
    "meaning": "An aubergine; also used as a sexual reference to a penis.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://emojipedia.org/eggplant",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🍑",
    "kind": "Emoji",
    "meaning": "A peach; also used to refer to a bottom.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/peach",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "💦",
    "kind": "Emoji",
    "meaning": "Water, sweat or splashing; can also be sexual innuendo.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/sweat-droplets",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "👅",
    "kind": "Emoji",
    "meaning": "A tongue, tasting or playfulness; can also be suggestive.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/tongue",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🌽",
    "kind": "Emoji",
    "meaning": "Corn or food; sometimes used for the sound-alike “porn”.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Investigate",
    "sourceUrl": "https://emojipedia.org/ear-of-corn",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🥵",
    "kind": "Emoji",
    "meaning": "Heat, discomfort or feeling overwhelmed; sometimes attraction.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/hot-face",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "😈",
    "kind": "Emoji",
    "meaning": "Mischief or playful naughtiness; sometimes flirtation.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/smiling-face-with-horns",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "💀",
    "kind": "Emoji",
    "meaning": "A skull or death imagery; often a reaction meaning “that is very funny”.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/skull",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "😭",
    "kind": "Emoji",
    "meaning": "Strong emotion: laughter, joy, frustration, sadness or distress.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/loudly-crying-face",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🤡",
    "kind": "Emoji",
    "meaning": "A clown; can mean foolish behaviour, self-mockery or an insult.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/clown-face",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🧢",
    "kind": "Emoji",
    "meaning": "A cap; also used for “cap”, meaning a lie.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/billed-cap",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🐐",
    "kind": "Emoji",
    "meaning": "A goat; also praise meaning “greatest of all time”.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/goat",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🚩",
    "kind": "Emoji",
    "meaning": "A flag; figuratively a warning sign or concern.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/triangular-flag",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🫶",
    "kind": "Emoji",
    "meaning": "Heart hands expressing love, appreciation or support.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/heart-hands",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "👀",
    "kind": "Emoji",
    "meaning": "Looking, curiosity or attention; sometimes a suggestive reaction.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/eyes",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🦋",
    "kind": "Emoji",
    "meaning": "A butterfly, beauty or happiness.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/butterfly",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🖤",
    "kind": "Emoji",
    "meaning": "Affection, a dark aesthetic, dark humour or sorrow.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/black-heart",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🌈",
    "kind": "Emoji",
    "meaning": "A rainbow, hope or LGBTQ+ pride.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/rainbow",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🍒",
    "kind": "Emoji",
    "meaning": "Cherries; can have sexual or body-related meanings in context.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/cherries",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🥶",
    "kind": "Emoji",
    "meaning": "Cold or freezing; sometimes a reaction to something impressive or harsh.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/cold-face",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🫠",
    "kind": "Emoji",
    "meaning": "Heat, embarrassment, overwhelm or a feeling of melting away.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/melting-face",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "🥲",
    "kind": "Emoji",
    "meaning": "Mixed feelings, gratitude, relief or smiling through sadness.",
    "context": "The surrounding message and the sender’s explanation matter. This symbol alone does not establish intent or risk.",
    "riskLevel": "Worth a chat",
    "sourceUrl": "https://emojipedia.org/smiling-face-with-tear",
    "reviewNote": "Context-dependent: ordinary and figurative meanings can overlap."
  },
  {
    "term": "Aura farming",
    "kind": "Slang",
    "meaning": "Deliberately acting cool or confident to cultivate an impressive image.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/aura-farming"
  },
  {
    "term": "Crash out",
    "kind": "Slang",
    "meaning": "Lose your temper or act recklessly; can also mean fall asleep.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/crash-out"
  },
  {
    "term": "Unc",
    "kind": "Slang",
    "meaning": "Short for uncle; teasing someone for seeming older or out of touch.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/unc"
  },
  {
    "term": "Lowkenuinely",
    "kind": "Slang",
    "meaning": "A blend of lowkey and genuinely: expressing something sincerely but casually.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/lowkenuinely"
  },
  {
    "term": "It’s giving",
    "kind": "Slang",
    "meaning": "It has the look, energy or impression of something; can also be praise on its own.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/its-giving"
  },
  {
    "term": "41",
    "kind": "Number",
    "meaning": "A largely nonsensical meme interjection; can also simply be a number.",
    "context": "Meaning and tone depend on the conversation; documented usage does not mean every teen uses it.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://www.dictionary.com/culture/slang/41"
  },
  {
    "term": "🔥",
    "kind": "Emoji",
    "meaning": "Fire or heat; also approval of something impressive.",
    "context": "A possible reading, not a judgement of the sender’s wellbeing.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/fire"
  },
  {
    "term": "🥀",
    "kind": "Emoji",
    "meaning": "A wilted flower; can express sadness, disappointment or ironic heartbreak.",
    "context": "A possible reading, not a judgement of the sender’s wellbeing.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/wilted-flower"
  },
  {
    "term": "🫩",
    "kind": "Emoji",
    "meaning": "Tiredness or exhaustion.",
    "context": "A possible reading, not a judgement of the sender’s wellbeing.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://emojipedia.org/face-with-bags-under-eyes"
  },
  {
    "term": "LOL",
    "kind": "Acronym",
    "meaning": "Laugh out loud.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "BRB",
    "kind": "Acronym",
    "meaning": "Be right back.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "AFK",
    "kind": "Acronym",
    "meaning": "Away from keyboard.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "GG",
    "kind": "Acronym",
    "meaning": "Good game.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "DM",
    "kind": "Acronym",
    "meaning": "Direct message.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "IKR",
    "kind": "Acronym",
    "meaning": "I know, right?",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "ILY",
    "kind": "Acronym",
    "meaning": "I love you.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "LMK",
    "kind": "Acronym",
    "meaning": "Let me know.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "OMW",
    "kind": "Acronym",
    "meaning": "On my way.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "BTW",
    "kind": "Acronym",
    "meaning": "By the way.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  },
  {
    "term": "OMG",
    "kind": "Acronym",
    "meaning": "Oh my God or gosh.",
    "context": "Established text shorthand; tone depends on the conversation.",
    "riskLevel": "Usually fine",
    "sourceUrl": "https://weareluna.app/parents/guides/navigating-difficult-scenarios/text-acronyms-guide/"
  }
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
    "slug": "android-first-setup",
    "title": "Android phone for a child — full setup with Google Family Link",
    "device": "Android",
    "summary": "Create a supervised child Google account, install Family Link, and lock down screen time, app installs and content — step by step.",
    "steps": [
      "Create or link the child’s own Google account",
      "Install Family Link on the parent phone",
      "Follow the supervision prompts on the child’s device",
      "Choose daily limits, downtime and app limits",
      "Review Google Play approvals and content ratings",
      "Review search, browser and YouTube controls",
      "Check ordinary calls to a trusted adult during downtime"
    ],
    "overview": "Family Link helps a parent manage a child’s Google account and supported Android devices. Start with Google’s current setup instructions; eligibility and available controls depend on the account, age and device. Work through the settings together.",
    "heroVideo": {
      "youtubeId": "BYRQvANa7OE",
      "title": "How to set up Google Family Link — Internet Matters",
      "caption": "Short walkthrough from UK online-safety non-profit Internet Matters (Feb 2026). Then follow the detailed steps below."
    },
    "sections": [
      {
        "title": "1 · Before you start",
        "visual": {
          "youtubeId": "d2zPq1lfqQs",
          "title": "Family Link overview",
          "source": "Google",
          "sourceUrl": "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Have both phones unlocked and on Wi-Fi. You'll need the child's date of birth and your own Google password.",
        "steps": [
          "Update both devices to supported software and have account recovery details ready.",
          "Install Google Family Link on the parent phone.",
          "If the child already has an account, follow Google’s add-supervision process. Do not create a duplicate account just to follow this checklist.",
          "Before removing accounts or resetting a device, back up important data and read the manufacturer’s instructions. A reset erases local data; it is not a routine first step for adding supervision."
        ]
      },
      {
        "title": "2 · Create the child's Google account",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Set up a supervised child account",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Use Family Link or the supported new-device setup flow. If an account already exists, use the supervision instructions instead.",
        "steps": [
          "Choose Add child and follow the account-creation prompts.",
          "Use the correct birthday and a strong password; keep recovery information securely.",
          "Complete Google’s parental-consent process. Google says account creation has no fee, although card verification can place a temporary authorisation.",
          "If verification fails, use the help offered by Google rather than assuming a particular card or payment amount is required."
        ]
      },
      {
        "title": "3 · Set up the child's phone",
        "visual": {
          "youtubeId": "d2zPq1lfqQs",
          "title": "Connect the child's device",
          "source": "Google",
          "sourceUrl": "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Now move to the child's device.",
        "steps": [
          "Follow the sign-in and supervision prompts for the child’s account on their device.",
          "Use the parent account when prompted to consent and complete linking.",
          "Read the permissions requested and check that the correct device appears in Family Link.",
          "Review installed apps together and block those you decide are unsuitable."
        ]
      },
      {
        "title": "4 · Screen time, bedtime & downtime",
        "visual": {
          "youtubeId": "d2zPq1lfqQs",
          "title": "Set time and app limits",
          "source": "Google",
          "sourceUrl": "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "In Family Link, select the child and open Screen time. Menu names vary by version.",
        "steps": [
          "Agree daily limits that leave room for sleep, school and other activities.",
          "Set Downtime and review which apps have unlimited time.",
          "Choose limits for individual apps appropriate to the child’s age.",
          "Check normal calls to a trusted adult while limits are active. Do not call emergency services as a test."
        ]
      },
      {
        "title": "5 · App installs & purchases",
        "visual": {
          "youtubeId": "d2zPq1lfqQs",
          "title": "Manage apps with Family Link",
          "source": "Google",
          "sourceUrl": "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Open Google Play controls in Family Link and choose the approval setting you want.",
          "Review content ratings separately from purchase approval.",
          "Approvals apply to Google Play billing; they do not block every payment route or necessarily request approval for previously approved apps.",
          "Check an ordinary app request together and review payment methods."
        ]
      },
      {
        "title": "6 · Web, search & YouTube",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Choose a supervised YouTube experience",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Review SafeSearch and Chrome website restrictions. Filters can miss unsuitable material.",
          "Choose YouTube Kids or a supervised kid account for an eligible younger child.",
          "Teen supervision is a separate YouTube experience. Follow the linked YouTube checklist for account types and current content controls."
        ]
      },
      {
        "title": "7 · Location, find-my-phone & data",
        "visual": {
          "youtubeId": "d2zPq1lfqQs",
          "title": "Family Link location tools",
          "source": "Google",
          "sourceUrl": "https://www.youtube.com/watch?v=d2zPq1lfqQs",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Review location sharing together in Family Link. Availability depends on the device, power, connectivity and settings.",
          "Review the phone’s lost-device service and account recovery options.",
          "Check app location permissions in the device settings and remove unnecessary access."
        ]
      }
    ],
    "capabilities": [
      {
        "label": "Screen-time controls",
        "detail": "Daily limits, app limits and downtime on supported devices."
      },
      {
        "label": "Google Play approvals",
        "detail": "Review eligible downloads and purchases; see the billing limitations above."
      },
      {
        "label": "Search and browser controls",
        "detail": "Reduce access to unsuitable content; filters are not guarantees."
      },
      {
        "label": "Device location",
        "detail": "May help locate the device; it is not a guaranteed live view of the child."
      }
    ],
    "emergency": "Google says a locked Android phone with a calling plan can receive calls and offers an Emergency calling option. Learn the device’s emergency-call instructions and keep it charged. Test an ordinary call to a trusted adult during downtime; never make a test call to 999 or 112.",
    "tutorials": [
      {
        "title": "Get started with Family Link",
        "source": "Google Families (official)",
        "type": "Official guide",
        "url": "https://families.google.com/familylink/"
      },
      {
        "title": "Set up Family Link — official help article",
        "source": "Google Help",
        "type": "Official guide",
        "url": "https://support.google.com/families/answer/7101025"
      },
      {
        "title": "Manage screen time with Family Link",
        "source": "Google Help",
        "type": "Official guide",
        "url": "https://support.google.com/families/answer/7103340"
      },
      {
        "title": "Approve or block apps your child wants to download",
        "source": "Google Help",
        "type": "Official guide",
        "url": "https://support.google.com/families/answer/7385553"
      },
      {
        "title": "Parental controls on Android — UK guide with screenshots",
        "source": "Internet Matters (UK)",
        "type": "Article",
        "url": "https://www.internetmatters.org/parental-controls/smartphones-and-other-devices/google-family-link-parental-controls/"
      },
      {
        "title": "Create a child Google account and parental consent",
        "url": "https://support.google.com/families/answer/7103338?hl=en",
        "source": "Official support",
        "type": "Official guide"
      },
      {
        "title": "Google Play family payment and approval limits",
        "url": "https://support.google.com/families/answer/6294544?hl=en",
        "source": "Official support",
        "type": "Official guide"
      }
    ],
    "notes": [
      "Family Link does not read every message or replace the controls inside each app.",
      "Check Google’s current age and supervision rules when the child becomes eligible to manage their own account.",
      "Menu paths are a starting point. Use the official instructions for your device and software version."
    ]
  },
  {
    "slug": "iphone-first-setup",
    "title": "iPhone for a child — full setup with Family Sharing & Screen Time",
    "device": "iOS",
    "summary": "Create a Child Apple Account inside Family Sharing, then use Screen Time and Communication Safety to lock down content, time and contacts.",
    "steps": [
      "Create a Child Apple Account through Family Sharing",
      "Sign the child in on their iPhone with the new account",
      "Turn on Screen Time and set a Screen Time Passcode only you know",
      "Set Downtime, App Limits and Always-Allowed apps",
      "Turn on Content & Privacy Restrictions (App Store, web, Siri, explicit content)",
      "Turn on Ask to Buy; verify Communication Safety is on (it's enabled by default on current software)",
      "Enable Find My and Stolen Device Protection"
    ],
    "overview": "Apple's parental controls live in two places: Family Sharing (which links your accounts) and Screen Time (which sets the rules). You configure most things from your own iPhone once the child's Apple Account is linked. Apple’s September 2026 documentation uses new iOS 27 menus after the family’s devices and parental controls are updated. Older software uses the earlier Screen Time menus. Follow the linked Apple guide for your version.",
    "heroVideo": {
      "youtubeId": "8siFNH-brM4",
      "title": "How to create a child account with Family Sharing on iPhone or iPad — Apple Support",
      "caption": "Official Apple Support walkthrough (2:37) for creating the child's Apple Account. Then follow the detailed steps below to lock down Screen Time."
    },
    "sections": [
      {
        "title": "1 · Create the Child Apple Account",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Create a Child Apple Account",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "On YOUR iPhone, open Settings → tap your name at the top → Family.",
        "steps": [
          "Tap 'Add Member' → 'Create Child Account' → Continue.",
          "Enter the child's name and birthday (this sets the right default restrictions).",
          "Agree to the Parent Privacy Disclosure and verify yourself (Face ID / Touch ID / CVV on your Apple-ID payment card).",
          "Create the child's Apple ID (an @icloud.com email) and a password YOU keep.",
          "Enable Ask to Buy for eligible downloads and purchases. Redownloading the child’s own purchases, updates and redemption codes have exceptions."
        ]
      },
      {
        "title": "2 · Sign the child in on their iPhone",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Connect the child to Family Sharing",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "If the iPhone is new: at the 'Hello' screen choose 'Set Up for a Child in My Family' (iOS 16+).",
          "If the phone already has an account, check whether it should be added to the family rather than replaced. Back up data and follow Apple’s account-transfer instructions before signing out or erasing anything.",
          "Accept the prompts to enable iCloud Backup, Find My iPhone and Screen Time."
        ]
      },
      {
        "title": "3 · Screen Time and time limits",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Set up Screen Time",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Open Settings → Family → the child. New iOS 27 controls use Time Allowances and Screen Time Schedule; older versions use App Limits and Downtime.",
        "steps": [
          "Set a separate Screen Time passcode and protect the parent account.",
          "Choose a daily allowance and a schedule that fit school, sleep and family needs.",
          "Review apps and contacts allowed during restricted periods.",
          "On older versions, check Block at End of Limit where offered.",
          "Check an ordinary call to a trusted adult while limits are active."
        ]
      },
      {
        "title": "4 · Content & Privacy Restrictions",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Set up parental controls",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Open the child’s family settings. iOS 27 separates Apps & Websites from Content & Privacy Restrictions; older versions group more options inside Screen Time.",
        "steps": [
          "Review app installation and purchase controls; the current Apple guide gives the menus for your version.",
          "Choose content ratings appropriate to the child. App Store ratings describe content, not the service’s account eligibility.",
          "Review website filtering or approved websites, and check the browsers the child actually uses.",
          "Review Siri, privacy permissions and whether the child can change account settings."
        ]
      },
      {
        "title": "5 · Communication, contacts & Messages",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Review communication controls",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Review allowed contacts for Phone, Messages and FaceTime; other messaging apps need their own controls.",
          "Check Communication Safety is enabled. Features vary by software version; follow Apple’s current guide.",
          "Review who can edit contacts and check trusted adults remain reachable during restricted periods."
        ]
      },
      {
        "title": "6 · Safety & device security",
        "visual": {
          "youtubeId": "8siFNH-brM4",
          "title": "Review device safety settings",
          "source": "Apple Support",
          "sourceUrl": "https://www.youtube.com/watch?v=8siFNH-brM4",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Settings → Family → child → Location Sharing → On. The child's iPhone appears in Find My.",
          "On the child phone: Settings → [name] → Find My → 'Find My iPhone' On, 'Send Last Location' On.",
          "On the child phone: Settings → Face ID & Passcode → 'Stolen Device Protection' On (iOS 17.3+).",
          "In Health → Medical ID, add emergency contacts and decide whether to enable Show When Locked. Without that setting, Medical ID is not available from the lock screen."
        ]
      }
    ],
    "capabilities": [
      {
        "label": "Time controls",
        "detail": "Schedules and allowances on the new software; Downtime and App Limits on earlier versions."
      },
      {
        "label": "Purchase approvals",
        "detail": "Ask to Buy covers eligible requests, with exceptions."
      },
      {
        "label": "Communication controls",
        "detail": "Review Apple’s supported apps and manage other messaging apps separately."
      },
      {
        "label": "Content and privacy",
        "detail": "Review ratings, website access and permissions."
      },
      {
        "label": "Device security",
        "detail": "Set up Find My and appropriate device security; location is not guaranteed."
      }
    ],
    "emergency": "Learn how to reach the Emergency option on this iPhone. Medical ID is available from the lock screen only when Show When Locked is enabled. Keep the phone charged and check ordinary calls to a trusted adult during restrictions. Do not call 999 or 112 as a test.",
    "tutorials": [
      {
        "title": "Set up a Child Apple Account with Family Sharing",
        "source": "Apple Support (official)",
        "type": "Official guide",
        "url": "https://support.apple.com/en-gb/108714"
      },
      {
        "title": "Use Screen Time on your iPhone",
        "source": "Apple Support (official)",
        "type": "Official guide",
        "url": "https://support.apple.com/en-gb/108806"
      },
      {
        "title": "Use parental controls on your child's iPhone",
        "source": "Apple Support (official)",
        "type": "Official guide",
        "url": "https://support.apple.com/en-gb/105121"
      },
      {
        "title": "Communication Safety on iPhone",
        "source": "Apple Support (official)",
        "type": "Official guide",
        "url": "https://support.apple.com/en-gb/105069"
      },
      {
        "title": "How to set up parental controls on iPhone (walkthrough)",
        "source": "Apple Support · YouTube",
        "type": "Video",
        "url": "https://www.youtube.com/watch?v=8siFNH-brM4"
      },
      {
        "title": "App Store age ratings values and definitions (4+/9+/13+/16+/18+ on iOS 26)",
        "source": "Apple Developer",
        "type": "Official guide",
        "url": "https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/"
      },
      {
        "title": "Updated age ratings in App Store Connect (July 2025)",
        "source": "Apple Developer News",
        "type": "Official guide",
        "url": "https://developer.apple.com/news/?id=ks775ehf"
      },
      {
        "title": "iPhone parental controls — UK guide with current screenshots",
        "source": "Internet Matters (UK)",
        "type": "Article",
        "url": "https://www.internetmatters.org/parental-controls/smartphones-and-other-devices/apple-iphone-parental-controls/"
      },
      {
        "title": "Set up Screen Time (video walkthrough)",
        "source": "Apple Support · YouTube",
        "type": "Video",
        "url": "https://www.youtube.com/watch?v=8siFNH-brM4"
      },
      {
        "title": "Ask to Buy: eligible requests and exceptions",
        "url": "https://support.apple.com/en-gb/105055",
        "source": "Official support",
        "type": "Official guide"
      },
      {
        "title": "Medical ID and Show When Locked",
        "url": "https://support.apple.com/en-ie/105072",
        "source": "Official support",
        "type": "Official guide"
      }
    ],
    "notes": [
      "Keep the Screen Time passcode and parent-account recovery details secure. Recheck settings after major software updates.",
      "Apple updated its App Store age ratings in July 2025 (iOS 26+) to 4+, 9+, 13+, 16+ and 18+ — more granular than the old 4+/9+/12+/17+ tiers still shown on devices below iOS 26. In Screen Time → Content Restrictions you can cap which ratings the child may install, so set it deliberately rather than leaving it at the default. Source: developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/"
    ]
  },
  {
    "slug": "youtube-safer",
    "title": "Review YouTube’s safety and viewing settings",
    "device": "Any",
    "summary": "Choose the right account type, review content controls and set limits for viewing and the Shorts feed.",
    "steps": [
      "Check the account type",
      "Review the content setting",
      "Turn off Autoplay where appropriate",
      "Review history and recommendations together",
      "Set a Shorts feed limit",
      "Check Restricted Mode where available",
      "Repeat the checks on each viewing device"
    ],
    "overview": "YouTube has different controls for Kids, supervised kid accounts, supervised teens and standard accounts. Some controls follow the account; Restricted Mode needs checking in each browser or device. Start with the account actually used on each screen.",
    "heroVideo": {
      "youtubeId": "0dy1St39xeo",
      "title": "Parental controls and supervised experiences on YouTube — Google",
      "caption": "Official Google walkthrough of supervised experiences. The exact tap-paths for every setting are written out below."
    },
    "sections": [
      {
        "title": "1 · Turn off Autoplay (30 seconds)",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "YouTube family controls overview",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Autoplay starts another video automatically. Check the toggle on each viewing device.",
        "steps": [
          "Phone/tablet app: start any video → the row of icons at the top of the player → tap the Autoplay toggle so it reads Off.",
          "Computer: youtube.com → play a video → under the player, toggle 'Autoplay' off.",
          "Smart TV / console / Fire Stick: Settings → Autoplay → Off. This is a separate switch from the phone.",
          "Check it stuck: close the app, reopen, play a video and let it end — it should stop, not roll on."
        ]
      },
      {
        "title": "2 · Set the right account type and content level",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Choose a supervised experience",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Choose an experience that fits the child. The content-setting labels describe available content, not permission to create an unsupervised account.",
        "steps": [
          "Consider YouTube Kids for younger children, with its age settings and search controls.",
          "Eligible under-13s can use a parent-managed supervised kid account on regular YouTube. Current content labels are Older kids, Teens and Older teens; choose cautiously.",
          "For teenagers, review the separate Family Center supervision options.",
          "Supervised kid accounts restrict features such as posting comments and uploads. Some content levels allow reading comments.",
          "Check the correct account is signed in on each device."
        ]
      },
      {
        "title": "3 · Review, clear and pause history",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Review viewing controls",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "History influences recommendations. Review it with your child; clearing it is a choice, not a safety filter.",
        "steps": [
          "Open YouTube’s history controls with your child.",
          "Discuss what they watch before choosing whether to clear, pause or auto-delete history.",
          "Pausing history changes recommendation signals. It does not make remaining videos safe."
        ]
      },
      {
        "title": "4 · Deal with Shorts",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Use YouTube wellbeing controls",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "YouTube now offers a daily Shorts feed limit, including zero. A personal reminder differs from a parent-set supervised limit.",
        "steps": [
          "For a linked supervised account, open Family Center → the child → Time management → Shorts feed limit.",
          "Select a limit, including zero where available. Google says the supervised limit prevents further feed scrolling until the next day.",
          "On a standard account: You → Settings → Time management → Shorts feed limit. This reminder can be dismissed or ignored.",
          "Check the setting on the account and device actually used. A feed limit is not a promise that every short video is blocked everywhere."
        ]
      },
      {
        "title": "5 · Clean subscriptions and retrain recommendations",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Manage what appears on YouTube",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Review subscriptions together and remove unwanted channels.",
          "Use Not interested or Don’t recommend channel where offered.",
          "Revisit recommendations together; these controls do not guarantee what appears next."
        ]
      },
      {
        "title": "6 · Restricted Mode — on every device and browser",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Review content controls",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Restricted Mode filters potentially mature content on supported accounts. Supervised kid accounts use their own content settings instead.",
        "steps": [
          "Follow YouTube’s Restricted Mode instructions for each browser, phone or TV where the option is available.",
          "Check whether a parent, school or network administrator manages the setting.",
          "Do not assume a home-network filter also covers mobile data.",
          "Filters may miss content or block suitable material; keep discussing what appears."
        ]
      },
      {
        "title": "7 · Repeat where they actually watch",
        "visual": {
          "youtubeId": "0dy1St39xeo",
          "title": "Check every viewing device",
          "source": "YouTube",
          "sourceUrl": "https://www.youtube.com/watch?v=0dy1St39xeo",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Check the account and available controls on every viewing device.",
        "steps": [
          "Review the family TV and streaming devices.",
          "Check games consoles and tablets.",
          "Check school-managed devices with the school rather than changing administrative controls.",
          "An adult account may have different settings from the child’s account; check which is signed in."
        ]
      }
    ],
    "capabilities": [
      {
        "label": "Account and content settings",
        "detail": "Kids, supervised kid and teen experiences offer different controls."
      },
      {
        "label": "Shorts feed limits",
        "detail": "Parent-set supervised limits differ from dismissible standard-account reminders."
      },
      {
        "label": "History and recommendations",
        "detail": "Review what influences the feed together."
      },
      {
        "label": "Restricted Mode",
        "detail": "Check availability and settings per device; it is not a guarantee."
      }
    ],
    "notes": [
      "No control guarantees that every video will be suitable.",
      "Check Google’s current documentation after app updates.",
      "Account-specific protections may not apply when another account is used."
    ],
    "tutorials": [
      {
        "title": "Supervised experiences on YouTube",
        "source": "YouTube Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/youtube/answer/10314940",
        "note": "Explains supervised kid accounts and feature restrictions."
      },
      {
        "title": "Turn Restricted Mode on or off",
        "source": "YouTube Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/youtube/answer/174084",
        "note": "Per-device instructions for phone, computer and TV."
      },
      {
        "title": "Manage Autoplay",
        "source": "YouTube Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/youtube/answer/6327615"
      },
      {
        "title": "Manage your YouTube watch and search history",
        "source": "Google Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/youtube/answer/95725"
      },
      {
        "title": "Set up YouTube Kids and choose a content level",
        "source": "YouTube Kids Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/youtubekids/answer/6172308"
      },
      {
        "title": "Manage your child's YouTube settings in Family Link",
        "source": "Google Help (official)",
        "type": "Official guide",
        "url": "https://support.google.com/families/answer/7087030"
      },
      {
        "title": "Parents' guide to YouTube",
        "source": "Internet Matters (UK)",
        "type": "Article",
        "url": "https://www.internetmatters.org/parental-controls/entertainment-search-engines/youtube-safety-settings/",
        "note": "UK non-profit, with annotated screenshots for each setting."
      },
      {
        "title": "Current supervised content settings",
        "url": "https://support.google.com/youtube/answer/10315823?hl=en",
        "source": "Official support",
        "type": "Official guide"
      },
      {
        "title": "Supervised account controls and Shorts feed limits",
        "url": "https://support.google.com/youtubekids/answer/13877231?hl=en-GB",
        "source": "Official support",
        "type": "Official guide"
      },
      {
        "title": "Standard-account Shorts reminder",
        "url": "https://support.google.com/youtube/answer/16671528?hl=en",
        "source": "Official support",
        "type": "Official guide"
      }
    ]
  },
  {
    "slug": "social-lockdown",
    "title": "Lock down a teen's social accounts",
    "device": "Any",
    "summary": "Review privacy, discovery, location, sign-in security and contacts together. Menus and options vary by app version and account age.",
    "steps": [
      "Set the account to Private (and confirm the Teen Account default is actually applied)",
      "Turn off 'suggest my account to others' and contact syncing",
      "Strip location: no location tags, no Snap Map, no place in bio",
      "Turn on two-factor authentication with an app, not SMS",
      "Clean the follower/friend list — remove anyone they cannot name in real life"
    ],
    "overview": "Review existing accounts together, explaining each change and how your child can ask for help. Privacy settings can reduce exposure; they cannot guarantee that contact or content is safe.",
    "sections": [
      {
        "title": "1 · Instagram",
        "visual": {
          "youtubeId": "A9PUMeAQRbA",
          "title": "Instagram Teen Accounts",
          "source": "Instagram",
          "sourceUrl": "https://www.youtube.com/watch?v=A9PUMeAQRbA",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Under-18 accounts should already be Teen Accounts (private by default, restricted DMs, sensitive-content limits). Verify rather than assume — and check the age on the account is the real one.",
        "steps": [
          "Private: profile → three lines (top right) → Settings and privacy → Account privacy → 'Private account' ON.",
          "Discovery: Settings → 'Suggested content' / 'Similar account suggestions' → turn OFF suggesting their account to others. Also Settings → Account Centre → Your information → turn off contact syncing.",
          "Messages: Settings → Messages and story replies → 'Others on Instagram' = Don't receive requests; Story replies = People you follow.",
          "Tags and mentions: Settings → Tags and mentions → set both to 'People you follow'. Turn on manual approval for tags.",
          "Location: never add a location to a post or Reel; remove any place, school or town from the bio.",
          "2FA: Account Centre → Password and security → Two-factor authentication → Authentication app.",
          "Supervision: Account Centre → Supervision → invite your account. It shows time spent, new followers and reported accounts — it does not show message content."
        ]
      },
      {
        "title": "2 · TikTok",
        "visual": {
          "youtubeId": "kyONXkjYm-s",
          "title": "Teen safety and privacy defaults",
          "source": "TikTok",
          "sourceUrl": "https://www.youtube.com/watch?v=kyONXkjYm-s",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "13–15 accounts are private by default with DMs off. 16–17 accounts are not fully locked, so check them properly.",
        "steps": [
          "Private: profile → three lines → Settings and privacy → Privacy → 'Private account' ON.",
          "In Privacy, review Suggest your account to others and disable unwanted discovery options; the options vary by account.",
          "Sync: Privacy → 'Sync contacts and Facebook friends' → off, and tap 'Remove previously synced contacts'.",
          "Messaging: Privacy → Direct messages → 'No one' (or Friends only for older teens).",
          "Comments, duets, stitches, downloads: Privacy → set each to Friends or No one.",
          "Location: never mention school or town in a bio; TikTok also infers location from the device — turn location permission off in the phone's app settings.",
          "2FA: Settings → Security and permissions → 2-step verification → authenticator app.",
          "Family Pairing: Settings → Family Pairing → link your phone to set screen time, restricted mode, DM limits and search restrictions that the teen cannot undo."
        ]
      },
      {
        "title": "3 · Snapchat",
        "visual": {
          "youtubeId": "3qkNYcRnwYc",
          "title": "Understand your teen's Snapchat experience",
          "source": "Snapchat",
          "sourceUrl": "https://www.youtube.com/watch?v=3qkNYcRnwYc",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Review contact discovery, location sharing and public content such as Spotlight and Stories.",
        "steps": [
          "Contact me: profile → gear icon → Privacy Controls → 'Contact Me' → 'My Friends'.",
          "Story: Privacy Controls → 'View My Story' → 'My Friends' or a custom list.",
          "Snap Map: open the Map → gear icon → 'Ghost Mode' ON. Check it is not set to expire in 3 or 24 hours.",
          "Review Find Friends or Quick Add discovery settings and reduce unwanted suggestions where offered.",
          "Contact sync: Settings → 'Mobile Number' / 'Contacts' → turn off syncing and delete previously synced contacts.",
          "2FA: Settings → Two-Factor Authentication → authenticator app.",
          "Family Centre: Settings → Family Centre → invite your account. You see who they message — not what is said.",
          "Review friends together. Discuss anyone whose identity is uncertain or whose behaviour makes your child uncomfortable."
        ]
      },
      {
        "title": "4 · Discord",
        "visual": {
          "youtubeId": "uVwBW1b2HlM",
          "title": "The Discord Family Center",
          "source": "Discord",
          "sourceUrl": "https://www.youtube.com/watch?v=uVwBW1b2HlM",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "intro": "Discord risk lives in servers and DMs from server members, not in a profile. UK accounts now get age-appropriate defaults, but server settings are still per-server.",
        "steps": [
          "Review Sensitive Content Filters for images and direct-message privacy. Image filtering does not assess every text message.",
          "Friend requests: Privacy & Safety → Who can add you as a friend → uncheck 'Everyone'; leave 'Friends of Friends' and 'Server members' off too if you can.",
          "Per-server: right-click each server → Privacy Settings → turn off direct messages from that server's members.",
          "Servers: open the server list together and ask what each one is. Leave any large public server they cannot explain.",
          "2FA: User Settings → My Account → Enable Two-Factor Auth (authenticator app).",
          "Family Centre: User Settings → Family Centre → link your account for a weekly email of who they messaged and which servers they joined — content is not shown."
        ]
      },
      {
        "title": "5 · Finish on every account",
        "visual": {
          "youtubeId": "A9PUMeAQRbA",
          "title": "Recheck teen protections",
          "source": "Instagram",
          "sourceUrl": "https://www.youtube.com/watch?v=A9PUMeAQRbA",
          "kind": "Official video",
          "description": "Publisher’s overview video. Use the written guidance and current official support links for settings; the video may show older menus."
        },
        "steps": [
          "Check the public profile together. A signed-out view is only one view; it cannot reveal every audience or recommendation.",
          "Check the profile photo, bio and pinned posts for school uniform, school name, street or house number.",
          "Check the account birthday. An incorrect age can affect protections; follow the platform’s correction process.",
          "Save the reporting routes: in-app reporting; CEOP for concerns about online sexual abuse or exploitation of a child; Report Remove for eligible sexual images of under-18s. Removal cannot be guaranteed. Never download, copy or forward sexual images to make a report.",
          "Put a date in the calendar to redo this in three months. Apps change defaults; accounts drift."
        ]
      }
    ],
    "capabilities": [
      {
        "label": "Privacy",
        "detail": "Limit audiences and review contacts."
      },
      {
        "label": "Discovery",
        "detail": "Reduce suggestions and contact syncing where supported."
      },
      {
        "label": "Messages",
        "detail": "Review who can contact the account and available filters."
      },
      {
        "label": "Location",
        "detail": "Review app sharing, device permissions and revealing posts."
      },
      {
        "label": "Two-factor authentication",
        "detail": "Adds protection to sign-in; keep recovery codes safe."
      },
      {
        "label": "Family controls",
        "detail": "Review each platform’s supported linking and privacy limits."
      }
    ],
    "notes": [
      "Family linking offers different visibility on each platform; do not assume it shows private message content.",
      "Content controls and filters may influence recommendations but cannot guarantee every item.",
      "Recheck after significant app updates and when your child reports a problem.",
      "Use the official account-age correction process if the birthday is wrong."
    ],
    "tutorials": [
      {
        "title": "Instagram Teen Accounts (default protections)",
        "source": "Meta (official)",
        "type": "Official guide",
        "url": "https://about.instagram.com/blog/announcements/instagram-teen-accounts"
      },
      {
        "title": "Set your Instagram account to private",
        "source": "Instagram Help (official)",
        "type": "Official guide",
        "url": "https://help.instagram.com/116024195217477"
      },
      {
        "title": "TikTok Family Pairing",
        "source": "TikTok (official)",
        "type": "Official guide",
        "url": "https://www.tiktok.com/safety/en/guardians-guide/"
      },
      {
        "title": "TikTok privacy settings for teen accounts",
        "source": "TikTok Support (official)",
        "type": "Official guide",
        "url": "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings"
      },
      {
        "title": "Snapchat Family Center",
        "source": "Snap (official)",
        "type": "Official guide",
        "url": "https://parents.snapchat.com/"
      },
      {
        "title": "Snap Map and Ghost Mode",
        "source": "Snapchat Support (official)",
        "type": "Official guide",
        "url": "https://help.snapchat.com/hc/en-gb/articles/7012301666580"
      },
      {
        "title": "Discord Family Centre",
        "source": "Discord (official)",
        "type": "Official guide",
        "url": "https://discord.com/family-center"
      },
      {
        "title": "Social media privacy checklists with screenshots",
        "source": "Internet Matters (UK)",
        "type": "Article",
        "url": "https://www.internetmatters.org/parental-controls/social-media/"
      },
      {
        "title": "Report to CEOP",
        "source": "National Crime Agency (UK)",
        "type": "Official guide",
        "url": "https://www.ceop.police.uk/safety-centre/",
        "note": "For concerns about online sexual abuse or exploitation of a child; use emergency services for immediate danger."
      }
    ]
  }
];
