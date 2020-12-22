import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => alert('like')} color='blue'>
    Curtir
  </Button>
)

export default LikeButton