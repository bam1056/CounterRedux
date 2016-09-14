import React, { Component } from 'react'
const UNSPLASH_URL = 'https://unsplash.it/200/300?image='

class PictureChange extends Component {
  static propTypes = {
    imageNumber: React.PropTypes.number.isRequired,
    changeToRandomPic: React.PropTypes.func
  }
  render () {
    const { imageNumber, changeToRandomPic } = this.props
    return <div className='picture'>
      <img src={`${UNSPLASH_URL}${imageNumber}`} alt='random' width='200' height='300' />
      <button onClick={changeToRandomPic}>CHANGE PIC</button>
    </div>
  }
}
export default PictureChange
