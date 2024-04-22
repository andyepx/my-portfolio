export default async function sitemap() {
    let routes = ['', '/blog', '/case-studies'].map((route) => ({
        url: `https://andyepifani.com${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
