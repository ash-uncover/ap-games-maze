import React from 'react'
import Element from '../element/Element'

import './Tile.css'

const Tile = ({
  id,
  x,
  y,
  elements
}) => {

  // Rendering //

  return (
    <div className='tile'>
      <div>{id}</div>
      <div>x: {x}</div>
      <div>y: {y}</div>
      {elements.map(element => <Element id={element} />)}
    </div>
  )
}

export default Tile