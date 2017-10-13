import React from 'react'

const Clickable = props => {
  return(
    <div className={props.className}>
      {props.text}
    </div>
  )
}


export default Clickable
