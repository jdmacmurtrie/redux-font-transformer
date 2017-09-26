import { BLOAT, SHRINK } from '../actions/sizeAdjust'

let initialState = {
  size: 'normal'
}

const sizeAdjust = (state = initialState, action) => {
  switch (action.type) {
    case SHRINK:
      return Object.assign({}, state, {
        size: 'normal'
      })
    case BLOAT:
      return Object.assign({}, state, {
        size: 'bloated'
      })
    default:
      return state;
  }
}

export default sizeAdjust
