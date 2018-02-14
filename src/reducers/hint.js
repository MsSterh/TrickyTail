import { INC_HINT } from '../actions/hint'

const initialState = {
  current: 0
}

const hint = (state = initialState, action) => {
  switch (action.type) {
  case INC_HINT:
    return {
      ...state,
      current: state.current + 1
    }
  default:
    return state
  }
}

export default hint
