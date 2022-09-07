

export const GetIcon = ((weatherData) => {
    if (weatherData) return "http://openweathermap.org/img/wn/"+weatherData.list[0].weather[0].icon+"@2x.png"
    return "http://openweathermap.org/img/wn/02d@2x.png"
})


export const setNewLocation = ((location) => {
    // Check if location is in ocean
    if (location) {
        return ({
            name:location.name, 
            state:location.state, 
            country:location.country, 
            coords:{lat: location.lat, lng: location.lon}
        })
    }
})