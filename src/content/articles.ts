// Curated articles — hand-picked news & real-world incidents, not fetched.
// Split into UK and Worldwide. Only include sources we trust.
// Updated manually as new relevant articles are verified.

export type ArticleItem = {
  url: string;
  title: string;
  source: string; // publication / outlet
  description: string;
  publishedAt?: string; // ISO date if known
};

// Newest first. Older items sink to the bottom of each section.
export const UK_ARTICLES: ArticleItem[] = [
  {
    url: "https://www.bbc.co.uk/news/articles/cd6l07wwvlpo",
    title:
      "Parents should monitor children '24/7' on Roblox, says developer",
    source: "BBC News",
    description:
      "An independent Roblox developer tells the BBC the platform's child safety measures do not go far enough, warning parents to supervise their children on the platform '24/7' or not let them play at all.",
    publishedAt: "2026-03-26",
  },
  {
    url: "https://www.theguardian.com/technology/2026/aug/08/uk-children-explicit-deepfake-images-ai",
    title:
      "Rising number of UK children report seeing explicit deepfakes of themselves",
    source: "The Guardian",
    description:
      "An anonymous flagging service says cases have surged, as the watchdog warns that AI is making sexualised or 'nudified' content easier to produce.",
    publishedAt: "2026-08-08",
  },
  {
    url: "https://www.theguardian.com/society/2025/dec/11/online-child-sexual-abuse-surges-by-26-percent-in-year-as-police-say-tech-firms-must-act",
    title:
      "Online child sexual abuse surges by 26% in year as police say tech firms must act",
    source: "The Guardian",
    description:
      "Figures for England and Wales show there were 51,672 offences for child sexual exploitation and abuse online in 2024.",
    publishedAt: "2025-12-11",
  },
  {
    url: "https://www.theguardian.com/uk-news/2025/oct/20/online-groomer-first-uk-jailed-encouraging-child-self-harm-karl-davies",
    title:
      "‘Vile’ online groomer is first in UK to be jailed for encouraging a child to self-harm",
    source: "The Guardian",
    description:
      "Karl Davies was sentenced to 20 years after sexually abusing a 14-year-old girl he had contacted on the Discord app.",
    publishedAt: "2025-10-20",
  },
  {
    url: "https://www.itv.com/news/2025-02-07/tiktok-sued-by-parents-of-uk-teens-who-allegedly-died-in-viral-trend",
    title:
      "TikTok sued by parents of UK teens who allegedly died in viral trend",
    source: "ITV News",
    description:
      "Families of teenagers who reportedly died after taking part in a viral challenge on the platform are taking legal action against TikTok, arguing the app's recommendation algorithm promoted dangerous content to their children.",
    publishedAt: "2025-02-07",
  },
];

export const WORLD_ARTICLES: ArticleItem[] = [
  {
    url: "https://apnews.com/article/meta-trial-child-sexual-exploitation-5ad9f7bf1ad05bef9d177938e94f0e8b",
    title:
      "New Mexico trial nears end over children's safety risks on Meta",
    source: "AP News",
    description:
      "Jury deliberations have begun in a landmark trial where New Mexico prosecutors are accusing social media conglomerate Meta of misleading people about the safety of its platforms for children.",
    publishedAt: "2026-03-23",
  },
  {
    url: "https://www.theguardian.com/technology/article/2024/sep/07/australia-federal-police-sadistic-child-sextortion-warning",
    title:
      "Australian police are warning about 'sadistic sextortion'. Here's how it works, and the red flags for parents",
    source: "The Guardian",
    description:
      "Children as young as 12 are being targeted by members of online communities who put pressure on them to create extreme content.",
    publishedAt: "2024-09-07",
  },
  {
    url: "https://apnews.com/article/influenced-social-media-mental-health-advice-620e277528728498c1202690d0512f85",
    title: "Here's what young people wish they knew about social media",
    source: "AP News",
    description:
      "Kids constantly hear about the downsides of social media from the adults in their lives, often in the form of dire warnings and commands.",
    publishedAt: "2024-06-05",
  },
  {
    url: "https://apnews.com/article/parents-social-media-tips-kids-teens-cb428d7cc32699726b1d9fa17d1b0ec4",
    title: "Keep your kids safe on social media: What you need to know",
    source: "AP News",
    description:
      "Here are some tips on staying safe, communicating and setting limits on social media — for kids as well as their parents.",
    publishedAt: "2024-02-04",
  },
];
