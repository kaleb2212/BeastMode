# Plesk Node.js Setup Instructions

## You're Currently In: Node.js Tab
Based on your DOM path, you're in the right place: Plesk → Node.js settings.

## What You Need to Do:

### 1. Enable Node.js Version
In the Node.js version dropdown (where it currently shows "npm"), select:
- **20.x.x** (recommended for Next.js 16)
- Or **22.x.x** if available

### 2. Configure Application Settings
Once Node.js is enabled, you'll see these fields:
- **Application Root**: `/httpdocs`
- **Application Startup File**: `server.js`
- **Application URL**: `http://yourdomain.com`

### 3. Environment Variables
Add these variables:
- `NODE_ENV` = `production`
- `PORT` = (leave empty - Plesk assigns automatically)

### 4. Apply Changes
- Click **"Apply"** or **"OK"**
- Wait for the page to refresh
- The npm menu should now show Node.js is enabled

### 5. Test Node.js
After enabling, try:
```
node --version
node test-node.js
```

## If Dropdown Shows "Disabled" or No Versions:
This means Node.js isn't installed on your Plesk server. Contact your hosting provider to:
- Install Node.js extensions
- Enable Node.js for your account