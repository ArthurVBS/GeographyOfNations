import styled from 'styled-components'

interface IconBoxProps {
  selected: boolean
}

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.nav<ContainerProps>`
  background-color: ${props => props.theme.colors.background};
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  transition: all .4s;
  transform: ${props => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 528px) {
    position: static;
    min-width: inherit;
    min-height: inherit;
    flex-direction: row;
    transform: none;
  }
`

export const IconLink = styled.div<IconBoxProps>`
  border: none;
  z-index: 15;
  cursor: pointer;
  margin: 0px 8px;
  transition: all .4s;

  a{
    color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.text};
    text-decoration: 2px underline transparent;
    letter-spacing: 1px;
    font-size: 1.8em;
    font-weight: 700;
    transition: all .4s;

    &:hover{
      text-decoration: 2px underline ${props => props.selected ? props.theme.colors.primary : props.theme.colors.text};
    }

    @media screen and (min-width: 528px) {
      font-size: 1.1em;
    }
  }
`
