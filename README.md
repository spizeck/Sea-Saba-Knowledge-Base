# Sea Saba Knowledge Base

An internal knowledge base for [Sea Saba](https://seasaba.com) dive operations, built with MkDocs and hosted on Firebase. Provides SOPs, guides, and reference material for staff across diving operations, retail, equipment maintenance, freight, and more.

**Live site:** [sea-saba-knowledge-base.web.app](https://sea-saba-knowledge-base.web.app)

## Tech Stack

- **Documentation:** [MkDocs](https://www.mkdocs.org/) with [Material for MkDocs](https://squidfundamentals.github.io/mkdocs-material/) theme
- **Hosting:** [Firebase Hosting](https://firebase.google.com/docs/hosting)
- **API:** [Firebase Functions](https://firebase.google.com/docs/functions) (TypeScript) — serves knowledge base content as JSON for the Sea Saba Business App
- **CI/CD:** GitHub Actions — auto-builds and deploys on merge to `main`, with preview deploys on PRs
- **Markdown Extensions:** Admonitions, Mermaid diagrams, superfences, attribute lists

## Project Structure

```
Sea-Saba-Knowledge-Base/
├── docs/                    # Markdown content (SOPs, guides, references)
│   ├── BusinessApp/         # Business App documentation
│   ├── Checkfront/          # Booking system docs
│   ├── DiveOperations/      # Dive crew procedures
│   ├── Equipment/           # Equipment SOPs & maintenance
│   ├── Freight/             # Shipping procedures
│   ├── GeneralInformation/  # Company-wide policies
│   ├── RetailOperations/    # Retail shop procedures
│   ├── Images/              # Shared images
│   ├── files/               # Downloadable PDFs and files
│   └── index.md             # Homepage
├── functions/               # Firebase Functions (TypeScript API)
│   └── src/
│       ├── index.ts         # API endpoints
│       └── api/             # Auto-generated JSON (gitignored)
├── scripts/
│   └── generate-api.js      # Parses mkdocs.yml + markdown → JSON for API
├── .github/workflows/       # CI/CD pipelines
├── mkdocs.yml               # MkDocs configuration & navigation
├── firebase.json            # Firebase hosting & functions config
├── requirements.txt         # Python dependencies (MkDocs)
└── README.md                # This file
```

## Local Development

### Prerequisites

- Python 3.x
- Node.js 20+
- Firebase CLI (`npm install -g firebase-tools`)

### MkDocs (Documentation Site)

```bash
# Install Python dependencies
pip install -r requirements.txt

# Serve locally with hot reload
mkdocs serve
```

The site will be available at `http://127.0.0.1:8000`.

### Firebase Functions (API)

```bash
# Install dependencies
cd functions && npm install
cd ../scripts && npm install

# Generate API JSON files from markdown
cd ../functions && npm run generate-api

# Test locally with Firebase emulator
npm run serve
```

## Deployment

Deployment is automated via GitHub Actions:

- **Pull Requests** → Preview deploy to a temporary Firebase channel
- **Merge to `main`** → Production deploy to [sea-saba-knowledge-base.web.app](https://sea-saba-knowledge-base.web.app)

### Manual Deployment

```bash
# Build the MkDocs site
mkdocs build

# Deploy hosting only
firebase deploy --only hosting

# Deploy functions (API) only
cd functions && npm run deploy

# Deploy everything
firebase deploy
```

## API

The Firebase Functions API serves knowledge base content as JSON for the Sea Saba Business App. See [README-API.md](README-API.md) for full API documentation including endpoints, setup, and integration details.

### Endpoints

| Endpoint | Description |
|---|---|
| `/api/articles` | All articles |
| `/api/categories` | Structured categories |
| `/api/article/:id` | Individual article |
| `/api/search?q=query` | Search articles |
| `/api/health` | Health check |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding and editing content.

## Key Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md) — How to contribute content
- [README-API.md](README-API.md) — API setup and integration
- [INSTRUCTIONS.md](INSTRUCTIONS.md) — AI coding assistant instructions
- [docs/SOP-FORMATTING-GUIDE.md](docs/SOP-FORMATTING-GUIDE.md) — Standards for writing SOPs and guides

## License

See [license.md](license.md) for details.