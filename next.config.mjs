/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the basePath matches your GitHub repository name
  basePath: '/focus',
};

export default nextConfig;
