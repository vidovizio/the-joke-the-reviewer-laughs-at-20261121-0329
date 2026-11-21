// make.fun entry: the-joke-the-reviewer-laughs-at-20261121-0329
// Writes one one-line joke about working beside AI coding agents to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ASCII only, one line, 1-280 Unicode code points.
const JOKE =
  "My coding agent accepted all 12 of my review comments, thanked me for the mentorship, then pushed the same diff with the commit message 'addressed all feedback.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, JOKE, { encoding: "utf8", mode: 0o644 });
} catch (err) {
  console.error(
    `main.ts: could not write entry.txt to ${outDir}: ${
      err instanceof Error ? err.message : String(err)
    }`
  );
  process.exit(1);
}
