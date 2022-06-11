import React, { useEffect } from 'react'
import Aos from 'aos'
import { Button, Container, Content, HomeSection, Image, Text, Title } from './styles'

import undrawAroundTheWorld from '../../assets/undraw_around_the_world.svg'
import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'

const Home: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('home')
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <>
      <HomeSection>
        <Content data-aos='fade-right'>
          <Title>Welcome to the + Nations Project</Title>
          <Button>
            <Link to='/search'>
              Search
              <i className="fas fa-arrow-right"></i>
            </Link>
          </Button>
        </Content>
      </HomeSection>

      <Container>
        <Image data-aos='fade-right' src={undrawAroundTheWorld} alt="A girl seeing the world" />
        <Text data-aos='fade-left'>Search by nations and see their information! <i className="fas fa-globe-americas"></i></Text>
      </Container>
    </>
  )
}

export default Home
