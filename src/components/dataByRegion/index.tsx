import React, { useCallback, useEffect, useState } from 'react'

import API from '../../api/connection'
import SquareFlag from '../squareFlag'
import { searchByRegionDataType } from '../../types/data'

type Props = {
  value: string
  setErrPopUp: React.Dispatch<React.SetStateAction<{
    show: boolean;
    message: string;
  }>>
}

const DataByRegion: React.FC<Props> = ({ value, setErrPopUp }) => {
  const [data, setData] = useState<searchByRegionDataType>([])

  const getData = useCallback((searchBy: string, value: string) => {
    if (value != '') {
      API.getData(searchBy, value)
        .then(data => {
          if (data == 404 || data == 500) {
            setErrPopUp({ show: true, message: 'Nations not found' })
          } else {
            setData(data)
          }
        })
    }
  }, [])

  useEffect(() => {
    getData('region', value)
  }, [value])

  const renderData = () => {
    return data.map((nation) => {
      return (
        <div key={nation?.name?.common}>
          <h3>{nation?.name?.common}</h3>
          <SquareFlag map={nation?.maps?.googleMaps} size='192px' src={nation?.flags?.svg} alt='Nation flag' />
        </div>
      )
    })
  }

  return (
    <>
      {renderData()}
    </>
  )
}

export default DataByRegion
