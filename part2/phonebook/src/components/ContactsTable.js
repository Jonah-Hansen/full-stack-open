import ContactsLine from './ContactsLine'

const ContactsTable = ({persons, filter}) => {
  // initialize personsToShow
  let personsToShow =[]
  // if filter is blank, show all.
  if (filter === '') {
    personsToShow = persons
  }
  // comparing strings in lower case, fill array with persons whose name includes filter
  else {
    personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

 return (
  //  create a table containing each persons name and number
    <table>
      <tbody>
        {personsToShow.map((person) => 
          <ContactsLine key={person.id} person={person}/>
        )}
      </tbody>
    </table>
 )
}

export default ContactsTable