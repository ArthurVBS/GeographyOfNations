import React, { useEffect } from 'react'
import { useNavbar } from '../../contexts/NavbarContext'

// import { Container } from './styles'

const SearchByName: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  return(
    <>
      <h1>Search By Name</h1>
    </>
  )
}

export default SearchByName
