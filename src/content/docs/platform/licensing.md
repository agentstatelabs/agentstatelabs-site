---
title: Licensing
description: Business Source License 1.1 — how it works and what it means for your use.
---

All AgentStateLabs products are licensed under the **Business Source License 1.1 (BSL-1.1)**, with an automatic conversion to **Apache 2.0** after four years from each release.

## What BSL-1.1 means in practice

BSL-1.1 is a **source-available license**, not an open-source license (by the OSI definition). You can read the source, modify it, and run it internally — but the license restricts one specific use: **production use as a competitive SaaS/cloud service**.

### What you CAN do

- ✅ Run AgentStateLabs tools internally for your own development teams and agents
- ✅ Build products *using* AgentStateLabs tools (your agents, your pipelines, your applications)
- ✅ Study, fork, and modify the source for internal use
- ✅ Contribute back via merge requests
- ✅ Use in research and evaluation
- ✅ Use the Apache 2.0 release (four years after each version's release date)

### What you CANNOT do without a commercial license

- ❌ Offer AgentStateLabs tools as a hosted service that third parties pay for
- ❌ White-label the tools as the core offering of a SaaS product sold to external customers
- ❌ Resell managed deployments of AgentStateLabs infrastructure

The key test: **are you building *with* these tools, or *selling* these tools?** Building with them is allowed. Selling them as a service requires a commercial license.

## The four-year conversion

Every release automatically converts to Apache 2.0 exactly four years from its release date. This means:

- Older versions of all products are already fully open-source (Apache 2.0)
- Newer versions will be by 2029–2030
- The Apache 2.0 code is permanently free — the clock never resets on released versions

## Commercial licenses

For deployments that fall outside BSL-1.1's permitted uses, we offer commercial licenses with:

- White-label and OEM rights
- Enterprise SLAs and support
- Extended indemnification
- Custom terms

Contact: **licensing@agentstatelabs.com**

## Where to find the license text

Each product repository includes a `LICENSE` file with the full BSL-1.1 text and the specific additional use grant for that product.

- AgentStateGraph: [github.com/agentstatelabs/agentstategraph](https://github.com/agentstatelabs/agentstategraph)
- AgentStateDeveloper: [github.com/agentstatelabs/agentstatedeveloper](https://github.com/agentstatelabs/agentstatedeveloper)

## Common questions

**Can I use CTXone or ASD in my consulting work?**
Yes — you're using the tools to build or maintain software for your clients. That's internal use, not a competitive service.

**I'm building a developer tool. Can I bundle ASD?**
If you're distributing ASD as a component of your product (not as the product itself), that's likely permitted use. Email licensing@agentstatelabs.com to confirm.

**What about the REST APIs? Are those "production use"?**
Calling the API from your own agents or CI pipeline is internal use. Exposing the API to third-party paying customers is what triggers the restriction.
