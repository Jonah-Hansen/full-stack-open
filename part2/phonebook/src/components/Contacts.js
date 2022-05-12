const Contacts = ({persons}) => {
 return (
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