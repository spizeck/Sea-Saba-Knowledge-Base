# AI Instructions — Sea Saba Knowledge Base

This file provides context and rules for AI coding assistants (Windsurf/Cascade, GitHub Copilot, etc.) working on this codebase.

## Project Overview

This is an internal knowledge base for Sea Saba, a scuba diving operation on Saba (Caribbean Netherlands). It serves two purposes:

1. **Documentation site** — MkDocs (Material theme) generates a static site from Markdown files in `docs/`, deployed to Firebase Hosting.
2. **JSON API** — Firebase Functions (TypeScript) serves knowledge base content as JSON for the Sea Saba Business App.

## Architecture

- **Content** lives in `docs/` as Markdown files, organized by category.
- **Navigation** is defined in `mkdocs.yml` under the `nav` key. Every new doc must be added here.
- **API generation** is handled by `scripts/generate-api.js`, which parses `mkdocs.yml` + Markdown files and outputs JSON to `functions/src/api/` (gitignored).
- **Firebase Functions** in `functions/src/index.ts` serve the generated JSON via HTTP endpoints.
- **CI/CD** via GitHub Actions: PRs get preview deploys, merges to `main` deploy to production.

## Content Structure

```
docs/
  index.md                          # Homepage / Welcome
  SOP-FORMATTING-GUIDE.md           # Formatting standards reference
  BusinessApp/                      # Business App user guides (9 files)
  Checkfront/                       # Checkfront booking system SOP
  DiveOperations/                   # Dive operations SOPs and guides (10 files)
    MorningRoutine.md
    BoatBriefingOverview.md
    DiveBriefingOverview.md
    DiverSupportLevelPolicy.md      # Diver support level classification SOP
    UnplannedDecompression.md       # Accidental NDL overstay SOP
    PackingLists.md
    SurfaceSupport.md
    RinsingGear.md
    DiveLogApp.md
    MarineParkRules.md
  Equipment/                        # Equipment SOPs (5 files)
  Freight/                          # Freight shipping SOPs (2 files)
  GeneralInformation/               # General reference guides (3 files)
  RetailOperations/                 # Retail SOPs and flowcharts (7 files)
  Images/                           # Images organized by topic subfolder
  files/                            # Downloadable PDFs and attachments
```

## Key Rules

### Content (Markdown files in `docs/`)

- **Two document types exist**: SOPs and Guides. See `docs/SOP-FORMATTING-GUIDE.md` for the full standard.
- **SOPs** must follow the structure: Title → Purpose → Scope → Procedure → Accountability.
- **Guides** must have: Title → Introduction → Organized sections with clear headings.
- **Titles** use `# [Title]` format — no "SOP:" prefix, no "Guide:" prefix.
- **Admonitions** (`!!! danger`, `!!! warning`, `!!! note`) are used for safety-critical and important information. Blockquotes (`>`) are used for general tips and non-critical notes.
- **Images** go in `docs/Images/` organized by topic subfolder (e.g., `docs/Images/Compressors/`).
- **Downloadable files** (PDFs, etc.) go in `docs/files/`.
- **Do not edit** files in `functions/src/api/` — they are auto-generated and gitignored.
- **Do not remove or weaken** safety warnings without explicit direction from the user.

### Code (TypeScript / JavaScript)

- Firebase Functions use **TypeScript** with Node.js 20.
- Build scripts in `scripts/` use **plain JavaScript** (CommonJS). Do not convert them to ESM.
- Follow existing code style. ESLint is configured in `functions/.eslintrc.js`.
- The API is a single `onRequest` function handling routing internally (not Express).
- CORS is set to allow all origins (public knowledge base).
- **`marked` in `scripts/package.json` must stay on `^11.x`** — v12+ dropped CommonJS support and will break `generate-api.js`.

### Configuration

- `mkdocs.yml` — Site config, navigation, theme, plugins, and Markdown extensions.
- `firebase.json` — Hosting (serves `site/` directory) and Functions config. API routes rewrite to the `api` function.
- `.firebaserc` — Firebase project ID: `sea-saba-knowledge-base`.
- `requirements.txt` — Python dependencies for MkDocs. Pin exact versions for reproducible builds.

### Deployment

- **Never push directly to `main`** — always use pull requests.
- The GitHub Actions workflow builds MkDocs and deploys to Firebase Hosting automatically on merge.
- Firebase Functions are deployed separately via `cd functions && npm run deploy`.
- After changing Markdown content, run `npm run generate-api` (from `functions/`) to update the API JSON before deploying functions.
- MkDocs builds output to `site/`, which is what Firebase Hosting serves.

## File Naming Conventions

- Markdown docs: **PascalCase** (e.g., `CompressorOperation.md`, `MorningRoutine.md`)
- Image folders: **PascalCase** topic names under `docs/Images/`
- TypeScript/JavaScript: **camelCase** for variables/functions, **PascalCase** for interfaces/types
- No spaces or hyphens in Markdown filenames — use PascalCase instead

## MkDocs-Specific Markdown Features

The following extensions are enabled and can be used in content:

- **Admonitions**: `!!! note`, `!!! warning`, `!!! danger`, `!!! tip` — use `??? note` (with `pymdownx.details`) for collapsible blocks
- **Mermaid diagrams**: Fenced code blocks with ` ```mermaid ` via `mkdocs-mermaid2-plugin`
- **Superfences**: Fenced code blocks with language syntax highlighting
- **Attribute lists**: Add CSS classes/IDs to elements with `{ .class #id }`

> **Note on mkdocs-material**: As of early 2026, mkdocs-material has entered maintenance mode. The team is focused on a next-gen tool called Zensical. Security and critical bug fixes will be provided for 12 months. No breaking changes are expected for this project's usage.

## Admonition Usage Guide

| Admonition | When to Use |
|---|---|
| `!!! danger` | Immediate safety hazard — risk of injury, death, or major equipment damage |
| `!!! warning` | Important caution — could cause problems if ignored |
| `!!! note` | Important contextual information staff should be aware of |
| `>` blockquote | Tips, suggestions, reminders, and non-critical notes |

## When Editing Content

1. Follow the formatting standards in `docs/SOP-FORMATTING-GUIDE.md`.
2. Preserve the voice and tone: professional but approachable, written for dive shop staff.
3. Safety information must be prominent — use admonitions, never bury it in prose.
4. Cross-link related documents where helpful.
5. Add new files to `mkdocs.yml` navigation under the appropriate section.
6. Do not remove or weaken safety warnings without explicit direction.
7. Do not add or remove comments in code files unless asked.
8. The `docs/SOP-FORMATTING-GUIDE.md` is the authoritative reference — consult it before creating new documents.
