import React, { useEffect } from 'react'
import { Button, ContactSection, Container, Content, HomeSection, Image, RoundedImage, Text, TextSection, TextWrapper, Title } from './styles'

import isometricCoding from '../../assets/isometric_coding.svg'
import isometricWeb from '../../assets/isometric_web.svg'
import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'

const Home: React.FC = () => {
  const { setSelected } = useNavbar()

  useEffect(() => {
    setSelected('home')
  }, [])

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
        <Image data-aos='fade-right' src={isometricWeb} alt="A man seeing the world" />
        <Text data-aos='fade-left'>Search by <span>name</span>, <span>language</span> or <span>region</span> and see their information! <i className="fas fa-globe-americas"></i></Text>
      </TextSection>

      <ContactSection>
        <Image data-aos='fade-up' src={isometricCoding} alt="A man writing code" />
        <TextWrapper data-aos='fade-right' >
          <RoundedImage src="https://avatars.githubusercontent.com/u/84406367?v=4" alt="Arthur, the developer." />
          <Text style={{ maxWidth: '728px' }}>Hi! <i className="far fa-hand-peace"></i> I'm <span>Arthur V.B.S.</span> <br /><br /> Creator <i className="fas fa-tools"></i> and Developer <i className="fas fa-laptop-code"></i> of the <span>'+ Nations'</span> project.</Text>
        </TextWrapper>
      </ContactSection>
    </Container>
  )
}

export default Home
