/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mandave-hardware.s3.amazonaws.com', 'via.placeholder.com'],
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
}

module.exports = nextConfig
