import styled from 'styled-components'

interface FlagProps {
  size: string
}

export const Flag = styled.img<FlagProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  cursor: pointer;
  object-fit: cover;
  object-position: center;
  border: 4px solid ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  border-radius: 16px;
  transition: width .4s;

  &:hover{
    width: calc(${props => props.size} * 1.5);
  }
`
