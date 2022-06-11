import React, { useEffect } from 'react'
import { useNavbar } from '../../contexts/NavbarContext'

// import { Container } from './styles'

const SearchByRegion: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  return (
    <>
      <h1>Search By Region</h1>
    </>
  )
}

export default SearchByRegion
