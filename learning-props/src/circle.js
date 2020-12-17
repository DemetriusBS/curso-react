import React from 'react'

const Circle = ({ color }) => (
  <div style={{
    backgroundColor: color,
    width: '100px',
    height: '100px',
    margin: '50px',
    borderRadius: '50px'
  }}>
  </div>
)

Circle.defaultProps = {
  color: 'yellow'
}

export default Circle