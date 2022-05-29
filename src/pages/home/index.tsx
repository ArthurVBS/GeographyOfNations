import React from 'react'
import { Container, Image } from './styles'

import Footer from '../../components/footer'
import Header from '../../components/header'

import undrawAroundTheWorld from '../../assets/undraw_around_the_world.svg'

const Home: React.FC = () => {
  return(
    <>
      <Header selected='home' />
      <Container>
        <h1>Home</h1>
        <Image src={undrawAroundTheWorld} alt="A girl seeing the world" />
      </Container>
      <Footer />
    </>
  )
}

export default Home
