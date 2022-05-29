import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Image, Title } from './styles'

type Props = {
  image: {url : string, alt : string},
  title : string,
  path : string
}

const SearchCard: React.FC<Props> = ({image, title, path}) => {
  return(
    <Container>
      <Link to={path}>
        <Title>{title}</Title>
        <Image src={image.url} alt={image.alt} />
      </Link>
    </Container>
  )
}

export default SearchCard
