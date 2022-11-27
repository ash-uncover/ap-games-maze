import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import GameSlice from 'store/game/game.slice'

import HomeMenu from '../HomeMenu'
import ShortcutManager, { Shortcuts } from 'lib/ShortcutManager'

const HomeNew = () => {

  // Hooks //

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-new-shortcuts',
      priority: 1,
      shortcuts: [
        { code: 'KeyS', callback: handleStart },
        { code: 'Escape', callback: handleBack },
      ]
    }
    ShortcutManager.addShortcuts(shortcuts)
    return () => {
      ShortcutManager.removeShortcuts('home-new-shortcuts')
    }
  })

  // Events //

  const handleStart = () => {
    dispatch(GameSlice.actions.startGame({ width: 5, height: 7 }))
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