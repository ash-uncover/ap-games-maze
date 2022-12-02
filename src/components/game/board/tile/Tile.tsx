import React from 'react'
// Libs
import { Terrains } from 'lib/data/Data'
import { GameBoardTile } from 'lib/game/board/tiles/tile.model'
// Components
import Element from '../element/Element'

import './Tile.css'

const Tile = (tile: GameBoardTile) => {

  if (!Terrains[tile.terrain]) {
    console.log(Terrains)
    console.log(tile.terrain)
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
    >
      {tile.elements.map(element => <Element key={element} id={element} />)}
    </div>
  )
}

export default Tile