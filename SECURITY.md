# Security Policy

## About This Repository

This is an internal knowledge base for Sea Saba dive operations. The repository contains staff SOPs, operational guides, and a Firebase-hosted documentation site with a JSON API. It does not store credentials, customer data, or payment information.

## Supported Versions

Only the current `main` branch is actively maintained. There are no versioned releases.

## Dependency Updates

Dependency updates are handled automatically via **Dependabot** (see `.github/dependabot.yml`). Weekly PRs are opened for:

- Python packages (`requirements.txt`)
- Node.js packages (`functions/package.json`, `scripts/package.json`)
- GitHub Actions versions

## Reporting a Vulnerability

This repository does not expose a public-facing attack surface beyond a read-only Firebase Hosting site and a read-only JSON API.

If you discover a security concern — including exposed secrets, misconfigured Firebase rules, or a vulnerable dependency — please report it directly to the repository owner via GitHub rather than opening a public issue.

Do not include sensitive details in public issues or pull request descriptions.
