import React from 'react'
import CBItem from './CBComponent/CBItem'

function Cars(props) {
  return (
    <div ref={props.carref}>
      <CBItem />
    </div>
  )
}

export default Cars