import React from 'react'
import { useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'
import BoardTile from './BoardTile'

const Board = ({

}) => {

  // Hooks //

  const tiles = useSelector(GameSelectors.boardTiles)

  // Rendering //

  const renderRow = (tileRow, index) => {
    return (
      <div className='board-tiles-row' key={`row-${index}`}>
        {tileRow.map(renderTile)}
      </div>
    )
  }

  const renderTile = (tileId) => {
    return (
      <BoardTile key={tileId} tileId={tileId} />
    )
  }

  return (
    <div className='board'>
      <div className='board-tiles'>
        {tiles.map(renderRow)}
      </div>
    </div>
  )
}

export default Board