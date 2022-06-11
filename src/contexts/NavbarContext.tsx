import { createContext, ReactNode, useContext, useState } from 'react'

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
  setSelected: () => {},
  isOpen: false,
  setIsOpen: () => {}
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({children} : navbarContextProps) => {
  const [selected, setSelected] = useState(initialValue.selected)
  const [isOpen, setIsOpen] = useState(initialValue.isOpen)

  return (
    <NavbarContext.Provider value={{selected, setSelected, isOpen, setIsOpen}}>
      {children}
    </NavbarContext.Provider>
  )
}
