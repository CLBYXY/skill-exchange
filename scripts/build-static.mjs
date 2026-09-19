import { copyFile, mkdir, stat } from "node:fs/promises";

await mkdir("dist", { recursive: true });

try {
  await stat("index.html");
} catch {
  throw new Error("index.html is required for the static build.");
}

await copyFile("index.html", "dist/index.html");
console.log("Static site ready in dist/");
