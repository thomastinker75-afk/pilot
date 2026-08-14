// Curated research & studies — hand-picked, not fetched. Updated manually.
// Split into UK and Worldwide. Only include sources we trust.

export type ResearchItem = {
  url: string;
  title: string;
  source: string; // organisation / publisher
  description: string;
  publishedAt?: string; // ISO date if known
};

export const UK_RESEARCH: ResearchItem[] = [
  {
    url: "https://publications.parliament.uk/pa/cm5804/cmselect/cmeduc/118/report.html",
    title: "Screen time: impacts on education and wellbeing",
    source: "UK Parliament — Education Committee",
    description:
      "House of Commons Education Committee report examining how screen time affects children's education, attention and wellbeing, with recommendations for schools, government and tech companies.",
    publishedAt: "2024-02-28",
  },
  {
    url: "https://onlinelibrary.wiley.com/doi/10.1111/apa.17317",
    title: "Smartphone Use and Mental Health in English Students",
    source: "Journal of Applied Psychology (Wiley Online Library)",
    description:
      "Peer-reviewed study examining the relationship between smartphone use and mental health outcomes among English secondary school students.",
  },
];

export const WORLD_RESEARCH: ResearchItem[] = [];
