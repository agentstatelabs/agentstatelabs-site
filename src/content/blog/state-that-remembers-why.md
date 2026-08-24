---
title: A commit that remembers why
description: Git records what changed and who typed it. For agent state that isn't enough — the commit itself has to carry intent, reasoning, confidence and authority.
date: 2026-08-24
order: 4
accent: asg
---

A git commit is a remarkably good primitive. Content-addressed, immutable, cheap to branch, trivial to attribute. It has carried software engineering for two decades.

It also records almost nothing about *thinking*. Author, timestamp, message — and the message is whatever the author felt like typing.

For human teams that's survivable, because the reasoning lives in people. For agent fleets it isn't, because there are no people to hold it.

## What a decision commit carries

[AgentStateGraph](https://agentstategraph.dev) keeps git's shape and widens what a commit holds. Every write records:

- **Intent** — what the agent was trying to accomplish, structured rather than prose
- **Reasoning** — why this approach over the alternatives it considered
- **Confidence** — how sure it was, so low-confidence writes can be flagged or gated
- **Authority** — under whose delegation it acted

None of that is a comment field. It's part of the commit, so it's queryable, diffable and impossible to lose in a rename.

## Why confidence matters more than it sounds

Of the four, confidence is the one teams underestimate. An agent that is 95% sure and an agent that is 40% sure produce identical-looking output. Recording the difference lets you build policy on it — auto-apply above a threshold, require review below it, and go back later to ask which low-confidence decisions turned out badly.

That last query is how a fleet gets better over time instead of just faster.

## Branchable by default

Because it keeps git's model, speculative work is cheap. An agent can explore a direction on a branch — memory, plans and decisions together — and you diff it before merging. A bad direction gets abandoned, not unwound.

The substrate ships with a Rust core, 73 MCP tools, eight language bindings and four storage backends, so this isn't a format you adopt so much as a store you point things at.

*Next: why context that dies at the session boundary isn't memory.*
