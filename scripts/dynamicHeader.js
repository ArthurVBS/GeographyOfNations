var lastScrollTop = 0

window.addEventListener('scroll', () => {
    let header = document.getElementById('header')
    let scrollTop = this.window.scrollY || this.document.documentElement.scrollTop

    if (scrollTop > lastScrollTop)
    {
        header.style.top = '-140px'
    }
    else
    {
        header.style.top = '0px'
    }

    lastScrollTop = scrollTop
})
