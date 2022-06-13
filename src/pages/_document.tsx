import {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preload" href="/font/titillium-web.woff2" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="/font/titillium-web_ext.woff2" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="/font/roboto-mono.woff2" as="font" crossOrigin="anonymous" />
                <link rel="apple-touch-icon" sizes="57x57" href='/favicons/apple-icon-57x57.png' />
                <link rel="apple-touch-icon" sizes="60x60" href='/favicons/apple-icon-60x60.png' />
                <link rel="apple-touch-icon" sizes="72x72" href='/favicons/apple-icon-72x72.png' />
                <link rel="apple-touch-icon" sizes="76x76" href='/favicons/apple-icon-76x76.png' />
                <link rel="apple-touch-icon" sizes="114x114" href='/favicons/apple-icon-114x114.png' />
                <link rel="apple-touch-icon" sizes="120x120" href='/favicons/apple-icon-120x120.png' />
                <link rel="apple-touch-icon" sizes="144x144" href='/favicons/apple-icon-144x144.png' />
                <link rel="apple-touch-icon" sizes="152x152" href='/favicons/apple-icon-152x152.png' />
                <link rel="apple-touch-icon" sizes="180x180" href='/favicons/apple-icon-180x180.png' />
                <link rel="icon" type="image/png" sizes="192x192" href='/favicons/android-icon-192x192.png' />
                <link rel="icon" type="image/png" sizes="32x32" href='/favicons/favicon-32x32.png' />
                <link rel="icon" type="image/png" sizes="96x96" href='/favicons/favicon-96x96.png' />
                <link rel="icon" type="image/png" sizes="16x16" href='/favicons/favicon-16x16.png' />
                <link rel="manifest" href='/favicons/manifest.json' />
                <meta name="apple-mobile-web-app-title" content="ZdenekD" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="application-name" content="ZdenekD" />
                <meta name="generator" content="human" />
                <script defer data-domain="zdenekd.cz" src="/js/script.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
