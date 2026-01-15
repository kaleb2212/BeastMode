# Plesk Deployment Guide

## Changes Made for Plesk Compatibility

1. **Removed conflicting app.js**: The root-level `app.js` was conflicting with Plesk's Node.js hosting
2. **Created server.js**: Added a proper server file for Plesk to execute
3. **Updated package.json**: Changed start script to use `server.js`
4. **Added .htaccess**: Created Apache rewrite rules for proper routing

## Plesk Deployment Steps

1. **Upload Files**: Upload all files except `node_modules/` to your Plesk hosting
2. **Install Dependencies**: Run `npm install` in Plesk's Node.js manager
3. **Build Application**: Run `npm run build` in Plesk
4. **Set Environment Variables** (if needed):
   - `NODE_ENV=production`
   - `PORT` (use Plesk's assigned port)

## Common Issues & Solutions

- **Port Issues**: Make sure Plesk's Node.js app is configured to use the correct port
- **Memory Limits**: Increase memory limits in Plesk if build fails
- **File Permissions**: Ensure proper permissions on uploaded files

## Testing Locally

```bash
npm run build
npm start
```

The app should run on http://localhost:3000 (or configured port)