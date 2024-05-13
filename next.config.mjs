/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  redirects: async () => {
    return [
      {
        source: '/cv',
        destination: '/Resume.pdf',
        permanent: true
      },
      {
        source: '/resume',
        destination: '/Resume.pdf',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  }
}

export default nextConfig
