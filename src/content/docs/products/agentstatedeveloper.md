---
title: AgentStateDeveloper
description: Code-level context and audit overlay for agent-authored code.
---

**AgentStateDeveloper (ASD)** gives every function a decision ledger, an effect declaration, and a place in the call graph — all queryable by the coding agents that write the code, all checked into git.

## The problem

Coding agents now write, refactor, and review code at human-equivalent rates. The next bottleneck is knowing *what an agent already decided*, *what it's allowed to touch*, and *who approved it*. The diff alone doesn't answer those questions. Slack threads and PR descriptions don't survive a rename.

## What ASD provides

| Primitive | What you get |
|---|---|
| **Decision ledger** | Append decisions, hazards, rationale, and constraints to any symbol. Entries survive renames. |
| **Effect declarations** | 17 categories (`io.fs.read`, `io.net.out`, `io.db.write`, …). Declared per symbol, propagated transitively. |
| **Semantic index** | Every function, method, and class parsed by tree-sitter. 9 languages. |
| **Call graph** | Intra- and cross-module edges. Transitive effects propagate automatically. |
| **Agent thinking** | Hypotheses, mental models, failed attempts, and open questions — stored per symbol, shared across sessions via git. |
| **Policy gate** | File-backed rules: allow, deny, or require-approval per action and actor. |
| **Audit event stream** | Hash-chained JSONL log of every ledger mutation. |

## Agent thinking

ASD's thinking layer makes agent reasoning a first-class citizen of the codebase. Instead of dying at the end of a chat session, hypotheses, mental models, dead ends, and open questions are stored in `.asd/v1/`, checked into git, and automatically surfaced by `prepare-change` when a future agent touches the same symbols.

## Surfaces

- **`asd`** — CLI for humans and scripts
- **`asd-mcp`** — stdio MCP server (19+ tools) for Claude Code, Cursor, and any MCP agent
- **`asd-serve`** — HTTP server + Lens review UI

## Docs and source

- **Docs:** [agentstatedeveloper.dev](https://agentstatedeveloper.dev)
- **Source:** [github.com/agentstatelabs/agentstatedeveloper](https://github.com/agentstatelabs/agentstatedeveloper)
- **License:** BSL-1.1 → Apache 2.0 (4 years)
