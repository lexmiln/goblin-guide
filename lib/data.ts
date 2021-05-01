import fs from "fs";
import yaml from "js-yaml";
import { join } from "path";
import { ThingSchema } from "../types/thing.schema";

const thingsDirectory = join(process.cwd(), "_things");

export function getThingBySlug(slug: string): ThingSchema | null {
  if (!slug.match(/[-A-Za-z]+/)) {
    return null;
  }

  return getAllThings()[slug] || null;
}

export function getThingSlugs(): string[] {
  return Object.keys(getAllThings());
}

function isThing(t: ThingSchema | null): t is ThingSchema {
  return t !== null;
}

export function getAllThings(): { [key: string]: ThingSchema } {
  const filenames = fs.readdirSync(thingsDirectory);
  const allThings = filenames
    .filter((filename) => filename.endsWith(".yaml"))
    .map((filename) => join(thingsDirectory, filename))
    .map((fullPath) => fs.readFileSync(fullPath, "utf8"))
    .map((fileContents) => yaml.load(fileContents) as ThingSchema);

  const things: { [key: string]: ThingSchema } = {};
  allThings.forEach((thing) => {
    things[thing.slug] = thing;
  });

  return things;
}
