function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT': return {
      value: state.value + 1,
      imageNumber: state.imageNumber + 1
    }
    case 'DECREMENT': return {
      value: state.value - 1,
      imageNumber: state.imageNumber > 0 ? state.imageNumber - 1 : (state.imageNumber - 1) * -1
    }
    case 'CHANGE_PIC': return {value: state.value, imageNumber: action.imageNumber}
    default: return state
  }
}
export default reducer
