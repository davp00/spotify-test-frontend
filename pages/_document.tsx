import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Spotify-512.png"
          />
          <link rel="stylesheet" href="/css/utilities.min.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
