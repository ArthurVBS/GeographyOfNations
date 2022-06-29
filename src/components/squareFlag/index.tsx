import React, { useEffect } from 'react'
import Aos from 'aos'

import { Flag } from './styles'

type Props = {
  size: string,
  src?: string,
  alt?: string,
  map?: string
}

const SquareFlag: React.FC<Props> = ({ size, src, alt, map }) => {
  useEffect(() => {
    Aos.init({ duration: 800, once: false, offset: -100, delay: 200 })
  })

  return (
    <a data-aos='fade-up' href={map} target='_blank'>
      <Flag size={size} src={src} alt={alt} />
    </a>
  )
}

export default SquareFlag
