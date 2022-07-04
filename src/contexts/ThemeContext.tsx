import { createContext, ReactNode, useContext } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../styles/theme/light'
import usePersistedState from '../utils/usePersistedState'

type themeContextType = {
  theme: DefaultTheme,
  setTheme: (newState: DefaultTheme) => void
}

type themeContextProps = {
  children: ReactNode
}

const initialValue = {
  theme: light,
  setTheme: () => { }
}

const ThemeContext = createContext<themeContextType>(initialValue)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }: themeContextProps) => {
  const [theme, setTheme] = usePersistedState('theme', initialValue.theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
