import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const SubmitButton = ({ dispatch }) =>
  <button type="button" onClick={() => dispatch(submit('addText'))}>
    Submit
  </button>

export default connect()(SubmitButton)
