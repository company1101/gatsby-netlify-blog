import * as React from 'react'
import styled from 'styled-components'

import * as colors from '../../../constants/styles/colors'
import * as fonts from '../../../constants/styles/fonts'

import website from '../../../img/website.svg'
import github from '../../../img/github.svg'
import kaggle from '../../../img/kaggle.svg'

const App = () => (
    <List>
        <Item>
            <Link href="https://www.kgjoi.com">
                <Img src={website} alt="Website" />
                <Name>Website</Name>
            </Link>
        </Item>
        <Item>
            <Link href="https://github.com/tapih">
                <Img src={github} alt="Github" />
                <Name>Github</Name>
            </Link>
        </Item>
        <Item>
            <Link href="https://www.kaggle.com/pseprop">
                <Img src={kaggle} alt="https://" />
                <Name>Kaggle</Name>
            </Link>
        </Item>
    </List>
)

const List = styled.ul`
    display: flex;
`

const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 8.5rem;
    margin: 0 0.5rem;
    border-radius: 1.5rem;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    &:hover {
        border-color: #bbb;
    }
`

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 1.4rem;
    margin-right: 0.3rem;
`

const Name = styled.span`
    color: ${colors.TEXT};
    font-size: ${fonts.SMALLER};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLEST};
    }
`

export default App
