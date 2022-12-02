import { AudioState } from '../audio/audio.state'

interface AppState {
  busy: boolean
  busyMessage: string

  dialog: string | null
  dialogParams: any | null

  language: string
  loaded: boolean
}

export default AppState