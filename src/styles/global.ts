import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

type ThemeType = typeof theme

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${props => (props.theme.color.primary)} ${props => props.theme.main.secondary};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }
  *::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    background: ${props => props.theme.main.primary};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color.primary};
    border-radius: 8px;
    border: 4px solid ${props => props.theme.main.primary};
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #707070;
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: #909090;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: ${props => props.theme.main.primary};
    font-family: 'Quicksand', sans-serif;
  }
`
