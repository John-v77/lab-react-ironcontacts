import React, {useState} from 'react';
import contacts from './contacts.json';


function MovieList(props) {

    const firstFive =contacts.subarray(1,5)
    const firstFive =()=> {
        return firstFive.map(eachContact => {
            return <li>{eachContact.name}</li>
        })
    }
       
      }
    
    // let ArrActors = contacts.subarray(1, 5)


export default MovieList;