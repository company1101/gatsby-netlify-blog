import * as React from 'react'
import styled from 'styled-components'

import Heading from './Heading'
import Tags from './Tags'
import Links from './Links'

import * as colors from '../../../constants/styles/colors'

const App = () => (
    <Nav>
        <HeadingBox>
            <Heading />
        </HeadingBox>
        <TagsBox>
            <Tags />
        </TagsBox>
        <LinksBox>
            <Links />
        </LinksBox>
    </Nav>
)

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0 6rem;
`

const HeadingBox = styled.div`
    margin-bottom: 2rem;
`

const TagsBox = styled.div`
    margin-bottom: 1rem;
`

const LinksBox = styled.div``

export default App
