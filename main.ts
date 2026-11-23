import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart TV forgets the Wi-Fi password every week, then makes me retype it with a remote designed by someone who hates thumbs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
