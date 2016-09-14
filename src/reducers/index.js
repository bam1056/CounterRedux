function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT': return {
      value: state.value + 1,
      imageNumber: state.value + 1
    }
    case 'DECREMENT': {
      if (state.value > 0) {
        return {
          value: state.value - 1,
          imageNumber: state.value + 1
        }
      } else {
        return {
          value: state.value - 1,
          imageNumber: state.value * -1
        }
      }
    }
    default: return state
  }
}
export default reducer
