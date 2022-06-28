import styled from 'styled-components'

export const Container = styled.section`
  grid-template-columns: 1fr;
  display: grid;
  grid-gap: 16px;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 16px;

  @media screen and (min-width: 386px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 528px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Flag = styled.img`
  grid-column: 1/2;
  margin: 8px auto;
  max-height: 196px;
  max-width: 280px;
  outline: 2px solid ${props => props.theme.colors.primary};
  outline-offset: 4px;
  border-radius: 16px;

  @media screen and (min-width: 386px) {
    grid-column: 1/3;
  }

  @media screen and (min-width: 528px) {
    grid-column: 1/4;
  }
`

export const LinkMaps = styled.a`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  font-size: 1.2em;
  outline: 2px solid ${props => props.theme.colors.primary};
  outline-offset: 4px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 4px;
  grid-column: 1/2;
  transition: color .4s, background-color .4s;

  &:hover{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (min-width: 386px) {
    grid-column: 1/3;
  }

  @media screen and (min-width: 528px) {
    grid-column: 1/4;
  }
`

export const Text = styled.h3`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'} ;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
`

export const BordersContainer = styled.div`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'} ;
  grid-column: 1/2;
  padding: 8px;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 386px) {
    grid-column: 1/3;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 528px) {
    grid-column: 1/4;
    grid-template-columns: repeat(4, 1fr);
  }
`
