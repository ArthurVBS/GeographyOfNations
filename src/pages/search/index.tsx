import React, { useEffect, useState } from 'react'

import DataByLang from '../../components/dataByLang'
import DataByName from '../../components/dataByName'
import DataByRegion from '../../components/dataByRegion'
import PopUp from '../../components/popUp'
import SearchInput from '../../components/searchInput'

import isometricSearch from '../../assets/isometric_search.svg'
import { useNavbar } from '../../contexts/NavbarContext'
import { Container, Image, SearchSection, TextSection } from './styles'

const Search: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  const [value, setValue] = useState('')
  const [errPopUp, setErrPopUp] = useState({ show: false, message: '' })
  const [searchBy, setSearchBy] = useState('name')

  const renderData = () => {
    switch (searchBy) {
      case 'name':
        return <DataByName value={value} setErrPopUp={setErrPopUp} />
      case 'lang':
        return <DataByLang value={value} setErrPopUp={setErrPopUp} />
      case 'region':
        return <DataByRegion value={value} setErrPopUp={setErrPopUp} />
      default:
        return null
    }
  }

  const renderError = () => {
    return errPopUp.show
      ? <PopUp message={errPopUp.message} setErrPopUp={setErrPopUp} />
      : null
  }

  return (
    <Container>
      <TextSection>
        <Image src={isometricSearch} alt='A man writing code' />
        <p>You're searching by {searchBy}</p>
      </TextSection>

      <SearchSection>
        <SearchInput searchBy={searchBy} setSearchBy={setSearchBy} setValue={setValue} setErrPopUp={setErrPopUp} />

        {renderData()}
        {renderError()}
      </SearchSection>
    </Container>
  )
}

export default Search
