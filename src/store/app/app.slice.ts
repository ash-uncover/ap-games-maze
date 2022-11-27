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

// SLICE //

const AppSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setBusy,
    setLanguage,
    openDialog,
    closeDialog,
  },
})

export default AppSlice
