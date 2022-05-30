import { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import Content from './components/Content'

const App = () => {
  //piece of state for storing country data
  const [countries, setCountries] = useState([])
  //piece of state for search filter
  const [filter, setFilter] = useState('')

  // effect hook to do a get request to the db and save the data to the state on successful request
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
   }, [])

   // event handler for filter
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <div>
        <Input label='find countries ' state={filter} handler={handleFilter} />
      </div>
      <div>
        <Content countries={countries} filter={filter} />
      </div>
    </>
  )
}

export default App
