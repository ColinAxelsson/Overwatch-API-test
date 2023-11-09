async function getHeroes() {
    const apiBaseUrl = 'https://overfast-api.tekrop.fr'

    const result = await fetch(`${apiBaseUrl}/heroes?locale=en-us`)

    const heroes = await result.json()

    const heroDiv = document.querySelector('.heroes')
    heroes.forEach(hero => {
        const el = document.createElement('img')
        el.setAttribute('src', hero.portrait)
        el.setAttribute('width', '200px')
        heroDiv.appendChild(el)
    })

    console.log(heroes)
}