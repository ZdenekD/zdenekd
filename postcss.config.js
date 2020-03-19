module.exports = {
    modules: true,
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 1,
            importFrom: 'src/assets/styles/media.css',
        },
        'postcss-custom-media': {},
        'postcss-reporter': {clearReportedMessages: true},
        cssnano: process.env.NODE_ENV === 'production',
    },
};
