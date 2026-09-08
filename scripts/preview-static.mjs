import { createServer } from "node:http";
import { existsSync, statSync, createReadStream, readFileSync } from "node:fs";
import { resolve, extname, sep } from "node:path";

const root = resolve("dist/client");
const basePath = JSON.parse(readFileSync(".static-build.json", "utf8")).basePath ?? "/";
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".mp3": "audio/mpeg",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }
  if (basePath !== "/" && pathname === basePath.slice(0, -1)) {
    response.writeHead(302, { location: basePath });
    response.end();
    return;
  }
  const inBase = pathname.startsWith(basePath);
  let file = resolve(
    root,
    inBase ? pathname.slice(basePath.length) : "__outside_deployment_path__",
  );
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403);
    response.end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, "index.html");
  const found = existsSync(file) && statSync(file).isFile();
  if (!found) file = resolve(root, "404.html");
  if (!existsSync(file)) {
    response.writeHead(404);
    response.end("Run npm run build first.");
    return;
  }
  const size = statSync(file).size;
  const headers = {
    "content-type": types[extname(file)] || "application/octet-stream",
    "cache-control": "no-store",
    "accept-ranges": "bytes",
  };
  const range = found && request.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
  if (range) {
    const start = Number(range[1]);
    const end = range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
    if (start > end || start >= size) {
      response.writeHead(416, { "content-range": `bytes */${size}` });
      response.end();
      return;
    }
    response.writeHead(206, {
      ...headers,
      "content-range": `bytes ${start}-${end}/${size}`,
      "content-length": end - start + 1,
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(file, { start, end }).pipe(response);
  } else {
    response.writeHead(found ? 200 : 404, { ...headers, "content-length": size });
    if (request.method === "HEAD") response.end();
    else createReadStream(file).pipe(response);
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static preview: http://127.0.0.1:${port}${basePath}`),
);
