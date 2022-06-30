import React, { useEffect } from 'react'
import Aos from 'aos'

import SquareFlag from '../squareFlag'
import { Container, Title, Text, Box, Icon } from './styles'
import { searchByNameDataType } from '../../types/data'

type Props = {
  nation?: searchByNameDataType,
  details: string
}

const NationCard: React.FC<Props> = ({ nation, details }) => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  const getLanguages = (languagesData?: object) => {
    if (languagesData != undefined) {
      const MAX_LANGUAGES = 3
      const size = Object.keys(languagesData).length
      const languages = []

      for (let i = 0; i < size; i++) {
        if (i < MAX_LANGUAGES) {
          const newLanguagesData = Object.values(languagesData)[i]
          languages.push(newLanguagesData)
        }
      }

      return languages
    }
  }

  const renderDetails = (details: string) => {
    switch (details) {
      case 'continents':
        return nation?.continents
      case 'languages':
        return getLanguages(nation?.languages)?.toString().replace(/,/g, ', ')
      default:
        return ''
    }
  }

  const renderIcon = () => {
    switch (details) {
      case 'continents':
        return 'fas fa-globe-americas'
      case 'languages':
        return 'fas fa-language'
      default:
        return ''
    }
  }

  return (
    <Container data-aos='fade-up'>
      <Title>{nation?.name?.common}</Title>
      <SquareFlag map={nation?.maps?.googleMaps} size='96px' src={nation?.flags?.svg} alt='Nation flag' />
      <Box>
        <Icon className='fas fa-city'></Icon>
        <Text>{nation?.capital?.toString().replace(/,/g, ', ')}</Text>
      </Box>
      <Box>
        <Icon className={renderIcon()} ></Icon>
        <Text>{renderDetails(details)}</Text>
      </Box>
    </Container>
  )
}

export default NationCard
