const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || `https://sukhodolskii.com${basePath}`;

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    trailingSlash: true,
    autoLastmod: false,
    exclude: ['/404', '/500'],
    outDir: './out',
};
