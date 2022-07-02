const getCurrencies = (currenciesData?: Object) => {
  if (currenciesData != undefined) {
    const MAX_CURRENCIES = 3
    const size = Object.keys(currenciesData).length
    const currencies = []

    for (let i = 0; i < size; i++) {
      if (i < MAX_CURRENCIES) {
        const newCurrenciesData = {
          curr: Object.keys(currenciesData)[i],
          name: Object.values(currenciesData)[i].name,
          symbol: Object.values(currenciesData)[i].symbol
        }
        currencies.push(`(${newCurrenciesData.symbol}) ${newCurrenciesData.curr} - ${newCurrenciesData.name}`)
      }
    }
    return currencies.toString().replace(/,/g, '; ')
  }
}

export default getCurrencies
