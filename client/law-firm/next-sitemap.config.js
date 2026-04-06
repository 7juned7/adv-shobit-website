module.exports = {
  siteUrl: "https://www.anuragnarainlegal.com",
  generateRobotsTxt: true,

  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,

  exclude: [
    "/admin",
    "/api/*",
  ],

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.anuragnarainlegal.com/sitemap.xml",
    ],
  },
};