const Contacts = ({persons}) => {
 return (
  //  create a table containing each persons name
    <table>
      <tbody>
        {persons.map((person) => 
          <tr key={person.name}>
            <td>{person.name}</td>
          </tr>
        )}
      </tbody>
    </table>
 )
}

export default Contacts