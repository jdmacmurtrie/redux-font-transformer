import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from './submitButton'

let Form = props => {
  const { handleFormSubmit } = props
  return (
    <form onSubmit={ handleFormSubmit }>
      <div>
        <Field name="textField" component="input" type="text" placeholder="Add more clickables"/>
      </div>
   </form>
  )
}

Form = reduxForm({
  form: 'addText'
})(Form)

export default Form;
