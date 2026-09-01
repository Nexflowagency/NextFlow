# SEO Toolkit — Claude Skills

Colecție de Claude Agent Skills pentru SEO, descărcate din surse open-source și
instalate în acest repo. Totul este **project-scoped** (`.claude/`), deci merge
în orice sesiune Claude Code / Cowork deschisă pe acest proiect, inclusiv pe web.

## Ce e activ

**56 de skill-uri SEO** în `.claude/skills/` + **32 de subagenți** în
`.claude/agents/` + **10 slash commands** în `.claude/commands/`.

Nu trebuie să instalezi nimic. Cere pur și simplu ce vrei
("fă un audit SEO pe nextflow.ro", "generează schema pentru pagina de servicii")
sau invocă un skill pe nume.

### 1. Claude SEO — nucleul (25 skill-uri)
Sursa: [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) · MIT

Setul principal, cu delegare în paralel către subagenți. Rulează fără chei API.

| Skill | Ce face |
|---|---|
| `seo` | Punctul de intrare — rutează către restul |
| `seo-audit` | Audit complet de site (până la 500 pagini), health score |
| `seo-page` | Analiză în profunzime a unei singure pagini |
| `seo-technical` | Crawlability, indexare, securitate, Core Web Vitals, JS rendering |
| `seo-schema` | Detectează / validează / generează JSON-LD |
| `seo-sitemap` | Analizează sau generează sitemap.xml |
| `seo-images` | Alt text, dimensiuni, WebP/AVIF, lazy loading, CLS |
| `seo-content` | Calitate conținut și E-E-A-T |
| `seo-content-brief` | Brief-uri de conținut competitive |
| `seo-cluster` | Clustering semantic pe baza suprapunerii din SERP |
| `seo-plan` | Strategie și roadmap SEO |
| `seo-flow` | Framework FLOW (Find → Leverage → Optimize → Win) |
| `seo-geo` | Optimizare pentru AI Overviews / ChatGPT / Perplexity |
| `seo-local` | Google Business Profile, NAP, citations, map pack |
| `seo-maps` | Geo-grid rank tracking, review intelligence |
| `seo-backlinks` | Profil de linkuri, anchor text, linkuri toxice |
| `seo-competitor-pages` | Pagini "X vs Y" și "alternative to X" |
| `seo-ecommerce` | Google Shopping, product schema, marketplace |
| `seo-hreflang` | SEO internațional, validare hreflang |
| `seo-programmatic` | SEO programatic la scară |
| `seo-sxo` | De ce nu rankează o pagină bine optimizată |
| `seo-drift` | Baseline + detectare regresii SEO între deploy-uri |
| `seo-google` | Search Console, PageSpeed, CrUX, Indexing API, GA4 |
| `seo-dataforseo` | Date live (necesită extensia DataForSEO) |
| `seo-image-gen` | Generare imagini OG/hero (necesită extensia Banana) |

### 2. SuperSEO — conținut și autoritate (11 skill-uri)
Sursa: [inhouseseo/superseo-skills](https://github.com/inhouseseo/superseo-skills) · Apache-2.0

Fără chei API, fără exporturi — agentul face singur research-ul în SERP.
Include un ruleset anti-"AI slop" la generare.

`page-audit` · `eeat-audit` · `content-brief` · `write-content` ·
`improve-content` · `keyword-deep-dive` · `semantic-gap-analysis` ·
`topic-cluster-planning` · `linkbuilding` · `featured-snippet-optimizer` ·
`expert-interview`

### 3. GEO — optimizare pentru căutarea AI (16 skill-uri)
Sursa: [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) · MIT

`geo` (router) · `geo-audit` · `geo-citability` · `geo-crawlers` · `geo-llmstxt` ·
`geo-schema` · `geo-technical` · `geo-content` · `geo-brand-mentions` ·
`geo-platform-optimizer` · `geo-report` · `geo-report-pdf` · `geo-compare` ·
`geo-proposal` · `geo-prospect` · `geo-update`

Ultimele trei sunt pentru partea de agenție (pipeline de clienți, propuneri,
rapoarte lunare de progres) — utile pentru NextFlow ca serviciu vândut.

### 4. Auditori standalone (4 skill-uri)

| Skill | Sursa | Licență | Când |
|---|---|---|---|
| `seo-agentic` | [Bhanunamikaze/Agentic-SEO-Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill) | MIT | Audit cu dovezi: rulează ~89 scripturi Python colectoare |
| `seo-geo-aeo` | [SNLabat/SEO-GEO-AEO-Skill](https://github.com/SNLabat/SEO-GEO-AEO-Skill) | *fără licență* | Raport SEO+GEO+AEO gata de trimis clientului (Word/PDF) |
| `seo-static-site` | [aevans-eng/seo-skill](https://github.com/aevans-eng/seo-skill) | MIT | Site static HTML — aplică fix-urile direct în fișiere |
| `agent-seo` | [ivankuznetsov/claude-seo](https://github.com/ivankuznetsov/claude-seo) | MIT | Workflow de articole lungi (`/seo:research`, `/seo:write`, …) |

> `seo-geo-aeo` provine dintr-un repo public **fără fișier de licență**. E
> instalat pentru că e util, dar nu are termeni de reutilizare expliciți —
> tratează-l ca "vizibil public", nu ca liber de redistribuit.

## Ce e opțional (`seo-toolkit/optional/`)

Nu sunt încărcate automat. Necesită chei API, servere MCP externe sau se
suprapun cu setul activ. Ca să activezi unul, copiază folderul lui în
`.claude/skills/`.

| Folder | Conținut | Necesită |
|---|---|---|
| `seranking/` | 32 skill-uri SEO de la SE Ranking | SE Ranking MCP (cont plătit) |
| `agricidaniel-extensions/` | ahrefs, dataforseo, firecrawl, bing-webmaster, unlighthouse, profound, banana, seranking | cheia API a fiecărui serviciu |
| `openclaudia/` | 16 skill-uri SEO/marketing | parțial Semrush / Ahrefs / GSC / Similarweb |
| `rampstack/` | 16 skill-uri SEO din ciclul de viață al unui site | — (se suprapun cu setul activ) |
| `alirezarezvani/` | seo-audit, local-seo-manager, programmatic-seo, site-architecture | — (se suprapun cu setul activ) |

## Note de instalare

- Coliziuni de nume rezolvate: trei repo-uri defineau un skill numit `seo`.
  Am păstrat `seo` pentru setul AgriciDaniel și am redenumit celelalte două în
  `seo-agentic` și `seo-static-site`.
- Am restrâns descrierile pentru `seo-agentic`, `seo-geo-aeo`, `seo-static-site`
  și `geo`, pentru că fiecare cerea să se declanșeze la *orice* întrebare de SEO
  și s-ar fi bătut cu skill-ul principal `seo`. Conținutul instrucțiunilor e
  neatins — doar frontmatter-ul.
- Scripturile Python din `seo/scripts/`, `geo/scripts/` și
  `seo-agentic/scripts/` au dependențe în `requirements.txt`-urile respective.
  Skill-urile funcționează și fără ele, doar că nu mai colectează dovezi
  automat.

## Actualizare

Fiecare set are un upstream. Ca să iei ultima versiune a unuia, clonează repo-ul
sursă și copiază peste folderele din `.claude/skills/` — dar recitește secțiunea
"Note de instalare", pentru că redenumirile și descrierile ajustate se pierd.
