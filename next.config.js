/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const {withSentryConfig} = require('@sentry/nextjs');

const isProduction = process.env.NODE_ENV === 'production';

const moduleExports = {
    cssModules: true,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: !isProduction ? '[name]-[local]--[hash:base64:4]' : '[hash:base64:5]',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
    images: {disableStaticImages: true},
    i18n: {
        locales: ['cs', 'en'],
        defaultLocale: 'cs',
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
    eslint: {ignoreDuringBuilds: true},
    reactStrictMode: true,
    poweredByHeader: false,
    swcMinify: true,
};
const SentryWebpackPluginOptions = {silent: true};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
