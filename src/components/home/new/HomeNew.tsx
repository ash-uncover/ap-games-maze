import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// Store
import GameSlice from 'store/game/game.slice'
// Libs
import { ShortcutManager, Shortcuts } from '@uncover/games-common'
// Components
import HomeMenu from '../HomeMenu'

const HomeNew = () => {

  // Hooks //

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [map, setMap] = useState('medium')

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-new-shortcuts',
      priority: 1,
      shortcuts: [
        { code: 'KeyS', callback: handleStart },
        { code: 'Escape', callback: handleBack },
      ]
    }
    return ShortcutManager.addShortcuts(shortcuts)
  })

  // Events //

  const handleStart = () => {
    dispatch(GameSlice.actions.startGame({
      mapId: map,
      nbPlayers: 1
    }))
    navigate('/game')
  }

  const handleBack = () => {
    navigate('/')
  }

  // Rendering //

  return (
    <HomeMenu
      title='New Game'
      items={[
        { text: 'Start', onClick: handleStart },
        { text: 'Back', onClick: handleBack },
      ]}
    />
  )
}

export default HomeNew