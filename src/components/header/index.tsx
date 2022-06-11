import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'
import Navbar from '../navbar'

import { Container, Logo, ToggleSidebar } from './styles'

type Props = {
  selected: String
}

const Header: React.FC<Props> = ({ selected }) => {
  const [sidebar, setSidebar] = useState<boolean>(false)

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log(theme)
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <Container>
      <Logo>+ Nations</Logo>
      <button onClick={() => toggleTheme()}>Switcher</button>
      <Navbar selected={selected} sidebar={{ isOpen: sidebar, setIsOpen: setSidebar }} />
      <ToggleSidebar onClick={() => toggleSidebar()}><i className="fas fa-bars"></i></ToggleSidebar>
    </Container>
  )
}

export default Header
