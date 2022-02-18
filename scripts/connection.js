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
            flag: document.getElementById('nationFlag'),
            name: document.getElementById('nationName'),
            capital: document.getElementById('nationCapital')
        }
        nation = nation[0]

        box = document.querySelector('.results')
        box.setAttribute('class', 'results')
        box.style.backgroundImage = `url(${nation.flags.png})`

        dataByNameSearch.flag.innerHTML = `<img src="${nation.flags.png}" alt="Bandeira da Nação">`
        dataByNameSearch.name.innerText = nation.translations.por.common
        dataByNameSearch.capital.innerText = nation.capital

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
