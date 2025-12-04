import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as fs from "fs";
import * as path from "path";
import { Request, Response } from "firebase-functions/v1";

admin.initializeApp();

// Types for our API responses
interface KnowledgeArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  path: string;
  lastModified: string;
  tags?: string[];
  category?: string;
}

// Helper function to read JSON files
function readJsonFile(filePath: string): any {
  try {
    const fullPath = path.join(__dirname, 'api', filePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`JSON file not found: ${fullPath}`);
      return null;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading JSON file ${filePath}:`, error);
    return null;
  }
}

// Main API function
export const api = functions.https.onRequest(async (req: Request, res: Response) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  try {
    const requestPath = req.path.replace('/api', '');
    
    if (requestPath === '/articles') {
      // Return all articles
      const articles = readJsonFile('articles.json');
      if (!articles) {
        res.status(500).json({ error: 'Articles data not available' });
        return;
      }
      res.json(articles);
    } else if (requestPath === '/categories') {
      // Return categories with articles
      const categories = readJsonFile('categories.json');
      if (!categories) {
        res.status(500).json({ error: 'Categories data not available' });
        return;
      }
      res.json(categories);
    } else if (requestPath.startsWith('/article/')) {
      // Return specific article
      const articleId = requestPath.replace('/article/', '');
      const article = readJsonFile(`articles/${articleId}.json`);
      if (!article) {
        res.status(404).json({ error: 'Article not found' });
        return;
      }
      res.json(article);
    } else if (requestPath.startsWith('/search')) {
      // Search functionality
      const query = req.query.q as string || '';
      if (!query) {
        res.json([]);
        return;
      }
      
      const articles = readJsonFile('articles.json');
      if (!articles) {
        res.status(500).json({ error: 'Articles data not available' });
        return;
      }
      
      const searchResults = articles
        .filter((article: KnowledgeArticle) => 
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.content.toLowerCase().includes(query.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(query.toLowerCase())
        )
        .map((article: KnowledgeArticle) => ({
          article,
          score: 1, // Simple scoring - could be enhanced
          matchedContent: article.excerpt
        }));
      
      res.json(searchResults);
    } else {
      res.status(404).json({ error: 'Endpoint not found' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
