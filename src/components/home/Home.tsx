import React, { ReactNode, useEffect } from 'react'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
import { AudioTypes } from '@uncover/games-common'
import { ShortcutManager, Shortcuts } from '@uncover/games-common'

import './Home.css'

interface HomeProperties {
  children: ReactNode
}
const Home = ({
  children
}: HomeProperties) => {

  // Hooks //

  useEffect(() => {
    return Audio.play(
      AudioFiles.home,
      AudioTypes.MUSIC
    )
  }, [])

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-shortcuts',
      priority: 1,
      shortcuts: []
    }
    ShortcutManager.addShortcuts(shortcuts)
  }, [])

  // Rendering //

  return (
    <div className='home'>
      {children}
    </div>
  )
}

export default Home