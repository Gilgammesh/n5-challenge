import styled from 'styled-components'
import styling from '../../styles/styling'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  font-family: ${styling.typography.font};
`

const H2 = styled.h2`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.3;
  font-family: ${styling.typography.font};
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  font-family: ${styling.typography.font};
`

const H4 = styled.h4`
  font-weight: bold;
  font-family: ${styling.typography.font};
`

export { H1, H2, H3, H4 }
