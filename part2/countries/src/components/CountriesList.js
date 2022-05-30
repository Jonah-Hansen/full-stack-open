const CountriesList= ({countries}) => {
  //show list of given countries
  return (
    <dl>
    {countries.map(country =>
      <dt key={country.cca2}>{country.name.common}</dt>)}
    </dl>
  )
}

export default CountriesList