import { useContext } from 'react'
import { themeContext } from './ThemeProvider'

const useTheme = () => {

  const theme = useContext(themeContext)
  return { theme }
}

export default useTheme