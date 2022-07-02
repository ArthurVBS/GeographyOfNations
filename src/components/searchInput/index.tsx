import React, { useEffect } from 'react'
import Aos from 'aos'
import { Button, Container, Input, Option, Select } from './styles'

type Props = {
  searchBy: string,
  setSearchBy: React.Dispatch<React.SetStateAction<string>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const SearchInput: React.FC<Props> = ({ searchBy, setSearchBy, setValue, setErrPopUp }) => {
  const capitalizeSentence = (sentence: string) => {
    return sentence.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
  }

  const getInputData = () => {
    const inputText = document.getElementById('input-text') as HTMLInputElement

    if (inputText != undefined || inputText != null) {
      if (inputText.value == '') {
        setErrPopUp({ show: true, message: 'Empty field' })
      }

      setValue(capitalizeSentence(inputText.value))
      inputText.value = ''
    }
  }

  const handleChange = (value: string) => {
    setSearchBy(value)
    setValue('')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getInputData()
    }
  }

  const handleClick = () => {
    getInputData()
  }

  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  })

  return (
    <Container data-aos='fade-right'>
      <Select value={searchBy} id='select' onChange={(e) => handleChange(e.target.value)}>
        <Option value='name'>Name</Option>
        <Option value='lang'>Language</Option>
        <Option value='region'>Region</Option>
      </Select>
      <Input onKeyPress={(e) => handleKeyPress(e)} type='text' placeholder='type here :)' id='input-text' />
      <Button onClick={() => handleClick()}><i className="fas fa-search"></i></Button>
    </Container>
  )
}

export default SearchInput
