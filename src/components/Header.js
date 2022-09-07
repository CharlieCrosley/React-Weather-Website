import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { HeaderContainer, HeaderSearch, SearchContainer, SearchResults, 
	SearchResultRow, ResultsContainer, SearchBar, SearchWrap, SearchIcon } from './HeaderElements'

import { GetGeoDataName } from '../Api';
import { setNewLocation } from '../Utility';

const Header = ({setWeatherLocation}) => {

	const [isDisplaySearchResults, setDisplaySearchResults] = useState(false)
	const [searchInput, setSearchInput] = useState("")
	const [searchResults, setSearchResults] = useState(null)
	
	useEffect(() => {
		// Function launches after 1 seconds (1000 ms) of the last keystroke
		// On first render you don't want to launch anything
		// Thus, you check if the user typed a query at first
		let timer = setTimeout(() => {
			if(searchInput)
				GetGeoDataName(searchInput, setSearchResults) // display search results when text is input
			else
				setSearchResults(null) // close search results when input is empty
		}, 1000)

		// If useEffect() relaunches, you clear the function
		// That means, the previous function won't launch
		// Thus, won't send a request to the API
		return () => clearTimeout(timer)
	}, [searchInput])

	const onEnter = ((e) => {
		// If searchResults results is not an array then the api returned no data
		if (e.key == 'Enter' && Array.isArray(searchResults)) {
			setWeatherLocation(setNewLocation(filterSearch()[0]))
		}
	})

	const onSearchInputChange = ((e) => {
		setSearchInput(e.target.value)
		setDisplaySearchResults(true)
	})

	const filterSearch = (() => {
		// Check if API call was empty or error
		if (Array.isArray(searchResults)) {
			return searchResults.filter((country) => {
				return country.name.toUpperCase().match(searchInput.toUpperCase())
			})
		} else {
			return [{name:"", country:"", state:""}]
		}
	})

	const toggleShowSearchResults = (() => {
		// Clear suggestions if input is empty
		if (!searchInput) {
			setSearchResults(null)
			setDisplaySearchResults(false)
		} 
		else {
			// Delay because clicking search result unfocuses search bar and hides result list
			if (isDisplaySearchResults) {
				setTimeout(() => { 
					setDisplaySearchResults(!isDisplaySearchResults)
				}, 90)
			} else {
				setDisplaySearchResults(!isDisplaySearchResults)
			}
		}
	})

	return (
		<HeaderContainer>
			<SearchContainer>
				<SearchWrap>
					<SearchBar>
						<HeaderSearch 
							type="text" placeholder="Enter Location" 
							onChange={onSearchInputChange} onKeyUp={onEnter} 
							value={searchInput} onBlur={toggleShowSearchResults} 
							onFocus={toggleShowSearchResults}
						/>
						<SearchIcon>
							<FaSearch/>
						</SearchIcon>
					</SearchBar>
					<ResultsContainer show={isDisplaySearchResults}>
						<SearchResults>
							{filterSearch().map((location, index) => {
							return (
								<SearchResultRow onClick={() => setWeatherLocation(setNewLocation(location))} key={index} roundBottom={index === filterSearch().length-1}>
									<div style={{fontSize:"17px"}}>{location.name}</div>
									<div style={{fontSize:"14px"}}>{location.country}{location.state && <>, {location.state}</>}</div>
								</SearchResultRow>)
							})}
						</SearchResults>
					</ResultsContainer>
				</SearchWrap>
			</SearchContainer>
		</HeaderContainer>
	)
}

export default Header