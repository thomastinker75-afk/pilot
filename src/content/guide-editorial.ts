export type EditorialGuide = {
  title: string;
  description: string;
  note?: string;
  checkedSources?: { label: string; url: string }[];
};

// Editorial updates are separate from a full policy or device review.
export const EDITORIAL_DATE = "2026-11-19";
export const EDITORIAL_DATE_LABEL = "19 November 2026";

export const APP_EDITORIAL: Record<string, EditorialGuide> = {
  telegram: {
    title: "Telegram: UK Age Rules and Safety Guide for Parents",
    description:
      "Understand Telegram’s UK account age rule, public channels, privacy settings and unwanted contact. A practical guide for parents.",
  },
  tiktok: {
    title: "TikTok for Parents: Age Rules, Family Pairing and Safety",
    description:
      "Review TikTok account ages, Family Pairing, recommendations, contact settings and screen time with your teenager.",
  },
  snapchat: {
    title: "Snapchat for Parents: Family Centre, Privacy and Safety",
    description:
      "Learn what Snapchat Family Centre shows parents, what stays private, and which contact and location settings to discuss with your teen.",
    note: "Family Centre offers insight into a teen’s activity and controls, but does not show the content of private conversations. Linking it involves an invitation that the teen accepts.",
    checkedSources: [
      {
        label: "Snapchat: Family Centre",
        url: "https://parents.snapchat.com/family-center?lang=en-GB",
      },
    ],
  },
  instagram: {
    title: "Instagram for Parents: Teen Accounts and Privacy Settings",
    description:
      "Understand Instagram Teen Accounts, contact and content settings, and the limits of parental supervision before agreeing how your teen uses it.",
  },
  youtube: {
    title: "YouTube for Children: Supervised Accounts and Safety",
    description:
      "Compare supervised YouTube options, review content settings and understand why filters still need support from a parent.",
    note: "YouTube offers supervised kid accounts for children under 13 or the relevant local age. Parents choose a content setting; this is a distinct experience from independent use.",
    checkedSources: [
      {
        label: "Google: set up supervised kid accounts",
        url: "https://support.google.com/youtube/answer/10314074?hl=en",
      },
    ],
  },
  whatsapp: {
    title: "WhatsApp for Children: Age Rules and Parent-Managed Accounts",
    description:
      "Understand WhatsApp’s independent and parent-managed accounts, contact approvals, group permissions and privacy settings for children.",
    note: "WhatsApp describes parent-managed accounts for children under 13, subject to the local age rule and availability. These let parents manage contacts and group permissions. Check the setup offered on your child’s device rather than assuming every account has these controls.",
    checkedSources: [
      {
        label: "WhatsApp: parent-managed account privacy disclosure",
        url: "https://www.whatsapp.com/legal/privacy-disclosure-for-parent-managed-accounts",
      },
    ],
  },
  discord: {
    title: "Discord for Parents: UK Age Checks, Servers and Safety",
    description:
      "Understand Discord’s UK age checks, teen protections, servers and messages, with practical settings to review together.",
    note: "Discord’s UK guidance separates ordinary messaging and calls from adult-only spaces and settings. UK users must confirm they are adults to access age-restricted content or change certain protections; an age check is not a guarantee that every server is suitable.",
    checkedSources: [
      {
        label: "Discord: how teens experience Discord in the UK",
        url: "https://support.discord.com/hc/en-us/articles/33362401287959-How-Teens-Experience-Discord-in-the-UK",
      },
    ],
  },
  twitch: {
    title: "Twitch for Parents: Live Streams, Chat and Spending",
    description:
      "Review Twitch’s age rules, live chat, subscriptions and donations, and discuss which streams and communities your teenager follows.",
  },
  kick: {
    title: "Kick for Parents: Age Rules, Live Chat and Safety",
    description:
      "Understand Kick’s account age and parent-supervision rules, live streams, chat and spending before your teenager uses it.",
    note: "Kick’s minor-safety guidance excludes accounts below 13 or the local digital-consent age. Viewers under 18 need a parent or guardian’s permission and supervision. This account rule does not make every live stream suitable for teenagers.",
    checkedSources: [
      {
        label: "Kick: teen and minor safety (Spanish)",
        url: "https://help.kick.com/es/articles/10137486-seguridad-de-adolescentes-y-menores",
      },
    ],
  },
  yubo: {
    title: "Yubo for Parents: Age Rules and Meeting Strangers",
    description:
      "Review Yubo’s account eligibility, social discovery and stranger-contact risks, with questions to ask if your child already uses it.",
  },
  "x-twitter": {
    title: "X (Twitter) for Parents: Age Checks, Content and Privacy",
    description:
      "Review X’s account rules, UK age assurance, sensitive content and messaging settings with your teenager.",
  },
  reddit: {
    title: "Reddit for Parents: Communities, Age Checks and Safety",
    description:
      "Understand Reddit communities, mature-content restrictions and UK age checks, and review privacy and contact settings with your teen.",
  },
  bereal: {
    title: "BeReal for Parents: Privacy, Location and Sharing",
    description:
      "Review BeReal’s age rules, audience and location settings, and discuss what photos can reveal about your child’s daily life.",
  },
  "ngl-sendit": {
    title: "NGL and Sendit: Age Rules and Anonymous Messages",
    description:
      "Compare NGL and Sendit’s different age rules and understand anonymous-message risks, reporting and conversations to have with your child.",
    note: "These are separate services with different terms. NGL bars under-18 use. Sendit’s linked terms require users to be at least 13 and require parental permission for users under 18. Do not treat an app-store age label as the account rule.",
    checkedSources: [
      { label: "NGL: terms", url: "https://ngl.link/p/terms" },
      { label: "Sendit / Iconic Hearts: terms", url: "https://iconichearts.com/terms" },
    ],
  },
  "omegle-style": {
    title: "Random Video Chat: Risks and Age Rules for Parents",
    description:
      "Understand the risks of random video chat, why service-specific age rules matter, and what to do if your child encounters unwanted contact.",
    note: "Random video chat describes a category, not one service with one age rule. Monkey states it is strictly 18+. Check each named service separately; moderation claims do not establish that a service is suitable for a child.",
    checkedSources: [
      { label: "Monkey: safety centre and 18+ policy", url: "https://www.monkey.app/sc.html" },
    ],
  },
  vrchat: {
    title: "VRChat for Parents: Worlds, Voice Chat and Safety",
    description:
      "Review VRChat’s account rules, user-created worlds, voice chat and personal boundaries before agreeing how your teenager uses it.",
  },
  "character-ai": {
    title: "Character.AI for Parents: Under-18 Access and AI Chat",
    description:
      "Understand Character.AI’s under-18 Reading Mode, the difference between account eligibility and chat access, and AI companion risks.",
    note: "Character.AI says users verified as under 18 receive Reading Mode without chat features. Being eligible for an account does not mean being eligible for open-ended AI chat. Its AI responses should not replace support from a trusted person.",
    checkedSources: [
      {
        label: "Character.AI: what is Reading Mode?",
        url: "https://support.character.ai/hc/en-us/articles/51795669396763-What-is-Reading-Mode",
      },
    ],
  },
  replika: {
    title: "Replika for Parents: Age Rules and AI Companion Risks",
    description:
      "Understand Replika’s adult account rule, AI companion risks, and how to start a supportive conversation if your child is using it.",
  },
};

export const AGE_EDITORIAL: Record<string, EditorialGuide> = {
  "0-4": {
    title: "Screen Time and Online Safety for Ages 0–4",
    description:
      "Help young children use screens with an adult: shared viewing, sleep, play, safer content and practical device settings.",
  },
  "5-7": {
    title: "Online Safety for Ages 5–7: Games, Videos and Screen Time",
    description:
      "Help children aged 5–7 explore games and videos with support, safer settings, screen-time routines and simple conversations.",
  },
  "8-10": {
    title: "Online Safety for Ages 8–10: Games, Chat and Devices",
    description:
      "Review games, chat and devices for children aged 8–10, with practical settings, family routines and warning signs to discuss.",
  },
  "11-13": {
    title: "Online Safety for Ages 11–13: First Phones and Social Apps",
    description:
      "Support children aged 11–13 with first phones, friendships, social apps and screen time. Check each app’s account rules separately.",
  },
  "14-15": {
    title: "Online Safety for Ages 14–15: Privacy, Chat and Independence",
    description:
      "Support teenagers aged 14–15 with privacy, group chats, social pressure and growing independence, using practical settings and conversations.",
  },
  "16-17": {
    title: "Online Safety for Ages 16–17: Privacy and Independence",
    description:
      "Help older teenagers manage privacy, relationships, online reputation and screen time while preparing for greater independence.",
  },
};

export const CHECKLIST_EDITORIAL: Record<string, EditorialGuide> = {
  "android-first-setup": {
    title: "Set Up an Android Phone for Your Child with Family Link",
    description:
      "Set up a child’s Android phone with Google Family Link: supervision, app approvals, screen time, content settings and a final check together.",
    note: "Family Link supports supervision on compatible Android devices. A parent can manage it from an iPhone, but it does not supervise a child’s iPhone. Google Play purchase approvals only cover purchases through Google Play billing.",
    checkedSources: [
      {
        label: "Google: get started with Family Link",
        url: "https://support.google.com/families/answer/7101025?hl=en",
      },
    ],
  },
  "youtube-safer": {
    title: "YouTube Safety Checklist: Accounts, Content and Viewing",
    description:
      "Choose a suitable YouTube account experience and review content settings, viewing habits and reporting with your child.",
    note: "Choose the account experience before changing filters. Google offers supervised kid accounts with parent-selected content settings for younger children; this differs from ordinary independent use.",
    checkedSources: [
      {
        label: "Google: set up supervised kid accounts",
        url: "https://support.google.com/youtube/answer/10314074?hl=en",
      },
    ],
  },
  "social-lockdown": {
    title: "Teen Social Media Privacy Checklist for Parents",
    description:
      "Work through audience, messages, location, account security and reporting settings with your teen. Review each app’s own age rules and controls.",
  },
};
