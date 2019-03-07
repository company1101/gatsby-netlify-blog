import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import BlogPostTemplate from '../components/BlogPostTemplate'

const App = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <Helmet>
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                    name="description"
                    content={`${post.frontmatter.description}`}
                />
            </Helmet>
            <BlogPostTemplate
                content={post.html}
                description={post.frontmatter.description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

export default App

export const query = graphql`
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
