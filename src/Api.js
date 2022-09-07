
export const GetGeoDataName = (location, setGeoData) => {
    fetch('https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=500&appid=a8918b6713446252355899679b400358')
    .then((response) => response.json())
    .then(data => {
        setGeoData(data)
    })
}

export const GetGeoDataCoords = (coords, setGeoData) => {
    fetch('https://api.openweathermap.org/geo/1.0/reverse?lat='+coords.lat+'&lon='+coords.lng+'&limit=500&appid=a8918b6713446252355899679b400358')
    .then((response) => response.json())
    .then(data => {
        if (data) setGeoData(data)
    })
}

export const GetWeatherData = (location, setWeatherData) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+location.coords.lat+'&lon='+location.coords.lng+'&id=524901&units=metric&cnt=22&appid=a8918b6713446252355899679b400358')
    .then((response) => response.json())
    .then(data => {
        setWeatherData(data)
    })
}
