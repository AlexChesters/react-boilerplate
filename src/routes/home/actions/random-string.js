import { SET_RANDOM_STRING } from '../action-types'

export const setRandomString = (payload) => {
  return {
    type: SET_RANDOM_STRING,
    payload
  }
}

export const getRandomString = () => {
  return (dispatch) => {
    window.setTimeout(_ => {
      return dispatch(setRandomString(Math.random().toString(36).substring(7)))
    }, 3000)
  }
}
