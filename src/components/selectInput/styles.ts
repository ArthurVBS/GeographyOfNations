import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const Label = styled.label`
  font-size: 1.15em;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-right: none;
  padding: 8px;
  padding-right: 0px;
`

export const Select = styled.select`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-family: 'Quicksand',sans-serif;
  font-size: 1.1em;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-left: none;
  padding: 8px;
  padding-left: 0px;
`

export const Option = styled.option`
`
