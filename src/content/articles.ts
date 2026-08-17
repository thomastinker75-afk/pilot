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
];

export const WORLD_ARTICLES: ArticleItem[] = [];
