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
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOIrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
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
