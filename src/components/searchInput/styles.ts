import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const Input = styled.input`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 1.1em;
  width: 200px;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-right: none;
  padding: 8px;
  transition: width .4s, color .4s;

  &:hover, &:focus{
    width: 280px;

    &::placeholder{
      color: ${props => props.theme.colors.text};
    }
  }

  &::placeholder{
    font-size: .8em;
    letter-spacing: 1px;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
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
