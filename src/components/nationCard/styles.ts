import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
`

export const Title = styled.h3`
  text-align: center;
`

export const Box = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  border-radius: 8px;
`

export const Text = styled.p`
  width: 100%;
  text-align: center;
  border-left: 2px solid ${props => props.theme.title == 'light' ? '#0000001F' : '#FFFFFF1F'};
  padding: 4px;
`

export const Icon = styled.i`
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0px 8px;
`
