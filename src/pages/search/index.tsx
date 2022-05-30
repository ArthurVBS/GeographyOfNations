import React, { useEffect } from 'react'
import Aos from 'aos'

import Footer from '../../components/footer'
import Header from '../../components/header'
import SearchCard from '../../components/searchCard'

import { SearchContainer } from './styles'

import undrawExploring from '../../assets/undraw_exploring.svg'
import undrawBestPlace from '../../assets/undraw_best_place.svg'
import undrawThingsToSay from '../../assets/undraw_things_to_say.svg'

const Search: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <>
      <Header selected={'search'} />

      <SearchContainer data-aos='fade-up'>
        <SearchCard title='Search by Name' path='/search/name'
          image={{ url: undrawBestPlace, alt: 'A locator in a city' }}></SearchCard>

        <SearchCard title='Search by Language' path='/search/lang'
          image={{ url: undrawThingsToSay, alt: 'A girl holding a balloon with text' }}></SearchCard>

        <SearchCard title='Search by Region' path='/search/Region'
          image={{ url: undrawExploring, alt: 'A girl exploring mountains' }}></SearchCard>
      </SearchContainer>

      <Footer />
    </>
  )
}

export default Search
