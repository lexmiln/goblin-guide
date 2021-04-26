import fs from "fs";
import { join } from "path";

const thingsDirectory = join(process.cwd(), "_things");

export function getThingBySlug(slug: string) {
  if (!slug.match(/[-A-Za-z]+/)) {
    return null;
  }

  const fullPath = join(thingsDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function getThingSlugs(): string[] {
  const slugs = fs.readdirSync(thingsDirectory);
  return slugs
    .filter((slug) => slug.endsWith(".json"))
    .map((slug) => slug.replace(/\.json/, ""));
}

export function getAllThings() {
  const slugs = getThingSlugs();
  const things = slugs.map((slug) => getThingBySlug(slug));
  return things;
}
