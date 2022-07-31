/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true'});
const {withSentryConfig} = require('@sentry/nextjs');
const loaderUtils = require('loader-utils');
const headers = require('./next.headers');

const hashOnlyIdent = (context, _, exportName) => loaderUtils
    .getHashDigest(
        Buffer.from(
            `filePath:${path
                .relative(context.rootContext, context.resourcePath)
                .replace(/\\+/g, '/')}#className:${exportName}`
        ),
        'md4',
        'base64',
        6
    )
    .replace(/^(-?\d|--)|\/|\+/g, '_$1');

const moduleExports = {
    async headers() {
        return headers;
    },
    webpack(config, {dev}) {
        const rules = config.module.rules
            .find(rule => typeof rule.oneOf === 'object')
            .oneOf.filter(rule => Array.isArray(rule.use));

        if (!dev) {
            rules.forEach(rule => {
                rule.use.forEach(moduleLoader => {
                    if (
                        moduleLoader.loader?.includes('css-loader')
                        && !moduleLoader.loader?.includes('postcss-loader')
                    ) {
                        moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
                    }
                });
            });
        }

        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
    images: {
        disableStaticImages: true,
        formats: ['image/avif', 'image/webp'],
    },
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
};
const SentryWebpackPluginOptions = {silent: true};

module.exports = withBundleAnalyzer(withSentryConfig(moduleExports, SentryWebpackPluginOptions));
