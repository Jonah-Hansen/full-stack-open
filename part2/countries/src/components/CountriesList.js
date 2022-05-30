const CountriesList= ({countries, buttonHandler}) => {
  //show list of given countries
  return (
    <dl>
    {countries.map(country =>
      <dt key={country.cca2}>{country.name.common} 
      <button type='button' onClick={() => buttonHandler(country)}>show</button></dt>)}
    </dl>
  )
}

export default CountriesList