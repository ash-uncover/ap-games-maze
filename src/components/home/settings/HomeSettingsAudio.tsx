import { UUID } from '@uncover/js-utils'
import MenuCheckbox from 'components/commons/menu/MenuCheckbox'
import { MenuStepInput } from 'components/commons/menu/MenuStepInput'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppSelectors from 'store/app/app.selectors'
import AppSlice from 'store/app/app.slice'

const HomeSettingsAudio = () => {

  // Hooks //

  const dispatch = useDispatch()

  const soundMaster = useSelector(AppSelectors.settingsSoundMaster)
  const soundMasterVolume = useSelector(AppSelectors.settingsSoundMasterVolume)
  const soundGame = useSelector(AppSelectors.settingsSoundGame)
  const soundGameVolume = useSelector(AppSelectors.settingsSoundGameVolume)
  const soundMusic = useSelector(AppSelectors.settingsSoundMusic)
  const soundMusicVolume = useSelector(AppSelectors.settingsSoundMusicVolume)
  const soundInterface = useSelector(AppSelectors.settingsSoundInterface)
  const soundInterfaceVolume = useSelector(AppSelectors.settingsSoundInterfaceVolume)

  // Events //

  const handleMasterChange = (event) => {
    dispatch(AppSlice.actions.setSound(event.target.checked))
  }
  const handleMasterVolumeChange = (value) => {
    dispatch(AppSlice.actions.setSoundVolume(value))
  }

  const handleGameChange = (event) => {
    dispatch(AppSlice.actions.setSoundGame(event.target.checked))
  }
  const handleGameVolumeChange = (value) => {
    dispatch(AppSlice.actions.setSoundGameVolume(value))
  }

  const handleInterfaceChange = (event) => {
    dispatch(AppSlice.actions.setSoundInterface(event.target.checked))
  }
  const handleInterfaceVolumeChange = (value) => {
    dispatch(AppSlice.actions.setSoundInterfaceVolume(value))
  }

  const handleMusicChange = (event) => {
    dispatch(AppSlice.actions.setSoundMusic(event.target.checked))
  }
  const handleMusicVolumeChange = (value) => {
    dispatch(AppSlice.actions.setSoundMusicVolume(value))
  }

  // Rendering //

  return (
    <>
      <h2 style={{ fontWeight: 'normal' }}>
        Audio Settings
      </h2>

      <h3 style={{ fontWeight: 'normal' }}>
        Master
      </h3>

      <MenuCheckbox
        label='Enable Sounds'
        checked={soundMaster}
        onChange={handleMasterChange}
      />
      <MenuStepInput
        label='Master Volume'
        min={0}
        max={100}
        value={soundMasterVolume}
        onChange={handleMasterVolumeChange}
      />

      <h3 style={{ fontWeight: 'normal' }}>
        Game
      </h3>

      <MenuCheckbox
        label='Enable Game Sounds'
        checked={soundGame}
        onChange={handleGameChange}
      />
      <MenuStepInput
        label='Enable Game Sounds'
        min={0}
        max={100}
        value={soundGameVolume}
        onChange={handleGameVolumeChange}
      />


      <h3 style={{ fontWeight: 'normal' }}>
        Interface
      </h3>

      <MenuCheckbox
        label='Enable Interface Sounds'
        checked={soundInterface}
        onChange={handleInterfaceChange}
      />
      <MenuStepInput
        label='Interface Volumne'
        min={0}
        max={100}
        value={soundInterfaceVolume}
        onChange={handleInterfaceVolumeChange}
      />

      <h3 style={{ fontWeight: 'normal' }}>
        Music
      </h3>

      <MenuCheckbox
        label='Enable Music'
        checked={soundMusic}
        onChange={handleMusicChange}
      />
      <MenuStepInput
        label='Music Volumne'
        min={0}
        max={100}
        value={soundMusicVolume}
        onChange={handleMusicVolumeChange}
      />
    </>
  )
}



export default HomeSettingsAudio