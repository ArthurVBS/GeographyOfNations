import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

// import { Container } from './styles'

const Search: React.FC = () => {
  return(
    <>
      <Header selected={'search'} />
      <h1>Search</h1>
      <Footer />
    </>
  )
}

export default Search
