export function decrement () {
  return {
    type: 'DECREMENT'
  }
}

export function increment () {
  return {
    type: 'INCREMENT'
  }
}

export function changeToRandomPic () {
  const imageNum = Math.floor(Math.random() * 300)
  return {
    type: 'CHANGE_PIC',
    imageNumber: imageNum
  }
}
