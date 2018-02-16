import { SET_PAGE } from '../actions/page'

const initialState = {
  current: 0
}

const page = (state = initialState, action) => {
  switch (action.type) {
  case SET_PAGE:
    return {
      ...state,
      current: action.page
    }

  default:
    return state
  }
}

export default page
