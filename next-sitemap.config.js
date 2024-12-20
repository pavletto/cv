// next-sitemap.config.js
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/_next/', '/static/'],
            },
            {
                userAgent: '*',
                allow: ['/'],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    },
    exclude: ['/404'],
    outDir: './out',
};
