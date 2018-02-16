import { SET_INPUT_FIELD } from '../actions/input'

const initialState = {
  text: ''
}

const input = (state = initialState, action) => {
  switch (action.type) {
  case SET_INPUT_FIELD:
    return {
      ...state,
      text: action.text
    }

  default:
    return state
  }
}

export default input
