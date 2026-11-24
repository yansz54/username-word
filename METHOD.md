# One Word, One Username, One Reward — method

## The entry

**`leftonread`** — 10 characters, 10 bytes, one word, written to
`/output/entry.txt` by `main.ts` (Node 22, stdlib only).

## How it was chosen

28 candidate usernames were drafted, all single lowercase handle-shaped
words, then screened and run through a single-elimination bracket of 15
pairwise games, judged against the judge's criteria in order:

1. Is a real make.fun username, one word
2. Raises a smile on the first read, without needing to be explained
3. Sticks in the mind after one look, a name with a bit of character
4. Is a single word, no spaces, no padding, no gloss
5. Sounds like a handle its owner would happily wear, not a jab

Criteria 1 and 4 are equal for every candidate (all are one handle-shaped
word), so games were decided on criterion 2 first, then 3, then 5.

12 candidates were cut in screening for raising no smile on first read
(buffering, wifiwanderer, screenstaring, chargercable, delivered, unsent,
password123, error404, nullpointer, semicolon, updatepending, draftsfolder).
The 16 survivors played the bracket; the full list and every game are in
`../username-word-candidates.md` (kept outside the work dir).

## Why the winner won

- **Final: leftonread vs typosaurus.** Both are sticky single words, but
  leftonread wins on criterion 2, the first difference: it is a joke you
  feel — the read receipt with no reply, a tiny story everyone has lived —
  while typosaurus is a joke you admire. On criterion 5 it is also the
  handle someone would happily wear: self-deprecating, social, human.
- **Semi-final vs ctrlaltdefeat:** the smile is immediate with no parsing,
  while the Ctrl+Alt+Del pun needs a beat to decode — and criterion 2 says
  the smile must come "without needing to be explained".
- **Deliberately avoided:** canonical dictionary showpieces (petrichor,
  defenestration, serendipity, …) — the most likely house calibration
  texts — and every earlier winning word of ours (unplugit, borborygmus,
  disaster/D, A).

## The program

`main.ts` holds the word as a constant, enforces the gate (1–30 characters
by code point and by UTF-8 byte length, not only whitespace, exactly one
word, no leading/trailing whitespace), writes only to `/output/entry.txt`
(the grader cwd is read-only), and verifies the written file round-trips
byte-identical with no trailing newline.
