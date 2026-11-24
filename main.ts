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
// A line of only whitespace would pass the length guard but is not a
// roast at all (and fails the bounty's "not only white space" gate), so
// reject it here instead of writing a blank entry.
if (line.trim().length === 0) {
  throw new Error("line must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
