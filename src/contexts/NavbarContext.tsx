import { createContext, ReactNode, useContext } from 'react'
import usePersistedState from '../utils/usePersistedState'

type navbarContextType = {
  selected: string,
  setSelected: (newState: string) => void,
  isOpen: boolean,
  setIsOpen: (newState: boolean) => void
}

type navbarContextProps = {
  children: ReactNode
}

const initialValue = {
  selected: 'home',
  setSelected: () => { },
  isOpen: false,
  setIsOpen: () => { }
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }: navbarContextProps) => {
  const [selected, setSelected] = usePersistedState('selected', initialValue.selected)
  const [isOpen, setIsOpen] = usePersistedState('isOpen', initialValue.isOpen)

  return (
    <NavbarContext.Provider value={{ selected, setSelected, isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}
