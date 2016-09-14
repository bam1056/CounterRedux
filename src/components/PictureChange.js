import React, { Component } from 'react'
const UNSPLASH_URL = 'https://unsplash.it/200/300?image='

class PictureChange extends Component {
  static propTypes = {
    imageNumber: React.PropTypes.number.isRequired
  }
  render () {
    const { imageNumber } = this.props
    return <div className='picture'>
      <img src={`${UNSPLASH_URL}${imageNumber}`} alt='random' width='200' height='300' />
    </div>
  }
}
export default PictureChange
