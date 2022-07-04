import React from 'react'
import { Button, Container, Link, LinkWrapper, Text } from './styles'

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Text>
        Made with <span>♡</span> and React by <a href='https://github.com/ArthurVBS/GeographyOfNations' target='_blank' rel='external noreferrer'>Arthur V.B.S.</a>
      </Text>

      <LinkWrapper>
        <Link href="https://github.com/ArthurVBS" target='_blank'>GitHub</Link>
        <Link href="https://linkedin.com/in/arthurvbs/" target='_blank'>LinkedIn</Link>
        <Button onClick={() => handleClick()}><i className="fas fa-angle-up"></i></Button>
      </LinkWrapper>
    </Container>
  )
}

export default Footer
