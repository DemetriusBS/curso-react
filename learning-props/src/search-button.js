import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('search')} color='red'>
    Search
  </Button>
)

export default SearchButton