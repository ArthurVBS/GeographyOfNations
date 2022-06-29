import React, { useCallback, useEffect, useState } from 'react'
import Aos from 'aos'

import API from '../../api/connection'
import SquareFlag from '../squareFlag'
import { searchByCodDataType } from '../../types/data'
import { Box, Container, Icon, Text, Title } from './styles'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByCod: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByCodDataType>({})

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
    getData('alpha', value)
  }, [value])

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container data-aos='fade-up'>
      <Title>{data.name?.common}</Title>
      <SquareFlag map={data.maps?.googleMaps} size='96px' src={data.flags?.svg} alt='Nation flag' />
      <Box>
        <Icon className="fas fa-city"></Icon>
        <Text>{data.capital?.toString().replace(/,/g, ', ')}</Text>
      </Box>
      <Box>
        <Icon className="fas fa-globe-americas"></Icon>
        <Text>{data.continents}</Text>
      </Box>
    </Container>
  )
}

export default DataByCod
