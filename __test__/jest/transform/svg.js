/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const babel = require('@babel/core');

module.exports = {
    process(src, filename) {
        const {code} = babel.transform(
            `export default () => (<svg data-filename="${path.relative(process.cwd(), filename)}" />);`,
            {
                filename,
                retainLines: true,
            }
        );

        return {code};
    },
};
