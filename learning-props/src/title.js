'use strict'

import React from 'react'

const Title = React.createClass({
  render: function () {
    return (
    <h1> Olá {this.props.name + ' ' + this.props.lastName}! Você tem {this.props.age} anos</h1 >
    )
  }
})

export default Title