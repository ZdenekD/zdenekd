/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const styles = require('./next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = styles({
    cssModules: true,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
    i18n: {
        locales: ['cs', 'en'],
        defaultLocale: 'cs',
        localeDetection: false,
        domains: [
            {
                domain: 'zdenekd.cz',
                defaultLocale: 'cs',
            }, {
                domain: 'zdenekd.com',
                defaultLocale: 'en',
            },
        ],
    },
    poweredByHeader: false,
    future: {webpack5: true},
});
