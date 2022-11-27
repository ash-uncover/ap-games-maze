import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import AppSelectors from 'store/app/app.selectors'

import AudioManager from 'lib/AudioManager'

const Audio = () => {

  // Hooks //

  const master = useSelector(AppSelectors.settingsSoundMaster)
  useEffect(() => {
    AudioManager.master = master
  }, [master])

  const masterVolume = useSelector(AppSelectors.settingsSoundMasterVolume)
  useEffect(() => {
    AudioManager.masterVolume = masterVolume
  }, [masterVolume])

  const soundGame = useSelector(AppSelectors.settingsSoundGame)
  useEffect(() => {
    AudioManager.game = soundGame
  }, [soundGame])

  const soundGameVolume = useSelector(AppSelectors.settingsSoundGameVolume)
  useEffect(() => {
    AudioManager.gameVolume = soundGameVolume
  }, [soundGameVolume])

  const soundMusic = useSelector(AppSelectors.settingsSoundMusic)
  useEffect(() => {
    AudioManager.music = soundMusic
  }, [soundMusic])

  const soundMusicVolume = useSelector(AppSelectors.settingsSoundMusicVolume)
  useEffect(() => {
    AudioManager.musicVolume = soundMusicVolume
  }, [soundMusicVolume])

  const soundInterface = useSelector(AppSelectors.settingsSoundInterface)
  useEffect(() => {
    AudioManager.interface = soundInterface
  }, [soundInterface])

  const soundInterfaceVolume = useSelector(AppSelectors.settingsSoundInterfaceVolume)
  useEffect(() => {
    AudioManager.interfaceVolume = soundInterfaceVolume
  }, [soundInterfaceVolume])

  // Rendering //

  return null
}

export default Audio
