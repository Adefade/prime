import React from 'react'
import Event2 from './Event2'
import Map from './Map'
import State from './state'

const Condi = () => {
    const age = 18
    if(age > 18 ){
        return (
            <div>
                <Map/>
            </div>
        )
    } else if (age == 18){
        return(
            <div>
                <Event2/>
            </div>
        )
    } else{
        return(
            <div>
                <State/>
            </div>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default Condi
