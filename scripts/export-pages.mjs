import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const clientDir = resolve(root, "dist", "client");
const outputDir = resolve(root, "dist-pages");
const workerUrl = pathToFileURL(resolve(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("pages-export", Date.now().toString());

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://triubaya.github.io/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static export failed: ${response.status}`);

const renderedHtml = await response.text();
const staticHtml = renderedHtml
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

await writeFile(resolve(outputDir, "index.html"), staticHtml);
await writeFile(resolve(outputDir, ".nojekyll"), "");
console.log(`GitHub Pages export ready: ${outputDir}`);
