# Contributing to the Sea Saba Knowledge Base

Thank you for your interest in contributing to the Sea Saba Knowledge Base. This document provides guidelines and instructions for contributing content through GitHub.

## Getting Started

1. **Create a GitHub Account**: If you don't already have one, [sign up here](https://github.com/join).
2. **Familiarize Yourself with GitHub**: If you're new to GitHub, [GitHub's Quickstart Guide](https://docs.github.com/en/get-started/quickstart) is a great resource.
3. **Read the Formatting Guide**: Before writing content, review the [SOP Formatting Guide](docs/SOP-FORMATTING-GUIDE.md) for standards on document structure and style.

## Editing Existing Content

1. **Navigate to the Repository**: Go to the [Sea Saba Knowledge Base repository](https://github.com/spizeck/Sea-Saba-Knowledge-Base).
2. **Find the File**: Content is organized as Markdown files in the `docs/` folder. Navigate to the file you want to update.
3. **Edit the File**:
    - Click the pencil icon (Edit this file) at the top right of the file view.
    - Make your changes directly in the GitHub editor.
    - Use the `Preview` tab to check your changes.
4. **Propose Changes**:
    - Scroll down and add a brief but descriptive title for your changes.
    - Optionally, add a more detailed description.
    - Click **Propose Changes** to create a branch and open a pull request.

## Adding New Content

### Creating a New Markdown File

1. In the appropriate directory within `docs/`, click **Add file** → **Create new file**.
2. Name your file with a descriptive PascalCase name ending in `.md` (e.g., `NewEquipmentGuide.md`).
3. Write your content following the [SOP Formatting Guide](docs/SOP-FORMATTING-GUIDE.md).
4. Scroll down, add a commit message, and propose the new file.

### Adding the File to Navigation

After creating a new file, it must be added to `mkdocs.yml` to appear in the site navigation:

1. Open `mkdocs.yml` in the repository root.
2. Add your file under the appropriate category in the `nav` section:
   ```yaml
   - Equipment:
     - New Equipment Guide: Equipment/NewEquipmentGuide.md
   ```
3. Propose the change with a descriptive commit message.

### Adding Images

1. Place images in the `docs/Images/` folder, organized by topic subfolder (e.g., `docs/Images/Compressors/`).
2. Reference images in your Markdown file:
   ```markdown
   ![Descriptive alt text](../Images/Compressors/your-image.jpg)
   ```
3. Commit and propose the changes.

## Pull Request Process

1. After proposing changes, a pull request (PR) is automatically created.
2. Repository maintainers will review your PR.
3. If approved, changes are merged into `main` and automatically deployed to the live site.

## Best Practices

- **Follow the formatting guide**: Use the [SOP Formatting Guide](docs/SOP-FORMATTING-GUIDE.md) for all new documents.
- **Clear and concise writing**: Keep contributions factual and to the point.
- **Check grammar and spelling**: Ensure your text is free of errors.
- **Stick to the format**: Follow the existing structure and formatting conventions.
- **Discuss major changes first**: If adding new sections or significant content, discuss with the team or repository maintainers before starting.

## Writing in Markdown

Markdown is a lightweight syntax for styling text. If you're new to Markdown:

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) — Comprehensive guide from basics to advanced usage.
- [MkDocs Material Reference](https://squidfundamentals.github.io/mkdocs-material/reference/) — Material theme-specific features like admonitions.

## Need Help?

If you have questions or need assistance, reach out to the repository maintainers.
