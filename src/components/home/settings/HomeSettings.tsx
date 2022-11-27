import React, { useEffect, useState } from 'react'

import HomeMenu from '../HomeMenu'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AppSelectors from 'store/app/app.selectors'
import HomeSettingsGeneral from './HomeSettingsGeneral'
import HomeSettingsVideo from './HomeSettingsVideo'
import HomeSettingsAudio from './HomeSettingsAudio'
import HomeContent from '../HomeContent'
import ShortcutManager, { Shortcuts } from 'lib/ShortcutManager'

const HomeSettings = () => {

  // Hooks //

  const [page, setPage] = useState('general')
  const navigate = useNavigate()
  const settings = useSelector(AppSelectors.settings)

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-settings-shortcuts',
      priority: 1,
      shortcuts: [
        { code: 'KeyG', callback: handleGeneral },
        { code: 'KeyA', callback: () => handleAudio() },
        { code: 'KeyV', callback: handleVideo.bind(this) },
        { code: 'Escape', callback: handleBack },
      ]
    }
    ShortcutManager.addShortcuts(shortcuts)
    return () => {
      ShortcutManager.removeShortcuts('home-settings-shortcuts')
    }
  })

  // Events //

  const handleGeneral = () => {
    setPage('general')
  }
  const handleAudio = () => {
    setPage('audio')
  }
  const handleVideo = () => {
    setPage('video')
  }
  const handleBack = () => {
    navigate('/')
  }

  // Rendering //

  const renderContent = () => {
    switch (page) {
      case 'general': return <HomeSettingsGeneral />
      case 'audio': return <HomeSettingsAudio />
      case 'video': return <HomeSettingsVideo />
    }
  }

  return (
    <>
      <HomeMenu
        title='Settings'
        items={[
          { selected: page === 'general', text: 'General', onClick: handleGeneral },
          { selected: page === 'audio', text: 'Audio', onClick: handleAudio },
          { selected: page === 'video', text: 'Video', onClick: handleVideo },
          { text: 'Back', onClick: handleBack },
        ]}
      />
      <HomeContent>
        {renderContent()}
      </HomeContent>
    </>
  )
}

export default HomeSettings