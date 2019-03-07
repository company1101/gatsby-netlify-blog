import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

import Meta from './Meta'
import Navbar from './Navbar'
import Footer from './Footer'

const App = ({ children }: React.ComponentProps) => (
    <React.Fragment>
        <Meta />
        <GlobalStyle />
        <Navbar />
        <section>{children}</section>
        <Footer />
    </React.Fragment>
)

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.5rem;
        font-family: Roboto, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,sans-serif;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: #fcfcfc;
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
    }

    img {
        vertical-align: top;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`

export default App
