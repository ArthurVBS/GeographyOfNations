function buildHeader(color, selected)
{
    color = `var(--${color})`

    const header = document.createElement('header')
    header.id = 'header'
    header.style.backgroundColor = color

    const logo = document.createElement('h3')
    logo.classList.add('logo')
    logo.textContent = '+ Nações'

    const boxIcon = document.createElement('div')
    boxIcon.classList.add('icon')

    header.appendChild(logo)
    header.appendChild(boxIcon)

    const iconHome = document.createElement('a')
    iconHome.innerHTML = '<i id="iconHome" class="fas fa-home">'
    
    const iconSearchByName = document.createElement('a')
    iconSearchByName.innerHTML = '<i id="iconSearchByName" class="fas fa-search-location">'
    
    const iconSearchByLang = document.createElement('a')
    iconSearchByLang.innerHTML = '<i id="iconSearchByLang" class="fas fa-language">'
    
    const iconSearchByRegion = document.createElement('a')
    iconSearchByRegion.innerHTML = '<i id="iconSearchByRegion" class="fas fa-globe-americas">'
    
    const iconContact = document.createElement('a')
    iconContact.innerHTML = '<i id="iconContact" class="fas fa-user-alt">'
    
    boxIcon.appendChild(iconHome)
    boxIcon.appendChild(iconSearchByName)
    boxIcon.appendChild(iconSearchByLang)
    boxIcon.appendChild(iconSearchByRegion)
    boxIcon.appendChild(iconContact)

    for (var i = 0; i < boxIcon.childNodes.length; i++)
    {
        boxIcon.childNodes[i].style.color = color
    }

    setHref(selected)

    function setHref(selected)
    {
        if (selected == 0)
        {
            iconHome.href = '#'
            iconSearchByName.href = './content/searchByName.html'
            iconSearchByLang.href = './content/searchByLang.html'
            iconSearchByRegion.href = './content/searchByRegion.html'
            iconContact.href = './content/contact.html'
        }
        else
        {
            iconHome.href = '../index.html'
            iconSearchByName.href = './searchByName.html'
            iconSearchByLang.href = './searchByLang.html'
            iconSearchByRegion.href = './searchByRegion.html'
            iconContact.href = './contact.html'
    
            boxIcon.childNodes[selected].href = '#'
        }
    }
    
    
    boxIcon.childNodes[selected].childNodes[0].classList.add('selected')
    boxIcon.childNodes[selected].childNodes[0].style.backgroundColor = color
    
    const main = document.getElementById('main')

    document.body.insertBefore(header, main)

}

/*
<header id="header">
    <h3 class="logo">+ Nações</h3>
    <div class="icon">
        <a href="#"><i class="fas fa-home selected"></i></a>
        <a href="./content/searchByName.html"><i class="fas fa-search-location"></i></a>
        <a href="./content/searchByLang.html"><i class="fas fa-language"></i></a>
        <a href="./content/searchByRegion.html"><i class="fas fa-globe-americas"></i></a>
        <a href="./content/contact.html"><i class="fas fa-user-alt"></i></a>
    </div>
</header>
*/
export default buildHeader
