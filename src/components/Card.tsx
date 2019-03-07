import styled from 'styled-components'

import * as colors from '../constants/styles/colors'
import * as fonts from '../constants/styles/fonts'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150rem;
    width: 90%;
    margin: 0 auto;
    padding: 10rem 6rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    background-color: white;
    color: ${colors.TEXT};
    @media only screen and (max-width: 768px) {
        padding: 6rem 2rem;
    }
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`
