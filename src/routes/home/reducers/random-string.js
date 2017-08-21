export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_RANDOM_STRING':
      return { ...state, string: action.string }
    default:
      return state
  }
}
