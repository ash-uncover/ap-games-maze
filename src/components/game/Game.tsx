import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// Store
import GameSelectors from 'store/game/game.selectors'
import { GameStatuses } from 'store/game/game.state'
// Components
import Board from 'components/commons/board/Board'

import './Game.css'

const Game = ({ }) => {

  // Hooks //

  const status = useSelector(GameSelectors.status)

  // Rendering //

  if (status === GameStatuses.GAME_NOT_STARTED) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className='game'>
      <Board />
    </div>
  )
}

export default Game