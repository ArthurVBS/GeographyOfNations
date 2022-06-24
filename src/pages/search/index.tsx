import React, { useEffect, useState } from 'react'

import DataByName from '../../components/dataByName'
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
    if (searchBy == 'name') {
      return <DataByName searchBy={searchBy} value={value} setErrPopUp={setErrPopUp} />
    }
    else {
      return <h2>Working in progress</h2>
    }
  }

  return (
    <main>
      <SearchInput searchBy={searchBy} setSearchBy={setSearchBy} setValue={setValue} setErrPopUp={setErrPopUp} />

      <p>Search By {searchBy}</p>
      <p>Input Value {value}</p>

      {renderData()}

      {errPopUp.show ? <PopUp message={errPopUp.message} setErrPopUp={setErrPopUp} /> : null}
    </main>
  )
}

export default Search
