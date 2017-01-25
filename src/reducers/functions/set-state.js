import { fromJS } from 'immutable'

export default (state, newState) => {
  return state.merge(fromJS(newState))
}
