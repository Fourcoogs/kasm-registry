/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Fortified Desk Attempt',
    description: 'My first attempt at creating a custom workspace registry in Kasm.',
    icon: 'http://fortifieddesk.com/wp-content/uploads/2024/04/cropped-Lock-Transparent-Bkgd2.png',
    listUrl: 'https://fourcoogs.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
