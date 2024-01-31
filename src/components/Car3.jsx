import React from 'react'
// desstructuring
const Car3 = (props) => {
    const {brand , model, year } = props
  return (
    <div>
      <h1>The {year}, {brand} ,{model} just shipped in </h1>
    </div>
  )
}

export default Car3
