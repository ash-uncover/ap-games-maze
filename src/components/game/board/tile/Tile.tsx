import React from 'react'
// Libs
import { Terrains } from 'lib/data'
import { GameBoardTile } from 'lib/game/board/tiles/tile.model'
// Components
import Element from '../element/Element'

import './Tile.css'

interface TileProperties extends GameBoardTile {
  onClick: () => void
}

const Tile = (tile: TileProperties) => {

  // Events //

  const handleClick = () => {
    tile.onClick()
  }

  // Rendering //

  return (
    <div
      className='tile'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: Terrains[tile.terrain].color
      }}
      onClick={handleClick}
    >
      {tile.elements.map(element => <Element key={element} elementId={element} />)}
    </div>
  )
}

export default Tile