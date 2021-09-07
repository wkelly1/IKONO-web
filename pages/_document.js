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
          <title>IKONO</title>

          <meta name="og:url" contant="https://ikono.will-kelly.co.uk" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="IKONO" />
          <meta
            property="og:description"
            content="Free SVG icon pack with MIT license."
          />
          <meta property="og:title" content="IKONO" />
          <meta
            property="og:image"
            content="https://ikono.will-kelly.co.uk/banner.png"
          />
          <meta name="twitter:card" content="app" />
          <meta name="twitter:site" content="@WillKelly__" />
          <meta name="twitter:title" content="IKONO" />
          <meta
            name="twitter:description"
            content="Free SVG icon pack with MIT license"
          />
          <meta name="twitter:app:name:iphone" content="IKONO" />
          <meta name="twitter:app:name:ipad" content="IKONO" />
          <meta name="twitter:app:name:googleplay" content="IKONO" />
          <meta
            name="twitter:image"
            content="https://ikono.will-kelly.co.uk/banner.png"
          />
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
