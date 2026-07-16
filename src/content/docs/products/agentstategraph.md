---
title: AgentStateGraph
description: Content-addressed, branchable, blameable state store designed from the ground up for AI agents.
---

**AgentStateGraph is to agent state what Git was to source code** — a content-addressed, branchable, blameable state primitive designed from the ground up for AI agents as the primary actor.

## The core idea

Every state change in AgentStateGraph is an atomic commit that carries the full provenance chain:

| Field | Question |
|---|---|
| `state_root` | What changed? |
| `intent` | Why? (structured, queryable) |
| `reasoning` | How did the agent decide? |
| `confidence` | How sure was it? (0.0–1.0) |
| `agent_id` | Who did it? |
| `authority` | Who authorized it? |
| `resolution` | What was accomplished? Any deviations? |

This is what git's commit message tries to be — but structured, queryable, and enforced by the data model rather than by convention.

## Key capabilities

- **73 MCP tools** — any agent can connect immediately via stdio
- **O(1) branching and speculation** — create, compare, and discard branches instantly
- **Schema-aware merge** — CRDT-inspired conflict resolution
- **Epochs** — sealable, tamper-evident audit bundles with Merkle root verification
- **Policy** — authorization + cost-of-change gating with Cedar, Rego, and WASM evaluators
- **Taint & quarantine** — mark sensitive paths, block writes, subscribe to changes
- **Namespaces** — ref-layer isolation for multi-tenant deployments
- **Reminders** — pull-based scheduling with priority, recurrence, and approval gating
- **Plans & tasks** — shared task primitive with state machine, proofs, and agent assignment
- **19 intent categories** — structured vocabulary for agent reasoning
- **4 storage backends** — Memory, SQLite, Postgres (multi-tenant), IndexedDB (browser)
- **6 language bindings** — Rust, Python, TypeScript, Go, WASM, C FFI

## Why it's not git, a database, or an event store

| Tool | What it lacks |
|---|---|
| Git | Structured intent, branching for non-text data, policy enforcement |
| Relational database | Branching, blame, agent provenance |
| Event store | Branching, merge, speculation, policy gate |
| **AgentStateGraph** | Nothing — it's purpose-built for this |

## Docs and source

- **Docs:** [agentstategraph.dev](https://agentstategraph.dev)
- **Source:** [github.com/agentstatelabs/agentstategraph](https://github.com/agentstatelabs/agentstategraph)
- **License:** BSL-1.1 → Apache 2.0 (4 years)
