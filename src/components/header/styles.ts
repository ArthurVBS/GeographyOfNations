import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.main.primary};
  z-index: 2;
  position: sticky;
  display: flex;
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

export const ToggleSidebar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  border: none;

  @media screen and (min-width: 528px) {
    display: none;
  }
`
