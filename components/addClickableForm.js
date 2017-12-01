import React from 'react'
import { Field, reduxForm, SubmissionError, reset, dispatch } from 'redux-form'


const renderField = ({ type, label, input, meta: { touched, error }}) => (
  <div className="input-row">
    <label>{label}</label>
    <input {...input} type={type}/>
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
)

let AddClickableForm = ({ handleSubmit, addClickable }) => {
  let submit = ({ clickable='' }, dispatch) => {
    let error = {};
    let isError = false;

    if (clickable.trim() ==='') {
      error.clickable = 'Give me something!';
      isError = true;
    }
    if (isError) {
      throw new SubmissionError(error);
    } else {
      addClickable(clickable)
      dispatch(reset('addClickable'))
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="clickable" label='Add Clickable' component={renderField} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}

AddClickableForm = reduxForm({
  form: 'addClickable'
})(AddClickableForm)

export default AddClickableForm
