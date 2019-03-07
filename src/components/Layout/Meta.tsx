import * as React from 'react'
import { Helmet } from 'react-helmet'

const App = () => (
    <Helmet>
        <html lang="jp" />
        {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-131373055-2"
            />
            <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-131373055-2');
            `}
            </script> */}

        <title>H. Muraoka's Blog</title>
        <meta name="description" content="Hiroshi Muraoka's Blog" />

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
        />

        <link rel="manifest" href="/img/site.webmanifest" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/img/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Hiroshi Muraoka's Blog" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/ogp.jpg" />
    </Helmet>
)

export default App
