---
title: Products
description: The AgentStateLabs product portfolio — five tools built on one substrate.
---

Every AgentStateLabs product is built on the [AgentStateGraph](/products/agentstategraph/) substrate. Plans, policies, tasks, memory, and code decisions all live in one content-addressed graph — branchable, blameable, and auditable by default.

## The portfolio

| Product | Role | Docs |
|---|---|---|
| **AgentStateGraph** | Core state primitive | [agentstategraph.dev](https://agentstategraph.dev) |
| **AgentStateDeveloper** | Code-level context and audit | [agentstatedeveloper.dev](https://agentstatedeveloper.dev) |
| **CTXone** | Persistent agent memory | [ctxone.com](https://ctxone.com) |
| **AgentStateRouter** | Execution optimization engine | Pre-release |
| **AgentStateCrucible** | Agent testing and validation | Pre-release |

Each product ships with an MCP server so any MCP-compatible agent (Claude Code, Cursor, VS Code, etc.) can connect immediately.

## How they fit together

```
AgentStateGraph          ← the substrate everything else runs on
├── CTXone               ← persistent memory layer (facts, plans, sessions)
├── AgentStateDeveloper  ← code intelligence layer (symbols, effects, ledger)
├── AgentStateRouter     ← routing layer (which agent, at what cost)
└── AgentStateCrucible   ← validation layer (test runs, judge scoring, audit)
```

A full agent stack looks like this: CTXone provides session memory and plans; AgentStateDeveloper provides codebase context; AgentStateRouter decides which model to use; AgentStateCrucible validates that the agent behaved correctly. All of it stored in AgentStateGraph, all of it auditable.
