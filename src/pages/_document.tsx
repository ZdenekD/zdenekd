import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from 'next/document';
import {resetId} from 'react-id-generator';

class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(context);

        resetId();

        return initialProps;
    }

    // eslint-disable-next-line class-methods-use-this
    render(): JSX.Element {
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

export default MyDocument;
