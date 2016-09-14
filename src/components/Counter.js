import React, { Component } from 'react'
import PictureChange from './PictureChange'

class Counter extends Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
  }

  render () {
    const { value, increment, decrement } = this.props
    return <div className='counter'>
      <p className='button-container'>
        Clicked: {value} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
      </p>
      <PictureChange {...this.props} />
    </div>
  }
}

export default Counter
