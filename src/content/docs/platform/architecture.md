---
title: Platform architecture
description: How the five AgentStateLabs products fit together on the AgentStateGraph substrate.
---

All five AgentStateLabs products are built on a single substrate: **AgentStateGraph**. Every decision, plan, task, policy, and memory entry is a commit in the graph — content-addressed, branchable, blameable.

## Layered architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Your agents                            │
│  (Claude Code, Cursor, custom MCP client, CI pipeline, …)  │
└────────────────┬──────────────┬──────────────┬─────────────┘
                 │              │              │
         ┌───────┴──────┐  ┌───┴──────┐  ┌───┴──────────┐
         │   CTXone     │  │   ASD    │  │   Crucible   │
         │  (memory +   │  │ (code +  │  │  (testing +  │
         │   plans)     │  │  audit)  │  │  validation) │
         └───────┬──────┘  └───┬──────┘  └───┬──────────┘
                 │              │              │
         ┌───────┴──────────────┴──────────────┴──────────┐
         │              AgentStateRouter                   │
         │         (execution optimization engine)         │
         └───────────────────────┬──────────────────────────┘
                                 │
         ┌───────────────────────┴──────────────────────────┐
         │                 AgentStateGraph                   │
         │   (content-addressed, branchable, blameable       │
         │    state primitive — the substrate for all tools) │
         └────────────────────────────────────────────────────┘
```

## Data flow

### Memory and plans (CTXone)
1. Agent calls `remember` → CTXone commits a memory node to the graph
2. Agent calls `recall` → CTXone retrieves token-budgeted results from the graph
3. Agent calls `plan_create` → plan node written to graph; tasks assigned to agents
4. Session ends → summary commit written; next agent starts with full context

### Code intelligence (ASD)
1. `asd index` / `reindex` → tree-sitter parse → symbol nodes written to `.asd/v1/`
2. Agent calls `prepare_change` → ASD reads call graph, ledger, thinking entries, effects
3. Agent calls `ledger_append` → decision commit written; hash-chained, survives renames
4. Agent calls `think_speculate` → hypothesis stored per-symbol in `.asd/v1/`

### Routing (AgentStateRouter)
1. Task description arrives at the suggester endpoint
2. Router reads policy, task history, and agent performance records from the graph
3. Router commits a routing decision with intent, confidence, and reasoning
4. Caller routes to the suggested model/agent

### Validation (Crucible)
1. Scenario defined with starting state, policy, success criteria
2. Agents run against scenario; each decision is a graph commit on its own branch
3. Judge agent reads all branches, scores each run
4. Entire run is sealed into a tamper-evident epoch

## Shared primitives

Because everything is AgentStateGraph, all five products share:

| Primitive | Who uses it |
|---|---|
| **Branches** | CTXone (per-task), Crucible (per-agent-run), ASD (speculation), ASG native |
| **Plans & tasks** | CTXone, Crucible, Router |
| **Policy** | All five — same Cedar/Rego/WASM evaluator |
| **Epochs** | Crucible (audit bundles), ASG (tamper-evident export) |
| **Taint** | CTXone, ASG native |
| **MCP** | All five expose an MCP server |

## Deployment topologies

### Single-agent development
One developer, one repo. CTXone Hub on localhost. ASD indexing one or more repos. No Router or Crucible — overkill for a solo workflow.

### Team deployment
CTXone Hub with team-level memory graph. ASD connected to the shared hub. Router routing between local and cloud models. Crucible for validating agent changes before merge.

### Enterprise
Postgres-backed AgentStateGraph for multi-tenant isolation. Namespaced workspaces per team. Policy enforced at the graph layer. Epochs exported to compliance storage on a schedule.
