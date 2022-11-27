import React from 'react'

import './Tile.css'

const Tile = ({
  id,
  x,
  y
}) => {
  // Rendering //

  return (
    <div className='tile'>
      <div>{id}</div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  )
}

export default Tile