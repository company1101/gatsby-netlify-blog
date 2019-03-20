import * as React from 'react'
import BlogPostTemplate from '../../components/BlogPostTemplate'

const App = ({ entry, widgetFor }) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        isPreview={true}
    />
)

export default App
