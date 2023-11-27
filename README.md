# Contributing to the Sea Saba Knowledge Base

Thank you for your interest in contributing to the Sea Saba Knowledge Base. This document provides guidelines and instructions for contributing content through GitHub.

## Getting Started

1. **Create a GitHub Account**: If you don't already have a GitHub account, [sign up here](https://github.com/join).

2. **Familiarize Yourself with GitHub**: If you're new to GitHub, take some time to understand the basics of Git and GitHub. [GitHub's Quickstart Guide](https://docs.github.com/en/get-started/quickstart) is a great resource.

## Making Contributions

### Editing Content

1. **Navigate to the Repository**: Go to the [Sea Saba Knowledge Base repository](https://github.com/spizeck/Sea-Saba-Knowledge-Base).

2. **Find the File You Want to Edit**: The content is organized in Markdown files. Navigate to the specific file you want to update. The markdown files are located in the `docs` folder.

3. **Edit the File**:
   - Click the pencil icon (Edit this file) on the top right of the file view.
   - Make your changes directly in the GitHub editor.
   - You can use the `Preview` tab to check your changes.

### Creating a Pull Request

After editing the content:

1. **Scroll Down to 'Propose Changes'**:
   - Add a brief but descriptive title for your changes.
   - Optionally, add a more detailed description.

2. **Click 'Propose Changes'**: This will create a new branch in the repository and take you to the 'Open a pull request' page.

3. **Open a Pull Request**:
   - Review your changes.
   - Click 'Create pull request'.
   - This allows repository maintainers to review your changes before merging them into the main content.

## Adding New Content

### Adding a New Markdown File

1. **Create a New File**:
   - In the appropriate directory within the `docs` folder, click 'Add file' and then 'Create new file'.
   - For example, to add a new file in the Equipment section: navigate to `docs/Equipment/`, then create your file (e.g., `new-equipment-guide.md`).

2. **Write Your Content**:
   - Use Markdown to write your content. If you’re new to Markdown, here's a [basic guide](https://www.markdownguide.org/basic-syntax/).

3. **Save and Propose the New File**:
   - Name your file at the top (ensure it ends with `.md`).
   - Scroll down, add a commit message, and propose the new file.

### Linking the New File in `mkdocs.yml`

1. **Edit `mkdocs.yml`**:
   - Navigate to the root of the repository and open `mkdocs.yml`.
   - Click the pencil icon to edit.

2. **Add Your New File to the Navigation**:
   - In the `nav` section, add a link to your new Markdown file under the appropriate category.
   - Follow the existing format. For example:
     ```yaml
     - Equipment:
       - New Equipment Guide: Equipment/new-equipment-guide.md
     ```

3. **Propose the Change**:
   - Scroll down, add a commit message, and propose the change.

### Adding Images

1. **Place Images in the Correct Directory**:
   - Images should be placed in an `Images` folder within the relevant section.
   - For example, for equipment-related images, use `docs/Equipment/Images/`.

2. **Add Images to Your Markdown File**:
   - Use the Markdown syntax to add images. For example:
     ```markdown
     ![Alt text for the image](Equipment/Images/your-image.jpg)
     ```
   - Replace `your-image.jpg` with the name of your image file.

3. **Commit and Propose the Changes**:
   - After adding images to the `Images` folder and referencing them in your Markdown file, commit and propose these changes as described earlier.

## Creating Pull Requests for New Content

After adding new content or making changes:

1. **Follow the Same Process**: As with editing content, scroll down to 'Propose changes', add a descriptive title and description, and create a pull request.

2. **Review and Approval**:
   - The repository maintainers will review your pull request.
   - If changes are approved, they will be merged into the main content.

Remember, quality and clarity are key in your contributions. If you’re adding new sections or significant content, consider discussing it with the team or the repository maintainers first.


## Best Practices for Contributions

- **Clear and Concise Writing**: Keep your contributions clear, concise, and factual.
- **Check Grammar and Spelling**: Ensure your text is free of errors.
- **Stick to the Format**: Follow the existing structure and formatting of the documents.
- **Be Respectful and Constructive**: When providing feedback on others' contributions, be respectful and constructive.

## Writing in Markdown

Markdown is a lightweight and easy-to-use syntax for styling text on the web. If you are not familiar with Markdown, here is a resource to get you started:

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/): A comprehensive guide to Markdown syntax, covering everything from basic to advanced usage.

We recommend familiarizing yourself with the basics of Markdown to ensure your contributions are formatted correctly.

## Need Help?

If you have any questions or need assistance with the contribution process, please feel free to reach out to the repository maintainers.

Thank you for helping improve the Sea Saba Knowledge Base!