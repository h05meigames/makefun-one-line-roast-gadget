import { mkdirSync, writeFileSync } from "node:fs";

// One original line roasting a gadget used every day: the microwave that
// finishes the job and still demands applause, one beep a minute.
const line =
  "My microwave beeps when it's done, then beeps again every minute until I open the door — like a toddler who finished its homework and needs applause.";

// The bounty requires a 1–200 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like em dashes count
// once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
