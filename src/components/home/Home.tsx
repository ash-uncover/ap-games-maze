import React, { useEffect } from 'react'
// Libs
import AudioManager, { AudioFiles, AudioTypes } from 'lib/utils/AudioManager'
import ShortcutManager, { Shortcuts } from 'lib/utils/ShortcutManager'

import './Home.css'

const Home = ({ children }) => {

  // Hooks //

  useEffect(() => {
    AudioManager.play(AudioFiles.home, AudioTypes.MUSIC)
    const shortcuts: Shortcuts = {
      id: 'home-shortcuts',
      priority: 1,
      shortcuts: []
    }
    ShortcutManager.addShortcuts(shortcuts)
    return () => {
      AudioManager.stop(AudioFiles.home)
      ShortcutManager.removeShortcuts('home-shortcuts')
    }
  })

  // Rendering //

  return (
    <div className='home'>
      <div className='layer layer-background' />
      <div className='layer layer-opacity'>
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: 'darkgrey',
            margin: '1rem',
            fontStyle: 'italic',
            fontSize: '0.75rem',
          }}
        >
          @uncover 2023
        </span>
      </div>
      <div className='layer layer-content'>
        {children}
      </div>
    </div>
  )
}

export default Home