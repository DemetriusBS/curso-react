'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return <div className='1'>
      <Title name='Demetrius' lastName='Batista Dos Santos' age={28} />
      <label htmlFor='input'>Input</label>
      <input type='text' id='input' />
    </div>
  }
})
export default App
