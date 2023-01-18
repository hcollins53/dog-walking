import { getCities, getWalkerCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

const walkerCities = getWalkerCities()

export const FindWalkerCities = (walker) => {
    let cityOfWalkers = [] 

    for(const walkerCity of walkerCities) {
        if(walkerCity.walkerId === walkerCities.id) {
            cityOfWalkers.push(walkerCity)
        }
    }
    return cityOfWalkers
}

export const MatchCity = (cityOfWalkers) => {
    let cityNames = ''
    for(const cityOfWalker of cityOfWalkers) {
        for(const city of cities)
        if(city.id === cityOfWalker.cityId) {
            cityNames += `${city.name} and ${city.name}`
        }
    }
    return cityNames
}