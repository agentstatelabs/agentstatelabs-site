---
title: A context window is not memory
description: Working memory and durable memory are different things. Confusing them is why your agent re-learns the same decision every Monday.
date: 2026-08-24
order: 5
accent: ctxone
---

Tell your agent on Monday that you moved off Postgres. On Tuesday, in a fresh session, it suggests a Postgres index.

The instinct is to blame the context window. It isn't the window's fault. A context window is *working memory* — fast, session-scoped, and gone when the session is. What you wanted was *durable memory*, and no amount of window enlargement produces one.

## The difference in one line

Working memory answers "what are we doing right now." Durable memory answers "what did we decide, and why, and who by."

The second one has requirements the first will never satisfy: it has to be queryable by tools that weren't in the room, attributable to a person or agent, survive restarts and tool switches, and still make sense in six months.

## Write once, remembered everywhere

[CTXone](https://ctxone.com) is a self-hosted context engine that treats a fact as a commit:

```bash
ctx remember "We moved off Postgres to SQLite for the edge deployment" \
  --importance high --context architecture
```

Every MCP-compatible tool you connect — Claude Code, Cursor, VS Code, your own agents — reads and writes the same graph. The fact you taught one tool on Monday is known to a different tool on Tuesday, because there is only one memory.

## Beyond storing facts

Durable memory turns out to be the foundation for things that look unrelated:

- **Plans that survive plan rot** — a plan is state, so it can be checked, resumed and proved rather than re-derived
- **Branches** — explore a direction with its own memory, then diff and merge
- **Taint** — mark a fact wrong and everything derived from it is flagged, not silently trusted
- **Provenance** — `ctx blame` answers who told the model that

Ninety-plus MCP tools, a REST API and the Lens UI over SQLite or Postgres, all on infrastructure you control. No account, no telemetry.

The window will keep growing. It still won't remember Monday.

*Next: the context that has to live next to the code.*
