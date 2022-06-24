export type searchByNameDataType = {
  borders?: string[],
  capital?: string[],
  continents?: string,
  currencies?: Object,
  flags?: { svg: string }
  languages?: Object,
  maps?: { googleMaps: string },
  name?: { common: string },
  population?: number
}

export type searchByCodDataType = {
  flags?: { svg: string },
  maps?: { googleMaps: string },
  name?: { common: string }
}

export type searchByLangDataType = [
  nation?: searchByNameDataType,
]

export type searchByRegionDataType = [
  nation?: searchByNameDataType,
]
