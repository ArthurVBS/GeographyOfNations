const PATH = 'https://restcountries.com/v3.1'

const getData = async (searchBy: string, value: string) => {
  const res = fetch(`${PATH}/${searchBy}/${value}`)
    .then(async (response) => {
      if (response.status == 200) {
        const result = await response.json()
        return result //Data
      }
      else if (response.status == 404){
        const result = await response.json()
        return result.status //404
      }
      else if (response.status == 500){
        return 500 // Internal Server Error
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
