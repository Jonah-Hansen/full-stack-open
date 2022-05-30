import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryWeather from './CountryWeather'

//display info about the country
const CountryInfo = ({country}) => {
  //piece of state for storing country weather data
  const [weather, setWeather] = useState([])

  //request weather data for the country's capital and store to state
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => setWeather(response.data))
  }, [country.capitalInfo.latlng])

  return (
    <>
      <h1>{country.name.common}</h1>
      <dl>
        <dt>Capital: {country.capital}</dt>
        <dt>Area: {country.area} km<sup>2</sup></dt>
      </dl>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(language =>
        <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.svg} 
      height="200" width="300" alt="country flag" />

      <CountryWeather country={country} weather={weather} />
    </>
  )
}

export default CountryInfo