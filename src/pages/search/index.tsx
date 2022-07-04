import React, { useEffect, useState } from 'react'

import DataByLang from '../../components/dataByLang'
import DataByName from '../../components/dataByName'
import DataByRegion from '../../components/dataByRegion'
import PopUp from '../../components/popUp'
import SearchInput from '../../components/searchInput'

import isometricSearch from '../../assets/isometric_search.svg'
import { useNavbar } from '../../contexts/NavbarContext'
import { Container, Image, SearchSection, Text, TextSection, TextWrapper, Title } from './styles'

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
        <TextWrapper data-aos='zoom-out-down'>
          <Title>Geography Of Nations <i className="fas fa-globe-europe"></i></Title>
          <Text>
            You can search by <span>name</span>, <span>language</span> or <span>region</span>.
          </Text>
          <Text>
            So let's go... <span>Type</span> what you're looking for in the entry below and see <span>what happens</span>.
          </Text>
        </TextWrapper>
        <Image data-aos='zoom-out-up' src={isometricSearch} alt='A man searching something' />
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
