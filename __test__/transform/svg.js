// Custom Jest transformer for SVG files
// http://facebook.github.io/jest/docs/en/tutorial-react.html#custom-transformers
const path = require('path');
const babel = require('@babel/core');

module.exports = {
    process(src, filename) {
        const code = babel.transform(`
            export default () => (<svg data-filename="${path.relative(process.cwd(), filename)}" />);
        `, {
            filename,
            retainLines: true,
        }).code;
        return code;
    },
};
