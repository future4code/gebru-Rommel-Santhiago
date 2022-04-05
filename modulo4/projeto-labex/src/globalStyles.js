import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    text-decoration: none;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 1px;
    background: #CCCCCC;
  }
`

export default GlobalStyles
