// The GPS swears the dirt road is a shortcut; the cornfield, the river and the
// haunted barn disagree. The driver's account is the entry.
import * as fs from "node:fs";
import { join } from "node:path";

const LIMIT = 200;
const raw =
  "Trust me, this dirt road is a shortcut, I said, as the GPS rerouted us through a cornfield, a river, and what I can only describe as a haunted barn.";

const text = raw.trim();
if ([...text].length > LIMIT || text.length === 0) {
  throw new Error("entry fails the 1.." + LIMIT + " character gate");
}
// The shortcut claim opens the joke — it has to be the first words.
if (!text.startsWith("Trust me")) throw new Error("entry lost its opening");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(join(outDir, "entry.txt"), text, "utf8");
