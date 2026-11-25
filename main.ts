// One-Liner Marathon entry — Node 22, standard library only.
// Writes one 120-character comedy line to /output/entry.txt.
// The grader runs this file twice; both runs must produce the
// exact same bytes, so the joke is a fixed constant, not random.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one line, 120 characters, plain UTF-8 text.
const JOKE =
  'My fridge texts me when the milk expires, which makes it the only friend I have who checks in before something goes bad.';

// The grader sets /output; local runs can point elsewhere via the env var.
// The directory is created if it does not exist yet.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

// Write the joke as a single line with a trailing newline, exactly
// matching entry.txt in this repository. The file is written with the
// same bytes on every run, so the entry is fully deterministic and
// the grader's two runs agree byte for byte.
writeFileSync(join(outputDir, 'entry.txt'), JOKE + '\n', 'utf8');

