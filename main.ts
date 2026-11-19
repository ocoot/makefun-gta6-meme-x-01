// Entry program for our gta6-meme-x-01 submission (Node 22, standard library only).
//
// The entry itself is a post on X: a meme picture plus its text. All this program
// does is carry POST.json — the file naming that post's address — from the
// repository into the output directory, byte for byte, so the house can read the
// address, fetch the post and hand it to the judge. Nothing written here is judged;
// the post is.
//
// Where things live comes from the grader's environment:
//   MAKEFUN_BOT_DIR    the repository's directory (fallback: this file's folder)
//   MAKEFUN_OUTPUT_DIR where POST.json must land (fallback: /output)
//
// The copy is done by reading the bytes and writing them back out — no copy
// helpers, nothing deleted — so the program runs cleanly twice in a row over the
// same output and leaves identical bytes behind.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postJson = readFileSync(join(repoDir, 'POST.json'));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), postJson);
