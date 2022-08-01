import { createGlobalStyle } from 'styled-components'
import styling from './styling'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: ${styling.typography.font};
  }
  #app {
    margin:0 auto;
  }
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
