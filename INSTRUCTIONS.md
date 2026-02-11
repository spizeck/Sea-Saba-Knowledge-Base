# AI Instructions — Sea Saba Knowledge Base

This file provides context and rules for AI coding assistants (Windsurf/Cascade, GitHub Copilot, etc.) working on this codebase.

## Project Overview

This is an internal knowledge base for Sea Saba, a scuba diving operation on Saba (Caribbean Netherlands). It serves two purposes:

1. **Documentation site** — MkDocs (Material theme) generates a static site from Markdown files in `docs/`, deployed to Firebase Hosting.
2. **JSON API** — Firebase Functions (TypeScript) serves knowledge base content as JSON for the Sea Saba Business App.

## Architecture

- **Content** lives in `docs/` as Markdown files, organized by category (DiveOperations, Equipment, RetailOperations, etc.).
- **Navigation** is defined in `mkdocs.yml` under the `nav` key. Every new doc must be added here.
- **API generation** is handled by `scripts/generate-api.js`, which parses `mkdocs.yml` + Markdown files and outputs JSON to `functions/src/api/` (gitignored).
- **Firebase Functions** in `functions/src/index.ts` serve the generated JSON via HTTP endpoints.
- **CI/CD** via GitHub Actions: PRs get preview deploys, merges to `main` deploy to production.

## Key Rules

### Content (Markdown files in `docs/`)

- **Two document types exist**: SOPs and Guides. See `docs/SOP-FORMATTING-GUIDE.md` for the full standard.
- **SOPs** must follow the structure: Title → Purpose → Scope → Procedure → Accountability.
- **Guides** must have: Title → Introduction → Organized sections with clear headings.
- **Titles** use `# [Title]` format — no "SOP:" prefix.
- **Admonitions** (`!!! warning`, `!!! danger`) are used for safety-critical and important warnings. Blockquotes (`>`) are used for general tips and notes.
- **Images** go in `docs/Images/` organized by topic subfolder.
- **Downloadable files** (PDFs, etc.) go in `docs/files/`.
- **Do not edit** files in `functions/src/api/` — they are auto-generated and gitignored.

### Code (TypeScript / JavaScript)

- Firebase Functions use **TypeScript** with Node.js 20.
- Build scripts in `scripts/` use **plain JavaScript** (CommonJS).
- Follow existing code style. ESLint is configured in `functions/.eslintrc.js`.
- The API is a single `onRequest` function handling routing internally (not Express).
- CORS is set to allow all origins (public knowledge base).

### Configuration

- `mkdocs.yml` — Site config, navigation, theme, plugins, and Markdown extensions.
- `firebase.json` — Hosting (serves `site/` directory) and Functions config. API routes rewrite to the `api` function.
- `.firebaserc` — Firebase project ID: `sea-saba-knowledge-base`.
- `requirements.txt` — Python dependencies for MkDocs. Pin versions.

### Deployment

- **Never push directly to `main`** — always use pull requests.
- The GitHub Actions workflow builds MkDocs and deploys to Firebase Hosting automatically.
- Firebase Functions are deployed separately via `cd functions && npm run deploy`.
- After changing Markdown content, run `npm run generate-api` (from `functions/`) to update the API JSON before deploying functions.

## File Naming Conventions

- Markdown docs: **PascalCase** (e.g., `CompressorOperation.md`, `MorningRoutine.md`)
- Image folders: **PascalCase** topic names under `docs/Images/`
- TypeScript/JavaScript: **camelCase** for variables/functions, **PascalCase** for interfaces/types

## MkDocs-Specific Markdown Features

The following extensions are enabled and can be used in content:

- **Admonitions**: `!!! note`, `!!! warning`, `!!! danger`, `!!! tip` (with `pymdownx.details` for collapsible)
- **Mermaid diagrams**: Via `mkdocs-mermaid2-plugin`
- **Superfences**: Fenced code blocks with language highlighting
- **Attribute lists**: Add CSS classes/IDs to elements

## When Editing Content

1. Follow the formatting standards in `docs/SOP-FORMATTING-GUIDE.md`.
2. Preserve the voice and tone: professional but approachable, written for dive shop staff.
3. Keep safety information prominent using admonitions.
4. Cross-link related documents where helpful.
5. Add new files to `mkdocs.yml` navigation.
6. Do not remove or weaken safety warnings without explicit direction.
