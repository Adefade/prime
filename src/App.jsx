import React from 'react'
import Car from './components/Car'
import Car2 from './components/Car2'  
 import Animal from './components/Animal'
 import Car3 from './components/Car3'
 import Styling from './components/Styling'
 import Styling2 from './components/Styling2'
 import Styling3 from './components/Styling3'
import State from './components/state'
import State2 from './components/State2'
import State3 from './components/State3'
import Map from './components/Map'
import Map2 from './components/Map2'
import Event from './components/Event'
import Event2 from './components/Event2'
import PreventDefault from './components/PreventDefault'
import Tinything from './components/Tinything'
import Form from './components/Form'
import Condi from './components/condi'
import Condi2 from './components/condi2'
import Movies from './movies/Movies.jsx'
import Birthday from './components/Birthday.jsx'

const App = () => {
  const carInfo = {
    name: "Ford",
    model: "Mustang"
  }
   const animalInfo = {
     color : "red",
    Breed : "Tiger"
   }
const simple = <h1>how are you?</h1>
  return (
     <div>
      {/* <h1>hello there</h1>  */}
      {/* <h4>Game Shakers</h4> */}
       {/* <h6>Every Witch Way</h6> */}
       {/* <h5>Henry Danger</h5> */}
    {/* <Car car="Toyota" /> */}
    {/* <Car2 brand= {carInfo}/> */}
     {/* <Animal Ani={animalInfo}/> */}
     {/* <Car3 brand= "Chevrolet" model="camaro" year="2022"/> */}
     {/* {simple} */}
     {/* <Styling/> */}
     {/* <Styling2/> */}
     {/* <Styling3/> */}
     {/* <State/> */}
     {/* <State2/> */}
     {/* <State3/> */}
     {/* <Map/> */}
     {/* <Map2/> */}
     {/* <Event/> */}
     {/* <Event2/> */}
     {/* <PreventDefault/> */}
     {/* <Tinything/> */}
     {/* <Form/> */}
     {/* <Condi/> */}
     {/* <Movies/> */}
     <Birthday/>
    </div>
  )
}

export default App

