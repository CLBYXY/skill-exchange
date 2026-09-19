import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

try {
  await stat("index.html");
} catch {
  throw new Error("index.html is required for the static build.");
}

async function copyTree(source, target) {
  const info = await stat(source);
  if (info.isDirectory()) {
    await mkdir(target, { recursive: true });
    const entries = await readdir(source);
    for (const entry of entries) {
      await copyTree(join(source, entry), join(target, entry));
    }
    return;
  }
  await mkdir(join(target, ".."), { recursive: true });
  await copyFile(source, target);
}

const pages = ["index.html", "profile.html", "market.html", "pet.html", "basket.html", "matches.html"];

for (const page of pages) {
  await copyFile(page, join("dist", page));
}

await copyTree("assets", "dist/assets");
console.log("Static multi-page site ready in dist/");
