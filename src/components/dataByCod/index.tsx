import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import NationCard from '../nationCard'
import { searchByCodDataType } from '../../types/data'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByCod: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByCodDataType>({})

  const getData = useCallback((searchBy: string, value: string) => {
    if (value != '') {
      API.getData(searchBy, value)
        .then(data => {
          if (data == 404 || data == 500) {
            setErrPopUp({ show: true, message: 'Nation not found' })
          } else {
            setData(data[0])
          }
        })
    }
  }, [])

  useEffect(() => {
    getData('alpha', value)
  }, [value])

  return (
    <NationCard key={data?.name?.common} nation={data} details={{continents: true, languages: true}} />
  )
}

export default DataByCod
