import React from 'react'


const Event = () => {
    const shoot= () => {
       alert("What a shot!") 
    }
  return (
    <div>
      <button onClick={shoot}><h1>Shooooooooot</h1></button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Event
