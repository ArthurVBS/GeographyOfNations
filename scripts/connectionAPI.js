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

function searchResults(type, name)
{
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
        resultsName(nation[0])
        
    }
    else if (search.type == 'lang')
    {
        resultsLang(nation)
    }
    else if (search.type == 'region')
    {
        resultsRegion(nation)
    }
    else
    {
        console.log('Erro!')
    }
}

function resultsRegion(region)
{
    const elements = {
        region: document.querySelector('h2.region'),
        number: document.querySelector('h2.number'),
        list: document.querySelector('ul.list'),
        map: document.querySelector('img.worldMap'),
        sect: document.querySelector('section.results')
    }

    elements['list'].innerText = ''

    elements['number'].innerText = region.length

    let regionString = search['input'].value.toLowerCase()
    displayMap(regionString, elements)

    elements['region'].innerText = regionString

    for (i = 0; i <= region.length - 1; i++)
    {
        let li = document.createElement('li')

        li.classList.add('item')
        
        let name = document.createElement('h4')
        
        name.classList.add('name')
        name.textContent = region[i].translations.por.common
        
        let flag = document.createElement('a')
        
        flag.classList.add('flag')
        flag.style.backgroundImage = `url(${region[i].flags.png})`
        flag.href = region[i].maps.googleMaps
        flag.target = '_blank'
        flag.rel = 'external'

        let details = document.createElement('details')

        details.classList.add('details')

        let summary = document.createElement('summary')

        summary.addEventListener('click', () => {
            details.open ? summary.innerHTML = '<i class="fas fa-caret-right"></i>' : summary.innerHTML = '<i class="fas fa-caret-down"></i>'
        });

        summary.innerHTML = '<i class="fas fa-caret-right"></i>'
        summary.classList.add('detailsTitle')

        let capital = document.createElement('h4')

        capital.classList.add('detailsItem')
        
        region[i].capital == undefined ? capital.innerHTML = '<i class="fas fa-city"></i> Sem capital' : capital.innerHTML = `<i class="fas fa-city"></i> ${region[i].capital.toString().replace(/,/g , ', ')}` 

        console.log(region[i])

        let language = document.createElement('h4')

        language.classList.add('detailsItem')
        language.innerHTML = `<i class="fas fa-language"></i> ${Object.values(region[i].languages).slice(0, 2).toString().replace(/,/g , ', ')}` 

        li.appendChild(name)
        li.appendChild(flag)
        li.appendChild(details)

        details.appendChild(summary)
        details.appendChild(capital)
        details.appendChild(language)

        elements['list'].appendChild(li)
    }

    elements['sect'].classList.remove('hide')
}

function resultsLang(language)
{
    const elements = {
        lang: document.querySelector('h2.lang'),
        number: document.querySelector('h2.number'),
        list: document.querySelector('ul.list'),
        sect: document.querySelector('section.results')
    }

    elements['number'].innerText = language.length

    elements['lang'].innerText = search['input'].value

    elements['list'].innerText = ''

    for (i = 0; i <= language.length - 1; i++)
    {
        let li = document.createElement('li')

        li.classList.add('item')
        
        let name = document.createElement('h4')
        
        name.classList.add('name')
        name.textContent = language[i].translations.por.common
        
        let flag = document.createElement('a')
        
        flag.classList.add('flag')
        flag.style.backgroundImage = `url(${language[i].flags.png})`
        flag.href = language[i].maps.googleMaps
        flag.target = '_blank'
        flag.rel = 'external'

        let details = document.createElement('details')

        details.classList.add('details')

        let summary = document.createElement('summary')

        summary.addEventListener('click', () => {
            details.open ? summary.innerHTML = '<i class="fas fa-caret-right"></i>' : summary.innerHTML = '<i class="fas fa-caret-down"></i>'
        });

        summary.innerHTML = '<i class="fas fa-caret-right"></i>'
        summary.classList.add('detailsTitle')

        let capital = document.createElement('h4')

        capital.classList.add('detailsItem')
        
        language[i].capital == undefined ? capital.innerHTML = '<i class="fas fa-city"></i> Sem capital' : capital.innerHTML = `<i class="fas fa-city"></i> ${language[i].capital.toString().replace(/,/g , ', ')}` 

        let continents = document.createElement('h4')

        continents.classList.add('detailsItem')
        continents.innerHTML = `<i class="fas fa-globe-americas"></i> ${language[i].continents}` 

        li.appendChild(name)
        li.appendChild(flag)
        li.appendChild(details)

        details.appendChild(summary)
        details.appendChild(capital)
        details.appendChild(continents)

        elements['list'].appendChild(li)
    }

    elements['sect'].classList.remove('hide')
}

function resultsName(nation)
{
    const elements = {
        flag: document.getElementById('nationFlag'),
        name: document.getElementById('nationName'),
        lang: document.getElementById('nationLang'),
        region: document.getElementById('nationRegion'),
        capital: document.getElementById('nationCapital'),
        population: document.getElementById('nationPopulation'),
        currencies: document.getElementById('nationCurrencies')
    }

    box = document.querySelector('.results')
    box.setAttribute('class', 'results')
    box.style.backgroundImage = `url(${nation.flags.png})`

    elements['flag'].innerHTML = `<img src="${nation.flags.png}" alt="Bandeira da Nação">`

    elements['name'].innerText = nation.translations.por.common

    elements['capital'].innerText = nation.capital.toString().replace(/,/g , ', ')

    elements['region'].innerText = nation.continents

    elements['currencies'].innerText = `${Object.values(nation.currencies)[0].name} (${Object.values(nation.currencies)[0].symbol})` 
    
    elements['lang'].innerText = Object.values(nation.languages).slice(0, 3).toString().replace(/,/g , ', ')

    if (nation.population < 1000000)
    {
        elements['population'].innerText = `${(nation.population / 1000).toFixed(1) } K`
    }
    else if (nation.population < 1000000000)
    {
        elements['population'].innerText = `${(nation.population / 1000000).toFixed(1) } Mi`
    }
    else
    {
        elements['population'].innerText = `${(nation.population / 1000000000).toFixed(1) } Bi`
    }
}

function displayMap(regionString, elements)
{
    if (regionString.includes('europe'))
    {
        elements['map'].src = '../images/europe.png'
    }
    else if (regionString.includes('north america'))
    {
        elements['map'].src = '../images/north_america.png'
    }
    else if (regionString.includes('south america'))
    {
        elements['map'].src = '../images/south_america.png'
    }
    else if (regionString.includes('america'))
    {
        elements['map'].src = '../images/america.png'
    }
    else if (regionString.includes('africa'))
    {
        elements['map'].src = '../images/africa.png'
    }
    else if (regionString.includes('asia'))
    {
        elements['map'].src = '../images/asia.png'
    }
    else if (regionString.includes('oceania'))
    {
        elements['map'].src = '../images/oceania.png'
    }
}
