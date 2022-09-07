import React from 'react'
import { CurrentWeatherContainer, CurrentWeatherDetails, CurrentTempContainer,
    CurrentTemperature, TempValue, CurrentWeatherStatus, CurrentWeatherExtraInfo, ExtraInfoName,
    ExtraInfoWrap, SubTemp, CurrentLocation, CurrentCountry } from './CurrentWeatherElements'
import { DateTime, WeatherIcon } from './WeekCardElements'
import { ImCompass } from 'react-icons/im'
import { GetIcon } from '../Utility'
import Map from './Map'


const CurrentWeather = ({weatherData, setWeatherLocation, searchLocation}) => {

    const GetTime = (() => {
        const dateTime = weatherData.list[0].dt_txt.split(" ")
        return dateTime[1].slice(0,5)
    })

    
  	return (
    <div style={{display:"flex", justifyContent: "center"}}>
        <CurrentWeatherContainer>
            <CurrentWeatherDetails>
                <DateTime style={{justifyContent:"left", paddingLeft:"20px"}}>
                    <div style={{fontSize:"20px"}}>CURRENT WEATHER</div>
                    <div style={{fontSize:"20px", paddingLeft:"20px"}}>{weatherData && GetTime()}</div>
                </DateTime>
                <CurrentLocation>
                    <CurrentCountry style={{fontSize:"20px", marginTop:"-5px"}}> {weatherData && weatherData.city.name} </CurrentCountry> 
                    <CurrentCountry> {weatherData && searchLocation.state}</CurrentCountry>
                    <CurrentCountry> {weatherData && weatherData.city.country}</CurrentCountry>
                </CurrentLocation>
                    <CurrentTempContainer>
                        <CurrentTemperature>
                            <WeatherIcon style={{paddingLeft: "10px", bottom: "20px"}} expand={true}>
                                <img src={GetIcon(weatherData)}/>
                            </WeatherIcon>

                            <TempValue style={{fontSize:"35px", fontWeight:"bold", paddingTop: "15px"}}> 
                                {weatherData && Math.round(weatherData.list[0].main.temp)}°
                                <div style={{fontSize: "20px", paddingTop:"8px"}}>C</div>
                            </TempValue>
                            <SubTemp>MIN:</SubTemp>
                            <TempValue style={{color:"#dedede"}}>
                                {weatherData && Math.round(weatherData.list[0].main.temp_min)}°
                                <div style={{fontSize: "12px", paddingTop:"4px"}}>C</div>
                            </TempValue>
                            <SubTemp>MAX:</SubTemp>
                            <TempValue style={{color:"#dedede"}}>
                                {weatherData && Math.round(weatherData.list[0].main.temp_max)}°
                                <div style={{fontSize: "12px", paddingTop:"4px"}}>C</div>
                            </TempValue>
                        </CurrentTemperature>
                        <CurrentWeatherStatus>
                            {weatherData && 
                            weatherData.list[0].weather[0].description.charAt(0).toUpperCase() + 
                            weatherData.list[0].weather[0].description.slice(1)
                            } {/* Capitalise first letter */}
                            <div style={{display:"flex", paddingTop:"15px", fontSize:"14px"}}>
                                FEELS LIKE:
                                <div style={{paddingLeft:"10px"}}>
                                {Math.round(weatherData && weatherData.list[0].main.feels_like)}°
                                </div>
                                <div style={{fontSize: "12px", paddingTop:"1px"}}>C</div>
                            </div>
                        </CurrentWeatherStatus>
                    </CurrentTempContainer>
                <CurrentWeatherExtraInfo>
                    <ExtraInfoWrap>
                        <ExtraInfoName>
                                Wind
                        </ExtraInfoName>
                        <ExtraInfoName>
                                Humidity
                        </ExtraInfoName>
                        <ExtraInfoName>
                                Pressure
                        </ExtraInfoName>
                        <ExtraInfoName>
                                Visibility
                        </ExtraInfoName>
                        <div>
                            {weatherData && weatherData.list[0].wind.speed} m/s
                            <ImCompass title={weatherData && weatherData.list[0].wind.deg+"°"} 
                            style={{
                            marginLeft:"6px", 
                            transform:"rotate("+(weatherData && weatherData.list[0].wind.deg-45)+"deg)"}}/>
                        </div>
                        <div>{weatherData && weatherData.list[0].main.humidity}%</div>
                        <div>{weatherData && weatherData.list[0].main.pressure} mb</div>
                        <div>{weatherData && weatherData.list[0].visibility} km</div>   
                    </ExtraInfoWrap>
                </CurrentWeatherExtraInfo>
            </CurrentWeatherDetails>

			<Map searchLocation={searchLocation} setWeatherLocation={setWeatherLocation}/>
            
        </CurrentWeatherContainer>
    </div>
  )
}

export default CurrentWeather