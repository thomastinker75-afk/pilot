import { writeFileSync, existsSync } from "node:fs";
import { loadEnv } from "vite";
import { SITE_PATHS, PUBLIC_PATHS } from "../src/content/site-paths.ts";

const output = "dist/client";
if (!existsSync(`${output}/index.html`)) throw new Error("Prerendered homepage is missing.");
const env = loadEnv("production", process.cwd(), "VITE_");
const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "").replace(/\/$/, "");
const basePath = process.env.VITE_BASE_PATH ?? env.VITE_BASE_PATH ?? "/";
const escapeXml = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
writeFileSync(`${output}/.nojekyll`, "");
if (siteUrl) {
  const urls = PUBLIC_PATHS.map(
    (path) => `  <url><loc>${escapeXml(siteUrl + basePath + (path === "/" ? "" : path.slice(1) + "/"))}</loc></url>`,
  );
  writeFileSync(
    `${output}/sitemap.xml`,
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  );
  writeFileSync(
    `${output}/robots.txt`,
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}${basePath}sitemap.xml\n`,
  );
} else {
  writeFileSync(`${output}/robots.txt`, "User-agent: *\nDisallow: /\n");
  console.log("Preview build: no public domain configured; search indexing is disabled.");
}
writeFileSync(
  `${output}/404.html`,
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — Parent Tech Safety Hub</title><style>body{font:1.1rem/1.6 system-ui;background:#faf9f6;color:#222;max-width:40rem;margin:15vh auto;padding:2rem}a{color:inherit}</style></head><body><main><h1>Page not found</h1><p>This page does not exist or has moved.</p><a href="/">Return to Parent Tech Safety Hub</a></main></body></html>'.replace(
    'href="/"',
    `href="${basePath}"`,
  ),
);
writeFileSync(
  ".static-build.json",
  JSON.stringify({ siteUrl, basePath, paths: SITE_PATHS, output }, null, 2) + "\n",
);
console.log(`Prepared ${SITE_PATHS.length} pages for static hosting in ${output}.`);
