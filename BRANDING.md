# Product-of-AgentStateLabs branding

Canonical spec for how a product site declares that it is an AgentStateLabs
product. This lives in `agentstatelabs-site` because ASL owns the brand.

Apply it mechanically. The point of writing it down is that six sites, in
four different stacks, end up identical rather than six interpretations of
"add some branding".

## Why this exists

Before the cutover, the sites referenced AgentStateLabs wildly unevenly —
counting mentions on each landing page: AgentStateGraph 14, ThreadWeaver 8,
AgentStateDeveloper 7, AgentStateRouter 2, and **CTXone and AgentStateCrucible
zero**. A visitor could read ctxone.com end to end without learning who makes
it.

## The rules

### 1. Exact wording

> **A product of AgentStateLabs**

Use this string verbatim. Not "An AgentStateLabs product", not "From the
AgentStateLabs team", not "Part of the AgentStateLabs suite". One string, so
it is greppable across every repo.

The nav backlink is the bare wordmark: **AgentStateLabs**

### 2. Placement — two required, no others

**Footer brand lockup (required).** Glyph + wording + link, sitting directly
above the existing copyright line. The copyright is a legal notice; this is
positioning. They are different things and must not be merged into one line.

**Nav backlink (required).** The bare wordmark as the *last* text link in the
nav, before any GitHub/CTA button. Muted styling — it is an exit, not a
destination competing with the product's own pages.

Do **not** put it in the hero. Every one of these sites already has an eyebrow
there doing product positioning, and a parent-brand line above the H1 buries
the product's own message.

### 3. The glyph

A 15px rounded square in ASL's neutral gradient — deliberately slate/platinum
rather than the product's accent, so it reads as the parent brand and never
competes with the product's identity.

```css
.asl-glyph {
  width: 15px; height: 15px; border-radius: 4px; flex-shrink: 0;
  background: linear-gradient(135deg, #64748b, #e2e8f0);
}
```

Footer lockup only. Not in the nav — nav space is tight and the wordmark alone
carries it.

### 4. Backlink target

`https://agentstatelabs.com/` — the root, on both placements. No deep links to
`/products/<slug>/`, no tracking parameters. One target, so it stays correct
when the ASL site's routes change.

Always `target="_blank" rel="noopener"`, since the visitor is on the product
site to evaluate the product.

## Per-site colour tokens

The six sites do **not** share variable names. Three use `--text-primary` /
`--text-secondary`, and the other three each use their own scheme. Substitute
from this table — or use the literal fallbacks in the snippets below, which
work everywhere.

| Site | Body text | Muted text |
|---|---|---|
| AgentStateDeveloper | `--text-primary` | `--text-secondary` |
| AgentStateRouter | `--text-primary` | `--text-secondary` |
| ThreadWeaver | `--text-primary` | `--text-secondary` |
| CTXone | `--ctx-text` | `--ctx-text-dim` |
| AgentStateCrucible | `--cru-text` | `--cru-text-dim` |
| AgentStateGraph | `--txt` | `--txt-2` |
| The AI Taxonomy | `--text` | `--text-dim` |

Every snippet below therefore uses `var(--token, #literal)` form. If you paste
one into the wrong site the fallback still renders correctly — it just will
not track that site's theme, so prefer substituting the right token.

## Snippets

Two footer archetypes exist across the six sites. Use whichever matches.

### Archetype A — `footer-base` flex row

Sites: **CTXone** (`website/src/components/SiteFooter.astro`),
**AgentStateCrucible** (`src/components/SiteFooter.astro`).

These already have a `.footer-base` row containing `.copyright` and
`.built-on`. Add the lockup as the first child:

```html
<div class="parent-brand">
  <span class="asl-glyph"></span>
  A product of
  <a href="https://agentstatelabs.com/" target="_blank" rel="noopener">AgentStateLabs</a>
</div>
```

Neither of these two sites uses `--text-primary`, so the CSS differs per site.

CTXone:

```css
.parent-brand { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ctx-text-dim, #888888); }
.parent-brand a { color: var(--ctx-text, #e0e0e0); font-weight: 600; }
```

AgentStateCrucible:

```css
.parent-brand { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--cru-text-dim, #9aa8c4); }
.parent-brand a { color: var(--cru-text, #e6ecf5); font-weight: 600; }
```

### Archetype B — `footer-bottom` centered line

Sites: **AgentStateDeveloper** (`src/layouts/Site.astro`), **AgentStateGraph**
(`site/src/pages/index.astro`), **AgentStateRouter** (`src/pages/index.astro`),
**ThreadWeaver** (`landing/index.html`, static — no build step).

Add a second `.footer-bottom` div *above* the existing one:

```html
<div class="footer-bottom parent-brand">
  <span class="asl-glyph"></span>
  A product of
  <a href="https://agentstatelabs.com/" target="_blank" rel="noopener">AgentStateLabs</a>
</div>
```

```css
.parent-brand { display: flex; align-items: center; justify-content: center; gap: 8px; border-top: none; padding-top: 0; }
.parent-brand a { color: var(--text-primary, #e8e6f0); font-weight: 600; }
```

AgentStateGraph is in this archetype but uses `--txt` / `--txt-2`, so
substitute there rather than relying on the fallback.

### Nav backlink — all sites

Last text link, before any GitHub button:

```html
<a href="https://agentstatelabs.com/" target="_blank" rel="noopener" class="nav-asl">AgentStateLabs</a>
```

```css
.nav-asl { opacity: 0.75; }
.nav-asl:hover { opacity: 1; }
```

On ASD this is a new entry in the `nav` array in `Site.astro` frontmatter, not
inline markup.

## Verification

After applying, each site must satisfy all four:

1. `grep -c "A product of" <built landing page>` returns 1
2. `grep -c "agentstatelabs.com" <built landing page>` returns 2 (footer + nav)
3. The copyright line is still present and still separate
4. The site builds, and the accent colour of the glyph is unchanged by the
   product's own theme

Do the check against **built output**, not source. On these sites the source
is a mix of `.astro`, `.md`, `.mdx` and raw HTML, and only the build shows
what a visitor actually receives.

## Reference sites are different

Not every AgentStateLabs property is a product. [The AI Taxonomy](https://ai-taxonomy.com)
is a community reference for agentic AI vocabulary, and it is more useful to
the field — and more credible — if it does not read as vendor marketing.

So it takes a **different wording** and a **reduced placement**:

> **Maintained by AgentStateLabs**

- **Footer byline only.** No nav backlink. A parent-brand link in the nav of a
  neutral reference would make it read as an ASL property rather than a shared
  resource.
- **Same neutral glyph**, at 13px rather than 15px, so it is recognisably part
  of the family without claiming product status.
- The footer also states the reference is "free to use, cite and disagree
  with", which is the point of publishing it.

Do not apply "A product of AgentStateLabs" here. If another reference or
research property is added later, it follows this pattern, not the product one.

## Related: private-repo CTAs (resolved)

This spec deliberately does not cover source and CTA links, which were handled
separately. Worth recording what that turned up, because the assumption going
in was wrong:

A live HTTP check of every repo link across the six sites found that **CTXone
is public** — earlier notes claiming otherwise were stale. Only
**AgentStateCrucible** and **ThreadWeaver** 404 for logged-out visitors. Those
two now use "Request access" CTAs pointing at licensing, and their install
docs state the gate before the commands rather than after they fail.

The lesson generalises: a link audit only covers `href`s. Crucible's worst
offender was its hero's copy-paste `curl … install.sh | bash`, which 404s and
is not a link at all. Check shell commands and install snippets too.
