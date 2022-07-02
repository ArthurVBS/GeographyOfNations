import styled from 'styled-components'

export const Container = styled.main`
`

export const TextSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 528px) {
    grid-template-columns: 3fr 2fr;
  }

`

export const SearchSection = styled.section`
`

export const Image = styled.img`
  width: 220px;
  margin: 16px auto;
`

export const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 2em;
  text-align: center;
  margin-bottom: 16px;

  i {
    animation: rotation 5s infinite linear;
  }

  @keyframes rotation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(359deg);
  }
}

  &::before{
    color: ${props => props.theme.colors.primary};
    content: '>';
    margin-right: 8px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  padding: 8px;
`

export const Text = styled.p`
  text-indent: 1.5em;
  font-size: 1.4em;
  line-height: 1.5em;
  text-align: justify;

  span {
    font-weight: 600;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.primary};
  }
`
