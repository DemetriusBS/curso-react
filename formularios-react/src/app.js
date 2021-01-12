'use strict'

import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: 'teste'
    }
  }

  render() {
    return (
      <form>
        <textarea value={this.state.value} onChange={(e) =>{
          this.setState({
            value: e.target.value
          })
        }}/>
      </form>
    )
  }
}
export default App
