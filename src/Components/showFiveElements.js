import React, {useState} from 'react';
import contacts from '../contacts'
function ShowFiveElements(props) {

    const [stateCelbs, setStateCelbs] = useState(contacts.splice(0, 5))

    return (

        stateCelbs.map(eachContact => {
            return(
                <tr>
                  <td><img src={eachContact.pictureUrl}/></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                </tr>
            )

        })

    )
}

export default ShowFiveElements;