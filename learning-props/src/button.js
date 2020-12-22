'use strict'

import React from 'react'

const Button = ({ children, handleClick, color }) => (
  <button className='main-button' onClick={handleClick} style={{
    backgroundColor: color
  }}>
    {children}
  </button>
)

Button.defaultProps = {
  color: 'orange'
}

export default Button