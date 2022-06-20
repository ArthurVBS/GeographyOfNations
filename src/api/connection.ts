const PATH = 'https://restcountries.com/v3.1'

const getData = async (type: string, name: string) => {
  const res = fetch(`${PATH}/${type}/${name}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json()
        return result
      }
      else {
        throw new Error(response.status + ' Failed Fetch ')
      }
    })
    .catch(err => {
      console.error(err)
    })

  return await res
}

export default { getData }
