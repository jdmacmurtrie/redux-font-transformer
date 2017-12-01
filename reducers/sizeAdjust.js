import { CHANGE } from '../actions/sizeAdjust'

let initialState = {
  size: 'normal'
}

const sizeAdjust = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, {
        size: action.size
      })
    default:
      return state;
  }
}

export default sizeAdjust
