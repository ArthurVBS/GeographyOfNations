import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  text-align: center;
  min-width: 256px;
`

export const Button = styled.button`
  min-width: 64px;
`
