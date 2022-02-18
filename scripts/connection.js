const search = {
    input: document.querySelector('.searchInput'),
    button: document.querySelector('.searchButton'),
    type: document.querySelector('.search').getAttribute('id')
}

search.button.addEventListener('click', () => {
    searchResults(search.type, search.input.value)
})

search.input.addEventListener('keypress', (event) => {
    key = event.keyCode
    if (key === 13) {
        searchResults(search.type, search.input.value)
    }
})

function searchResults(type, name) {
    fetch(`https://restcountries.com/v3.1/${type}/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        })
}

function displayResults(nation)
{
    if (search.type == 'name')
    {
        const dataByNameSearch = {
            div: document.querySelector('.text'),
            flag: document.getElementById('nationFlag'),
            name: document.getElementById('nationName'),
            lang: document.getElementById('nationLang'),
            region: document.getElementById('nationRegion'),
            capital: document.createElement('h4'),
            population: document.getElementById('nationPopulation'),
            currenciesName: document.getElementById('nationCurrenciesName'),
            currenciesSymbol: document.getElementById('nationCurrenciesSymbol')
        }
        nation = nation[0]

        box = document.querySelector('.results')
        box.setAttribute('class', 'results')
        box.style.backgroundImage = `url(${nation.flags.png})`

        dataByNameSearch.flag.innerHTML = `<img src="${nation.flags.png}" alt="Bandeira da Nação">`
        dataByNameSearch.name.innerText = nation.translations.por.common

        dataByNameSearch.capital.innerText = nation.capital
        dataByNameSearch.capital.id = 'nationCapital'
        dataByNameSearch.div.appendChild(dataByNameSearch.capital)

        dataByNameSearch.region.innerText = nation.continents
        dataByNameSearch.lang.innerText = Object.values(nation.languages)
        dataByNameSearch.currenciesName.innerText = Object.values(nation.currencies)[0].name
        dataByNameSearch.currenciesSymbol.innerText = Object.values(nation.currencies)[0].symbol

        if (nation.population < 1000000)
        {
            dataByNameSearch.population.innerText = `${(nation.population / 1000).toFixed(1) } K`
        }
        else if (nation.population < 1000000000)
        {
            dataByNameSearch.population.innerText = `${(nation.population / 1000000).toFixed(1) } Mi`
        }
        else
        {
            dataByNameSearch.population.innerText = `${(nation.population / 1000000000).toFixed(1) } Bi`
        }

        console.log(nation)
    }
    else if (search.type == 'lang')
    {
        console.log(nation)
    }
    else if (search.type == 'region')
    {
        console.log(nation)
    }
    else
    {
        console.log('Há um erro!')
    }
}
