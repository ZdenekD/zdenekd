const styles = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = styles({
    cssModules: true,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: !isProduction ? '[name]-[hash:base64:4]' : '[hash:base64:4]',
    },
});
