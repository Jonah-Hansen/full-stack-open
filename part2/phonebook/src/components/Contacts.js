const Contacts = ({persons}) => {
 return (
  //  create a table containing each persons name
    <table>
      <tbody>
        {persons.map((person) => 
          <tr key={person.id}>
            <td>{person.name}</td><td>{person.number}</td>
          </tr>
        )}
      </tbody>
    </table>
 )
}

export default Contacts