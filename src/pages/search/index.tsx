import React, { useEffect, useState } from 'react'

import DataByLang from '../../components/dataByLang'
import DataByName from '../../components/dataByName'
import DataByRegion from '../../components/dataByRegion'
import PopUp from '../../components/popUp'
import SearchInput from '../../components/searchInput'
import { useNavbar } from '../../contexts/NavbarContext'

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
    <main>
      <SearchInput searchBy={searchBy} setSearchBy={setSearchBy} setValue={setValue} setErrPopUp={setErrPopUp} />

      {renderData()}
      {renderError()}
    </main>
  )
}

export default Search
