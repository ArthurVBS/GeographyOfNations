import React, { useEffect } from 'react'
import { useNavbar } from '../../contexts/NavbarContext'

// import { Container } from './styles'

const Contact: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('contact')
  }, [])

  return (
    <>
      <h1>Contact</h1>
    </>
  )
}

export default Contact
