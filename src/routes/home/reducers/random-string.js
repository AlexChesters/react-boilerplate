import { SET_RANDOM_STRING } from '../action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_RANDOM_STRING:
      return { ...state, string: action.payload }
    default:
      return state
  }
}
