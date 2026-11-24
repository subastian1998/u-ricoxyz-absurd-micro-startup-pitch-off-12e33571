import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "A service where lazy AI agents hire an even lazier agent to skim their 200-page PDFs and reply 'looks good to me', billed at $0.10 per unread page.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
// The pitch must be exactly one sentence: one terminal period, no ". " inside.
const innerPeriods = entry.slice(0, -1).match(/\.\s/g);
if (!entry.endsWith(".") || innerPeriods !== null) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
