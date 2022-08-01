import styled from 'styled-components'

const DropdownList = styled.ul<{ click: boolean }>`
  display: ${props => (props.click ? 'block' : 'none')};
  width: 120px;
  position: absolute;
  top: 60px;
  right: 40px;
  list-style: none;
  text-align: start;
`

export default DropdownList
