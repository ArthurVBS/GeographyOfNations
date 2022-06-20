import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import SearchInput from '../../components/searchInput'
import { useNavbar } from '../../contexts/NavbarContext'

type dataType = {
  borders?: string | string[],
  capital?: string | string[],
  continents?: string,
  currencies?: Object,
  flags?: { svg: string }
  languages?: Object,
  name?: { common: string | string[] },
  population?: number
}

const SearchByName: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  const [data, setData] = useState<dataType>({})
  const [name, setName] = useState('Brazil')
  const [type, setType] = useState('name')

  const getNationData = useCallback((type: string, name: string) => {
    API.getData(type, name)
      .then(data => data != undefined
        ? setData(data[0])
        : console.log('Show Error PopUp'))
  }, [])

  useEffect(() => {
    getNationData(type, name)
  }, [type, name])

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

  return (
    <main>
      <h1>Name: {data.name?.common}</h1>
      <h3>Capital: {data.capital?.toString().replace(/,/g, ', ')}</h3>
      <h3>Continents: {data.continents}</h3>
      <h3>Borders: {data.borders?.toString().replace(/,/g, ', ')}</h3>
      <h3>Population: {data.population?.toLocaleString('pt-BR')}</h3>
      <h3>Currencies:</h3>
      <ul>
        {getCurrencies(data.currencies)?.map((currencies) => {
          return (
            <li key={currencies.curr}>
              {`${currencies.curr} - ${currencies.name} - ${currencies.symbol}`}
            </li>
          )
        })}
      </ul>
      <h3>Languages:</h3>
      <ul>
        {getLanguages(data.languages)?.map((langs) => {
          return (
            <li key={langs.name}>
              {langs.name}
            </li>
          )
        })}
      </ul>
      <img width='256px' src={data.flags?.svg} alt="Nation flag" />


      <SearchInput setName={setName} />

    </main>
  )
}

export default SearchByName
