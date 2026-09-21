# Cloudflare hosting setup

The site exports static files. No Lovable subscription, database or AI API is required.

Connect the pilot GitHub repository to a Cloudflare Pages project in the chosen owner's account:

- Production branch: main
- Framework: none/custom static build
- Build command: npm run build && npm run check:static
- Output directory: dist/client
- NODE_VERSION: 24.11.0
- VITE_BASE_PATH: /
- VITE_SITE_URL: leave empty for preview
- VITE_PREVIEW_ORIGIN: the actual HTTPS pages.dev origin assigned to this project (no path or trailing slash), for social-image URLs

For the eventual public domain, add it through Pages > Custom domains, configure DNS as directed, and set VITE_SITE_URL to that actual HTTPS origin. Update the privacy page's hosting description from GitHub Pages to Cloudflare. After editorial review, rebuild and run check:release. Confirm canonical, sitemap, robots, real 404, social image and assets live. Domain registration does not automatically publish a site or provide a mailbox.

Cloudflare Registrar offers domain purchase and renewal at cost. Check availability, extension support and the actual renewal quote in the chosen account before buying. No domain or account has yet been selected for this project.

The inspected MP4 files are below Pages' 25 MiB per-file limit. Free-plan limits still apply; no paid plan is required solely by this site's static architecture.

Official references checked 21 September 2026:
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/platform/limits/
- https://www.cloudflare.com/domains/
