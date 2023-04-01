import {createGlobalStyle}  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
   input, text-area, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
`