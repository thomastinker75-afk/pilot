# Cloudflare hosting setup

The site exports static files. No Lovable subscription, database or AI API is required.

Thomas can start with a free pages.dev preview before buying a domain. In his Cloudflare account, open Workers & Pages > Create application > Pages > Import an existing Git repository. Connect GitHub and grant Cloudflare access to thomastinker75-afk/pilot. Select that repository and Begin setup. If it is missing, check the GitHub installation's repository access in Thomas's account.

Use these settings (the output directory is specific to this repository):

- Production branch: main
- Framework: none/custom static build
- Build command: npm run build && npm run check:static
- Output directory: dist/client
- Root directory: leave blank (repository root)
- NODE_VERSION: 24.11.0
- VITE_BASE_PATH: /
- VITE_HOSTING_PROVIDER: cloudflare
- VITE_SITE_URL: do not add yet (or leave empty) for the temporary site
- VITE_PREVIEW_ORIGIN: after the first deployment, set this to the actual HTTPS pages.dev origin assigned to the project (no path or trailing slash), for social-image URLs, then redeploy

Add environment variables to Production because main is the deployment branch, even while the site is only a temporary preview. Keep VITE_SITE_URL unset in Cloudflare's separate Preview environment. Select Save and Deploy. Open the assigned pages.dev address and test the home page, a checklist, the glossary and Get Help. The privacy page should identify Cloudflare Pages. A later push to main will trigger an automatic rebuild.

For the eventual public domain, add it through the Pages project's Custom domains > Set up a domain and configure DNS as directed. The apex domain must be a zone in the same Cloudflare account. Once HTTPS works and Thomas is ready for public launch, set Production VITE_SITE_URL to that actual HTTPS origin, without a trailing slash. VITE_HOSTING_PROVIDER=cloudflare selects the correct privacy wording. Rebuild and run check:release (or change the production build command to npm run build && npm run check:release). Confirm canonical, sitemap, robots, real 404, social image and assets live. Domain registration does not automatically publish a site or provide a mailbox.

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
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/

## Video previews

The reusable YouTube player shows a local thumbnail and Play video button. The player only connects to YouTube after that button is selected; the direct YouTube link stays available if embedding fails. Images and their source metadata are committed with the site. After adding or changing an embedded video, run node scripts/refresh-video-posters.mjs and review the resulting image and docs/video-poster-sources.json. Ordinary builds do not depend on YouTube being available.
