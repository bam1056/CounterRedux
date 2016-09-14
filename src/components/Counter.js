import React, { Component } from 'react'

class Counter extends Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired
  }

  render () {
    const { value, increment, decrement } = this.props
    return <div className='counter'>
      <p className='buttons'>
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
    </div>
  }
}

export default Counter
