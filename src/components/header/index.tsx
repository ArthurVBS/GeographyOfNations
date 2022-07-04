import React from 'react'

import Navbar from '../navbar'
import ToggleNavbar from '../toggleNavbar'
import ToggleTheme from '../toggleTheme'

import { Container, Logo, RightBox } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>+ Nations</Logo>
      <RightBox>
        <Navbar />
        <ToggleNavbar />

        <ToggleTheme />
      </RightBox>
    </Container>
  )
}

export default Header
