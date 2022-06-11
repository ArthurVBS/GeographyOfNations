import React, { useEffect } from 'react'
import SearchCard from '../../components/searchCard'

import { SearchContainer } from './styles'

import undrawExploring from '../../assets/undraw_exploring.svg'
import undrawBestPlace from '../../assets/undraw_best_place.svg'
import undrawThingsToSay from '../../assets/undraw_things_to_say.svg'
import { useNavbar } from '../../contexts/NavbarContext'

const Search: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('search')
  }, [])

  return (
    <SearchContainer>
      <SearchCard title='Search by Name' path='/search/name'
        image={{ url: undrawBestPlace, alt: 'A locator in a city' }}></SearchCard>

      <SearchCard title='Search by Language' path='/search/lang'
        image={{ url: undrawThingsToSay, alt: 'A girl holding a balloon with text' }}></SearchCard>

      <SearchCard title='Search by Region' path='/search/Region'
        image={{ url: undrawExploring, alt: 'A girl exploring mountains' }}></SearchCard>
    </SearchContainer>
  )
}

export default Search
