# Plesk Node.js Troubleshooting

## Current Issue: `node: command not found`

This error occurs when Plesk's Node.js version isn't properly configured.

## Required Plesk Settings:

### 1. Node.js Version Selection
- Go to **Websites & Domains** → [your domain] → **Node.js**
- **Node.js version**: Select **20.x.x** or **22.x.x**
- Click **Enable Node.js**

### 2. Application Configuration
- **Application Root**: `/httpdocs` (or your document root)
- **Application Startup File**: `server.js`
- **Application URL**: `http://yourdomain.com/`

### 3. Environment Variables
Add these environment variables:
- `NODE_ENV` = `production`
- `PORT` = (leave empty, Plesk will assign automatically)

### 4. npm Commands
After configuring Node.js version, run:
1. `npm install`
2. `npm run build`

## If Still Failing:

### Check Node.js Logs
- In Plesk Node.js settings, check the **Logs** tab
- Look for specific error messages

### Verify File Structure
Ensure these files exist in your document root:
- `package.json`
- `server.js`
- `next.config.mjs`
- `.htaccess`

### Restart Application
- After changing settings, click **Restart App** in Node.js settings

## Alternative: Use Specific Node Version
If version selection doesn't work, try:
- Node.js version: **20.11.1** (LTS)
- Or **22.0.0** (if available)

## Emergency Fix: Manual Node Path
If Plesk still can't find node, try adding this to Environment Variables:
- `PATH` = `/opt/plesk/node/20/bin:/opt/plesk/node/22/bin:$PATH`

## Check These First:
1. **Domain Status**: Make sure your domain is active and not suspended
2. **Disk Space**: Ensure you have enough disk space for node_modules
3. **File Permissions**: Check that all files were uploaded with correct permissions
4. **Application Mode**: Make sure you're not in "development" mode