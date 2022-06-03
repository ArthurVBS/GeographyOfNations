import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
  padding: 16px;
  outline-offset: 2px;
  outline: 2px solid transparent;
  border-radius: 8px;
  border: 2px solid transparent;
  z-index: 1;
  transition: all .4s;

  &:hover{
    border: 2px solid ${props => props.theme.contrast.primary};
    outline: 2px solid ${props => props.theme.contrast.primary};
  }

  a{
    color: ${props => props.theme.contrast.primary}
  }
`

export const Image = styled.img`
  width: 260px;
  height: 260px;
`

export const Title = styled.h2`
  text-align: center;
  letter-spacing: 1px;
`
