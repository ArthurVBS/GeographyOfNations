import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <Routes />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
