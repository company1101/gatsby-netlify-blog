import * as React from 'react'

const App = data => (
    <React.Fragment>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/ogp.jpg" />
    </React.Fragment>
)

export default App
