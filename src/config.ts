import Logger from '@uncover/js-utils-logger'
const LOGGER = new Logger('CONFIG')

// Default hard-coded values
const CONFIG = {
  AP_GAMES_MAZE_PUBLIC: ''
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_MAZE_PUBLIC) {
    CONFIG.AP_GAMES_MAZE_PUBLIC = process.env.AP_GAMES_MAZE_PUBLIC
  }
} catch (error) {
  LOGGER.warn('Failed to load from process.env')
}

export default CONFIG
