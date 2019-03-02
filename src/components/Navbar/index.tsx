import * as React from 'react'
import styled from 'styled-components'

import Heading from './Heading'
import Tag from './Tags'
import Links from './Links'

import * as colors from '../../constants/styles/colors'

const App = () => (
    <Nav>
        <Heading />
        <Tag />
        <Links />
    </Nav>
)

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0 2rem;
`

export default App
