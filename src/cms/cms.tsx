import * as React from 'react'
import CMS from 'netlify-cms'
import BlogPostTemplate from '../components/BlogPostTemplate'

const Preview = ({ entry, widgetFor }) => {
    console.log(widgetFor('body'))
    return (
        <BlogPostTemplate
            content={entry.getIn(['data', 'body'])}
            description={entry.getIn(['data', 'description'])}
            tags={entry.getIn(['data', 'tags'])}
            title={entry.getIn(['data', 'title'])}
            isPreview={true}
        />
    )
}

CMS.registerPreviewTemplate('blog', Preview)
