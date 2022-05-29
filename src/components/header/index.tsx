import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Nav, IconLink, Logo } from './styles'

type Props = {
  selected: String
}

const Header: React.FC<Props> = ({selected}) => {
  return (
    <Container>
      <Logo>+ Nations</Logo>
      <Nav>
        <IconLink selected={selected === 'home'}><Link to='/'>Home</Link></IconLink>
        <IconLink selected={selected === 'search'}><Link to='/search'>Search</Link></IconLink>
        <IconLink selected={selected === 'contact'}><Link to='/contact'>Contact</Link></IconLink>
      </Nav>
    </Container>
  )
}

export default Header
