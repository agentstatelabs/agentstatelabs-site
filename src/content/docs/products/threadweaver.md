---
title: ThreadWeaver
description: AI chat with branchable conversations — fork from any message, compare branches side by side, cherry-pick the best.
---

**ThreadWeaver** is AI chat where the conversation itself is a graph. Fork from
any message, explore several directions in parallel, compare the branches side
by side, and cherry-pick the good parts into a merged thread.

## What it is (and isn't)

ThreadWeaver is **not another chat wrapper**. A normal chat UI gives you one
linear transcript: to try a different approach you either lose the current one
or start over. ThreadWeaver treats a conversation the way git treats a
codebase — branches are first-class, comparison is built in, and merging is a
deliberate act rather than copy-paste.

It is **not a closed product**. It is self-hosted and multi-LLM, so the
conversation history stays on infrastructure you control.

## How it works

ThreadWeaver is built on AgentStateGraph, so every message is a commit in a
content-addressed graph. That is what makes branching cheap and provenance
exact: a message knows which model produced it, from which parent, under which
settings.

## Capabilities

- **Branch any conversation** — fork from any message, not just the last one
- **Compare branches, cherry-pick the best** — evaluate directions side by side
  and merge what worked
- **Full provenance on every message** — model, parent, and settings recorded
  per message rather than per session
- **Tool calling and MCP servers** — connect the same MCP tooling the rest of
  the portfolio speaks
- **Rich markdown rendering**, voice, sharing, and hooks

## Works with your models

Multi-LLM by design, including OpenAI, Gemini, Mistral, Llama, and local models
via Ollama — so branches can compare *models*, not just prompts.

## Status

Beta — currently v0.3.5-beta.2. Not part of the AgentStateLabs v1.0.0 release;
see [Products](/products/) for where each product sits.

## Source

- **Site:** [threadweaver.org](https://threadweaver.org)
- **License:** BSL-1.1 → Apache 2.0 (4 years)
- **Commercial licensing:** licensing@agentstatelabs.com
