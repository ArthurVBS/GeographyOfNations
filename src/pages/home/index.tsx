import React, { useEffect } from 'react'
import Aos from 'aos'
import { Button, Container, Content, HomeSection, Image, Text, TextSection, Title } from './styles'

import isometricCoding from '../../assets/isometric_coding.svg'
import isometricWeb from '../../assets/isometric_web.svg'
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
    <Container>
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

      <TextSection>
        <Image data-aos='fade-right' src={isometricWeb} alt="A girl seeing the world" />
        <Text data-aos='fade-left'>Search by nations, languages, regions and see their information! <i className="fas fa-globe-americas"></i></Text>
      </TextSection>

      <TextSection>
        <Text data-aos='fade-right'>Search by nations, languages, regions and see their information! <i className="fas fa-globe-americas"></i></Text>
        <Image data-aos='fade-left' src={isometricCoding} alt="A girl seeing the world" />
      </TextSection>
    </Container>
  )
}

export default Home
