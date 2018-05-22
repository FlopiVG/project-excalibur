import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" />
        </body>
      </html>
    );
  }
}
