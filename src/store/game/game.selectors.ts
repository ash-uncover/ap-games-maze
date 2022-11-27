import { RootState } from 'store/state'

export const base = (state: RootState) => state.game

export const status = (state: RootState) => base(state).status

export const board = (state: RootState) => base(state).board
export const boardTiles = (state: RootState) => board(state)?.tiles

export const tiles = (state: RootState) => base(state).tiles
export const tile = (tileId: string) => (state: RootState) => tiles(state)[tileId]

const GameSelectors = {
  status,
  board,
  boardTiles,

  tiles,
  tile,
}

export default GameSelectors
