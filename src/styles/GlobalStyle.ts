import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    font-size: 16px;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
        background-color: #ccc;
        margin: auto;
    }

    li {
        list-style: none;
    }
`

export default GlobalStyle