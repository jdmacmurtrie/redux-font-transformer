import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { change } from '../actions/fontAdjust';
import { addClickable } from '../actions/addClickable';

import AddClickableForm from '../components/addClickableForm'
import Clickable from '../components/clickable'

const App = props => {
  let handleFontChange = (selectedId) => {
    if (selectedId !== props.selectedId) {
      props.change(selectedId)
    } else {
      props.change(null)
    }
  }

  let allClickables = props.clickables.map(c => {
    let font;
    if (c + 1 == props.selectedId) {
      font = "cursive"
    } else {
      font = "print"
    }
    return(
      <Clickable
        key={c}
        id={c + 1}
        text={c}
        className={font}
        handleFontChange={handleFontChange}
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
    change: (font) => dispatch(change(font)),
    addClickable: (clickables) => dispatch(addClickable(clickables))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedId: state.fontAdjust.selectedId,
    clickables: state.addClickable.clickables
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
