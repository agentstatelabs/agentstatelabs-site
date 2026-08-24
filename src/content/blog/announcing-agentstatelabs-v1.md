---
title: Announcing AgentStateLabs v1.0.0
description: Six products, one state graph, and a single idea — that an agent's work should be as reviewable as the code it writes. Here's what ships today.
date: 2026-08-24
order: 1
accent: asl
---

Today we're releasing **AgentStateLabs v1.0.0** — a suite-level release covering [AgentStateGraph](https://agentstategraph.dev), [CTXone](https://ctxone.com) and [AgentStateDeveloper](https://agentstatedeveloper.dev), with [ThreadWeaver](https://threadweaver.org), [AgentStateCrucible](https://agentstatecrucible.dev) and [AgentStateRouter](https://agentstaterouter.dev) alongside them at earlier stages.

We started as one project. It grew into six, because the same problem kept showing up in a different costume.

## The problem, six times

Agents write code, so we built a decision ledger for it. Agents forget between sessions, so we built durable memory. Agents pick the wrong model, so we built routing on real cost-per-task. Agents need proving, so we built a validation harness. Every time, the underlying need was identical: **the reasoning has to outlive the session**.

That's why the products aren't five tools that integrate. They're five surfaces on one content-addressed graph, where every write is a commit carrying intent, reasoning, confidence and authority.

## What v1.0.0 actually means

It's a *suite* version, deliberately. Each product keeps its own semver — AgentStateDeveloper is on its 1.3.x line and stays there. v1.0.0 marks the point where the substrate stopped moving underneath the products built on it: the graph format, the MCP surface and the provenance model are now stable enough to build against.

For the three GA products that means production-ready. For the other three it means the foundation they're built on is done, even while they aren't.

## What hasn't changed

Everything is still self-hosted, still MCP-native, still source-available under BSL-1.1 converting to Apache 2.0. There's no account, no telemetry, and no hosted tier you're steered toward. If you run agents on infrastructure you control, the state they produce should live there too.

Start with whichever layer hurts most — [the suite is here](/products/), and each product stands alone.

*This is the first post in a series on agent accountability. Next: why capability was never the bottleneck.*
