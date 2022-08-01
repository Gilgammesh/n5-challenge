import styled, { StyledComponentBase } from 'styled-components'
import Logo from './Logo'
import Lang from './Lang'
import LangText from './LangText'
import LangSelect from './LangSelect'
import DropdownList from './DropdownList'
import DropdownListItem from './DropdownListItem'
import DropdownListItemText from './DropdownListItemText'

interface INavbar extends StyledComponentBase<any, {}> {
  Logo?: any
  Lang?: any
  LangText?: any
  LangSelect?: any
  DropdownList?: any
  DropdownListItem?: any
  DropdownListItemText?: any
}

const Navbar: INavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #c9e9fc;
  padding: 10px 40px;
  height: 70px;
  width: 100%;
`

Navbar.Logo = Logo
Navbar.Lang = Lang
Navbar.LangText = LangText
Navbar.LangSelect = LangSelect
Navbar.DropdownList = DropdownList
Navbar.DropdownListItem = DropdownListItem
Navbar.DropdownListItemText = DropdownListItemText

export default Navbar
