import Logger from '@uncover/js-utils-logger'
const LOGGER = new Logger('CONFIG')

// Default hard-coded values
const CONFIG: {
  AP_GAMES_MAZE_PLUGIN: string
  AP_GAMES_MAZE_PUBLIC: string
  AP_GAMES_MAZE_ENVIRONMENT: string
} = {
  AP_GAMES_MAZE_PLUGIN: 'http://localhost:8081',
  AP_GAMES_MAZE_PUBLIC: '',
  AP_GAMES_MAZE_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_MAZE_PLUGIN) {
    CONFIG.AP_GAMES_MAZE_PLUGIN = process.env.AP_GAMES_MAZE_PLUGIN
  }
  if (process.env.AP_GAMES_MAZE_PUBLIC) {
    CONFIG.AP_GAMES_MAZE_PUBLIC = process.env.AP_GAMES_MAZE_PUBLIC
  }
  if (process.env.AP_GAMES_MAZE_ENVIRONMENT) {
    CONFIG.AP_GAMES_MAZE_ENVIRONMENT = process.env.AP_GAMES_MAZE_ENVIRONMENT
  }
} catch (error) {
  LOGGER.warn('Failed to load from process.env')
}

console.log('CONFIG')
Object.keys(CONFIG).forEach((confKey) => {
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})

export default CONFIG
