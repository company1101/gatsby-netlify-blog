import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Card } from '../components/Card'
import Layout from '../components/Layout'
import * as colors from '../constants/styles/colors'
import * as fonts from '../constants/styles/fonts'

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`

const App = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <Layout>
            <Helmet title={`HOME`} />
            {posts.map(({ node: post }) => (
                <Card key={post.id}>
                    <Title to={post.fields.slug}>
                        {post.frontmatter.title}
                    </Title>
                    <Date>{post.frontmatter.date}</Date>
                    <Text>{post.excerpt}</Text>
                    <Button to={post.fields.slug}>Keep Reading →</Button>
                </Card>
            ))}
        </Layout>
    )
}

const Title = styled(Link)`
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: ${fonts.LARGE};
    font-weight: 700;
    color: ${colors.PRIMARY};
    &:hover {
        color: ${colors.PRIMARY_INVERT};
    }
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.NORMAL};
    }
`

const Date = styled.p`
    margin-bottom: 3rem;
    font-size: ${fonts.SMALLER};
    font-style: italic;
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLEST};
    }
`

const Text = styled.p`
    width: 100%;
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: ${fonts.SMALL};
    line-height: 170%;
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLER};
    }
`

const Button = styled(Link)`
    display: block;
    color: ${colors.TEXT};
    font-size: ${fonts.SMALLER};
    padding: 0.4rem 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        border-color: #bbb;
    }
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLEST};
    }
`

export default App
