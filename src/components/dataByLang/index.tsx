import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import NationCard from '../nationCard'
import { searchByLangDataType } from '../../types/data'
import { Container, Title } from './styles'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByLang: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByLangDataType>([])
  const [currLang, setCurrLang] = useState('')

  const getData = useCallback((searchBy: string, value: string) => {
    if (value != '') {
      API.getData(searchBy, value)
        .then(data => {
          if (data == 404 || data == 500) {
            setErrPopUp({ show: true, message: 'Nations not found' })
          } else {
            setCurrLang(value)
            setData(data)
          }
        })
    }
  }, [])

  useEffect(() => {
    getData('lang', value)
  }, [value])

  const renderNations = () => {
    return data.map((nation) => {
      return (
        <NationCard key={nation?.name?.common} nation={nation} details={{ continents: true, languages: false }} />
      )
    })
  }

  const renderData = () => {
    if (value != '') {
      return (
        <Container>
          <Title>
            <i className="fas fa-language"></i>
            {currLang != '' ? currLang : 'Searching'} - {data.length}
            <i className="fas fa-language"></i>
          </Title>

          {renderNations()}
        </Container>
      )
    }
    return null
  }

  return renderData()
}

export default DataByLang
