import React from 'react'
import { useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'

import Tile from './tile/Tile'
import { GameBoardTile } from 'lib/game/board/tiles/tile.model'

interface BoardTileProperties {
  tileId: string
  onClick: (tile: GameBoardTile) => void
}

const BoardTile = ({
  tileId,
  onClick
}: BoardTileProperties) => {

  // Hooks //

  const tile = useSelector(GameSelectors.tile(tileId))

  // Events //

  const handleClick = () => {
    onClick(tile)
  }


  // Rendering //

  return (
    <Tile
      {...tile}
      onClick={handleClick}
    />
  )
}

export default BoardTile