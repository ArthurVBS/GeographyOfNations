import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

// import { Container } from './styles'

const SearchByLang: React.FC = () => {
  return (
    <>
      <Header selected={'search'} />
      <h1>Search By Lang</h1>
      <Footer />
    </>
  )
}

export default SearchByLang
