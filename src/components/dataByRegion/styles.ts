import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'} ;
  grid-column: 1/2;
  padding: 8px;

  display: grid;
  grid-template-columns: 1fr;

@media screen and (min-width: 386px) {
  grid-column: 1/3;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 528px) {
  grid-column: 1/4;
  grid-template-columns: repeat(3, 1fr);
}

@media screen and (min-width: 728px) {
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (min-width: 1028px) {
  grid-template-columns: repeat(5, 1fr);
}
`

export const Title = styled.h2`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'} ;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  grid-column: 1/2;

@media screen and (min-width: 386px) {
  grid-column: 1/3;
}

@media screen and (min-width: 528px) {
  grid-column: 1/4;
}

@media screen and (min-width: 728px) {
  grid-column: 1/5;
}

@media screen and (min-width: 1028px) {
  grid-column: 1/6;
}
`
