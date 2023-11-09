console.log('hello world')

async function getHeros() {
    const apiBaseUrl = 'https://overfast-api.tekrop.fr'

    const result = await fetch(`${apiBaseUrl}/heroes?locale=en-us`)

    const heroes = await result.json()

    console.log(heroes)
}
getHeros()