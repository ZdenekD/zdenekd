import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class Doc extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Html lang="cs">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
