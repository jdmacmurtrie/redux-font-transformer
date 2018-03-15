import React from 'react'

const Clickable = props => {
  let clickHandler = () => {
    props.handleFontChange(props.id)
  }

  return(
    <div className={props.className} onClick={clickHandler}>
      {props.text}
    </div>
  )
}


export default Clickable
