---
title: One graph beats six integrations
description: Five tools that sync with each other is five times the failure surface. One substrate with five views is a different architecture entirely.
date: 2026-08-22
accent: asg
---

The obvious way to build an agent platform is to build the tools separately and integrate them. Memory over here, code intelligence over there, routing somewhere else, and a pile of adapters in between.

We tried that shape early and abandoned it. Here's why.

## Integration is a tax you pay forever

Five independent tools means ten possible pairwise integrations, each with its own schema drift, its own sync lag, and its own way of being subtly wrong. Worse, the interesting questions are always the cross-cutting ones — *which decision, made in which session, by which model, caused this change?* — and those are exactly the questions that fall between two tools.

You end up with five systems that each hold part of the answer and no system that holds the answer.

## The substrate approach

[AgentStateGraph](https://agentstategraph.dev) is a content-addressed, branchable, blameable state store. Every product in the suite writes to it directly:

```
AgentStateGraph          ← the substrate
├── CTXone               ← memory, plans, provenance
├── AgentStateDeveloper  ← symbols, effects, decision ledger
├── ThreadWeaver         ← branchable conversation state
├── AgentStateRouter     ← routing decisions and cost history
└── AgentStateCrucible   ← test runs and judge scoring
```

There is no sync step, because there's nothing to sync. A routing decision and a code decision are commits in the same graph. Asking which one preceded the other is a query, not an integration project.

## What that buys you

**Branching works across everything.** Fork a branch and you fork the memory, the plans and the code decisions together — then diff and merge them as one unit.

**Blame crosses tool boundaries.** `why-did-we` can walk from a line of code back through the decision, the conversation and the model that produced it, because they're all commits.

**One backup, one audit, one story.** Compliance doesn't want five exports that mostly agree.

The cost is that the substrate has to be right before anything above it can be. That's most of what v1.0.0 represents.

*Next: what it means for a commit to carry intent.*
