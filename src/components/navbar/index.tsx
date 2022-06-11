import React from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'
import { Container, IconLink } from './styles'

const Navbar: React.FC = () => {
  const { selected, setSelected, isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <IconLink selected={selected === 'home'} onClick={() => setSelected('home')}>
        <Link to='/'>Home</Link>
      </IconLink>

      <IconLink selected={selected === 'search'} onClick={() => setSelected('search')}>
        <Link to='/search'>Search</Link>
      </IconLink>

      <IconLink selected={selected === 'contact'} onClick={() => setSelected('contact')}>
        <Link to='/contact'>Contact</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
