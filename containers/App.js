import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { change } from '../actions/sizeAdjust';
import { addClickable } from '../actions/addClickable';

import AddClickableForm from '../components/addClickableForm'
import Clickable from '../components/clickable'

const App = props => {
  let handleSizeChange = (id) => {
    if(props.size == 'normal') {
      props.change("bloated")
    } else {
      props.change("normal")
    }
  }

  let allClickables = props.clickables.map(c => (
      <Clickable
        key={c}
        id={c + 1}
        text={c}
        className={props.size}
        handleSizeChange={handleSizeChange}
      />
    )
  )

  return (
    <div className="goodStuff" >
      {allClickables}
      <AddClickableForm addClickable={props.addClickable}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (size) => dispatch(change(size)),
    addClickable: (clickables) => dispatch(addClickable(clickables))
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.sizeAdjust.size,
    clickables: state.addClickable.clickables
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
