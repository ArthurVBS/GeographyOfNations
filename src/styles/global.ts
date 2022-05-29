import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

type ThemeType = typeof theme

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
`
