import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { change } from '../actions/sizeAdjust';
import { addClickable } from '../actions/addClickable';

import AddClickableForm from '../components/addClickableForm'
import Clickable from '../components/clickable'

const App = props => {
  let handleSizeChange = (selectedId) => {
    if (selectedId !== props.selectedId) {
      props.change(selectedId)
    } else {
      props.change(null)
    }
  }

  let allClickables = props.clickables.map(c => {
    let size;
    if (c + 1 == props.selectedId) {
      size = "bloated"
    } else {
      size = "normal"
    }
    return(
      <Clickable
        key={c}
        id={c + 1}
        text={c}
        className={size}
        handleSizeChange={handleSizeChange}
      />
    )}
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
    selectedId: state.sizeAdjust.selectedId,
    clickables: state.addClickable.clickables
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
