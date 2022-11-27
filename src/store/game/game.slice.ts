import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import {
  UUID
} from '@uncover/js-utils'

import {
  GameState,
  GameBoardState,
  GameBoardTilesState,
  GameBoardTileState,
  GameStatuses
} from 'store/game/game.state'

// STATE //

const initialState: GameState = {
  status: GameStatuses.GAME_NOT_STARTED,
  board: null,
  tiles: {},
  elements: {}
}

// REDUCERS //

interface StartGamePayload {
  width: number
  height: number
}
const startGame: CaseReducer<GameState, PayloadAction<StartGamePayload>> = (state, action) => {
  const {
    width,
    height,
  } = action.payload

  const tileList: string[][] = []
  const tiles: GameBoardTilesState = {}

  for (let y = 0 ; y < height ; y++) {
    const tileRow: string[] = []
    for (let x = 0 ; x < width ; x++) {
      const tile: GameBoardTileState = {
        id: `tile-${UUID.next()}`,
        x,
        y,
      }
      tiles[tile.id] = tile
      tileRow.push(tile.id)
    }
    tileList.push(tileRow)
  }
  const board: GameBoardState = {
    elements: [],
    tiles: tileList,
  }
  state.status = GameStatuses.PLAYER_SELECTION
  state.board = board
  state.tiles = tiles
}

// SLICE //

const GameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    startGame,
  },
})

export default GameSlice
