import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Store
import AudioSlice from 'store/audio/audio.slice'
import AudioSelectors from 'store/audio/audio.selectors'
// Components
import { MenuStepInput } from 'components/commons/menu/MenuStepInput'
import MenuCheckbox from 'components/commons/menu/MenuCheckbox'

const HomeSettingsAudio = () => {

  // Hooks //

  const dispatch = useDispatch()

  const soundMaster = useSelector(AudioSelectors.master)
  const soundMasterVolume = useSelector(AudioSelectors.masterVolume)
  const soundGame = useSelector(AudioSelectors.game)
  const soundGameVolume = useSelector(AudioSelectors.gameVolume)
  const soundMusic = useSelector(AudioSelectors.music)
  const soundMusicVolume = useSelector(AudioSelectors.musicVolume)
  const soundInterface = useSelector(AudioSelectors.interfac)
  const soundInterfaceVolume = useSelector(AudioSelectors.interfaceVolume)

  // Events //

  const handleMasterChange = (event) => {
    dispatch(AudioSlice.actions.setMaster(event.target.checked))
  }
  const handleMasterVolumeChange = (value) => {
    dispatch(AudioSlice.actions.setMasterVolume(value))
  }

  const handleGameChange = (event) => {
    dispatch(AudioSlice.actions.setGame(event.target.checked))
  }
  const handleGameVolumeChange = (value) => {
    dispatch(AudioSlice.actions.setGameVolume(value))
  }

  const handleInterfaceChange = (event) => {
    dispatch(AudioSlice.actions.setInterface(event.target.checked))
  }
  const handleInterfaceVolumeChange = (value) => {
    dispatch(AudioSlice.actions.setInterfaceVolume(value))
  }

  const handleMusicChange = (event) => {
    dispatch(AudioSlice.actions.setMusic(event.target.checked))
  }
  const handleMusicVolumeChange = (value) => {
    dispatch(AudioSlice.actions.setMusicVolume(value))
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