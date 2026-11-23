import { AGE_BANDS, APPS, CHECKLISTS, GLOSSARY } from "./data.ts";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  kind: "App or game" | "Age guide" | "Checklist" | "Dictionary" | "Website";
  keywords: string;
};
const appAliases: Record<string, string> = {
  "x-twitter": "twitter x",
  "gta-online": "grand theft auto gta 5 gta v",
  "omegle-style": "omegle monkey azar chathub random video chat",
  "character-ai": "character ai chatbot artificial intelligence",
  replika: "ai companion chatbot artificial intelligence",
};
export const SEARCH_ENTRIES: SearchEntry[] = [
  ...APPS.map((a) => ({
    title: a.name,
    description: a.why,
    href: `/apps/${a.slug}/`,
    kind: "App or game" as const,
    keywords: [a.category, ...a.risks, ...a.settings, appAliases[a.slug] ?? ""].join(" "),
  })),
  ...AGE_BANDS.map((a) => ({
    title: `Ages ${a.range}: ${a.headline}`,
    description: a.summary,
    href: `/age-guides/${a.slug}/`,
    kind: "Age guide" as const,
    keywords: [
      ...a.behaviours,
      ...a.risks,
      ...a.settings,
      ...a.conversation,
      a.screenTime.recommended,
    ].join(" "),
  })),
  ...CHECKLISTS.map((c) => ({
    title: c.title,
    description: c.summary,
    href: `/checklists/${c.slug}/`,
    kind: "Checklist" as const,
    keywords:
      JSON.stringify(c) +
      (c.slug === "iphone-first-setup"
        ? " ios ipad apple screen time"
        : c.slug === "android-first-setup"
          ? " google family link samsung"
          : ""),
  })),
  ...GLOSSARY.map((g) => ({
    title: g.term,
    description: g.meaning,
    href: `/glossary/#letter-${encodeURIComponent(/^[a-z]/i.test(g.term) ? g.term[0].toUpperCase() : "#")}`,
    kind: "Dictionary" as const,
    keywords: [g.kind, g.context, ...(g.aliases ?? [])].join(" "),
  })),
  {
    title: "Parent Tech Safety",
    description:
      "Start with an age guide, choose a concern or explore practical online safety guidance.",
    href: "/",
    kind: "Website",
    keywords: "home homepage start parents carers children safety",
  },
  {
    title: "Get help with an online concern",
    description:
      "Find existing guidance and reporting routes for bullying, unwanted contact, sexual images, scams and other concerns.",
    href: "/help/",
    kind: "Website",
    keywords:
      "urgent worried grooming bullying sextortion sexual images nudes scams report support stranger threats self harm suicide distress NSPCC Childline CEOP Report Remove Take It Down Samaritans YoungMinds mental health",
  },
  {
    title: "Research and reporting on children’s digital lives",
    description:
      "A selected reading and viewing list, with the types and limits of evidence explained.",
    href: "/news/",
    kind: "Website",
    keywords: "news research studies evidence screen time wellbeing videos",
  },
  {
    title: "About Parent Tech Safety",
    description: "Who publishes the site, how guidance is written and what has been reviewed.",
    href: "/about/",
    kind: "Website",
    keywords: "owner author editorial sources review contact corrections",
  },
  {
    title: "Privacy and analytics choices",
    description: "How this website uses data and your analytics choices.",
    href: "/privacy/",
    kind: "Website",
    keywords: "privacy cookies data consent analytics",
  },
  {
    title: "Apps and games",
    description: "Browse all app guides, or filter by name and category.",
    href: "/apps/",
    kind: "Website",
    keywords: "platforms apps games finder",
  },
  {
    title: "Advice by age",
    description: "Choose the guide for your child’s stage, from early years to older teens.",
    href: "/age-guides/",
    kind: "Website",
    keywords: "ages children teenagers toddler teens",
  },
  {
    title: "Phone and account setup checklists",
    description: "Start with iPhone, Android, YouTube or social-account settings.",
    href: "/checklists/",
    kind: "Website",
    keywords: "device setup settings controls phone",
  },
  {
    title: "Slang and emoji dictionary",
    description: "Search possible meanings or explain a message privately on your device.",
    href: "/glossary/",
    kind: "Website",
    keywords: "slang acronym emoji number message explainer translator",
  },
];

export function normaliseSearch(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}\p{Extended_Pictographic}]+/gu, " ")
    .trim();
}
function matchesTerms(text: string, terms: string[]): boolean {
  const words = text.split(/\s+/);
  return terms.every((term) =>
    words.some((word) => (term.length < 3 ? word === term : word.startsWith(term))),
  );
}
export function filterApps(query: string, category = "All") {
  const terms = normaliseSearch(query).split(/\s+/).filter(Boolean);
  return APPS.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      matchesTerms(
        normaliseSearch(`${a.name} ${a.why} ${a.category} ${appAliases[a.slug] ?? ""}`),
        terms,
      ),
  );
}
export function searchEntries(query: string, entries = SEARCH_ENTRIES): SearchEntry[] {
  const needle = normaliseSearch(query);
  if (needle.length < 2) return [];
  const terms = needle.split(/\s+/);
  return entries
    .map((entry, index) => {
      const title = normaliseSearch(entry.title);
      const text = normaliseSearch(`${entry.title} ${entry.description} ${entry.keywords}`);
      const score = matchesTerms(text, terms)
        ? (title === needle
            ? 100
            : title.startsWith(needle)
              ? 75
              : title.includes(needle)
                ? 50
                : 0) +
          (entry.kind === "Dictionary" ? 0 : 5) +
          terms.filter((term) => title.includes(term)).length * 8
        : -1;
      return { entry, score, index };
    })
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((r) => r.entry);
}

export type Concern = {
  id: string;
  label: string;
  intro: string;
  links: { title: string; description: string; href: string }[];
};
export const CONCERNS: Concern[] = [
  {
    id: "contact",
    label: "Unwanted contact",
    intro:
      "Start with the help page if something has happened, then review who can contact your child.",
    links: [
      {
        title: "Get help and find reporting routes",
        description: "Existing guidance for bullying, coercion and unwanted contact.",
        href: "/help/#support-services",
      },
      {
        title: "Review social-account privacy",
        description: "Contacts, discovery, location and sign-in settings.",
        href: "/checklists/social-lockdown/",
      },
      {
        title: "Find the app involved",
        description: "Open the relevant app guide for its risks and controls.",
        href: "/apps/",
      },
    ],
  },
  {
    id: "bullying",
    label: "Bullying or hurtful messages",
    intro: "Find the existing support routes, then check the account or app involved.",
    links: [
      {
        title: "Get help with bullying or coercion",
        description: "Support and reporting routes on the help page.",
        href: "/help/#support-services",
      },
      {
        title: "Review social-account privacy",
        description: "Check contacts, discovery and privacy together.",
        href: "/checklists/social-lockdown/",
      },
      {
        title: "Find the app involved",
        description: "Read its existing guide and official settings resources.",
        href: "/apps/",
      },
    ],
  },
  {
    id: "images",
    label: "Sexual images or threats",
    intro:
      "The help page brings together existing support and reporting routes for these concerns.",
    links: [
      {
        title: "Find help for what happened",
        description: "Reporting routes for sexual images, coercion and scams.",
        href: "/help/#support-services",
      },
      {
        title: "Review account privacy and security",
        description: "A checklist to use alongside the relevant support.",
        href: "/checklists/social-lockdown/",
      },
    ],
  },
  {
    id: "scams",
    label: "Scams or account security",
    intro:
      "Start with the help page for reporting routes and the privacy checklist for account settings.",
    links: [
      {
        title: "Find reporting and support routes",
        description: "Existing help for scams and other online concerns.",
        href: "/help/#support-services",
      },
      {
        title: "Review account privacy and security",
        description: "Sign-in security, location and contact settings.",
        href: "/checklists/social-lockdown/",
      },
    ],
  },
  {
    id: "time",
    label: "Screen time and viewing",
    intro:
      "Use age-specific guidance alongside the controls for the device or service your child uses.",
    links: [
      {
        title: "Choose your child’s age guide",
        description: "Screen-use context, family routines and conversation prompts.",
        href: "/age-guides/",
      },
      {
        title: "Set up phone controls",
        description: "iPhone and Android walkthroughs.",
        href: "/checklists/",
      },
      {
        title: "Review YouTube viewing settings",
        description: "Account type, content settings and viewing limits.",
        href: "/checklists/youtube-safer/",
      },
    ],
  },
  {
    id: "phone",
    label: "A first phone or safer accounts",
    intro: "Start with the device your family uses, then review social accounts together.",
    links: [
      {
        title: "Set up an iPhone",
        description: "Family Sharing, Screen Time and account settings.",
        href: "/checklists/iphone-first-setup/",
      },
      {
        title: "Set up an Android phone",
        description: "A child account and Google Family Link.",
        href: "/checklists/android-first-setup/",
      },
      {
        title: "Review social-account privacy",
        description: "A shared checklist for a teen’s accounts.",
        href: "/checklists/social-lockdown/",
      },
    ],
  },
  {
    id: "apps",
    label: "An app, game or AI companion",
    intro:
      "Understand the service first. An explainer is not a recommendation to use it at a particular age.",
    links: [
      {
        title: "Browse and filter app guides",
        description: "Age rules, risks, settings and conversation prompts.",
        href: "/apps/",
      },
      {
        title: "Understand Character.AI",
        description: "Read the existing guide to AI character conversations.",
        href: "/apps/character-ai/",
      },
      {
        title: "Understand Replika",
        description: "Read the existing AI companion guide.",
        href: "/apps/replika/",
      },
    ],
  },
  {
    id: "message",
    label: "A word, emoji or message",
    intro:
      "Explore possible meanings without assuming intent. The message explainer works on your device.",
    links: [
      {
        title: "Open the dictionary and message explainer",
        description: "Search slang, acronyms, emoji and numbers.",
        href: "/glossary/",
      },
      {
        title: "Get help if a message concerns you",
        description: "Find the relevant support and reporting routes.",
        href: "/help/",
      },
    ],
  },
];
