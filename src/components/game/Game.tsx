import React, { useEffect } from 'react'

import Board from 'components/commons/board/Board'

import './Game.css'
import GameSelectors from 'store/game/game.selectors'
import { useSelector } from 'react-redux'
import { GameStatuses } from 'store/game/game.state'
import { Navigate, useNavigate } from 'react-router-dom'

const Game = ({ }) => {

  // Hooks //

  const navigate = useNavigate()
  const status = useSelector(GameSelectors.status)

  // Rendering //

  if (status === GameStatuses.GAME_NOT_STARTED) {
    return (
      <Navigate to='/' />
    )
  }
  return (
    <div>
      <Board />
    </div>
  )
}

export default Game