import React, { useEffect, useState } from 'react'
// Hooks
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  useWardProviders,
  useWardLoaded
} from '@uncover/ward-react'
// Store
import AppSlice from 'store/app/app.slice'
import { AppLoadStatuses } from 'store/app/app.state'
// Libs
import CONFIG from 'config'
import { loadData } from 'lib/data'
// Components
import { Loader, useLoadData } from '@uncover/games-common'
import { LoadIndicator } from './common/LoadIndicator'

interface AppLoadingProperties {
}

const AppLoading = ({
}: AppLoadingProperties) => {

  // Hooks //

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [loadValue, setLoadValue] = useState(0)
  const [loadCompleted, setLoadCompleted] = useState(false)

  const handleLoadProgress = (value: number) => {
    setLoadValue(value)
  }

  const handleLoadCompleted = () => {
    loadData().then(() => {
      setLoadCompleted(true)
    })
  }

  const wardLoaded = useWardLoaded()
  const themes = useWardProviders('mozaic/theme')

  const audios = [
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/sound/game.mp3`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/sound/home.mp3`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/sound/click.mp3`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/sound/step.mp3`
  ]

  const images = [
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/images/char-down.png`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/images/char-left.png`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/images/char-right.png`,
    `${CONFIG.AP_GAMES_MAZE_PLUGIN}/images/char-up.png`
  ]

  useLoadData(
    {
      audios,
      images,
      delayed: wardLoaded
    },
    handleLoadProgress,
    handleLoadCompleted
  )

  // Events //

  const handleClick = async () => {
    if (loadCompleted) {
      dispatch(AppSlice.actions.setLoadStatus(AppLoadStatuses.STARTED))
    }
  }

  // Rendering //

  return (
    <Loader
      value={loadValue}
      onClick={handleClick}
    >
      <div
        style={{
          width: '12rem',
          margin: '0 -1rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
        {loadCompleted ? t('app.start') : <LoadIndicator />}
      </div>
    </Loader>
  )
}

export default AppLoading
