import * as React from 'react'
import styled from 'styled-components'

import * as colors from '../../../constants/styles/colors'
import * as fonts from '../../../constants/styles/fonts'

const App = () => (
    <React.Fragment>
        <List>
            <Item>#Go</Item>
            <Item>#Python</Item>
            <Item>#Rust</Item>
        </List>
        <List>
            <Item>#TypeScript</Item>
            <Item>#React</Item>
        </List>
    </React.Fragment>
)

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
`

const Item = styled.li`
    margin: 0 0.5rem;
    font-size: ${fonts.SMALL};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLER};
    }
`

export default App
