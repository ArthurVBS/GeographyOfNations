import styled from 'styled-components'

export const HomeSection = styled.section`
  background: linear-gradient(#00000060, #000000D0 100%), url('./src/assets/pexels_world_and_pins.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  padding: 16px;

  @media screen and (min-width: 528px) {
    background: linear-gradient(to right, #00000080, #000000F0 100%), url('./src/assets/pexels_world_and_pins.jpg');
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
  color: ${props => props.theme.main.primary};
  font-size: 1.8em;
  letter-spacing: 1px;
  text-align: center;

  @media screen and (min-width: 528px) {
    font-size: 2em;
    text-align: left;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.main.primary};
  border: none;
  border-radius: 8px;

  a{
    color: ${props => props.theme.contrast.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 1.4em;
    padding: 8px 32px;
    transition: all .3s;

    &:hover > i{
      color: ${props => props.theme.color.primary};
    }

    i{
      font-size: .9em;
      transition: all .3s;
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

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap-reverse;
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

export const Text = styled.p`
  text-align: center;
  font-size: 1.4em;
  width: 100%;
  max-width: 400px;
`
