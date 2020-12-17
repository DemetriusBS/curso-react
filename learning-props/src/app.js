'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Title name='Demetrius' />
      </div>
    )
  }
}

/*
const App = React.createClass({
  render: function () {
    return <div className='1'>
      <Title />
    </div>
  }
})
*/
export default App
