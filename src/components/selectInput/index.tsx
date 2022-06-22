import React from 'react'
import { Select, Option, Container, Label } from './styles'

type Props = {
  searchBy: string,
  setSearchBy: React.Dispatch<React.SetStateAction<string>>
}

const SelectInput: React.FC<Props> = ({ searchBy, setSearchBy }) => {
  const handleChange = (newValue: string) => {
    setSearchBy(newValue)
  }

  return (
    <Container>
      <Label htmlFor='select'>Searching By</Label>
      <Select value={searchBy} id='select' onChange={(e) => handleChange(e.target.value)}>
        <Option value='name'>Name</Option>
        <Option value='language'>Language</Option>
        <Option value='region'>Region</Option>
      </Select>
    </Container>
  )
}

export default SelectInput
