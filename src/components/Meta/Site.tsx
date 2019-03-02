import * as React from 'react'

const App = data => (
    <React.Fragment>
        <title>H. Muraoka's Blog</title>
        <meta name="description" content={data.site.siteMetadata.description} />
    </React.Fragment>
)

export default App
