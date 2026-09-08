import { defineConfig, loadEnv } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { SITE_PATHS } from "./src/content/site-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "").replace(/\/$/, "");
  if (siteUrl && new URL(siteUrl).origin !== siteUrl) {
    throw new Error("VITE_SITE_URL must be the site's origin, without a path or trailing slash.");
  }
  const base = process.env.VITE_BASE_PATH ?? env.VITE_BASE_PATH ?? "/";
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base))
    throw new Error("VITE_BASE_PATH must begin and end with /.");
  return {
    base,
    define: { "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl) },
    plugins: [
      tsconfigPaths(),
      tailwindcss(),
      tanstackStart({
        server: { entry: "server" },
        prerender: {
          enabled: true,
          autoSubfolderIndex: true,
          autoStaticPathsDiscovery: false,
          crawlLinks: false,
          concurrency: 4,
          failOnError: true,
        },
        pages: SITE_PATHS.map((path) => ({ path })),
      }),
      react(),
    ],
  };
});
