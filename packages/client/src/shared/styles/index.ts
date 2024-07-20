import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Pretendard', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
        box-sizing: border-box;
    }
    html {
        height: 100%;
        font-size: calc(14px + 0.01vw);
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: auto;
        box-sizing: border-box;
        font-size: 14px;
        background-color: ${props => props.theme.color.base || 'inherit'};
        min-width: ${props => props.theme.layout.bodyWidth}px;
    }

    ul, li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    input, textarea {
        outline: 0;
        border: 0;
        -webkit-border-radius: 0;
    }
  
    a {
        text-decoration: none;
    }

    // ::selection {
    //     background-color: ${props => props.theme.color.background.primary};
    //     color: ${props => props.theme.color.font.primary};
    // }
`
