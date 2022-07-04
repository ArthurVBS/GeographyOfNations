import styled from 'styled-components'

export const Container = styled.main`

`

export const HomeSection = styled.section`
  background: linear-gradient(#00000060, #000000D0 100%), url('./pexels_world_and_pins.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  padding: 16px;

  @media screen and (min-width: 528px) {
    background: linear-gradient(to right, #00000080, #000000F0 100%), url('./pexels_world_and_pins.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 528px) {
    align-items: flex-start;
    width: 45%;
    margin-left: 6%;
  }
`

export const Title = styled.h2`
  color: #FAFAED;
  font-size: 1.8em;
  letter-spacing: 1px;
  text-align: center;

  @media screen and (min-width: 528px) {
    font-size: 2em;
    text-align: left;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 8px;

  a{
    color: ${props => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 1.4em;
    padding: 8px 32px;
    transition: all .4s;

    &:hover > i{
      color: ${props => props.theme.colors.primary};
    }

    i{
      font-size: .9em;
      transition: all .4s;
      animation: 1s infinite alternate comeAndGo;
      animation-delay: 1s;
    }
  }

  @keyframes comeAndGo {
    from{
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
`

export const TextSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  gap: 32px;
  padding: 16px;
`

export const ContactSection = styled.section`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  gap: 32px;
  padding: 16px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`

export const RoundedImage = styled.img`
  width: 100%;
  max-width: 180px;
  border: 4px solid ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  border-radius: 16px;
`

export const TextWrapper = styled.div`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px 16px;
  border-radius: 16px;
  padding: 16px;

  @media screen and (min-width: 528px) {
    flex-direction: row;
  }
`

export const Text = styled.p`
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-size: 1.4em;
  width: 100%;
  max-width: 400px;

  span {
    font-weight: 600;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.primary};
  }
`
