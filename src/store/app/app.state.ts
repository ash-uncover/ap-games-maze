import { AudioState } from '../audio/audio.state'

interface AppState {
  busy: boolean
  busyMessage: string

  language: string

  dialog: string | null
  dialogParams: any | null
}

export default AppState