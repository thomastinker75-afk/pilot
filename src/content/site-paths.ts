import { AGE_BANDS, APPS, CHECKLISTS } from "./data.ts";

export const SITE_PATHS = [
  "/",
  "/age-guides",
  ...AGE_BANDS.map(({ slug }) => `/age-guides/${slug}`),
  "/apps",
  ...APPS.map(({ slug }) => `/apps/${slug}`),
  "/apps-audit",
  ...APPS.map(({ slug }) => `/apps-audit/${slug}`),
  "/glossary",
  "/checklists",
  ...CHECKLISTS.map(({ slug }) => `/checklists/${slug}`),
  "/news",
  "/help",
  "/about",
];
