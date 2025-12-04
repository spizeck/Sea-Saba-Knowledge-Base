# Knowledge Base API Setup

This API enables your Sea Saba Business App to integrate with the MkDocs knowledge base.

## Quick Setup

1. **Install dependencies**:
   ```bash
   # Install script dependencies
   cd scripts
   npm install
   
   # Install function dependencies  
   cd ../functions
   npm install
   ```

2. **Generate API files**:
   ```bash
   cd functions
   npm run generate-api
   ```

3. **Test locally** (optional):
   ```bash
   npm run serve
   ```

4. **Deploy to Firebase**:
   ```bash
   npm run deploy
   ```

## API Endpoints

Once deployed, your business app can access:

- `https://sea-saba-knowledge-base.web.app/api/articles` - All articles
- `https://sea-saba-knowledge-base.web.app/api/categories` - Structured categories
- `https://sea-saba-knowledge-base.web.app/api/article/:id` - Individual article
- `https://sea-saba-knowledge-base.web.app/api/search?q=query` - Search articles

## Business App Integration

Your business app's `knowledge.ts` service is already configured to call these endpoints. The API includes:

- ✅ CORS headers for cross-origin requests
- ✅ JSON responses matching your TypeScript types
- ✅ Search functionality
- ✅ Category-based navigation
- ✅ Error handling

## Updating Content

When you update your MkDocs content:

1. Edit your markdown files as usual
2. Run `npm run generate-api` to update the API JSON files
3. Deploy with `npm run deploy`

The API automatically includes all articles from your `mkdocs.yml` navigation.

## Security Notes

- API is publicly accessible (matches your public knowledge base)
- CORS allows all origins for business app integration
- Consider adding Firebase App Check for production if needed

## Troubleshooting

If you get "Articles data not available" errors:
1. Run `npm run generate-api` to recreate JSON files
2. Check that `functions/public/api/` contains the generated files
3. Verify Firebase Functions deployed successfully
