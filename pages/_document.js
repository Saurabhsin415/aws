import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
<Html lang="en">
        <Head>
         <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
       <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
       <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
       <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
       <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
       <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
       <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
       <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
       <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
       <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png"/>
       <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
       <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
       <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
       <link rel="manifest" href="favicon/manifest.json"/>  
       <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Poppins:wght@700;900&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
  src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.map"
  strategy="beforeInteractive" // lazyOnload, afterInteractive
/>
        </body>
      </Html>
    )
  }
}

export default MyDocument