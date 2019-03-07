import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import * as colors from '../../../constants/styles/colors'
import * as fonts from '../../../constants/styles/fonts'

const App = () => (
    <React.Fragment>
        <StyledLink to="/">
            <Img src="/img/top.jpg" alt="Top Image" />
        </StyledLink>
        <Title>H. Muraoka's Blog</Title>
    </React.Fragment>
)

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 18rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 100%;
    overflow: hidden;
`

const Img = styled.img`
    transform: scale(0.55);
`

const Title = styled.h2`
    font-size: ${fonts.LARGEST};
    font-weight: 700;
    color: ${colors.TEXT};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.LARGE};
    }
`

export default App
