function filter(state = 'all', action) {
  if (action.type === 'CHANGE_TYPE') {
    console.log(action.payload)
    return action.payload
  }
  return state
}

export default filter
