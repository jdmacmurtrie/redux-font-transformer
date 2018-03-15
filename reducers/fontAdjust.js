import { CHANGE } from '../actions/fontAdjust'

let initialState = {
  font: 'print',
  selected: null
}

const fontAdjust = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, {
        selectedId: action.selectedId
      })
    default:
      return state;
  }
}

export default fontAdjust
