import styled from 'styled-components'

const DropdownListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  background-color: #eae9fc;
  &:hover {
    padding: 10px;
    transition: all 0.3s ease-out;
    background-color: #dde9fc;
  }
`

export default DropdownListItem
