import * as React from 'react'
import styled from 'styled-components'

import * as colors from '../../constants/styles/colors'
import * as fonts from '../../constants/styles/fonts'

const App = () => <Container>&copy; 2019 Created By H.Muraoka</Container>

const Container = styled.div`
    margin-top: 5rem;
    padding-bottom: 3rem;
    background-color: ${colors.BODY};
    text-align: center;
    color: ${colors.TEXT};
    font-size: ${fonts.SMALLER};
    @media only screen and (max-width: 768px) {
        font-size: ${fonts.SMALLEST};
    }
`

export default App
