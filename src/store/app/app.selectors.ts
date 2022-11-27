import { RootState } from 'store/state'

export const base = (state: RootState) => state.app

export const busy = (state: RootState) => base(state).busy
export const busyMessage = (state: RootState) => base(state).busyMessage
export const language = (state: RootState) => base(state).language
export const dialog = (state: RootState) => base(state).dialog
export const dialogParams = (state: RootState) => base(state).dialogParams

const AppSelectors = {
  busy,
  busyMessage,
  language,
  dialog,
  dialogParams,
}

export default AppSelectors
