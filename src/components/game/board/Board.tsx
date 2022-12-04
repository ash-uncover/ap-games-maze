import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Store
import GameSelectors from 'store/game/game.selectors'
import GameSlice from 'store/game/game.slice'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
import { AudioTypes } from '@uncover/games-common'
import { ShortcutManager, Shortcuts } from '@uncover/games-common'
// Components
import BoardTile from 'components/game/board/BoardTile'

import './Board.css'
import { GameStatuses } from 'store/game/game.state'

const Board = ({

}) => {

  // Hooks //

  const dispatch = useDispatch()

  const status = useSelector(GameSelectors.status)
  const tiles = useSelector(GameSelectors.boardTiles)
  const elements = useSelector(GameSelectors.boardElements)

  useEffect(() => {
    if (
      status !== GameStatuses.GAME_NOT_STARTED &&
      status !== GameStatuses.GAME_ENDED_DEFEAT &&
      status !== GameStatuses.GAME_ENDED_VICTORY
    ) {
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
    }
    return () => {
      ShortcutManager.removeShortcuts('board-shortcuts')
    }
  }, [status])

  // Events //

  const handleMoveUp = () => {
    Audio.play(AudioFiles.step, AudioTypes.GAME)
    dispatch(GameSlice.actions.moveUp({ elementId: elements[0] }))
  }
  const handleMoveLeft = () => {
    Audio.play(AudioFiles.step, AudioTypes.GAME)
    dispatch(GameSlice.actions.moveLeft({ elementId: elements[0] }))
  }
  const handleMoveDown = () => {
    Audio.play(AudioFiles.step, AudioTypes.GAME)
    dispatch(GameSlice.actions.moveDown({ elementId: elements[0] }))
  }
  const handleMoveRight = () => {
    Audio.play(AudioFiles.step, AudioTypes.GAME)
    dispatch(GameSlice.actions.moveRight({ elementId: elements[0] }))
  }

  // Rendering //

  const renderRow = (tileRow: string[], index: number) => {
    return (
      <div className='board-tiles-row' key={`row-${index}`}>
        {tileRow.map(renderTile)}
      </div>
    )
  }

  const renderTile = (tileId: string) => {
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