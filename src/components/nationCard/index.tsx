import React from 'react'

import SquareFlag from '../squareFlag'
import getLanguages from '../../utils/getLanguages'

import { Container, Title, Text, Box, Icon } from './styles'
import { searchByNameDataType } from '../../types/data'

type Props = {
  nation?: searchByNameDataType,
  details: {
    continents: boolean
    languages: boolean
  }
}

const NationCard: React.FC<Props> = ({ nation, details }) => {

  const renderLanguages = () => {
    return (
      <Box>
        <Icon className='fas fa-language' ></Icon>
        <Text>{getLanguages(nation?.languages)}</Text>
      </Box>
    )
  }

  const renderRegion = () => {
    return (
      <Box>
        <Icon className='fas fa-globe-americas' ></Icon>
        <Text>{nation?.continents}</Text>
      </Box>
    )
  }

  return (
    <Container data-aos='fade-up'>
      <Title>{nation?.name?.common}</Title>
      <SquareFlag map={nation?.maps?.googleMaps} size='96px' src={nation?.flags?.svg} alt='Nation flag' />
      <Box>
        <Icon className='fas fa-city'></Icon>
        <Text>{nation?.capital?.toString().replace(/,/g, ', ')}</Text>
      </Box>
      {details.continents ? renderRegion() : null}
      {details.languages ? renderLanguages() : null}
    </Container>
  )
}

export default NationCard
