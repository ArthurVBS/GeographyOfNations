import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './components/header'
import Footer from './components/footer'

import GlobalStyles from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { NavbarContextProvider } from './contexts/NavbarContext'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <NavbarContextProvider>
          <Header/>
        </NavbarContextProvider>
        <Routes />
        <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
