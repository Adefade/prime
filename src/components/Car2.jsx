import React from 'react'

const Car2 = (props) => {
    const carInfo = {
        name: "Ford",
        model: "Mustang"
    }
  return (
    <div>
      <h1>Who lives in my garage</h1>
      <h2>He also got a {props.brand.model}</h2>
    </div>
  )
}

export default Car2
