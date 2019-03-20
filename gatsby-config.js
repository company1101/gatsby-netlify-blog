module.exports = {
    siteMetadata: {
        title: "Hiroshi Muraoka's Blog",
        description: '滋賀県在住のエンジニアの技術系ブログです',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        // PWA: -offline should be placed after -manifest
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: "Hiroshi Muraoka's Blog",
                short_name: "H.Muraoka's Blog",
                start_url: '/',
                scope: '.',
                display: 'standalone',
                orientation: 'portrait-primary',
                background_color: "#fff",
                theme_color: "#34c6d3",
                icon: "./static/img/android-chrome-512x512.png"
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-tslint',
            options: [
                {
                    test: /\.ts$|\.tsx$/,
                    exclude: /(node_modules|cache|public)/,
                },
            ],
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-131373055-2',
                head: true,
                anonymize: true,
                respectDNT: true,
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'blog.kgjoi.com',
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            showLineNumbers: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.tsx`,
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
}
