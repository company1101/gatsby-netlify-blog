import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Prism from 'prismjs'
import { kebabCase } from 'lodash'

import Layout from '../components/Layout'
import { Card } from '../components/Card'
import Content, { HTMLContent } from '../components/Content'

import * as colors from '../constants/styles/colors'
import * as fonts from '../constants/styles/fonts'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    date,
    description,
    tags,
    title,
}) => {
    const PostContent = contentComponent || Content

    return (
        <Card>
            <header>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Description>{description}</Description>
            </header>
            <Post>
                <PostContent content={content} />
            </Post>
            {tags && tags.length ? (
                <List>
                    {tags.map(tag => (
                        <Item key={tag + `tag`}>
                            <StyledLink to={`/tags/${kebabCase(tag)}/`}>
                                {tag}
                            </StyledLink>
                        </Item>
                    ))}
                </List>
            ) : null}
        </Card>
    )
}

const Title = styled.h1`
    margin: 3rem 0 0.5rem;
    text-align: center;
    font-size: ${fonts.LARGEST};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.LARGE};
    }
`

const Date = styled.p`
    font-style: italic;
    font-size: ${fonts.SMALLER};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLEST};
    }
`

const Description = styled.p`
    margin-bottom: 4rem;
    text-align: center;
    font-size: ${fonts.SMALL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLER};
    }
`

const Post = styled.div`
    font-size: ${fonts.SMALL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLER};
    }

    & p {
        line-height: 170%;
    }

    & ol,
    & ul {
        margin: 1.2rem 0 1.2rem 2rem;
    }

    & ul {
        list-style-type: disc;
    }

    & h2 {
        margin: 2rem 0 0.5rem;
        font-size: ${fonts.LARGE};
        @media only screen and (max-width: 768px) {
            font-size: ${fonts.SMALL};
        }
    }
    & h3 {
        margin: 2rem 0 0.5rem;
        font-size: ${fonts.NORMAL};
        @media only screen and (max-width: 768px) {
            font-size: ${fonts.SMALL};
        }
    }
    & h4 {
        margin: 2rem 0 0.5rem;
        font-size: ${fonts.SMALL};
        @media only screen and (max-width: 768px) {
            font-size: ${fonts.SMALLER};
        }
    }
    & h2:first-child,
    & h3:first-child,
    & h4:first-child {
        margin-top: 0;
    }

    & a {
        font-weight: 500;
        color: ${colors.PRIMARY};
        &:hover {
            color: ${colors.PRIMARY_INVERT};
        }
    }

    & pre[class^='language-'] {
        margin: 1rem 0 3rem;
        overflow-x: auto;
    }

    & code[class^='language-'] {
        word-break: break-all;
    }

    .line-numbers .line-numbers-rows {
        top: 1.2rem;
        left: 1.5rem !important;
    }
`

const List = styled.ul`
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    margin-bottom: 3rem;
`

const Item = styled.li``

const StyledLink = styled(Link)`
    color: ${colors.PRIMARY};
    &:hover {
        color: ${colors.PRIMARY_INVERT};
    }
`

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
