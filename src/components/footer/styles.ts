import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${props => props.theme.main.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  padding: 16px;
`

export const Text = styled.p`
  color: ${props => props.theme.contrast.primary};
  font-weight: 700;
  text-align: center;
  opacity: .7;
  transition: all .4s;

  &:hover{
    opacity: 1;
  }

  a{
    color: ${props => props.theme.color.primary};
    text-decoration: none;
    transition: all .4s;

    &:hover{
      letter-spacing: 1px;
    }
  }

`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Link = styled.a`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration: none;
  opacity: .7;
  transition: all .4s;

  &:hover{
    opacity: 1;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.main.primary};
  font-size: 1.1em;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: none;
  opacity: .7;
  transition: all .4s;

  &:hover{
    opacity: 1;
  }
`
