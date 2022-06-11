import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
`

export const Icon = styled.i`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2em;
  padding: 6px;
  transition: transform .4s;

  &:hover{
    transform: rotateZ(-67deg);
  }
`
