// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: "export",
  images: {
    unoptimized: true, // Add this to avoid the Image Optimization error
  },
};

module.exports = withMDX(nextConfig);
