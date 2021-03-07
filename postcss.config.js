module.exports = {
    plugins: {
        stylelint: process.env.NODE_ENV === 'development' ? {} : false,
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 1,
            importFrom: 'src/assets/styles/utilities/media.css',
        },
        'postcss-custom-media': {},
        'postcss-reporter': {clearReportedMessages: true},
        cssnano: process.env.NODE_ENV === 'production',
    },
};
