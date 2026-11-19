/** Only redirect aliases of real exported pages; leave assets, APIs and unknown URLs alone. */
export function createCanonicalRedirects(
  paths: readonly string[],
  basePath = "/",
): Map<string, string> {
  const redirects = new Map<string, string>();
  for (const path of paths) {
    const canonical = path === "/" ? basePath : `${basePath}${path.replace(/^\/+|\/+$/g, "")}/`;
    if (canonical !== "/") redirects.set(canonical.slice(0, -1), canonical);
    redirects.set(`${canonical}index.html`, canonical);
  }
  return redirects;
}

export function canonicalRedirectResponse(
  request: Request,
  redirects: ReadonlyMap<string, string>,
): Response | undefined {
  if (request.method !== "GET" && request.method !== "HEAD") return;
  const url = new URL(request.url);
  const destination = redirects.get(url.pathname);
  if (!destination) return;
  url.pathname = destination;
  return Response.redirect(url.href, 308);
}
