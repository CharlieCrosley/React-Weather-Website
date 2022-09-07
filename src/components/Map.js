import React, { useState, useEffect } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import { WeatherMap, MapType, MapTypeContainer, MapTypeBackground, 
    MapTypes, MapHelpWrap, MapHelp, ToolTipTextBackground, ToolTipText } from './MapElements'
import { BsThermometerHalf, BsCloudy } from 'react-icons/bs'
import { RiWindyFill } from 'react-icons/ri'
import { SiRainmeter } from 'react-icons/si'
import { BsSpeedometer2, BsQuestionLg } from 'react-icons/bs'

import { setNewLocation } from '../Utility';
import { GetGeoDataCoords } from '../Api';

const Map = ({searchLocation, setWeatherLocation}) => {
    const [weatherMapType, setWeatherMapType] = useState("temp_new")
    const [mapCoords, setMapCoords] = useState({lat: searchLocation.coords.lat, lng: searchLocation.coords.lng})
	const [map, setMap] = useState(null)  
	const [geoData, setGeoData] = useState(null) 
	const [helpIconHover, setHelpIconHover] = useState(false)

    // Load adn create the weather overlay from openweathermap
    // sometimes window.google.maps is undefined
    const weatherOverlay = window.google && new window.google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return (
            'https://tile.openweathermap.org/map/'
            +weatherMapType+'/'
            +zoom+'/'
            +coord.x+'/'
            +coord.y+'.png?appid=a8918b6713446252355899679b400358'
          );
        },
        tileSize: new window.google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: "Weather"
    });

    useEffect(() => {
		// Swap overlay types
		if (map) {
			map.overlayMapTypes.pop()
			map.overlayMapTypes.insertAt(0, weatherOverlay)  
		}
    } , [weatherMapType])

	useEffect(() => {
		// Swap overlay types
		setMapCoords({lat:searchLocation.coords.lat, lng:searchLocation.coords.lng})
		if (map) map.setZoom(8)
    } , [searchLocation])


    const onLoad = React.useCallback(function callback(map) {
		map.overlayMapTypes.pop()
		map.overlayMapTypes.insertAt(0, weatherOverlay)  
		setMap(map)
		// Maintain map position when changing weather overlay
		setMapCoords(map.getCenter())
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
    	setMap(null)
    }, [])

    const containerStyle = {
		width:'100%',
    	height: '100%',
    	borderRadius: '7px',
		position: 'relative'
    };

	const changeLocationWithMap = (e) => {
		GetGeoDataCoords(e.latLng.toJSON(), setGeoData)
	}

	useEffect(() => {
		if (geoData) {
			const newLocation = setNewLocation(geoData[0])
			if (newLocation) setWeatherLocation(newLocation)
		}
	}, [geoData])

  return (
    <WeatherMap>
				<GoogleMap
				options={{
					mapId: "806b7f56533a7f37",
					disableDefaultUI: true,
					disableDoubleClickZoom: true,
					restriction: {
						latLngBounds: new window.google.maps.LatLngBounds(
							new window.google.maps.LatLng(-85, -180),
							new window.google.maps.LatLng(85, 180)
						),
						strictBounds: true,
					  }
				}}
				mapContainerStyle={containerStyle}
				center={mapCoords}
				zoom={8}
				onLoad={onLoad}
				onUnmount={onUnmount}
				onDblClick={changeLocationWithMap}
				/>

				<MapTypeContainer>
					<MapTypeBackground/>
					<MapTypes>
						<MapType onClick={() => setWeatherMapType("temp_new")} title="Temperature"><BsThermometerHalf/></MapType>
						<MapType onClick={() => setWeatherMapType("wind_new")} title="Wind"><RiWindyFill/></MapType>
						<MapType onClick={() => setWeatherMapType("clouds_new")} title="Clouds"><BsCloudy/></MapType>
						<MapType onClick={() => setWeatherMapType("precipitation_new")}><SiRainmeter title="Precipitation"/></MapType>
						<MapType onClick={() => setWeatherMapType("pressure_new")} title="Pressure"><BsSpeedometer2/></MapType>
					</MapTypes>
				</MapTypeContainer>

				<MapHelpWrap onMouseEnter={() => setHelpIconHover(true)} onMouseLeave={() => setHelpIconHover(false)}>
					<MapHelp>
						<BsQuestionLg/>
					</MapHelp>
				</MapHelpWrap>

				<ToolTipText hovered={helpIconHover}>
					Double click to see weather at location
				</ToolTipText>
            </WeatherMap>
  )
}

export default Map