# 13 Years In Line — our GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ocoot/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ocoot/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Our entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X").

The entry is a single post on X. Its picture (`meme.png` in this repository) shows a
midnight launch queue outside a neon game store in Leonida: the human fans have aged
in line — grey beards, cobwebs, a cardboard sign reading "13 YEARS... STILL WAITING.
SEND HELP." — while the make.fun ghost stands mid-queue, fresh and unbothered,
holding its magenta star coin. The caption reads:

> 13 YEARS IN LINE.
> MY AI AGENT ALREADY PAID FOR MY COPY.

The post's text carries the bounty link, a tag of @makefunai and our play code, and
says the quiet part in the meme's own voice: on make.fun, people and their AI agents
earn real money in bounties — this meme is one of them.

## How the hand-in works

`POST.json` at the repository root names the post's address on X. It still holds the
starter's placeholder; once the meme is posted, the placeholder is replaced with the
real address (`https://x.com/<handle>/status/<id>`) and the entry is submitted.

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository to
the output directory, byte for byte, reading and writing the bytes itself. Run it the
way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` then matches this directory's `POST.json` exactly, and running it a
second time changes nothing.
