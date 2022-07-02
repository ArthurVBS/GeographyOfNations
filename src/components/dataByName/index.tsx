import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import DataByCod from '../dataByCod'

import getCurrencies from '../../utils/getCurrencies'
import getLanguages from '../../utils/getLanguages'

import { searchByNameDataType } from '../../types/data'
import { BordersContainer, BordersTitle, Container, Flag, LinkMaps, Text } from './styles'

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

  const renderBorderNations = () => {
    if (data.borders != undefined) {
      return (
        <BordersContainer>
          <BordersTitle>
            <i className="fas fa-border-none"></i>
            Borders - {data.borders.length}
            <i className="fas fa-border-none"></i>
          </BordersTitle>

          {data.borders?.map((nation) => {
            return <DataByCod key={nation} value={nation} setErrPopUp={setErrPopUp} />
          })}
        </BordersContainer>
      )
    }
  }

  const renderData = () => {
    if (value != '') {
      return (
        <Container>
          <Flag src={data.flags?.svg} alt="Nation flag" />

          <Text><i className="fas fa-flag"></i> {data.name?.common}</Text>
          <Text><i className="fas fa-city"></i> {data.capital?.toString().replace(/,/g, ', ')}</Text>
          <Text><i className="fas fa-globe-americas"></i> {data.continents}</Text>
          <Text><i className="fas fa-users"></i> {data.population?.toLocaleString('pt-BR')}</Text>
          <Text><i className="fas fa-language"></i> {getLanguages(data.languages)}</Text>
          <Text><i className="fas fa-coins"></i> {getCurrencies(data.currencies)}</Text>

          {renderBorderNations()}

          <LinkMaps href={data.maps?.googleMaps} target='_blank'>
            <i className="fas fa-map-marked-alt"></i>
          </LinkMaps>
        </Container>
      )
    }

    return null
  }

  return renderData()
}

export default DataByName
