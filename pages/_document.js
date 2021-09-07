import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />

          <Meta name="twitter:card" content="app" />
          <Meta name="twitter:site" content="@WillKelly__" />
          <Meta
            name="twitter:description"
            content="Free SVG icon pack with MIT license"
          />
          <Meta name="twitter:app:name:iphone" content="IKONO" />
          <Meta name="twitter:app:name:ipad" content="IKONO" />
          <Meta name="twitter:app:name:googleplay" content="IKONO" />
          <Meta name="twitter:image" content="/banner.png" />
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
