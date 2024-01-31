import React from 'react'

const Event2 = () => {
    const freekick =(data) => {
        alert (data)
    }
  return (
    <div>
      <button onClick={ () => freekick("take the shot") }><h1>That was a foul</h1></button>
    </div>
  )
}

export default Event2
