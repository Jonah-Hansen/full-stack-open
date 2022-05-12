import { useState } from 'react'
import ContactsTable from './components/ContactsTable'
import NewContactsForm from './components/NewContactForm'
import Input from './components/Input'

const App = () => {
  // create a piece of state to store list of persons 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  // pieces of state for use with the input fields
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  //event handler for form submit. 
  const addName = (event) => {
    event.preventDefault()
    // create a temp object for storing submitted data
    const nameObject = { 
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // check for duplicates
    const dupe = persons.filter(person => person.name === newName)
    if (dupe.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } 
    else {
      setPersons(persons.concat(nameObject))
      setNewName('') 
      setNewNumber('') 
    }  
  }

  // event handler for typing in name field 
  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }
  // event handler for typing in number field 
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }
  // event handler for filter
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  //store handler referecnes in array to pass them to component easier.
  const handlers = {handleFilter, addName, handleNameInput, handleNumberInput}
  let states = {filter, newName, newNumber}

  return (
    <div>
      <h2>Phonebook</h2>
      <Input label='filter shown with ' state={states.filter} handler={handlers.handleFilter} />
      <h2>add a new</h2>
      <NewContactsForm handlers={handlers} states={states}/>
      <h2>Numbers</h2>
      <ContactsTable persons={persons} filter={filter}/>
    </div>
  )
}

export default App