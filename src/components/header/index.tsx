import React, { useState } from 'react'
import Navbar from '../navbar'

import { Container, Logo, ToggleSidebar } from './styles'

type Props = {
  selected: String
}

const Header: React.FC<Props> = ({ selected }) => {
  const [sidebar, setSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <Container>
      <Logo>+ Nations</Logo>
      <Navbar selected={selected} sidebar={{ isOpen: sidebar, setIsOpen: setSidebar }} />
      <ToggleSidebar onClick={() => toggleSidebar()}><i className="fas fa-bars"></i></ToggleSidebar>
    </Container>
  )
}

export default Header
