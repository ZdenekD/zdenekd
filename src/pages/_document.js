import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import config from '../data/config';

class Doc extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Html lang="cs">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                    {process.env.NODE_ENV === 'production' && (
                        <>
                            <link rel="preconnect" href={config.cloudfront} crossOrigin="true" />
                            <link rel="dns-prefetch" href={config.cloudfront} />
                        </>
                    )}
                    <link rel="apple-touch-icon" sizes="57x57" href={`${config.cloudfront}/apple-icon-57x57.png`} />
                    <link rel="apple-touch-icon" sizes="60x60" href={`${config.cloudfront}/apple-icon-60x60.png`} />
                    <link rel="apple-touch-icon" sizes="72x72" href={`${config.cloudfront}/apple-icon-72x72.png`} />
                    <link rel="apple-touch-icon" sizes="76x76" href={`${config.cloudfront}/apple-icon-76x76.png`} />
                    <link rel="apple-touch-icon" sizes="114x114" href={`${config.cloudfront}/apple-icon-114x114.png`} />
                    <link rel="apple-touch-icon" sizes="120x120" href={`${config.cloudfront}/apple-icon-120x120.png`} />
                    <link rel="apple-touch-icon" sizes="144x144" href={`${config.cloudfront}/apple-icon-144x144.png`} />
                    <link rel="apple-touch-icon" sizes="152x152" href={`${config.cloudfront}/apple-icon-152x152.png`} />
                    <link rel="apple-touch-icon" sizes="180x180" href={`${config.cloudfront}/apple-icon-180x180.png`} />
                    <link rel="icon" type="image/png" sizes="192x192" href={`${config.cloudfront}/android-icon-192x192.png`} />
                    <link rel="icon" type="image/png" sizes="32x32" href={`${config.cloudfront}/favicon-32x32.png`} />
                    <link rel="icon" type="image/png" sizes="96x96" href={`${config.cloudfront}/favicon-96x96.png`} />
                    <link rel="icon" type="image/png" sizes="16x16" href={`${config.cloudfront}/favicon-16x16.png`} />
                    <link rel="manifest" href={`${config.cloudfront}/manifest.json`} />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content={`${config.cloudfront}/ms-icon-144x144.png`} />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700|Roboto+Mono&display=swap&subset=latin-ext"
                        rel="stylesheet"
                        crossOrigin="anonymous"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18074847-11" crossOrigin="anonymous" />
                    <script dangerouslySetInnerHTML={{__html: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'UA-18074847-11\', {page_path: window.location.pathname});'}} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
