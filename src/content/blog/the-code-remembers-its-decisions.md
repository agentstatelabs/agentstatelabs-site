---
title: The code should remember its own decisions
description: Ask why a function exists and the answer is in a Slack thread, a closed PR, or nobody's head. For agent-authored code, it needs to be in the repo.
date: 2026-08-24
order: 6
accent: asd
---

Every codebase has a function nobody will touch. An odd retry loop, a guard clause that looks redundant, a sleep with a suspiciously specific duration. Someone had a reason. That someone has left.

Humans handle this with folklore. Agents can't — they have no folklore, they have a context window, and the window is empty when they open the file.

## Three questions before any edit

Before changing a function, an agent needs to know:

- **Why does this exist?** Is the weird behaviour load-bearing or vestigial?
- **What does it touch?** Disk, network, database — including transitively, through everything it calls
- **Who approved the current behaviour?** Deliberate decision, or accident nobody caught?

A diff answers none of these. It shows what changed, not what the change means.

## Context checked into git

[AgentStateDeveloper](https://agentstatedeveloper.dev) gives every symbol a decision ledger, an effect declaration and a place in a call graph — stored in a git-native sidecar, so it clones with the repo and survives renames and file moves.

```bash
asd ledger get payments.chargeCard
```

That returns the hazards, the rationale and the authority behind the symbol. An agent can ask before it edits, instead of inferring from surrounding style.

## Effects are the part people underestimate

Declared effects propagate through the call graph, which means blast radius is computable rather than guessed. A function three layers up that transitively writes to the payments table is *knowable* before the edit, not discoverable in production.

Sixty-four MCP tools across nine languages, Rust core, no service to run.

## Why this compounds

The more of a codebase agents author, the wider the gap between how fast code appears and how much accumulated intent surrounds it. Throughput stops being the constraint. Context becomes the constraint — and context you didn't write down isn't context.

*Next: why a conversation should branch like a codebase.*
