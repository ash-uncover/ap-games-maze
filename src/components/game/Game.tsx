import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// Store
import GameSelectors from 'store/game/game.selectors'
import GameSlice from 'store/game/game.slice'
import { GameStatuses } from 'store/game/game.state'
// Libs
import { AudioCategories, useAudioEffect } from '@uncover/games-common'
// Components
import Board from 'components/game/board/Board'

import './Game.css'
import CONFIG from 'config'

const Game = ({ }) => {

  // Hooks //

  const dispatch = useDispatch()

  const status = useSelector(GameSelectors.status)

  useAudioEffect([`${CONFIG.AP_GAMES_MAZE_PUBLIC}/sound/game.mp3`], {
    category: AudioCategories.MUSIC,
    shufffle: true,
    loop: true
  })

  // Events //

  const handleEndGame = () => {
    dispatch(GameSlice.actions.endGame())
  }

  // Rendering //

  if (status === GameStatuses.GAME_NOT_STARTED) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className='game'>
      <div className='game-header'>
        {`Steps: `}
      </div>
      <div
        className='game-area'
        style={{ position: 'relative' }}
      >
        <Board />
      </div>
      <div className='game-footer'>
        footer
      </div>
      {status === GameStatuses.GAME_ENDED_VICTORY ?
        <div className='game-layer'>
          <div className='game-dialog'>
            VICTORY
            <button
              onClick={handleEndGame}
            >
              Return to Main Menu
            </button>
          </div>
        </div>
        : null}
    </div>
  )
}

export default Game