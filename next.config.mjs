/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use '/focus' only in production (for GitHub Pages), but use root in development for easier access.
  basePath: process.env.NODE_ENV === 'production' ? '/focus' : '',
};

export default nextConfig;
