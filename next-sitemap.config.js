module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jeffersonrj.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
