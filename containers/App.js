import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { change } from '../actions/sizeAdjust';
import { submit } from '../actions/submit';
import Form from '../components/formComponent'
import SubmitButton from '../components/submitButton'
import Clickable from '../components/clickable'

const App = props => {
  let handleSizeChange = (id) => {
    if(props.size == 'normal') {
      props.change("bloated")
    } else {
      props.change("normal")
    }
  }

  let handleFormSubmit = (values) => { props.submit(values.textField)
  }

  let allClickables = props.clickables.map(c => {
    return(
      <Clickable
        key={c }
        id={c + 1}
        text={c}
        className={props.size}
        handleSizeChange={handleSizeChange}
      />
    )
  })

  return (
    <div className="goodStuff">
      {allClickables}

      <Form onSubmit={handleFormSubmit}/>
      <SubmitButton />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (size) => dispatch(change(size)),
    submit: (submission) => dispatch(submit(submission))
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.sizeAdjust.size,
    clickables: state.submissions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
