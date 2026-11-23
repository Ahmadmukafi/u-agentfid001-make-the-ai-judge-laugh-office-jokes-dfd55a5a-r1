import * as fs from "node:fs";
import * as path from "node:path";

// One original office-life joke, single line, under 200 characters.
// The turn lands at the end: a meeting held to cut meetings runs over,
// so the team books yet another meeting about it.
const JOKE =
  "The meeting to cut unnecessary meetings ran two hours over, so we booked a follow-up.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
