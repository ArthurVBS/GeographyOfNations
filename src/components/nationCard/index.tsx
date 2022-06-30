import React, { useEffect } from 'react'
import Aos from 'aos'

import SquareFlag from '../squareFlag'
import { Container, Title, Text, Box, Icon } from './styles'
import { searchByNameDataType } from '../../types/data'

type Props = {
  nation?: searchByNameDataType
}

const NationCard: React.FC<Props> = ({ nation }) => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container data-aos='fade-up'>
      <Title>{nation?.name?.common}</Title>
      <SquareFlag map={nation?.maps?.googleMaps} size='96px' src={nation?.flags?.svg} alt='Nation flag' />
      <Box>
        <Icon className="fas fa-city"></Icon>
        <Text>{nation?.capital?.toString().replace(/,/g, ', ')}</Text>
      </Box>
      <Box>
        <Icon className="fas fa-globe-americas"></Icon>
        <Text>{nation?.continents}</Text>
      </Box>
    </Container>
  )
}

export default NationCard
