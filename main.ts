// The GPS swears it was a shortcut; the cornfield disagrees.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Trust me, this dirt road is a shortcut, I said, as the GPS rerouted us through a cornfield, a river, and what I can only describe as a haunted barn.";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR!, { recursive: true });
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR!, "entry.txt"), LINE, "utf8");
