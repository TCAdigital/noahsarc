/**
 * One-off asset pipeline: normalises the site's images.
 *
 * - renames files to lowercase, hyphenated, role-based names (no spaces, no `@`)
 * - downscales anything wider than MAX_WIDTH
 * - re-encodes to progressive JPEG (or PNG for artwork that needs transparency)
 *
 * Run with `node scripts/optimize-images.mjs`. Sources live in `.tmp-images`
 * (assets pulled off imgur) and `public/images`; output always lands in
 * `public/images`.
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import heicConvert from "heic-convert";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");

const MAX_WIDTH = 2000;
const JPEG = { quality: 78, progressive: true, mozjpeg: true };

/** source (relative to ROOT) -> destination (relative to public/images) */
const JOBS = [
  // Assets previously hot-linked from i.imgur.com
  [".tmp-images/Q9ytvOn.jpeg", "home-hero.jpg"],
  [".tmp-images/WzuuP5I.jpeg", "mission-portrait.jpg"],
  [".tmp-images/IYMD4e3.jpeg", "what-we-do-education.jpg"],
  [".tmp-images/HSQwWbH.jpeg", "what-we-do-spiritual.jpg"],
  [".tmp-images/dbj0jK3.jpeg", "what-we-do-health.jpg"],
  [".tmp-images/ilqtWvI.jpeg", "home-gallery-01.jpg"],
  [".tmp-images/UsTZwaG.jpeg", "home-gallery-02.jpg"],
  [".tmp-images/OUFJ7Ol.jpeg", "home-gallery-03.jpg"],
  [".tmp-images/VxucC7y.jpeg", "home-gallery-04.jpg"],
  [".tmp-images/7OqHwvj.jpeg", "sponsorship-impact.jpg"],
  [".tmp-images/pEv0FFB.jpeg", "sponsor-banner.jpg"],
  [".tmp-images/96Ycrrj.png", "logo.png"],

  // Local assets: renamed by the role they play in the site
  ["public/images/hero-mission.JPG", "mission-hero.jpg"],
  ["public/images/IMG_0297@-985416488.jpg", "mission-banner.jpg"],
  ["public/images/IMG_2871@2109968384.jpg", "objectives-feature.jpg"],
  ["public/images/IMG_3476.jpg", "sponsor-hero.jpg"],
  ["public/images/Teachers and Staff.JPG", "teachers-and-staff.jpg"],
  ["public/images/education-fund-new.jpg", "education-fund.jpg"],
  ["public/images/girls-dormitory-new.png", "girls-dormitory-construction.jpg"],
  ["public/images/girls-dormitory.jpg", "girls-dormitory.jpg"],

  // Gallery, numbered in the order the pages already listed them
  ["public/images/galeria/Copy of Kids and Teachers- Fun in the Classroom.JPG", "gallery/gallery-01.jpg"],
  ["public/images/galeria/IMG_0290@1228040790.jpg", "gallery/gallery-02.jpg"],
  ["public/images/galeria/IMG_0310@359351363.jpg", "gallery/gallery-03.jpg"],
  ["public/images/galeria/IMG_0394@-1570701864.jpg", "gallery/gallery-04.jpg"],
  ["public/images/galeria/IMG_2090@2051779444.jpg", "gallery/gallery-05.jpg"],
  ["public/images/galeria/IMG_2876@-1381431336.jpg", "gallery/gallery-06.jpg"],
  ["public/images/galeria/IMG_3644@740402960.jpg", "gallery/gallery-07.jpg"],
  ["public/images/galeria/f17b3bd6-7067-42db-8cd8-916270d230c0.JPG", "gallery/gallery-08.jpg"],
];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

/**
 * Reads a source file into a buffer sharp can decode. A few of the photos are
 * HEIC images carrying a `.jpg` extension, which sharp cannot open without the
 * (non-bundled) HEIF plugin, so those go through a pure-JS decoder first.
 */
async function decode(file) {
  const buffer = await readFile(file);
  const isHeic = buffer.subarray(4, 8).toString("latin1") === "ftyp";
  return isHeic ? heicConvert({ buffer, format: "JPEG", quality: 1 }) : buffer;
}

async function run() {
  let before = 0;
  let after = 0;

  const consumed = [];

  for (const [source, target] of JOBS) {
    const from = path.join(ROOT, source);
    const to = path.join(PUBLIC_IMAGES, target);

    if (!existsSync(from)) {
      // Already processed on an earlier run, or the raw file is not checked in.
      console.log(`${target.padEnd(38)} ${"skipped (no source)".padStart(22)}`);
      continue;
    }

    await mkdir(path.dirname(to), { recursive: true });
    const original = (await stat(from)).size;
    const image = sharp(await decode(from), { limitInputPixels: false }).rotate();
    const { width = 0 } = await image.metadata();
    const resized = image.resize({
      width: Math.min(width, MAX_WIDTH),
      withoutEnlargement: true,
    });

    // The logo is the only asset that needs an alpha channel.
    const buffer = target.endsWith(".png")
      ? await resized.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await resized.flatten({ background: "#ffffff" }).jpeg(JPEG).toBuffer();

    await writeFile(to, buffer);
    if (from !== to) consumed.push(from);

    before += original;
    after += buffer.length;
    console.log(`${target.padEnd(38)} ${kb(original).padStart(9)} -> ${kb(buffer.length).padStart(9)}`);
  }

  // Remove the sources that were renamed into place. Only files this run
  // actually consumed are touched, so re-running never deletes anything else.
  for (const file of consumed) {
    await rm(file, { force: true });
  }
  await rm(path.join(PUBLIC_IMAGES, "galeria"), { recursive: true, force: true });

  console.log(`\ntotal ${kb(before)} -> ${kb(after)}`);
}

run();
