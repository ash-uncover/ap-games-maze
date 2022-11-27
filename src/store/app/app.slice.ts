import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { normalizeVolumeValue } from 'lib/AudioManager'

import Language from 'lib/language'

import AppState from 'store/app/app.state'

// STATE //

const initialState: AppState = {
  busy: false,
  busyMessage: '',

  language: Language.DEFAULT.id,

  dialog: null,
  dialogParams: null,

  settings: {
    sound: true,
    soundVolume: 100,
    soundGame: true,
    soundGameVolume: 100,
    soundMusic: true,
    soundMusicVolume: 100,
    soundInterface: true,
    soundInterfaceVolume: 100,
  }
}

// REDUCERS //

type PayloadBusy = {
  busy: boolean,
  busyMessage?: string
}
const setBusy: CaseReducer<AppState, PayloadAction<PayloadBusy>> = (state, action) => {
  const {
    busy,
    busyMessage
  } = action.payload
  state.busy = busy
  state.busyMessage = busy ? busyMessage || '' : ''
}

const setLanguage: CaseReducer<AppState, PayloadAction<string>> = (state, action) => {
  state.language = action.payload
}

type PayloadDialog = {
  dialog: string | null,
  params?: any,
}
const openDialog: CaseReducer<AppState, PayloadAction<PayloadDialog>> = (state, action) => {
  const {
    dialog,
    params,
  } = action.payload
  state.dialog = dialog
  state.dialogParams = params
}
const closeDialog: CaseReducer<AppState, PayloadAction<void>> = (state, action) => {
  state.dialog = null
  state.dialogParams = null
}

const setSound: CaseReducer<AppState, PayloadAction<boolean>> = (state, action) => {
  state.settings.sound = action.payload
}
const setSoundVolume: CaseReducer<AppState, PayloadAction<number>> = (state, action) => {
  state.settings.soundVolume = normalizeVolumeValue(action.payload)
}
const setSoundGame: CaseReducer<AppState, PayloadAction<boolean>> = (state, action) => {
  state.settings.soundGame = action.payload
}
const setSoundGameVolume: CaseReducer<AppState, PayloadAction<number>> = (state, action) => {
  state.settings.soundGameVolume = normalizeVolumeValue(action.payload)
}
const setSoundMusic: CaseReducer<AppState, PayloadAction<boolean>> = (state, action) => {
  state.settings.soundMusic = action.payload
}
const setSoundMusicVolume: CaseReducer<AppState, PayloadAction<number>> = (state, action) => {
  state.settings.soundMusicVolume = normalizeVolumeValue(action.payload)
}
const setSoundInterface: CaseReducer<AppState, PayloadAction<boolean>> = (state, action) => {
  state.settings.soundInterface = action.payload
}
const setSoundInterfaceVolume: CaseReducer<AppState, PayloadAction<number>> = (state, action) => {
  state.settings.soundInterfaceVolume = normalizeVolumeValue(action.payload)
}

// SLICE //

const AppSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setBusy,
    setLanguage,
    openDialog,
    closeDialog,

    setSound,
    setSoundVolume,
    setSoundGame,
    setSoundGameVolume,
    setSoundMusic,
    setSoundMusicVolume,
    setSoundInterface,
    setSoundInterfaceVolume,
  },
})

export default AppSlice
