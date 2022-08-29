/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('path');

module.exports = {
    process(_, filename) {
        return {code: `module.exports = ${JSON.stringify(paths.basename(filename))};`};
    },
};
