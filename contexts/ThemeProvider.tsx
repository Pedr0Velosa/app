import React, { createContext } from 'react'

type themeType = {
  tabs: {
    active: string,
    inactive: string,
  },
  darkBackground: string,
  ligthBackground: string,
  secondaryColor: string,
  mainColor: string,
  ligthColor: string
}

export const themeContext = createContext<themeType>({} as themeType)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const theme: themeType = {
    tabs: {
      active: '#F06',
      inactive: '#333',
    },
    darkBackground: '#08090b',
    secondaryColor: '#68747b',
    mainColor: '#F06',
    ligthBackground: '#262a2d',
    ligthColor: '#93999c'
  }

  return (
    <themeContext.Provider value={theme}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider