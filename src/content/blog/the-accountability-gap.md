---
title: Capability was never the bottleneck
description: Agents got dramatically better at doing the work. They got no better at explaining it — and that gap, not raw capability, is what keeps them out of production.
date: 2026-08-22
accent: asl
---

Every few months the models get better. Longer context, better reasoning, higher benchmark scores. And yet the list of things teams will actually let an agent do unsupervised in production has barely moved.

That's not a capability problem. It's an accountability problem.

## Four questions with no answer

Put a fleet of agents on real infrastructure and four questions come up immediately:

- **What changed?** You have a diff. You don't have the reasoning that produced it.
- **Why?** The rationale was in a conversation that ended when the session did.
- **Who authorised it?** Attribution stops at a service account.
- **Expected versus actual?** Nothing recorded what the agent *thought* would happen, so nothing can flag that it didn't.

A human engineer answers these implicitly. They remember last quarter's incident, they know who owns the service, they can say why the retry logic is weird. An agent starts every session with none of that and ends every session throwing away whatever it worked out.

## Why more context doesn't fix it

The instinct is to make the window bigger — paste in more, summarise harder. But a context window is working memory, not a record. It's not queryable by anyone else, it isn't attributable, it doesn't survive the session, and it certainly isn't auditable six months later when someone asks who decided this.

Bigger working memory makes an agent smarter within a session. It does nothing for the questions above, which are all fundamentally about *state that persists and can be interrogated*.

## Treat agent output like source code

We already solved this problem once, for humans. Source control gives us history, blame, review and branches — not because writing code is hard to remember, but because decisions need to be attributable long after the author is gone.

Agent state deserves the same treatment: every write a commit, every commit carrying intent and authority, the whole thing branchable and queryable. That's the premise underneath [everything we build](/products/).

Capability will keep improving on its own. Accountability won't — someone has to build it.

*Next: why one graph underneath six products beats six tools that integrate.*
