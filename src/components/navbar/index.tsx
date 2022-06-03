import React from 'react'
import { Link } from 'react-router-dom'
import { Container, IconLink } from './styles'

type Props = {
  selected: String
  sidebar: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }
}

const Navbar: React.FC<Props> = ({ selected, sidebar }) => {
  const closeSidebar = () => {
    sidebar.setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={sidebar.isOpen} onClick={() => closeSidebar()}>
      <IconLink selected={selected === 'home'}>
        <Link to='/'>Home</Link>
      </IconLink>

      <IconLink selected={selected === 'search'}>
        <Link to='/search'>Search</Link>
      </IconLink>

      <IconLink selected={selected === 'contact'}>
        <Link to='/contact'>Contact</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
