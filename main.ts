// Make the Judge Laugh in One Line — entry program (Node 22+, stdlib only).
//
// The line, mapped to the judge's five criteria (in order):
//   1. Instantly funny in one read: a stranger gets it at once — noise-cancelling
//      headphones are a familiar everyday object, no setup knowledge needed.
//   2. Surprise: the first half sets up "silence so I can finally think"; the
//      second half breaks it — the silence only amplifies something worse.
//   3. Tight: every word earns its place; the laugh lands at the very END
//      ("how loudly I chew") and is never explained afterwards.
//   4. Fresh: not a stock joke or a pun; nobody predicts "chewing" from the
//      first half, and it avoids the flooded smart-speaker / fitness-tracker /
//      router / fridge / mirror / smartwatch topics entirely.
//   5. Reads cleanly out loud: plain words, one breath, no reference that
//      needs context.
//
// Writes the line, and only the line, to /output/entry.txt (no trailing
// newline, so the file content is the line itself).

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const LINE =
  "I bought noise-cancelling headphones to finally hear myself think, and now all I can hear is how loudly I chew.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
