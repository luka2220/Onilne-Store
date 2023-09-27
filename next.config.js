/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Adding domain where images for products are coming from
  images: {
    domains: ["epic-projects.nyc3.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
