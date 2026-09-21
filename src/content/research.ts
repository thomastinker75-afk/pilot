// Curated research & studies — hand-picked, not fetched. Updated manually.
// Split into UK and Worldwide. Only include sources we trust.

export type ResearchItem = {
  url: string;
  title: string;
  source: string; // organisation / publisher
  description: string;
  evidenceType?: string;
  limitation?: string;
  publishedAt?: string; // ISO date if known
};

export const UK_RESEARCH: ResearchItem[] = [
  {
    url: "https://publications.parliament.uk/pa/cm5804/cmselect/cmeduc/118/report.html",
    title: "Screen time: impacts on education and wellbeing",
    source: "UK Parliament — Education Committee",
    description:
      "House of Commons Education Committee report examining how screen time affects children's education, attention and wellbeing, with recommendations for schools, government and tech companies.",
    publishedAt: "2024-05-25",
    evidenceType: "Parliamentary committee report",
    limitation: "Recommendations to government, not a clinical trial or proof of a causal effect.",
  },
  {
    url: "https://kclpure.kcl.ac.uk/portal/en/publications/a-multi-school-study-in-england-to-assess-problematic-smartphone-/",
    evidenceType: "Cross-sectional study",
    limitation: "An association does not establish cause. The sample was mostly female and does not represent every child or age group.",
    title: "A multi-school study in England, to assess problematic smartphone usage and anxiety and depression",
    source: "Acta Paediatrica (2024)",
    description:
      "A cross-sectional study of 657 pupils aged 16–18 in five English schools found associations between problematic smartphone use and anxiety, depression and insomnia. Screen time itself was not associated with anxiety or depression in this sample.",
  },
];

export const WORLD_RESEARCH: ResearchItem[] = [
  {
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10353947/",
    title: "Effects of Excessive Screen Time on Child Development",
    source: "Cureus · hosted in PubMed Central",
    description:
      "A narrative review of research on screen use and children’s cognitive, language and social-emotional development, including potential benefits of educational content and possible harms of excessive use.",
    publishedAt: "2023-06-18",
    evidenceType: "Narrative review",
    limitation: "The included studies differ in methods and populations. Hosting in PubMed Central is not an endorsement by NIH.",
  },
  {
    url: "https://medicalxpress.com/news/2025-06-screen-emotional-problems-kids-vicious.html",
    title: "Screen time and emotional problems in kids",
    source: "Medical Xpress",
    evidenceType: "Journalistic research summary",
    limitation: "Read the underlying study before drawing causal conclusions; this linked article is reporting, not the research paper itself.",
    description:
      "Research coverage exploring the link between screen time and emotional problems in children, and the vicious cycle that can develop between the two.",
    publishedAt: "2025-06-09",
  },
];
