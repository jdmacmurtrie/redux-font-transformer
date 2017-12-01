import React from 'react'

const Clickable = props => {
  let clickHandler = () => {
    props.handleSizeChange(props.id)
  }

  return(
<<<<<<< HEAD
    <div className={props.className} onClick={props.handleSizeChange}>
=======
    <div className={props.className} onClick={clickHandler}>
>>>>>>> 19b33b461e124bb3f13b7258d195b868cca755bd
      {props.text}
    </div>
  )
}


export default Clickable
