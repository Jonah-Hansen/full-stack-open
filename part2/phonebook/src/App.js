import { useState } from 'react'
import Contacts from './components/Contacts'

const App = () => {
  // create a piece of state to store list of persons 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  // piece of state for use with the input field
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //event handler for form submit. 
  const addName = (event) => {
    event.preventDefault()
    // knowing we will soon have numbers, create a temp   object for storing submitted data
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons}/>
    </div>
  )
}

export default App