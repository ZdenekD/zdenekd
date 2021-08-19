/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const findUp = require('find-up');

const fileExtensions = new Set();
let extractCssInitialized = false;

module.exports = (
    config,
    {
        extensions = [],
        cssModules = false,
        cssLoaderOptions = {},
        dev,
        isServer,
        postcssLoaderOptions = {},
        loaders = [],
    }
) => {
    for (const extension of extensions) {
        fileExtensions.add(extension);
    }

    if (!isServer) {
        config.optimization.splitChunks = {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: new RegExp(`\\.+(${[...fileExtensions].join('|')})$`),
                    chunks: 'all',
                    enforce: true,
                },
            },
        };
    }

    if (!isServer && !extractCssInitialized) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: dev
                    ? 'static/css/[name].css'
                    : 'static/css/[name].[contenthash:8].css',
                chunkFilename: dev
                    ? 'static/css/[name].chunk.css'
                    : 'static/css/[name].[contenthash:8].chunk.css',
            })
        );
        extractCssInitialized = true;
    }

    const postcssConfig = findUp.sync('postcss.config.js', {cwd: config.context});
    let postcssLoader;

    if (postcssConfig) {
        postcssLoader = {
            loader: 'postcss-loader',
            options: {...postcssLoaderOptions},
        };
    }

    const cssLoader = {
        loader: isServer ? 'css-loader/locals' : 'css-loader',
        options: {
            modules: cssModules,
            minimize: !dev,
            sourceMap: dev,
            importLoaders: loaders.length + (postcssLoader ? 1 : 0),
            ...cssLoaderOptions,
        },
    };

    if (isServer && !cssLoader.options.modules) {
        return ['ignore-loader'];
    }

    if (isServer && cssLoader.options.modules) {
        return [
            cssLoader,
            postcssLoader,
            ...loaders,
        ].filter(Boolean);
    }

    return [
        !isServer && dev && 'extracted-loader',
        !isServer && MiniCssExtractPlugin.loader,
        cssLoader,
        postcssLoader,
        ...loaders,
    ].filter(Boolean);
};
