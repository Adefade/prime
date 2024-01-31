import React from 'react'

const Animal = (props) => {
    return (
    <div> 
      <h1>He also has a {props.Ani.color} {props.Ani.Breed}</h1>
    </div>
  )
}

export default Animal

