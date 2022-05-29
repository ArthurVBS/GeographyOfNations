import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

// import { Container } from './styles'

const SearchByName: React.FC = () => {
  return(
    <>
      <Header selected='search' />
      <h1>Search By Name</h1>
      <Footer />
    </>
  )
}

export default SearchByName