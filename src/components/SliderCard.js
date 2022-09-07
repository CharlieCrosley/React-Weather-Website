import React from 'react'
import { RiWindyFill } from 'react-icons/ri'
import { CardContainer, Card, DateTime, WeatherInfo, Temperature, WeatherStatus,
         WeatherIcon } from './WeekCardElements'
import { GetIcon } from '../Utility'

const SliderCard = ({index, weatherData, setExpandedCard, expandedCard}) => {

  const GetWeatherDateTime = (() => {
    const dateTime = weatherData.list[index].dt_txt.split(" ")
    const d1 = new Date();
    const d2 = new Date(dateTime)
    const weeksDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    if (d1.getFullYear()+'-'+d1.getMonth()+'-'+d1.getDate() === d2.getFullYear()+'-'+d2.getMonth()+'-'+d2.getDate()) { 
      return (["Today", dateTime[1].slice(0,5)])
    }
    return ([weeksDays[d2.getDay()] + " " + d2.getDate() + " ", dateTime[1].slice(0,5)])
})

  const expand = expandedCard === index ? true : false

  return (
    <CardContainer>
      	<Card expand={expand} onClick={() => setExpandedCard(index)}>
        	<DateTime expand={expand}>
          		<div style={{marginRight:"6px"}}>{weatherData && GetWeatherDateTime()[0]}</div>
          		<div>{weatherData && GetWeatherDateTime()[1]}</div>
        	</DateTime>
        	<WeatherInfo>
				<Temperature expand={expand}>
					<WeatherIcon expand={expand}>
						<img src={GetIcon(weatherData)}/>
					</WeatherIcon>
					<div style={{fontSize: "28px", display:"flex", marginTop: "8px"}}>
						{weatherData && Math.round(weatherData.list[index].main.temp)}°
						<div style={{paddingTop: "4px", fontSize: "16px"}}>C</div>
					</div>
				</Temperature>
				<WeatherStatus expand={expand}>
					{weatherData && 
					weatherData.list[index].weather[0].description.charAt(0).toUpperCase() + 
					weatherData.list[index].weather[0].description.slice(1)
					} {/* Capitalise first letter */}
					<div title="Wind Speed" style={{position:"absolute", display:"flex", bottom:"38px"}}>
						<RiWindyFill/>
						<div style={{marginLeft:"5px"}}>{weatherData && weatherData.list[index].wind.speed}m/s</div>
					</div>
				</WeatherStatus>
        	</WeatherInfo>
      	</Card>
    </CardContainer>
  )
}

export default SliderCard

