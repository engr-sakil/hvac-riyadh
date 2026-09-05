/** @type {import('next').NextConfig} */

// Set NEXT_PUBLIC_BASE_PATH when the site is served from a sub-path rather than a
// domain root — GitHub Pages project sites are published at /<repo>/. Left empty
// for local dev and any root deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Static HTML export — deployable to any host, no Node server required.
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    // next/image optimisation is unavailable in static export; images are
    // pre-optimised to WebP at build time by scripts/optimize-images.mjs.
    unoptimized: true,
  },
};

export default nextConfig;
