'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return <div className='1'>
      <Title name='Demetrius ' lastName = {{ First: 'Batista', Last: 'Dos Santos'}} />
    </div>
  }
})
export default App
