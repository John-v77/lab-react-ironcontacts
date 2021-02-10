import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json';
// import MovieList from './components/MovieList';


function App(){

  const [celebsArr, setCelebArr] = useState(contacts.splice(0,5))
  const [remainingCeleb, setRemainingCeleb] = useState(contacts)

    const fiveMovies = contacts.slice(0,5)
    console.log(fiveMovies)
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th> 
      <th>Popularity</th>
      <th>Action</th>
    </tr>



    const showFIve = () =>{
      return fiveMovies.map(eachContact => {
        return (<tr>
          <td><img src={eachContact.pictureUrl}/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
        </tr>)
      })
    }

    const addRandom = () =>{
      console.log('hello')
      let randomIndex = Math.floor(Math.random()* remainingCeleb.length)
      let newRandomEntry = remainingCeleb.splice(randomIndex, 1)
      setCelebArr([...newRandomEntry])
    }

  return(
    <div>
    {showFIve}
    <button onClick={addRandom}>Add Random Actor</button>
    </div>
  )
}



export default App;













// class App extends React.Component {
//   render() {

//     return (
//       <div className="App" >
//       console.log(contacts)
//       </div>
//     );
//   }
// }

// export default App;