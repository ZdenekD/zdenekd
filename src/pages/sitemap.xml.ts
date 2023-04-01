import type {GetServerSideProps} from 'next';

const generateSiteMap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
        <url>
            <loc>https://zdenekd.cz/</loc>
            <xhtml:link rel="alternate" hreflang="en" href="https://zdenekd.com" />
        </url>
        <url>
            <loc>https://zdenekd.cz/projects</loc>
            <xhtml:link rel="alternate" hreflang="en" href="https://zdenekd.com/projects" />
        </url>
        <url>
            <loc>https://zdenekd.cz/contact</loc>
            <xhtml:link rel="alternate" hreflang="en" href="https://zdenekd.com/contact" />
        </url>
        <url>
            <loc>https://zdenekd.com/</loc>
            <xhtml:link rel="alternate" hreflang="cs" href="https://zdenekd.cz" />
        </url>

        <url>
            <loc>https://zdenekd.com/projects</loc>
            <xhtml:link rel="alternate" hreflang="cs" href="https://zdenekd.cz/projects" />
        </url>

        <url>
            <loc>https://zdenekd.com/contact</loc>
            <xhtml:link rel="alternate" hreflang="cs" href="https://zdenekd.cz/contact" />
        </url>
    </urlset>
`;

const Sitemap = () => ({});

export const getServerSideProps: GetServerSideProps = async ({res}) => {
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {props: {}};
};

export default Sitemap;
