const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.jsx', '../src/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-postcss',
            options: {
                styleLoaderOptions: {},
                cssLoaderOptions: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]-[local]--[hash:base64:4]',
                    },
                    sourceMap: true,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                    sourceMap: true
                }
            },
        },
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds',
        'storybook-addon-next-router',
    ],
    webpackFinal: async config => {
        config.module.rules = config.module.rules.map(rule => (rule.test?.toString().search('svg') > 0
            ? {
                ...rule,
                test: RegExp(rule.test.toString().replace('svg|', '').replace(/\//g, '')),
            }
            : rule));
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [{loader: '@svgr/webpack'}],
        });
        const alias = {
            ...config.resolve?.alias,
            '@/api': path.resolve(__dirname, '../src/api'),
            '@/assets': path.resolve(__dirname, '../src/assets'),
            '@/components': path.resolve(__dirname, '../src/components'),
            '@/UI': path.resolve(__dirname, '../src/components/UI'),
            '@/data': path.resolve(__dirname, '../src/data'),
            '@/store': path.resolve(__dirname, '../src/store'),
            '@/utils': path.resolve(__dirname, '../src/utils'),
            '@/enums': path.resolve(__dirname, '../src/utils/enums'),
            '@/helpers': path.resolve(__dirname, '../src/utils/helpers'),
            '@/hooks': path.resolve(__dirname, '../src/utils/hooks'),
            '@/__test__': path.resolve(__dirname, '../src/__test__'),
        }

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias
            }
        };
    },
};
