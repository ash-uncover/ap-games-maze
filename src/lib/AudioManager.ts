
const AUDIOS = {}

const playAudio = (path: string) => {
  if (!AUDIOS[path]) {
    AUDIOS[path] = new Audio('/sound/menu_change_2.mp3')
  }
  AUDIOS[path].pause()
  AUDIOS[path].currentTime = 0
  AUDIOS[path].play()
}

export const playMenuChange = () => {
  playAudio('/sound/menu_change_2.mp3')
}

