const PATH = 'https://restcountries.com/v3.1'

const getData = async (type: string, name: string) => {
  const res = fetch(`${PATH}/${type}/${name}`)
    .then(async (response) => {
      if (response.status == 200) {
        const result = await response.json()
        return result //Data
      }
      else if (response.status == 404){
        const result = await response.json()
        return result.status //404
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
