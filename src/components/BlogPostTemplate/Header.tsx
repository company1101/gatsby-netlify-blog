import * as React from 'react'
import styled from 'styled-components'

import * as fonts from '../../constants/styles/fonts'

interface IProps {
    date: string
    description: string
    Title: string
}

const App = ({ date, description, title }: IProps) => {
    return (
        <header>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
        </header>
    )
}

const Title = styled.h2`
    margin-bottom: 0.5rem;
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

export default App
