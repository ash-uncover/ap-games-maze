import React from 'react'
import { useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'

import Tile from './tile/Tile'

interface BoardTileProperties {
  tileId: string
}

const BoardTile = ({
  tileId
}: BoardTileProperties) => {

  // Hooks //

  const tile = useSelector(GameSelectors.tile(tileId))

  // Rendering //

  return (
    <Tile {...tile} />
  )
}

export default BoardTile