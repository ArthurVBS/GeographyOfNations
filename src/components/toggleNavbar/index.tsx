import React from 'react'
import { useNavbar } from '../../contexts/NavbarContext'

import { Container } from './styles'

const ToggleNavbar: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container onClick={() => handleClick()}>
      <i className="fas fa-bars"></i>
    </Container>
  )
}

export default ToggleNavbar
