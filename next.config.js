const styles = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = styles({
    cssModules: true,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
    },
});
