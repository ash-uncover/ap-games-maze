interface AppState {
  busy: boolean
  busyMessage: string

  language: string

  dialog: string | null
  dialogParams: any | null

  settings: AppSettings
}

export interface AppSettings {
  sound: boolean
  soundVolume: number
  soundGame: boolean
  soundGameVolume: number
  soundMusic: boolean
  soundMusicVolume: number
  soundInterface: boolean
  soundInterfaceVolume: number
}

export default AppState