import React from 'react'

const Clickable = props => {
  return(
    <div className={props.className} onClick={props.handleSizeChange}>
      {props.text}
    </div>
  )
}


export default Clickable
