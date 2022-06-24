import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import { searchByNameDataType } from '../../types/data'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByName: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByNameDataType>({})

  const getData = useCallback((searchBy: string, value: string) => {
    if (value != '') {
      API.getData(searchBy, value)
        .then(data => {
          if (data == 404 || data == 500) {
            setErrPopUp({ show: true, message: 'Nation not found' })
          } else {
            setData(data[0])
          }
        })
    }
  }, [])

  useEffect(() => {
    getData('name', value)
  }, [value])

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
    <>
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
    </>
  )
}

export default DataByName
