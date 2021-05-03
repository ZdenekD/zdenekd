module.exports = {
    stories: ['../src/**/*.stories.jsx', '../src/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-postcss',
            // eslint-disable-next-line global-require
            options: {postcssLoaderOptions: {implementation: require('postcss')}},
        },
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds',
    ],
    webpackFinal: async (config, {configType}) => {
        const isProduction = configType === 'production';
        const cssIndex = config.module.rules.findIndex(item => item.test.toString() === /\.css$/.toString());

        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map(rule => (rule.test?.toString().search('svg') > 0
            ? {
                ...rule,
                test: RegExp(rule.test.toString().replace('svg|', '').replace(/\//g, '')),
            }
            : rule));
        config.module.rules.splice(cssIndex, 1);
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
                        },
                        sourceMap: !isProduction,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {sourceMap: !isProduction},
                },
            ],
        }, {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
};
