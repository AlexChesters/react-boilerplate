export const setRandomString = string => {
  return {
    type: 'SET_RANDOM_STRING',
    string
  }
}

export const getRandomString = _ => {
  return dispatch => {
    window.setTimeout(_ => {
      return dispatch(setRandomString(Math.random().toString(36).substring(7)))
    }, 3000)
  }
}
