import * as React from 'react'
import CMS from 'netlify-cms'
// import BlogPostTemplate from '../components/BlogPostTemplate'

import { kebabCase } from 'lodash'

const HTMLContent = ({ content, className }) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
    <div className={className}>{content}</div>
)

const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <PostContent content={content} />
                    </div>
                </div>
            </div>
        </section>
    )
}

// const Preview = ({ entry, widgetFor }) => {
//     return (
//         <BlogPostTemplate
//             content={widgetFor('body')}
//             description={entry.getIn(['data', 'description'])}
//             tags={entry.getIn(['data', 'tags'])}
//             title={entry.getIn(['data', 'title'])}
//             isPreview={true}
//         />
//     )
// }

// CMS.registerPreviewTemplate('blog', Preview)

const BlogPostPreview = ({ entry, widgetFor }) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
    />
)

CMS.registerPreviewTemplate('blog', BlogPostPreview)
