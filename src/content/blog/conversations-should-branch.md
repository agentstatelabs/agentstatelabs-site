---
title: Conversations should branch
description: "Every chat UI makes you choose: keep this thread, or try the other approach. Branching a conversation the way you branch a codebase removes the choice."
date: 2026-09-19
accent: thread
---

You're twelve messages into a good conversation with a model. You want to try a different framing — but the good version is *right there*, and re-prompting will bury it.

So you open a second tab. Then a third. Then you lose track of which one had the useful answer.

This is a version control problem, and we solved version control a long time ago.

## The linear transcript is the bug

A chat is stored as a list because that's how it's displayed, not because that's what it is. What it actually is: a tree of attempts, most of them abandoned, a few of them good, occasionally two halves worth combining.

Forcing that tree into a line means every exploration destroys the alternative. The model isn't the limitation — the data structure is.

## Fork from any message

[ThreadWeaver](https://threadweaver.org) is AI chat where the conversation is a graph. Fork from any message, not just the last. Run several directions in parallel. Put the branches side by side and cherry-pick the good parts into a merged thread.

Because it's built on [AgentStateGraph](https://agentstategraph.dev), branching is cheap for the same reason it's cheap in git: the state is content-addressed, so a fork shares everything up to the split.

## Branch the model, not just the prompt

The useful trick is that a branch can vary anything, including which model answered. Run the same question through several providers — OpenAI, Gemini, Mistral, Llama, local models via Ollama — and compare answers in the same view rather than across four tabs and your memory.

Every message carries its own provenance: which model produced it, from which parent, under which settings. Not per-session metadata — per message. That's what makes a fair comparison possible after the fact.

Self-hosted, multi-LLM, with MCP tool calling, so the conversation reaches the same tools as the rest of the suite.

ThreadWeaver is in beta at v0.3.5-beta.2 — not part of v1.0.0, but built on the substrate that is.

*Next: how you prove an agent actually behaved.*
