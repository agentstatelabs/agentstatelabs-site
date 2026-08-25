---
title: About AgentStateLabs
description: Who we are, what we build, and why.
---

AgentStateLabs builds infrastructure for the intent-based era of computing.

## What we do

We build the substrate that makes fleets of AI agents accountable, auditable, and safe to deploy in production. Our tools answer the questions that matter when AI is the primary actor:

- What did the agent change?
- Why did it change it?
- Who authorized it?
- What did it expect to happen, and what actually happened?
- What code did it touch, and what are the downstream effects?
- Can you roll it back?

These questions don't have good answers today. Slack threads, PR descriptions, and tribal knowledge don't survive a rename, a file move, or the original developer leaving. They certainly don't survive a fleet of agents operating across dozens of sessions.

## Our approach

We believe the right architecture for agent governance is data-model-enforced, not socially-enforced. Every change an agent makes should carry structured metadata — intent, reasoning, confidence, authority chain, and resolution — stored in a substrate that survives renames, restarts, and tool switches.

That substrate is [AgentStateGraph](/products/agentstategraph/): a content-addressed, branchable, blameable state store designed from the ground up for AI agents as the primary actor. Every other product in the portfolio is built on it.

## The portfolio

| Product | What it does | Stage |
|---|---|---|
| [AgentStateGraph](/products/agentstategraph/) | The core state primitive — branchable, blameable, intent-aware | v1.0.0 · GA |
| [CTXone](/products/ctxone/) | Persistent memory for agents — survives sessions, restarts, tool switches | v1.0.0 · GA |
| [AgentStateDeveloper](/products/agentstatedeveloper/) | Code-level context: decision ledger, effects, call graph, agent thinking | v1.0.0 · GA |
| [ThreadWeaver](/products/threadweaver/) | Branchable AI conversations — fork any message, compare branches, cherry-pick | Beta |
| [AgentStateCrucible](/products/agentstatecrucible/) | Agent testing — side-by-side validation with auditable, judge-scored runs | Early access |
| [AgentStateRouter](/products/agentstaterouter/) | Execution optimization — routes tasks to the right agent at the right cost | Alpha |

AgentStateLabs v1.0.0 is a suite-level release covering the three GA products.
Each product keeps its own version number, so read the stage column rather than
the suite version.

## Licensing

All AgentStateLabs products use **Business Source License 1.1**, converting to Apache 2.0 four years after each version's first publication. This protects the project from strip-mining while leaving individuals, startups, and enterprises that use it internally completely unaffected.


## Contact

**info@agentstatelabs.com**
