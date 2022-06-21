import React, { useState } from 'react'
import { Container, Text } from './styles'

type Props = {
  message: string
}

const PopUp: React.FC<Props> = ({ message }) => {
  const [isHide, setIsHide] = useState(false)

  setTimeout(() => {
    setIsHide(true)
  }, 3000)

  return (
    <Container isHide={isHide}>
      <Text>{message}</Text>
    </Container>
  )
}

export default PopUp
