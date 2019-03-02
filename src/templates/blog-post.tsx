import React from 'react'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import { Card } from '../components/Card'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
}) => {
    const PostContent = contentComponent || Content

    return (
        <Card>
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                        {title}
                    </h1>
                    <p>{description}</p>
                    <PostContent content={content} />
                    {tags && tags.length ? (
                        <div style={{ marginTop: `4rem` }}>
                            <h4>Tags</h4>
                            <ul className="taglist">
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>
                                        <Link to={`/tags/${kebabCase(tag)}/`}>
                                            {tag}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </Card>
    )
}

// .column {
//     font-size: $font-small;
//     margin-top: 30px;
//     margin-bottom: 30px;
//     @media only screen and (max-width: 768px) {
//         font-size: $font-smaller
//     }
//     h1 {
//         font-size: $font-largest !important;
//         @media only screen and (max-width: 768px) {
//             font-size: $font-large !important;
//         }
//     }
//     h2 {
//         font-size: $font-large;
//         @media only screen and (max-width: 768px) {
//             font-size: $font-small;
//         }
//     }
//     h3 {
//         font-size: $font-small;
//         @media only screen and (max-width: 768px) {
//             font-size: $font-smaller;
//         }
//     }
//     a {
//         color: $primary;
//         font-weight: 500;
//         &:hover {
//             color: $primary-invert;
//         }
//     }
// }

// .content .taglist {
//     list-style: none;
//     margin-bottom: 0;
//     margin-left: 0;
//     margin-right: 15px;
//     margin-top: 15px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: left;
//     align-items: center;
//     &>li {
//         padding: 0 20px 10px 0;
//         margin-bottom: 15px;
//         margin-top: 0;
//     }
//     .content .date {
//         font-size: $font-smaller;
//         @media only screen and (max-width: 768px) {
//             font-size: $font-smallest;
//         }
//         font-style: italic;
//         margin-bottom: 30px !important;
//     }
// }

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`
