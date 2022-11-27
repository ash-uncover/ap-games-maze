export interface GameState {
  status: GameStatus

  board: GameBoardState | null
  tiles: GameBoardTilesState
  elements: GameBoardElementsState
}

export type GameStatus =
  'GAME_NOT_STARTED' |
  'PLAYER_SELECTION' |
  'PLAYER_TURN_BEFORE' |
  'PLAYER_TURN_INSIDE' |
  'PLAYER_TURN_COMPLETING' |
  'PLAYER_TURN_AFTER' |
  'GAME_ENDED'
export const GameStatuses: {
  GAME_NOT_STARTED: GameStatus
  PLAYER_SELECTION: GameStatus
  PLAYER_TURN_BEFORE: GameStatus
  PLAYER_TURN_INSIDE: GameStatus
  PLAYER_TURN_COMPLETING: GameStatus
  PLAYER_TURN_AFTER: GameStatus
  GAME_ENDED: GameStatus
} = {
  GAME_NOT_STARTED: 'GAME_NOT_STARTED',
  PLAYER_SELECTION: 'PLAYER_SELECTION',
  PLAYER_TURN_BEFORE: 'PLAYER_TURN_BEFORE',
  PLAYER_TURN_INSIDE: 'PLAYER_TURN_INSIDE',
  PLAYER_TURN_COMPLETING: 'PLAYER_TURN_COMPLETING',
  PLAYER_TURN_AFTER: 'PLAYER_TURN_AFTER',
  GAME_ENDED: 'GAME_ENDED'
}

export interface GameBoardState {
  elements: string[]
  tiles: string[][]
}

export interface GameBoardTilesState {
  [key: string]: GameBoardTileState
}

export interface GameBoardElementsState {
  [key: string]: GameBoardElementState
}

export interface GameBoardTileState {
  id: string
  x: number
  y: number
  elements: string[]
}

export interface GameBoardElementState {
  id: string,
  x: number,
  y: number,
}