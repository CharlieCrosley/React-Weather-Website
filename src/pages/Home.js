import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import WeekCards from '../components/WeekCards'
import CurrentWeather from '../components/CurrentWeather'
import { HomeContainer } from './HomeElements'

import { GetWeatherData } from '../Api'

const Home = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [searchLocation, setSearchLocation] = useState({name:"London", state:"England", country:"GB", coords:{lat:51.5072, lng:-0.1276}})
  const [backgroundWeather, setBackgroundWeather] = useState(null)

  // Change background based on weather condition
  const backgrounds = 
  {
    'Clouds':'images/clouds.jpg', 'Clear':'images/clear-sky.jpg', 'Rain':'images/rain.jpg', 
    "Thunderstorm":'images/thunderstorm.jpg', "Drizzle":'images/rain.jpg',
    "Snow":'images/snow.jpg', "Atmosphere":'images/mist.jpg'
  }

	useEffect(() => {
		GetWeatherData(searchLocation, setWeatherData);
	}, [searchLocation]);

  useEffect(() => {
    weatherData && setBackgroundWeather(backgrounds[weatherData.list[0].weather[0].main])
	}, [weatherData]);

  return (
    <HomeContainer background={backgroundWeather}>
      <Header setWeatherLocation={setSearchLocation}/>
      <CurrentWeather searchLocation={searchLocation} setWeatherLocation={setSearchLocation} weatherData={weatherData}/>
      <WeekCards weatherData={weatherData}/>
    </HomeContainer>
  )
}

export default Home