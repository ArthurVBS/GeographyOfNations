const getLanguages = (languagesData?: object) => {
  if (languagesData != undefined) {
    const MAX_LANGUAGES = 3
    const size = Object.keys(languagesData).length
    const languages = []

    for (let i = 0; i < size; i++) {
      if (i < MAX_LANGUAGES) {
        const newLanguagesData = Object.values(languagesData)[i]
        languages.push(newLanguagesData)
      }
    }

    return languages.toString().replace(/,/g, ', ')
  }
}

export default getLanguages
