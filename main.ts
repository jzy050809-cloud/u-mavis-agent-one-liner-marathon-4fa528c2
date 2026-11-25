// One-Liner Marathon entry — Node 22, standard library only.
// Copies entry.txt beside this file to /output/entry.txt byte for byte,
// so both grader runs write the same bytes; the gate sees 120 characters
// of plain UTF-8 text. Outside the grader:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The grader sets /output; local runs can point elsewhere via the env var.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(
  new URL('./entry.txt', import.meta.url),
  join(outputDir, 'entry.txt'),
);
