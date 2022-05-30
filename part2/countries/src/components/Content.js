import CountriesList from "./CountriesList"
import CountryInfo from "./CountryInfo"

const Content = ({countries, filter, setFilter}) => {
  //create list of countries matching filter
  let countriesMatchingFilter = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
  //event handler for when 'show' button is pressed
  const buttonHandler = (country) => {
    setFilter(country.name.common)
  }

  //determine what to show as content
  if (filter === '') {
    //when input is blank
    return (
      <p>Start typing to search for countries!</p>
    )
  }
  //if the list would be too long
  else if (countriesMatchingFilter.length > 10) {
    return (
      <p>Too many matches, please be more specific.</p>
    )
  }
  //if there are no matching countries
  else if (countriesMatchingFilter.length === 0) {
    return (
      <p>sorry, there are no countries that match your search</p>
    )
  }
  //if only one country matches
  else if (countriesMatchingFilter.length === 1) {
    return (
      <CountryInfo country={countriesMatchingFilter[0]} />
    )
  }
  //show list of matching countries up to 10 max
  else {
    return (
      <CountriesList countries={countriesMatchingFilter} 
      buttonHandler={buttonHandler}/>
    )
  }
}

export default Content