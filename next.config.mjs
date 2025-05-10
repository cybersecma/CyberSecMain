/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Make sure basePath is empty for custom domain with A records
  basePath: '',
  // Set trailingSlash to true for better compatibility with GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add assetPrefix to ensure all assets are loaded correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
};

export default nextConfig;
