---
title: We can't debug what we can't name
description: "\"Context\", \"memory\", \"state\", \"agent\" — four words doing twenty jobs each. A field that can't name its problems can't compare solutions to them."
date: 2026-08-24
order: 10
accent: asl
---

Two engineers say their agent has "a memory problem." One means the context window overflows mid-task. The other means the agent forgot a decision from last week. These are unrelated problems with unrelated fixes, and the shared word hid that for the length of the conversation.

Multiply that by a whole industry and you get the current state of agentic AI discourse.

## Overloaded words are expensive

The vocabulary problem isn't cosmetic. It has direct costs:

- **Solutions can't be compared.** Two products both claim to solve "context" while addressing entirely different failures.
- **Problems can't be reported.** A bug report saying "state got confused" is unactionable.
- **Progress can't be measured.** You cannot benchmark against a term that means six things.

Every engineering discipline hit this and resolved it the same way: by agreeing on words before arguing about implementations. Databases have isolation levels. Distributed systems have consistency models. Neither field started with them.

## A reference, not a product

[The AI Taxonomy](https://ai-taxonomy.com) is our attempt at a shared vocabulary for agentic AI — the pains, the gains, and the principles behind them, organised into categories covering context quality, reasoning cost, memory and state, execution quality, architecture, transparency, the human-agent relationship, evaluation, measurement and amplification.

It is deliberately not a product page. It doesn't route to our software or argue that our approach is correct. It's a reference, and it's more useful the more people use it — including people building things that compete with us.

## Why a company maintains one

Fair question. We build products whose value depends on people being able to distinguish working memory from durable memory, and provenance from logging. When those distinctions are mushy, every conversation restarts from first principles.

A precise vocabulary is infrastructure too. It just isn't software.

*This closes the launch series. The [products](/products/) are where to go next — or start with whichever layer hurts most.*
