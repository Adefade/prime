import React from 'react'

function PreventDefault () {
    const prev = (event) => {
        event.preventDefault();
        console.log("you clicked me ")
    }
  return (
    <div>
      <h1>Show me the meaning</h1>
      <a href="https://newhorizons.com" onClick={prev}>New horizon</a>
    </div>
  )
}

export default PreventDefault
