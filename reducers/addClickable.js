import { ADDCLICKABLE } from '../actions/addClickable'

let initialState = {
  clickables: ["Click Me!"]
}

const addClickable = (state = initialState, action) => {
  switch (action.type) {
    case ADDCLICKABLE:
      return Object.assign({}, state, {
        clickables: state.clickables.concat(action.newValue)
      })
    default:
      return state;
  }
}

export default addClickable
