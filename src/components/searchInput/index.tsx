import React from 'react'
import { Button, Container, Input } from './styles'

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>
}

const SearchInput: React.FC<Props> = ({ setName }) => {
  const getInputData = () => {
    const inputText = document.getElementById('input-text') as HTMLInputElement
    if (inputText != undefined && inputText != null) {
      setName(inputText.value)
      inputText.value = ''
    }
  }

  const handleClick = () => {
    getInputData()
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      getInputData()
    }
  }

  return (
    <Container>
      <Input onKeyPress={handleKeyPress} type='text' placeholder='type here :)' id='input-text' />
      <Button onClick={() => handleClick()}><i className="fas fa-search"></i></Button>
    </Container>
  )
}

export default SearchInput
