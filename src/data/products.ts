/**
 * Single source of truth for the product portfolio.
 *
 * Both /products/ and /products/<slug>/ render from this, so a change to a
 * capability list or a stage label updates every surface at once instead of
 * drifting across seven files.
 *
 * `source` is deliberately null for CTXone, ThreadWeaver, Crucible and Router.
 * Those repos are private, and prior ctx memory records that their marketing
 * sites already carry CTAs pointing at closed repos — a public visitor hits a
 * login wall. Until that is resolved (see plan task t-018) this site links to
 * the product's own site and a licensing contact instead of inventing a
 * public source link.
 */
export type Product = {
  slug: string;
  name: string;
  token: string;
  role: string;
  tier: string;
  version: string | null;
  site: string;
  source: string | null;
  tagline: string;
  problem: string;
  premise: string;
  capabilities: string[];
  facts: string;
  pairsWith: string[];
};

export const products: Product[] = [
  {
    slug: 'agentstategraph',
    name: 'AgentStateGraph',
    token: '--p-asg',
    role: 'The substrate',
    tier: 'v1.0.0 · GA',
    version: 'v1.0.0',
    site: 'https://agentstategraph.dev',
    source: 'https://github.com/agentstatelabs/agentstategraph',
    tagline: 'What git was to source code, AgentStateGraph is to agent state.',
    problem:
      'Agent state lives in context windows, scratch files and chat logs. None of it is branchable, none of it is attributable, and none of it survives the session that produced it.',
    premise:
      'Every state change is an atomic commit carrying the full provenance chain: what changed, the structured intent behind it, the reasoning, a confidence score, the acting agent, and the authority it acted under. That is what a git commit message tries to be — except structured, queryable, and enforced by the data model rather than by convention.',
    capabilities: [
      'O(1) branching and speculation — create, compare and discard branches instantly',
      'Schema-aware merge with CRDT-inspired conflict resolution',
      'Epochs — sealable, tamper-evident audit bundles with Merkle root verification',
      'Policy — authorization and cost-of-change gating via Cedar, Rego and WASM evaluators',
      'Taint and quarantine — mark sensitive paths, block writes, subscribe to changes',
      'Namespaces for ref-layer isolation in multi-tenant deployments',
      'Plans and tasks with a state machine, proofs and agent assignment',
    ],
    facts: 'Rust core · 73 MCP tools · 8 language bindings · 4 storage backends · HTTP API',
    pairsWith: ['Everything — it is the layer the rest of the suite writes to'],
  },
  {
    slug: 'ctxone',
    name: 'CTXone',
    token: '--p-ctxone',
    role: 'Memory and context',
    tier: 'v1.0.0 · GA',
    version: 'v1.0.0',
    site: 'https://ctxone.com',
    source: null,
    tagline: 'Write a fact once. Every tool remembers it.',
    problem:
      'Context anxiety: the daily dread of re-explaining the same project to your AI tools every morning. A context window is working memory — it ends when the session does.',
    premise:
      'CTXone is a self-hosted context engine that treats a fact as a commit. Every MCP-compatible tool you connect reads and writes the same graph, so what you teach one tool on Monday is known to a different tool on Tuesday.',
    capabilities: [
      'remember — store facts, decisions and reasoning with importance weighting',
      'recall — token-budgeted semantic retrieval that reports its savings ratio',
      'prime — load markdown files as structured, idempotent memory',
      'Plans and tasks with a state machine, proofs, blockers and agent assignment',
      'Branches — explore a direction with its own memory, then diff and merge',
      'Taint — mark a fact wrong and everything derived from it is flagged',
      'Provenance — ctx blame answers who told the model that',
      'Lens web UI — dashboard, plans, sessions, memory tree, branches, diff',
    ],
    facts: '90+ MCP tools · REST API · Lens UI · SQLite or Postgres · zero telemetry',
    pairsWith: ['AgentStateDeveloper — team memory alongside code context'],
  },
  {
    slug: 'agentstatedeveloper',
    name: 'AgentStateDeveloper',
    token: '--p-asd',
    role: 'Code intelligence',
    tier: 'v1.0.0 · GA',
    version: 'v1.0.0',
    site: 'https://agentstatedeveloper.dev',
    source: 'https://github.com/agentstatelabs/agentstatedeveloper',
    tagline: 'The context lives with the code, not in a chat log.',
    problem:
      'Ask why a function exists and the answer is in a Slack thread, a closed PR, or nobody’s head. An agent opening the file cold has none of it, and a diff shows what changed rather than what the change means.',
    premise:
      'Every symbol gets a decision ledger, an effect declaration and a place in the call graph — stored in a git-native sidecar, so the reasoning clones with the repo and survives renames and file moves.',
    capabilities: [
      'Decision ledger — hazards, rationale and authority per symbol',
      'Effect declarations that propagate through the call graph, so blast radius is computable rather than guessed',
      'Call graph — callers, callees and transitive reach',
      'Policy gates that require sign-off before agent writes to sensitive paths',
      'Hash-chained audit log — tamper-evident, replayable, independently verifiable',
      'Agent thinking captured alongside the code it produced',
    ],
    facts: 'Rust core · 64 MCP tools · 9 languages · git-native sidecar · CLI, MCP and HTTP surfaces',
    pairsWith: ['CTXone — per-developer code context becomes team-wide'],
  },
  {
    slug: 'threadweaver',
    name: 'ThreadWeaver',
    token: '--p-thread',
    role: 'Conversation state',
    tier: 'Beta',
    version: 'v0.3.5-beta.2',
    site: 'https://threadweaver.org',
    source: null,
    tagline: 'A conversation is a tree. Stop storing it as a line.',
    problem:
      'Every chat UI makes you choose between keeping the good thread and trying a different approach. So you open a second tab, then a third, then lose track of which one had the useful answer.',
    premise:
      'ThreadWeaver is AI chat where the conversation is a graph. Fork from any message, run several directions in parallel, compare them side by side, and cherry-pick the good parts into a merged thread.',
    capabilities: [
      'Branch any conversation — fork from any message, not just the last',
      'Compare branches side by side and cherry-pick into a merge',
      'Per-message provenance — which model, from which parent, under which settings',
      'Multi-LLM: OpenAI, Gemini, Mistral, Llama and local models via Ollama',
      'MCP tool calling, so the conversation reaches the rest of the suite',
      'Rich markdown rendering, voice, sharing and hooks',
    ],
    facts: 'Self-hosted · multi-LLM · built on AgentStateGraph',
    pairsWith: ['AgentStateRouter — compare models, then route on what you learned'],
  },
  {
    slug: 'agentstatecrucible',
    name: 'AgentStateCrucible',
    token: '--p-crucible',
    role: 'Testing and validation',
    tier: 'Early access',
    version: null,
    site: 'https://agentstatecrucible.dev',
    source: null,
    tagline: 'One passing run is a sample, not a test.',
    problem:
      'Agents are non-deterministic, so a single successful run proves almost nothing. Exact-match assertions are too brittle for generated text, and pass/fail hides the thing that actually regressed.',
    premise:
      'Run the same scenario against multiple agents from the same starting state, capture every decision as a commit, and score the runs comparatively with a judge agent. Two agents can reach the same answer by very different routes; only trajectory comparison sees the difference.',
    capabilities: [
      'Same scenario, same starting state, same policy for every candidate agent',
      'Every decision a commit — intent, reasoning, confidence, alternatives, authority',
      'A pluggable LLM judge scoring runs side by side',
      'Sealed, Merkle-rooted epochs an auditor can verify without trusting the harness',
      'Measures correctness, reasoning quality, effect blast radius and cost',
    ],
    facts: 'Scenario runner · judge scoring · run diffing · sealed audit epochs',
    pairsWith: ['AgentStateDeveloper — validate behaviour and blast radius together'],
  },
  {
    slug: 'agentstaterouter',
    name: 'AgentStateRouter',
    token: '--p-router',
    role: 'Execution routing',
    tier: 'Alpha',
    version: 'v0.1.0-alpha',
    site: 'https://agentstaterouter.dev',
    source: null,
    tagline: 'Optimise cost per unit of work, not cost per token.',
    problem:
      'A task costs $0.02 on the small model and $0.20 on the large one — but the small model needed three attempts and the third was subtly wrong. Token price is a measurable proxy for the wrong thing.',
    premise:
      'The Agent Execution Optimization Engine routes on what actually happened in your workload: completions rather than tokens, efficiency tracked per task type, and budget enforcement that stops runaway retries.',
    capabilities: [
      'Cost-per-unit-of-work scoring based on successful completions',
      'Efficiency score tracked per task type from your own agent history',
      'Budget enforcement — circuit breakers, retry limits and fallback chains',
      'Policy gate authorising each task before dispatch',
      'Three shapes over one engine: suggester, OpenAI/Anthropic-compatible proxy, embedded Rust crate',
    ],
    facts: 'Not in the request path · every routing decision a commit',
    pairsWith: ['ThreadWeaver — turn a model comparison into a standing routing rule'],
  },
];
