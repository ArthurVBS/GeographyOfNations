import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import NationCard from '../nationCard'
import { searchByRegionDataType } from '../../types/data'
import { Container, Title } from './styles'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByRegion: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByRegionDataType>([])
  const [currRegion, setCurrRegion] = useState('')

  const getData = useCallback((searchBy: string, value: string) => {
    if (value != '') {
      API.getData(searchBy, value)
        .then(data => {
          if (data == 404 || data == 500) {
            setErrPopUp({ show: true, message: 'Nations not found' })
          } else {
            setCurrRegion(value)
            setData(data)
          }
        })
    }
  }, [])

  useEffect(() => {
    getData('region', value)
  }, [value])

  const renderNations = () => {
    return data.map((nation) => {
      return (
        <NationCard key={nation?.name?.common} nation={nation} details={{ continents: false, languages: true }} />
      )
    })
  }

  const renderData = () => {
    if (value != '') {
      return (
        <Container>
          <Title>
            <i className="fas fa-globe-americas"></i>
            {currRegion != '' ? currRegion : 'Searching'} - {data.length}
            <i className="fas fa-globe-africa"></i>
          </Title>

          {renderNations()}
        </Container>
      )
    }
    return null
  }

  return renderData()
}

export default DataByRegion
