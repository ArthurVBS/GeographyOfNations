import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const Select = styled.select`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  height: 42px;
  letter-spacing: 1px;
  font-family: 'Quicksand',sans-serif;
  font-weight: 600;
  font-size: .8em;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-right: none;
`

export const Option = styled.option`
`

export const Input = styled.input`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  letter-spacing: 1px;
  font-size: .8em;
  font-weight: 600;
  height: 42px;
  width: 150px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-right: none;
  transition: width .4s, color .4s;

  &:hover, &:focus{
    width: 175px;
  }

  &::placeholder{
    letter-spacing: 1px;
  }

  @media screen and (min-width: 528px) {
    width: 200px;
    &:hover, &:focus{
      width: 280px;
    }
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  height: 42px;
  font-size: 1.1em;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-left: none;
  padding: 8px;
  transition: color .4s;

  &:hover{
    color: ${props => props.theme.colors.text};
  }
`
