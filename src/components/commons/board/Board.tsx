import ShortcutManager, { Shortcuts } from 'lib/ShortcutManager'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'
import GameSlice from 'store/game/game.slice'
import BoardTile from './BoardTile'

const Board = ({

}) => {

  // Hooks //

  const dispatch = useDispatch()

  const tiles = useSelector(GameSelectors.boardTiles)

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'board-shortcuts',
      priority: 2,
      shortcuts: [
        { code: 'ArrowUp', callback: handleMoveUp },
        { code: 'ArrowLeft', callback: handleMoveLeft },
        { code: 'ArrowDown', callback: handleMoveDown },
        { code: 'ArrowRight', callback: handleMoveRight },
      ]
    }
    ShortcutManager.addShortcuts(shortcuts)
    return () => {
      ShortcutManager.removeShortcuts('board-shortcuts')
    }
  })

  // Events //

  const handleMoveUp = () => {
    dispatch(GameSlice.actions.moveUp())
  }
  const handleMoveLeft = () => {
    dispatch(GameSlice.actions.moveLeft())
  }
  const handleMoveDown = () => {
    dispatch(GameSlice.actions.moveDown())
  }
  const handleMoveRight = () => {
    dispatch(GameSlice.actions.moveRight())
  }

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