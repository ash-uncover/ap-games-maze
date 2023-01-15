import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// Store
import GameSlice from 'store/game/game.slice'
// Libs
import { Panel, PanelButton, ShortcutManager, Shortcuts } from '@uncover/games-common'
import { useTranslation } from 'react-i18next'
// Components

export const HomeContentPlay = () => {

  // Hooks //

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

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
    <div className='home-play'>

      <div className='home-play__scroll-area'>
        <Panel>
          <h2>
            {t('home.play.title')}
          </h2>
        </Panel>

      </div>

      <PanelButton
        className='home-play__main-action'
        title={t('home.play.start.tooltip')}
        onClick={handleStart}
      >
        {t('home.play.start.text')}
      </PanelButton>
    </div>
  )
}