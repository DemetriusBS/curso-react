'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido(a)',
      lastName: 'Sem sobrenome'
    }
  },
  render: function () {
    return (
      <h1> Olá {this.props.name + '' + this.props.lastName}! </h1 >
    )
  }
})

export default Title