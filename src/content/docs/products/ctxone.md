---
title: CTXone
description: Persistent, searchable, accountable memory for AI agents.
---

**CTXone** is persistent, searchable, accountable memory for AI agents. It eliminates context anxiety — the daily dread of re-explaining the same project to AI tools every morning.

## The problem

Every AI session starts cold. Every conversation burns context tokens on re-onboarding. Architecture decisions made last Tuesday are gone by Thursday. CTXone gives agents a memory layer that survives sessions, restarts, and tool switches.

## What CTXone provides

- **`remember`** — store facts, decisions, and reasoning with importance weighting
- **`recall`** — token-budgeted semantic retrieval; always returns a savings ratio
- **`prime`** — load markdown files as structured, idempotent memory
- **Plans & tasks** — shared plan primitive with state machine, proofs, blockers, and agent assignment
- **Branches** — every significant task gets a branch; decisions are auditable by task
- **Sessions** — end-of-session summaries written to the graph for the next agent
- **Lens** — web UI: dashboard, plans, sessions, memory tree, branches, diff

## ASD code intelligence integration

CTXone Hub can spawn `asd-serve` on demand, giving agents five additional tools alongside memory:

- `code_search` — semantic symbol search
- `code_read` — full context for a symbol (signature, effects, ledger)
- `callers_of` / `callees_of` — call graph navigation
- `code_repos` — list registered repos

## The savings model

Every `recall` response includes a `ctx_savings_ratio` — the ratio of tokens recalled vs. tokens that would have been spent re-establishing that context from scratch. CTXone Lens tracks cumulative savings per session and across the workspace.

## Components

| Component | Role |
|---|---|
| `ctxone-hub` | MCP server (42+ tools) + HTTP API |
| `ctx` | CLI — memory, plans, branches, taint, team ops |
| CTXone Lens | SvelteKit web UI |
| Python client | PyO3 bindings |

## Docs and source

- **Docs:** [ctxone.com](https://ctxone.com)
- **License:** BSL-1.1 → Apache 2.0 (4 years)
