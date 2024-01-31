import React , {useState} from 'react'

const Tinything = () => {
    const [value, setValue] = useState("")
    const update = (event) => {
        setValue(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Halleluyah</h1>
      <input type="text" name='name'  id='name' onChange={update}/>
      {value}
      <br />
      <br />
      <br />
    </div>
  )
}

export default Tinything
