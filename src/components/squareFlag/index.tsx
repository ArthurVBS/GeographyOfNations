import React from 'react'
import { Flag } from './styles'

type Props = {
  size: string,
  src?: string,
  alt?: string,
  map?: string
}

const SquareFlag: React.FC<Props> = ({ size, src, alt, map }) => {
  return (
    <a href={map} target='_blank'>
      <Flag size={size} src={src} alt={alt} />
    </a>
  )
}

export default SquareFlag
