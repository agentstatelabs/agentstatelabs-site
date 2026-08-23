---
title: The cheapest model is often the most expensive
description: Routing on token price optimises the wrong number. What you actually pay for is completed work — and three retries on a cheap model beats nothing.
date: 2026-10-03
accent: router
---

A task costs $0.02 on the small model and $0.20 on the large one. Obvious choice.

Except the small model gets it wrong twice before getting it right, each attempt burns a review cycle, and the third attempt is subtly wrong in a way nobody catches for a week. The $0.02 task cost $0.06 in tokens and considerably more in everything else.

## Token price is a proxy, and a bad one

Most LLM routers optimise for cost per token. That's measurable, which is why it's popular, and it's the wrong denominator. What you care about is **cost per unit of work completed** — where the unit is a task done correctly the first time.

Those two numbers diverge exactly where it matters: on hard tasks, where retries cluster.

## Route on your own history

[AgentStateRouter](https://agentstaterouter.dev) — the Agent Execution Optimization Engine — routes on what actually happened in your workload:

- **Cost-per-unit-of-work**, counting successful completions rather than tokens
- **Efficiency score** tracked per task type, because a model that's excellent at refactors may be poor at schema migrations
- **Budget enforcement** with circuit breakers, retry limits and fallback chains
- **A policy gate** that authorises before dispatch, not after

The history is the point. A generic benchmark tells you how models rank on someone else's tasks. Your routing table should be built from your own.

## Not in the request path

AEOE ships in three shapes over one engine: a **suggester** over HTTP/JSON-RPC that recommends without sitting in the request path, a **proxy facade** that's OpenAI- and Anthropic-compatible for drop-in use, and an **embedded crate** for Rust applications.

Every routing decision is a commit on [AgentStateGraph](https://agentstategraph.dev), with intent, reasoning, confidence and outcome. So "why did this task go to the expensive model" has an answer, and the answer improves the next decision.

Router is at v0.1.0-alpha, with the foundation in active development.

*Next: we can't reason about agents without agreeing what the words mean.*
