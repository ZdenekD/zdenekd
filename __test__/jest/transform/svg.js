/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('path');

module.exports = {
    process(_, file) {
        const name = paths.basename(file, '.svg');
        const filename = `${name[0].toUpperCase()}${name.substring(1)}`;

        return {
            code: `
                const React = require('react');
                const ${filename} = (props) => {
                    return React.createElement('svg', {
                        ...props,
                        'data-testid': '${filename}'
                    });
                }

                module.exports = ${filename};
            `,
        };
    },
};
