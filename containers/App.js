import React from 'react';
import { connect } from 'react-redux';
import { bloat, shrink } from '../actions/sizeAdjust';

const App = props => {
  let handleSizeChange = () => {
    if(props.size == 'normal') {
      props.bloat("bloated")
    } else {
      props.shrink("normal")
    }
  }

  return (
    <div className="goodStuff" onClick={handleSizeChange}>
      <div className={props.size}>
        Click Me!
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    bloat: () => dispatch(bloat()),
    shrink: () => dispatch(shrink())
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.size
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
