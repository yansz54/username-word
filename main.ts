import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word, One Username, One Reward — the entry is the single word
// "leftonread". It won a 28-candidate pairwise tournament against the
// judge's criteria in order: it is a real handle-shaped word (criterion 1),
// it raises a smile on the first read with no explanation needed — the read
// receipt with no reply, a tiny story everyone has lived (criterion 2, the
// first difference in the final against "typosaurus", a joke you admire
// rather than feel), it sticks in the mind (criterion 3), it is one word
// with no spaces or padding (criterion 4), and it is a handle its owner
// would happily wear — self-deprecating, social, human, not a jab at
// anyone (criterion 5). The grader cwd is read-only, so nothing is ever
// written relative to it — only /output/entry.txt.
const WORD = "leftonread";

// The gate requires 1-30 characters of UTF-8 text, not only whitespace.
// Count code points, not UTF-16 units, and check bytes too: the gate reads
// UTF-8 text, so a multi-byte character must not push the file over the
// limit either.
if (
  [...WORD].length < 1 ||
  [...WORD].length > 30 ||
  Buffer.byteLength(WORD, "utf8") > 30 ||
  WORD.trim().length === 0
) {
  throw new Error(`entry word out of gate: ${[...WORD].length} chars`);
}

// The entry is one word: no space may hide inside it, and no stray leading
// or trailing whitespace may change what the judge reads.
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}
if (WORD !== WORD.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify the written file round-trips byte-identical to the chosen word.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error("entry.txt does not match the chosen word");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(WORD, "utf8")) {
  throw new Error("entry.txt byte length does not match the chosen word");
}
if (written.endsWith("\n") || written.endsWith("\r")) {
  throw new Error("entry.txt must not end with a newline");
}
