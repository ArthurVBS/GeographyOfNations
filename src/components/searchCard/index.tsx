import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Image, Title } from './styles'

type Props = {
  image: { url: string, alt: string },
  title: string,
  path: string
}

const SearchCard: React.FC<Props> = ({ image, title, path }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container >
      <Link to={path} data-aos='fade-up'>
        <Title>{title}</Title>
        <Image src={image.url} alt={image.alt} />
      </Link>
    </Container>
  )
}

export default SearchCard
