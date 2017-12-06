import { CHANGE } from '../actions/sizeAdjust'

let initialState = {
  size: 'normal',
  selected: null
}

const sizeAdjust = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, {
        selectedId: action.selectedId
      })
    default:
      return state;
  }
}

export default sizeAdjust
