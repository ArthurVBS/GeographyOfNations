import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import PopUp from '../../components/popUp'
import SearchInput from '../../components/searchInput'
import { useNavbar } from '../../contexts/NavbarContext'
import { searchByNameDataType } from '../../types/data'

const Search: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  const [data, setData] = useState<searchByNameDataType>({})
  const [name, setName] = useState('')
  const [searchBy, setSearchBy] = useState('name')
  const [errPopUp, setErrPopUp] = useState(false)

  const getNationData = useCallback((searchBy: string, name: string) => {
    if (name != '') {
      API.getData(searchBy, name)
        .then(data => data !== 404
          ? setData(data[0])
          : setErrPopUp(true)
        )
    }
  }, [])

  useEffect(() => {
    getNationData(searchBy, name)
  }, [searchBy, name])

  const getCurrencies = (currenciesData: Object | undefined) => {
    if (currenciesData != undefined) {
      const size = Object.keys(currenciesData).length
      const currencies = []

      for (let i = 0; i < size; i++) {
        const newCurrenciesData = {
          curr: Object.keys(currenciesData)[i],
          name: Object.values(currenciesData)[i].name,
          symbol: Object.values(currenciesData)[i].symbol
        }
        currencies.push(newCurrenciesData)
      }

      return currencies
    }
  }

  const renderCurrencies = () => {
    return (
      <ul>
        {getCurrencies(data.currencies)?.map((currencies) => {
          return (
            <li key={currencies.curr}>
              {`${currencies.curr} - ${currencies.name} - ${currencies.symbol}`}
            </li>
          )
        })}
      </ul>
    )
  }

  const getLanguages = (languagesData: Object | undefined) => {
    if (languagesData != undefined) {
      const size = Object.keys(languagesData).length
      const languages = []

      for (let i = 0; i < size; i++) {
        const newLanguagesData = {
          name: Object.values(languagesData)[i]
        }
        languages.push(newLanguagesData)
      }

      return languages
    }
  }

  const renderLanguages = () => {
    return (
      <ul>
        {getLanguages(data.languages)?.map((langs) => {
          return (
            <li key={langs.name}>
              {langs.name}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <main>
      <SearchInput searchBy={searchBy} setSearchBy={setSearchBy} setName={setName} />

      <h1>Name: {data.name?.common}</h1>
      <h3>Capital: {data.capital?.toString().replace(/,/g, ', ')}</h3>
      <h3>Continents: {data.continents}</h3>
      <h3>Borders: {data.borders?.toString().replace(/,/g, ', ')}</h3>
      <h3>Population: {data.population?.toLocaleString('pt-BR')}</h3>
      <h3>Currencies:</h3>
      {renderCurrencies()}
      <h3>Languages:</h3>
      {renderLanguages()}
      <img width='256px' src={data.flags?.svg} alt="Nation flag" />

      {errPopUp ? <PopUp message='Nation not found' setErrPopUp={setErrPopUp} /> : null}

    </main>
  )
}

export default Search
