import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyles from './styles/global'
import light from './styles/theme/light'
import dark from './styles/theme/dark'

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
