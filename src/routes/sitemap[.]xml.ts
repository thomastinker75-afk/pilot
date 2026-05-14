import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { AGE_BANDS } from "@/content/data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0", changefreq: "weekly" as const },
          { path: "/age-guides", priority: "0.9", changefreq: "monthly" as const },
          ...AGE_BANDS.map((b) => ({ path: `/age-guides/${b.slug}`, priority: "0.8", changefreq: "monthly" as const })),
          { path: "/apps", priority: "0.8", changefreq: "monthly" as const },
          { path: "/glossary", priority: "0.8", changefreq: "weekly" as const },
          { path: "/checklists", priority: "0.8", changefreq: "monthly" as const },
          { path: "/help", priority: "0.7", changefreq: "monthly" as const },
          { path: "/about", priority: "0.4", changefreq: "yearly" as const },
        ];

        const urls = paths.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
