import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Card } from '../components/Card'
import Layout from '../components/Layout'

import * as colors from '../constants/styles/colors'
import * as fonts from '../constants/styles/fonts'

const App = props => {
    const posts = props.data.allMarkdownRemark.edges
    const tag = props.pageContext.tag
    const title = props.data.site.siteMetadata.title
    const totalCount = props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
        <Layout>
            <Helmet title={`${tag} | ${title}`} />
            <Card>
                <Header>{tagHeader}</Header>
                <List>
                    {posts.map(post => (
                        <Item key={post.node.fields.slug}>
                            <LinkToPage to={post.node.fields.slug}>
                                {post.node.frontmatter.title}
                            </LinkToPage>
                        </Item>
                    ))}
                </List>
                <LinkToAllTags to="/tags/">Browse all tags</LinkToAllTags>
            </Card>
        </Layout>
    )
}

const Header = styled.h2`
    margin-bottom: 3rem;
    font-size: ${fonts.SMALL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLER};
    }
`

const List = styled.ul`
    margin-bottom: 3rem;
`

const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

const LinkToPage = styled(Link)`
    font-size: ${fonts.NORMAL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALL};
    }
    font-weight: 700;
    color: ${colors.PRIMARY};
    &:hover {
        color: ${colors.PRIMARY_INVERT};
    }
`

const LinkToAllTags = styled(Link)`
    color: ${colors.TEXT};
    &:hover {
        color: ${colors.PRIMARY};
    }
`

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`

export default App
