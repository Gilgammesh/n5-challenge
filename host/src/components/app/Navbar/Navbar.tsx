import React, { useContext, useState, useEffect, useRef } from 'react'
import { H4 } from '../../lib/H'
import Navbar from './styles'
import ReactCountryFlag from 'react-country-flag'
import { AppContext } from '../../../contexts/AppContext'
// @ts-ignore
import logo from '../../../assets/images/logo.png'

const NavbarComponent = () => {
  const { lang, setLang } = useContext(AppContext)

  const refDropdown = useRef<HTMLDivElement>(null)

  const [click, setClick] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = event => {
      if (refDropdown.current && !refDropdown.current.contains(event.target)) {
        setClick(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [setClick])

  const handleClickLang = value => {
    setLang(value)
    setClick(false)
  }

  return (
    <Navbar>
      <Navbar.Logo alt="logo" src={logo} />
      <Navbar.Lang>
        <Navbar.LangText>
          <H4>{lang === 'es' ? 'Lenguaje:' : 'Language:'}</H4>
        </Navbar.LangText>
        <Navbar.LangSelect onClick={() => setClick(!click)}>
          <ReactCountryFlag countryCode={lang === 'es' ? 'ES' : 'US'} svg style={{ width: '24px', height: '24px' }} />
        </Navbar.LangSelect>
        <Navbar.DropdownList ref={refDropdown} click={click}>
          <Navbar.DropdownListItem onClick={() => handleClickLang('es')}>
            <ReactCountryFlag countryCode="ES" svg style={{ width: '20px', height: '20px' }} />
            <Navbar.DropdownListItemText>{lang === 'es' ? 'Español' : 'Spanish'}</Navbar.DropdownListItemText>
          </Navbar.DropdownListItem>
          <Navbar.DropdownListItem onClick={() => handleClickLang('en')}>
            <ReactCountryFlag countryCode="US" svg style={{ width: '20px', height: '20px' }} />
            <Navbar.DropdownListItemText>{lang === 'es' ? 'Inglés' : 'English'}</Navbar.DropdownListItemText>
          </Navbar.DropdownListItem>
        </Navbar.DropdownList>
      </Navbar.Lang>
    </Navbar>
  )
}

export default NavbarComponent
