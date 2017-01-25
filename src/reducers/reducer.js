import { Map } from 'immutable'

import setState from './functions/set-state'

export default (state = Map(), action) => {
  return {
    'SET_STATE': setState(state, action.state)
  }[action.type]
}
