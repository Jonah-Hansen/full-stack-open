import { useState, useEffect } from 'react'

import personService from './services/persons'

import ContactsTable from './components/ContactsTable'
import NewContactsForm from './components/NewContactForm'
import Input from './components/Input'
import Notification from './components/Notification'

const App = () => {
  // create a piece of state to store list of persons 
  const [persons, setPersons] = useState([]) 

  // pieces of state for use with the input fields
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  //piece of state for notification info
  const [notification, setNotification] = useState({message: null, type: null})

  // effect hook to do a get request to the db and save the data to the state on successful request
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
   }, [])

  //event handler for form submit. 
  const addName = (event) => {
    event.preventDefault()
    // create a temp object for storing submitted data
    const nameObject = { 
      name: newName,
      number: newNumber
    }

    // check for duplicates
    const dupe = persons.filter(person => person.name === newName)
    if (dupe.length > 0) {
      //if there is a duplicate, the associated number can be updated
      if (window.confirm(`${newName} is already added to phonebook. 
      replace the old number with a new one?`)) {
        personService
          .update(dupe[0].id, nameObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== dupe[0].id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotification({message: `modified number for ${returnedPerson.name}`, type: 'success'}) 
          setTimeout(() => {
            setNotification({message: null, type: null})
          }, 5000)
          })
          .catch(error => {
            setNotification({message: `${newName} was already deleted from the server`, type: 'error'})
            setPersons(persons.filter(n => n.id !== dupe[0].id))
            setTimeout(() => {
              setNotification({message: null, type: null})
            }, 5000)
          })
      }
    } 
    else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotification({message: `added ${returnedPerson.name}`, type: 'success'}) 
          setTimeout(() => {
            setNotification({message: null, type: null})
          }, 5000)
        })
    }  
  }

  //event handler for deleting an entry
  const deleteHandler = (id) => {
    const person = persons.filter(person => person.id === id)
    if (window.confirm(`delete ${person[0].name}?`)) {
      personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
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
      <Notification message={notification.message} type={notification.type} />
      <Input label='filter shown with ' state={states.filter} handler={handlers.handleFilter} />
      <h2>add a new</h2>
      <NewContactsForm handlers={handlers} states={states}/>
      <h2>Numbers</h2>
      <ContactsTable persons={persons} filter={filter} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App