import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';
import ShowFiveElements from './Components/showFiveElements'



function App(){

// -------------Set State --------------
let localContacts = [...contacts]
const [stateCelebs, setStateCelebs] = useState(localContacts.splice(0, 5))
const [otherCelebs, setOtherCelebs] = useState(localContacts)
// ---------------------------------------^



// --------Show Five----------------------
    const ShowFive = () =>{
 
      return stateCelebs.map((eachContact,i) => {
        return (
                <tr>
                  <td id={i}><img src={eachContact.pictureUrl}/></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>{<button onClick={DeleteCeleb}>Delete</button>}</td>
                </tr> 
                )})}
// -----------------------------------^


// ----------Add Random----------------
    const AddRandom = () => {
      if (otherCelebs.length <= 0) {
      return
    }

      console.log('hello')
      let randomN = Math.floor(Math.random() * otherCelebs.length)
      let tempCelebs = [...stateCelebs]
      let tempAllCelebs = [...otherCelebs]
      tempCelebs.unshift(tempAllCelebs[randomN])
      tempAllCelebs.splice(randomN, 1)
      setStateCelebs(tempCelebs)
      setOtherCelebs(tempAllCelebs)
    }
// ------------------------------------^



// -----------Sort By Name---------------
const SortByName = () => {
  let newArr2 =  [...stateCelebs]
  newArr2.sort((a,b) => {

    return b.popularity.localeCompare(a.popularity) 
  
  })
    
  setStateCelebs(newArr2)
}
// -------------------------------------^


// -----------Sort By Popularity---------
const SortByPopularity = () => {
  let newArr =  [...stateCelebs]
    newArr.sort((a,b) => {

      return b.popularity - a.popularity    

    })
    
    setStateCelebs(newArr)
  }
  // ------------------------------------^





// -----------Delete Function---------
    const DeleteCeleb = (i) =>{

      let newArr3 = [...stateCelebs]
      newArr3.splice(i,1)
      setStateCelebs(newArr3)
    }
// -------------------------------------^





// -----------Return Main Function---------
  return(
    <div>
      <table>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </table>
      {ShowFive()}
      <button onClick={AddRandom}>Add Random Celeb</button>
      <button onClick={SortByName}>Sort by Name</button>
      <button onClick={SortByPopularity}>Sort by Popularity</button>
      {/* <ShowFIve/> */}
    </div>
    
  )
  // -------------------------------------^

}

export default App;









