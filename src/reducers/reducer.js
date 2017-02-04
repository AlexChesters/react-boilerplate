import { Map } from 'immutable'

import setState from './functions/set-state'
import setRandomString from './functions/set-random-string'

export default (state = Map(), action) => {
  return {
    'SET_STATE': setState(state, action.state),
    'SET_RANDOM_STRING': setRandomString(state, action.string)
  }[action.type]
}
