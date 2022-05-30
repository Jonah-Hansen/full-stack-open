const CountryWeather = ({country, weather}) => {
  //show weather info once request returns
  if (weather.length === 0) {
    return(
      <p>loading weather...</p>
    )
  }
  else {
    return (
      <>
        <h2>Weather in {country.capital}</h2>
        <p>temperature: {weather.main.temp} &deg;C</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
       alt="weather icon" />
        <p>wind: {weather.wind.speed} m/s</p>
      </>
    )
  }
}

export default CountryWeather