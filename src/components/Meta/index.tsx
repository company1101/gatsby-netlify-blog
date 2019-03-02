import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Site from './Site'
import Favicon from './Favicon'
import Ogp from './Ogp'

const Meta = data => (
    <Helmet>
        <html lang="jp" />
        <script
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
        </script>

        <Site data={data} />
        <Favicon data={data} />
        <Ogp data={data} />
    </Helmet>
)

export default () => (
    <StaticQuery
        query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={Meta}
    />
)
