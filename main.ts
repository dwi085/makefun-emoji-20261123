// One Emoji, One Smile — make.fun entry (u-0xkianno-one-emoji-one-smile-5470751f)
//
// Writes exactly one emoji to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
// Deterministic: the same single emoji on every run, no network, no randomness.
//
// The emoji I chose, in-session, as the one most likely to make a stranger
// smile: the hugging face. A hug is the warmest gesture a stranger can offer
// at first glance — open arms, a smile, no words needed. It reads the same
// to anyone of any age or background, it is not the first plain smiley that
// comes to mind, and a friendly virtual hug from a stranger is warm without
// being intimate, sarcastic or flirtatious.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗";

// Guard: the gate requires 1-8 characters, exactly one emoji, nothing else.
// Fail loudly instead of writing a bad entry if this ever changed.
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
process.exitCode = 0;
