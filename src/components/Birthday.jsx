import React, {useState}from 'react'
 import personData from '../data/Birthday.js'
 import '../css/birthday.css'


const Birthday = () => {
    const [persons, setPersons] = useState(personData)

    const remove = (id) => {
            const newData = persons.filter(person=> person.id!==id)
            setPersons(newData)
    }

    const render = persons.map((person, idx) => {
        return(
            <div className='each-container' key={person.id}>
                <img src={person.url} alt="" />
                <h2>{person.Name}</h2>
                <h2>{person.date}</h2>
                <h2>{person.personality}</h2>
                <button  onClick={()=>remove(person.id)}>X</button>
            </div>
        )
    })
  return (
    <div>
        <h1 style={{textAlign:'center', margin : '1%'}}>{persons.length} {persons.length===1? 'person' : 'people'} Available</h1>
          <div className='container'>
          {render}
          </div>

    </div>

  )
}

export default Birthday
