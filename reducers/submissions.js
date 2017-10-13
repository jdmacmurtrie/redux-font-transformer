import { SUBMIT } from '../actions/submit'

let initialState = ["Click Me!"]

const submissions = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return state.concat(action.submission)
    default:
      return state;
  }
}

export default submissions
