const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const { marked } = require('marked');

const DOCS_DIR = path.join(__dirname, '../docs');
const OUTPUT_DIR = path.join(__dirname, '../functions/src/api');
const MKDOCS_CONFIG = path.join(__dirname, '../mkdocs.yml');

function createExcerpt(content, maxLength = 150) {
  const cleanContent = content.replace(/[#*`_~]/g, '').replace(/\n+/g, ' ').trim();
  if (cleanContent.length <= maxLength) return cleanContent;
  
  const truncated = cleanContent.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

function parseMarkdownFile(filePath) {
  try {
    const markdown = fs.readFileSync(filePath, 'utf8');
    const htmlContent = marked(markdown);
    const excerpt = createExcerpt(markdown);
    
    return { content: htmlContent, excerpt };
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    return { content: '', excerpt: 'Content not available' };
  }
}

function getFileStats(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return { lastModified: stats.mtime.toISOString() };
  } catch (error) {
    return { lastModified: new Date().toISOString() };
  }
}

function parseArticleFromPath(title, filePath, category) {
  try {
    const fullPath = path.join(DOCS_DIR, filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }
    
    const { content, excerpt } = parseMarkdownFile(fullPath);
    const { lastModified } = getFileStats(fullPath);
    const articlePath = filePath.replace('.md', '').replace(/\\/g, '/');
    
    return {
      id: articlePath,
      title,
      content,
      excerpt,
      path: `/${articlePath}`,
      lastModified,
      category
    };
  } catch (error) {
    console.error(`Error parsing article ${title}:`, error);
    return null;
  }
}

function parseMkDocsNav(navConfig) {
  const categories = [];
  const allArticles = [];
  
  // navConfig is an array of objects
  for (const item of navConfig) {
    for (const [key, value] of Object.entries(item)) {
      if (typeof value === 'string') {
        // Direct file link (like "Home: index.md")
        const article = parseArticleFromPath(key, value, 'General');
        if (article) {
          categories.push({
            name: key,
            path: article.path,
            articles: [article]
          });
          allArticles.push(article);
        }
      } else if (Array.isArray(value)) {
        // Category with multiple articles
        const articles = [];
        const categoryName = key;
        
        for (const subItem of value) {
          if (typeof subItem === 'object') {
            for (const [itemKey, itemValue] of Object.entries(subItem)) {
              if (typeof itemValue === 'string') {
                const article = parseArticleFromPath(itemKey, itemValue, categoryName);
                if (article) {
                  articles.push(article);
                  allArticles.push(article);
                }
              }
            }
          }
        }
        
        if (articles.length > 0) {
          categories.push({
            name: categoryName,
            path: `/${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
            articles
          });
        }
      }
    }
  }
  
  return { categories, allArticles };
}

function main() {
  console.log('Generating API files...');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Read MkDocs configuration
  const mkDocsConfig = yaml.parse(fs.readFileSync(MKDOCS_CONFIG, 'utf8'));
  console.log('MkDocs config:', JSON.stringify(mkDocsConfig.nav, null, 2));
  
  const { categories, allArticles } = parseMkDocsNav(mkDocsConfig.nav);
  
  // Write articles.json
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'articles.json'),
    JSON.stringify(allArticles, null, 2)
  );
  
  // Write categories.json
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'categories.json'),
    JSON.stringify(categories, null, 2)
  );
  
  // Create individual article files
  const articlesDir = path.join(OUTPUT_DIR, 'articles');
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }
  
  for (const article of allArticles) {
    // Replace slashes with dashes to avoid nested directories
    const fileName = article.id.replace(/\//g, '-');
    fs.writeFileSync(
      path.join(articlesDir, `${fileName}.json`),
      JSON.stringify(article, null, 2)
    );
  }
  
  console.log(`Generated ${allArticles.length} articles and ${categories.length} categories`);
  console.log('API files written to:', OUTPUT_DIR);
}

if (require.main === module) {
  main();
}

module.exports = { main };
