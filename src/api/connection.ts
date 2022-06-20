const PATH = 'https://restcountries.com/v3.1/'

const getData = async (type: string, name: string) => {
  const res = await fetch(`${PATH}/${type}/${name}`)
  return await res.json()
}

export default { getData }
