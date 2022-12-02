import { GameBoardElement } from 'lib/game/board/elements/element.model'
import { GameBoardTile } from 'lib/game/board/tiles/tile.model'
import { GamePlayer } from 'lib/game/players/player.model'

export interface GameState {
  status: GameStatus

  board: GameBoardState | null

  tiles: GameBoardTilesState
  elements: GameBoardElementsState
  players: GamePlayersState
}

export type GameStatus =
  'GAME_NOT_STARTED' |
  'PLAYER_SELECTION' |
  'PLAYER_TURN_BEFORE' |
  'PLAYER_TURN_INSIDE' |
  'PLAYER_TURN_COMPLETING' |
  'PLAYER_TURN_AFTER' |
  'GAME_ENDED_VICTORY' |
  'GAME_ENDED_DEFEAT'
export const GameStatuses: {
  GAME_NOT_STARTED: GameStatus
  PLAYER_SELECTION: GameStatus
  PLAYER_TURN_BEFORE: GameStatus
  PLAYER_TURN_INSIDE: GameStatus
  PLAYER_TURN_COMPLETING: GameStatus
  PLAYER_TURN_AFTER: GameStatus
  GAME_ENDED_VICTORY: GameStatus
  GAME_ENDED_DEFEAT: GameStatus
} = {
  GAME_NOT_STARTED: 'GAME_NOT_STARTED',
  PLAYER_SELECTION: 'PLAYER_SELECTION',
  PLAYER_TURN_BEFORE: 'PLAYER_TURN_BEFORE',
  PLAYER_TURN_INSIDE: 'PLAYER_TURN_INSIDE',
  PLAYER_TURN_COMPLETING: 'PLAYER_TURN_COMPLETING',
  PLAYER_TURN_AFTER: 'PLAYER_TURN_AFTER',
  GAME_ENDED_VICTORY: 'GAME_ENDED_VICTORY',
  GAME_ENDED_DEFEAT: 'GAME_ENDED_DEFEAT'
}

export interface GamePlayersState {
  [key: string]: GamePlayer
}

export interface GameBoardState {
  elements: string[]
  tiles: string[][]
}

export interface GameBoardTilesState {
  [key: string]: GameBoardTile
}

export interface GameBoardElementsState {
  [key: string]: GameBoardElement
}