import React, { useEffect } from 'react'
import { useNavbar } from '../../contexts/NavbarContext'

// import { Container } from './styles'

const SearchByLang: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  return (
    <>
      <h1>Search By Lang</h1>
    </>
  )
}

export default SearchByLang
