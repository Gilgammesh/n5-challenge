import styled from 'styled-components'
import styling from '../../../../styles/styling'

const Item = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 16px 6px 16px;
  cursor: pointer;
  width: 100%;
  gap: 10px;
  background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.85)' : '#fff')};
  color: ${props => (props.active ? '#fff' : styling.colors.text)};
  &:hover {
    padding: 6px 16px 6px 16px;
    transition: all 0.3s ease-out;
    background-color: ${props => (props.active ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.04)')};
  }
`

export default Item
