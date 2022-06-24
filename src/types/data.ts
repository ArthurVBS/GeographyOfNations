export type searchByNameDataType = {
  borders?: string[],
  capital?: string[],
  continents?: string,
  currencies?: Object,
  flags?: { svg: string }
  languages?: Object,
  name?: { common: string },
  population?: number
}

export type searchByLangDataType = [
  nation?: searchByNameDataType,
]

export type searchByRegionDataType = [
  nation?: searchByNameDataType,
]
