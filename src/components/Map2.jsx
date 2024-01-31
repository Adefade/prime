import React from 'react'

const Map2 = () => {
    const datas = [
        {id: 1, name: "Faruq"},
        {id: 2, name: "Fade"},
        {id: 3, name: "Dami"},
        {id: 4, name: "Aeesha"}
    ]
  return (
    <div>
      <h1>
        {
    datas.map((data, idx) => {
        return (
            <div key= {idx}>
                <h1>{data.name} is good</h1>
                <br />
                <br />
            </div>
        )
    })

        }
      </h1>
    </div>
  )
}
export default Map2
