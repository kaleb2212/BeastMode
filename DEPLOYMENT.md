# Plesk Deployment Guide - Static Export Version

## ✅ Changes Made for Static Export

- **Converted to Static Export**: No Node.js runtime needed on server
- **Created individual service pages**: Replaced dynamic routes with static pages
- **Converted robots.txt and sitemap.xml**: From dynamic routes to static files
- **Disabled image optimization**: For static export compatibility
- **Removed server-side features**: All pages are now static HTML

## 📦 Build Results

The `npm run build` command created an `out/` folder containing:
- `index.html` (homepage)
- Static HTML files for all pages
- `_next/` folder with optimized assets
- All images and static files
- `robots.txt` and `sitemap.xml`

## 🚀 Plesk Deployment Steps

### 1. Build Locally First
```bash
npm run build
```
This creates the `out/` folder with all static files.

### 2. Upload to Plesk
**Upload the ENTIRE `out/` folder contents** to your Plesk document root (`httpdocs/`).

**Important**: Upload the contents of `out/`, not the `out/` folder itself.

### 3. File Structure After Upload
Your Plesk document root should contain:
```
httpdocs/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _next/
│   └── (optimized assets)
├── services/
│   ├── index.html
│   ├── cctv-camera-installation/
│   ├── ict-support/
│   └── etc...
├── architecture/
├── brands/
└── (all other static files)
```

### 4. No Node.js Configuration Needed
- **No npm install required**
- **No Node.js version selection needed**
- **No environment variables needed**
- **No build process on server**

## 🎯 Benefits of Static Export

✅ **Faster loading**: Pre-rendered HTML
✅ **Better SEO**: Search engines can crawl all content
✅ **Lower server requirements**: No Node.js runtime
✅ **Easier deployment**: Just upload static files
✅ **Better caching**: Static files cache better

## 🧪 Testing Deployment

After upload, your site should work immediately at your domain. Test:
- Homepage loads
- All navigation works
- Service pages load correctly
- Images display properly
- Contact forms work (if any)

## 🔧 Troubleshooting

- **404 errors**: Ensure all files from `out/` were uploaded
- **Broken images**: Check file paths and permissions
- **Missing styles**: Ensure `_next/` folder was uploaded completely

## 🔄 Future Updates

When you make changes:
1. Run `npm run build` locally
2. Upload the new `out/` folder contents to Plesk
3. Site updates instantly

No server-side builds or deployments needed!