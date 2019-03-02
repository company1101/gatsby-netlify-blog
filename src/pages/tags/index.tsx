import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../../components/Layout'
import { Card } from '../../components/Card'
import * as colors from '../../constants/styles/colors'
import * as fonts from '../../constants/styles/fonts'

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout>
        <Helmet title={`Tags | ${title}`} />
        <Card>
            <Title>Tag List</Title>
            <List>
                {group.map(tag => (
                    <Item key={tag.fieldValue}>
                        <StyledLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </StyledLink>
                    </Item>
                ))}
            </List>
        </Card>
    </Layout>
)

const Title = styled.h1`
    margin-bottom: 3rem;
    font-size: ${fonts.LARGE};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.NORMAL};
    }
`

const List = styled.ul``

const Item = styled.li`
    margin-bottom: 1rem;
`

const StyledLink = styled(Link)`
    font-size: ${fonts.NORMAL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALL};
    }
    font-weight: 500;
    color: ${colors.PRIMARY};
    &:hover {
        color: ${colors.PRIMARY_INVERT};
    }
`

export default TagsPage

export const tagPageQuery = graphql`
    query TagsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
