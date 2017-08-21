import { combineReducers } from 'redux'

import * as homeReducers from './routes/home/reducers'

export default combineReducers({
  ...homeReducers
})
