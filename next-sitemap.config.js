// next-sitemap.config.js
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/cv/_next/', '/cv/static/'],
            },
            {
                userAgent: '*',
                allow: ['/cv/'],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    },
    exclude: ['/404'],
};
