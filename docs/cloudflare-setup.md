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

Cloudflare Registrar offers domain purchase and renewal at cost. Check availability, extension support and the actual renewal quote in the chosen account before buying. The planned domain is parenttechsafety.co.uk (user indicated 21 September 2026). Purchase, ownership and Cloudflare account access are not confirmed.

## Launch sequence for the planned domain

1. Thomas confirms purchase and the Cloudflare account that will own the site. Do not create DNS records or publish a mailbox based on a proposed purchase.
2. Connect the repository to Pages with the preview settings above; verify the assigned pages.dev site before attaching the domain.
3. Complete factual corrections and have Thomas approve the public-launch content. An independent safeguarding review is optional additional assurance, not an established requirement for this educational site; the optional handoff is in safeguarding-review-pack.md.
4. Attach parenttechsafety.co.uk using Pages Custom domains; configure www as a redirect to the chosen apex domain. Verify TLS and both hostnames. Do not guess the pages.dev target.
5. Once approved for launch, set VITE_BASE_PATH=/ and VITE_SITE_URL=https://parenttechsafety.co.uk and rebuild. This variable enables indexing, canonicals, publisher markup and sitemap together. It is deliberately not set in the GitHub preview workflow.
6. Run npm run check:release. Verify the live root robots.txt, all sitemap URLs, canonical host and trailing slashes, actual 404 response, image/video assets and mobile navigation. Editorial /apps-audit pages must stay noindex and out of the sitemap.
7. Set up the agreed website-support mailbox and test delivery and reply behaviour before adding its address to the website. Its purpose remains broken links, technical issues and content corrections, not safeguarding help.
8. Verify the domain in search tools and submit its sitemap after launch. Keep the GitHub preview noindex; do not claim indexing or rankings from a successful deployment.

The inspected MP4 files are below Pages' 25 MiB per-file limit. Free-plan limits still apply; no paid plan is required solely by this site's static architecture.

Official references checked 21 September 2026:
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/platform/limits/
- https://www.cloudflare.com/domains/
