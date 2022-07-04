import React from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'
import { Container, IconLink } from './styles'

const Navbar: React.FC = () => {
  const { selected, isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  const PATH = 'GeographyOfNations' // vite.config.ts

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <IconLink selected={selected === 'home'}>
        <Link to={PATH + '/'}>Home</Link>
      </IconLink>

      <IconLink selected={selected === 'search'}>
        <Link to={PATH + '/search'}>Search</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
