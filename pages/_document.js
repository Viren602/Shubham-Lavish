import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
                    <meta property="og:type" content="website" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
