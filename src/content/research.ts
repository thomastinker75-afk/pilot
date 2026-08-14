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

export const WORLD_RESEARCH: ResearchItem[] = [
  {
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10353947/",
    title: "Effects of Excessive Screen Time on Child Development",
    source: "Cureus (NIH / PubMed Central)",
    description:
      "Peer-reviewed review examining how excessive screen time harms children's cognitive, linguistic and social-emotional development, with evidence-based strategies for management and parental guidance.",
    publishedAt: "2023-06-18",
  },
  {
    url: "https://medicalxpress.com/news/2025-06-screen-emotional-problems-kids-vicious.html",
    title: "Screen time and emotional problems in kids",
    source: "Medical Xpress",
    description:
      "Research coverage exploring the link between screen time and emotional problems in children, and the vicious cycle that can develop between the two.",
    publishedAt: "2025-06-01",
  },
];
