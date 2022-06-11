import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
  padding: 16px;
  z-index: 1;
  transition: all .4s;

  a{
    color: ${props => props.theme.colors.text};

    &:hover{
      color: ${props => props.theme.colors.primary};
    }
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
