/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://connorwfloyd.dev',
    generateRobotsTxt: true,           // (optional) generate robots.txt
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    // exclude: ['/secret-page'],       // (optional) exclude specific routes
  };
  