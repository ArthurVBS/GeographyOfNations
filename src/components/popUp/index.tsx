import React, { useState } from 'react'
import { Container, Text } from './styles'

type Props = {
  message: string
  setErrPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp: React.FC<Props> = ({ message, setErrPopUp }) => {
  const [isHide, setIsHide] = useState(false)

  setTimeout(() => {
    setIsHide(true)
    setErrPopUp(false)
  }, 3000)

  return (
    <Container isHide={isHide}>
      <Text>{message}</Text>
    </Container>
  )
}

export default PopUp
