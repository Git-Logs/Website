/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
   siteUrl: "https://artie.infinitydev.team/",
   generateRobotsTxt: true,
   robotsTxtOptions: {
      policies: [{ userAgent: "*", allow: "/" }],
   },
};
