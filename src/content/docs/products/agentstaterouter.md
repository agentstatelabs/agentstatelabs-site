---
title: AgentStateRouter
description: Agent Execution Optimization Engine — routes tasks to the right agent at the right cost.
---

**AgentStateRouter (AEOE — Agent Execution Optimization Engine)** answers the question: *what is the best execution strategy for this task?*

## What it is (and isn't)

AgentStateRouter is **not just an LLM router**. LLM routers optimize for tokens. AEOE optimizes for workloads — cost-per-unit-of-work, efficiency score, and agent history per task type. A task that costs 10× more tokens but completes correctly the first time may be cheaper than a task that requires three retries.

It's **not a framework**. It's a suggestion engine that plugs into your existing stack without being in the request path.

## How it works

AEOE is built on AgentStateGraph, so every routing decision is a commit: structured intent, reasoning, confidence, and outcome. Plans, tasks, policies, and scoring history live in one graph — queryable, blameable, and auditable.

Three deployment shapes over the same engine:

1. **Suggester** (HTTP/JSON-RPC) — pluggable into any product, not in the request path. Ships first.
2. **Proxy facade** — OpenAI- and Anthropic-compatible HTTP. Drop-in target for LiteLLM users.
3. **Embedded crate** — direct linkage for Rust applications.

## What it optimizes

- **Cost-per-unit-of-work** — not just tokens, but successful task completions
- **Efficiency score** — tracks agent history per task type and adjusts routing
- **Budget enforcement** — circuit breakers, retry limits, and fallback chains
- **Policy gate** — per-task authorization before dispatch

## Status

Pre-release. Foundation in active development. Built on the same AgentStateGraph substrate as the rest of the portfolio — plans, policies, and task history are already in place.

## Source

- **License:** BSL-1.1 → Apache 2.0 (4 years)
- **Commercial licensing:** licensing@agentstatelabs.com
