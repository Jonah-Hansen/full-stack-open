const CountryInfo = ({country}) => {
  //display info about the country
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
    </>
  )
}

export default CountryInfo