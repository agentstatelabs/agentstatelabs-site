---
title: "\"It worked when I tried it\" is not a test"
description: Agents are non-deterministic, so a single passing run proves almost nothing. Validating them needs a harness built for distributions, not assertions.
date: 2026-09-26
accent: crucible
---

You changed the prompt. You ran the scenario. It worked. Ship it?

With deterministic software that reasoning is sound. With an agent it's close to meaningless — the same input can produce a different trajectory next time, and you just sampled once from a distribution you haven't looked at.

## Why normal testing doesn't transfer

Unit tests assume a fixed output for a fixed input. Agent runs violate that on purpose. So the usual instincts fail:

- **Assertions are too brittle** — exact-match on generated text fails on a rephrase that's equally correct
- **A single run is not a sample** — you need the spread, not one draw
- **Pass/fail is too coarse** — "did it work" hides *how well*, which is the thing that regressed

And the failure that matters most is rarely the crash. It's the run that succeeded via a route you'd never approve.

## Run the scenario, capture the graph

[AgentStateCrucible](https://agentstatecrucible.dev) runs one scenario against multiple agents and captures every decision along the way as an auditable graph — not just the final output, but the path.

That distinction matters. Two agents reach the same answer; one consulted the policy, checked the ledger and asked for confirmation, the other guessed correctly. Output comparison scores them identically. Trajectory comparison doesn't.

## Judged, then diffed

A judge agent scores runs side by side, so evaluation is comparative rather than absolute — which is the only kind of judgement that's stable when the underlying models keep moving. Because runs are commits in the same graph as everything else, you can diff this week's trajectory against last week's and see exactly where behaviour drifted.

That's the loop: change something, run the scenario, compare the graphs, see what moved.

Crucible is in early access, built on the same substrate as the rest of the suite.

*Next: the cheapest model is often the most expensive.*
