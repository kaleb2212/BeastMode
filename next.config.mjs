/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable TypeScript type checking for production safety
    ignoreBuildErrors: false,
  },
  images: {
    // Disable image optimization for static export compatibility
    unoptimized: true,
  },
  devIndicators: false,
  // Static export for Plesk hosting without Node.js
  output: 'export',
  trailingSlash: true,
  experimental: {
  },
  // Disable server-side features for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : ''
}

export default nextConfig
