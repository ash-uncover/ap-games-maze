import { RootState } from 'store/state'

export const base = (state: RootState) => state.app

export const busy = (state: RootState) => base(state).busy
export const busyMessage = (state: RootState) => base(state).busyMessage
export const language = (state: RootState) => base(state).language
export const dialog = (state: RootState) => base(state).dialog
export const dialogParams = (state: RootState) => base(state).dialogParams

export const settings = (state: RootState) => base(state).settings
export const settingsSound = (state: RootState) => settings(state).sound
export const settingsSoundVolume = (state: RootState) => settings(state).soundVolume
export const settingsSoundMusic = (state: RootState) => settings(state).soundMusic
export const settingsSoundMusicVolume = (state: RootState) => settings(state).soundMusicVolume
export const settingsSoundInterface = (state: RootState) => settings(state).soundInterface
export const settingsSoundInterfaceVolume = (state: RootState) => settings(state).soundInterfaceVolume

const AppSelectors = {
  busy,
  busyMessage,
  language,
  dialog,
  dialogParams,

  settings,
  settingsSound,
  settingsSoundVolume,
  settingsSoundMusic,
  settingsSoundMusicVolume,
  settingsSoundInterface,
  settingsSoundInterfaceVolume,
}

export default AppSelectors
