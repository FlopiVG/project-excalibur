import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
          />
        </body>
      </html>
    );
  }
}
