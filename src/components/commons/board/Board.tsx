import ShortcutManager, { Shortcuts } from 'lib/ShortcutManager'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'
import GameSlice from 'store/game/game.slice'
import BoardTile from './BoardTile'

import './Board.css'

const Board = ({

}) => {

  // Hooks //

  const dispatch = useDispatch()

  const tiles = useSelector(GameSelectors.boardTiles)
  const elements = useSelector(GameSelectors.boardElements)

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'board-shortcuts',
      priority: 2,
      shortcuts: [
        { down: true, code: 'ArrowUp', callback: handleMoveUp },
        { down: true, code: 'ArrowLeft', callback: handleMoveLeft },
        { down: true, code: 'ArrowDown', callback: handleMoveDown },
        { down: true, code: 'ArrowRight', callback: handleMoveRight },
      ]
    }
    ShortcutManager.addShortcuts(shortcuts)
    return () => {
      ShortcutManager.removeShortcuts('board-shortcuts')
    }
  })

  // Events //

  const handleMoveUp = () => {
    dispatch(GameSlice.actions.moveUp({ elementId: elements[0] }))
  }
  const handleMoveLeft = () => {
    dispatch(GameSlice.actions.moveLeft({ elementId: elements[0] }))
  }
  const handleMoveDown = () => {
    dispatch(GameSlice.actions.moveDown({ elementId: elements[0] }))
  }
  const handleMoveRight = () => {
    dispatch(GameSlice.actions.moveRight({ elementId: elements[0] }))
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