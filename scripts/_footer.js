function buildFooter()
{
    const footer = document.createElement('footer')
    footer.id = 'footer'
    const text = document.createElement('p')
    text.textContent = 'Made By '

    const link = document.createElement('a')
    link.href = 'https://github.com/ArthurVBS'
    link.target = '_blank'
    link.rel = 'external'
    link.textContent = 'Arthur V.B.S.'

    text.appendChild(link)
    footer.appendChild(text)

    document.body.appendChild(footer)
}

export default buildFooter
