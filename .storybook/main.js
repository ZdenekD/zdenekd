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
        '@storybook/addon-docs',
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

        return config;
    },
};
