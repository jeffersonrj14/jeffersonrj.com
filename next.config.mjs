/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  redirects: async () => {
    return [
      {
        source: '/cv',
        destination: '/resume.pdf',
        permanent: true
      },
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true
      }
    ]
  }
}

export default nextConfig
