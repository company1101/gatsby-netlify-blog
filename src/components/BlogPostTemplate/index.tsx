import * as React from 'react'
import styled from 'styled-components'
import { Card } from '../Card'

import Header, { IProps as IHeaderProps } from './Header'
import Footer, { IProps as IFooterProps } from './Footer'

import * as fonts from '../../constants/styles/fonts'
import * as colors from '../../constants/styles/colors'

type IProps = IHeaderProps & IFooterProps

const App = ({
    content,
    date,
    description,
    tags,
    title,
    isPreview,
}: IProps) => (
    <Card>
        <Header title={title} data={date} description={description} />
        <Post>
            {isPreview ? (
                <div>{content}</div>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </Post>
        <Footer tags={tags} />
    </Card>
)

const Post = styled.div`
    width: 100%;

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

    & ul > li,
    & ol > li {
        margin: 0.5rem 0;
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
        overflow-x: scroll;
        & > code {
            white-space: pre;
        }
    }

    & code[class^='language-'] {
        font-size: ${fonts.SMALLER};
        @media only screen and (max-width: 768px) {
            font-size: ${fonts.SMALLEST};
        }
    }
`

export default App
