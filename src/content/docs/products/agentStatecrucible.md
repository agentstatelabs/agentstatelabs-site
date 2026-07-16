---
title: AgentStateCrucible
description: Agent testing and validation framework — side-by-side runs with auditable, judge-scored results.
slug: products/agentStatecrucible
---

**AgentStateCrucible** is an agent testing and validation framework built on AgentStateGraph primitives: plans, policies, tasks, decision commits, blame, and sealed epochs.

## The credentialing problem

Picking an agent for a job is a credentialing problem. Today the answer is vibes — a few demo runs, a leaderboard scraped from someone else's benchmark, a hunch. Crucible replaces vibes with **side-by-side judgment over auditable runs**:

- **Same scenario.** Same starting state, same task, same policy. Every candidate agent gets the same inputs.
- **Every decision a commit.** AgentStateGraph decision commits capture intent, reasoning, confidence, alternatives, and authority. No "trust me, it worked."
- **A third judge agent.** An LLM judge scores runs on correctness, reasoning quality, and effect blast radius. Pluggable — bring your own judge.
- **A sealed epoch.** The entire run is bundled into a tamper-evident Merkle-rooted epoch. Hand it to an auditor and they can verify it without trusting the harness.

## How a run works

1. Define a **scenario** — starting state, task description, policy, success criteria
2. Run the scenario against **multiple agents** in parallel (or sequentially)
3. Each agent's decisions are captured as AgentStateGraph commits on its own branch
4. A **judge agent** scores each run against the criteria
5. The run is **sealed into an epoch** — Merkle root, tamper-evident, exportable
6. Compare runs side-by-side in the Crucible UI: who made better decisions, who had narrower blast radius, who completed faster

## What it measures

- **Correctness** — did the agent achieve the goal?
- **Reasoning quality** — were the decisions well-reasoned and well-documented?
- **Effect blast radius** — how many side effects did the agent produce, and were they intended?
- **Cost** — tokens consumed, time elapsed, retries required

## Status

Pre-release. Foundation in active development. Built on AgentStateGraph — scenarios, runs, tasks, and scoring history are native graph primitives.

## Source

- **License:** BSL-1.1 → Apache 2.0 (4 years)
