import assert from "node:assert/strict";
import test from "node:test";
import { SITE_PATHS } from "../src/content/site-paths.ts";
import {
  createCanonicalRedirects,
  canonicalRedirectResponse,
} from "../src/lib/canonical-redirects.ts";
for (const base of ["/", "/pilot/"]) {
  test(`all exported routes have one-hop permanent aliases under ${base}`, () => {
    const redirects = createCanonicalRedirects(SITE_PATHS, base);
    for (const [source, destination] of redirects) {
      assert.notEqual(source, destination);
      assert.equal(redirects.has(destination), false, "Redirect loop or chain");
      const request = new Request("https://example.com" + source + "?campaign=parents&term=a%2Fb");
      const response = canonicalRedirectResponse(request, redirects);
      assert.equal(response.status, 308);
      assert.equal(
        response.headers.get("location"),
        "https://example.com" + destination + "?campaign=parents&term=a%2Fb",
      );
      assert.equal(
        canonicalRedirectResponse(new Request("https://example.com" + destination), redirects),
        undefined,
      );
      assert.equal(
        canonicalRedirectResponse(new Request(request.url, { method: "HEAD" }), redirects).status,
        308,
      );
    }
  });
}
test("unknown URLs, assets, APIs and writes are never normalised as pages", () => {
  const redirects = createCanonicalRedirects(SITE_PATHS);
  for (const path of [
    "/not-a-real-page",
    "/not-a-real-page/",
    "/assets/main.js",
    "/favicon.svg",
    "/sitemap.xml",
    "/robots.txt",
    "/api/slang-translation",
  ])
    assert.equal(
      canonicalRedirectResponse(new Request("https://example.com" + path), redirects),
      undefined,
      path,
    );
  assert.equal(
    canonicalRedirectResponse(
      new Request("https://example.com/help", { method: "POST" }),
      redirects,
    ),
    undefined,
  );
});
