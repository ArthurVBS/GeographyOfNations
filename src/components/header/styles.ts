import styled from 'styled-components'

interface IconBoxProps {
  selected: boolean
}

export const Container = styled.header`
  background-color: ${props => props.theme.main.primary};
  position: sticky;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
`

export const Logo = styled.h3`
  color: ${props => props.theme.contrast.primary};
  letter-spacing: 1px;
  font-size: 1.3em;
`

export const Nav = styled.nav`
  display: flex;
  padding: 8px;
  border-radius: 20px;
`

export const IconLink = styled.div<IconBoxProps>`
  border: none;
  cursor: pointer;
  margin: 0px 8px;

  a{
    color: ${props => props.selected ? props.theme.color.primary : props.theme.contrast.primary};
    text-decoration: 2px underline ${props => props.theme.main.primary};
    letter-spacing: 1px;
    font-weight: 700;
    transition: all .3s ease-in-out;

    &:hover{
      text-decoration: 2px underline ${props => props.selected ? props.theme.color.primary : props.theme.contrast.primary};
    }
  }
`
