'use strict'

import React, { Component } from 'react'
import Square from './square'
import Circle from './circle'

class App extends Component {
  render() {
    return (
      <div className='container'>
        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        {['green', 'black', 'green', 'black'].map((circle, index) => (
          <Circle key={index} color={circle} />
        ))}
      </div>
    )
  }
}

export default App
