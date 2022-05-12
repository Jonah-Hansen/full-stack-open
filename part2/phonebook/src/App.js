import { useState } from 'react'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'},//, number: '040-123456', id: 1 },
    { name: 'Ada Lovelace'},//, number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov'},//, number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck'}//, number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
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