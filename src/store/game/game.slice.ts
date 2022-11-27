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
  GameStatuses,
  GameBoardElementState,
  GameBoardElementsState
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

  const elementList: string[] = []
  const elements: GameBoardElementsState = {}

  for (let y = 0 ; y < height ; y++) {
    const tileRow: string[] = []
    for (let x = 0 ; x < width ; x++) {
      const tile: GameBoardTileState = {
        id: `tile-${UUID.next()}`,
        x,
        y,
        elements: []
      }
      tiles[tile.id] = tile
      tileRow.push(tile.id)
    }
    tileList.push(tileRow)
  }

  const element: GameBoardElementState = {
    id: `element-${UUID.next()}`,
    x: 2,
    y: 2,
  }
  elements[element.id] = element
  elementList.push(element.id)
  tiles[tileList[2][2]].elements.push(element.id)

  const board: GameBoardState = {
    elements: elementList,
    tiles: tileList,
  }
  state.status = GameStatuses.PLAYER_SELECTION
  state.board = board
  state.tiles = tiles
  state.elements = elements
}

const moveUp: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  const element = state.elements[state.board.elements[0]]
  state.tiles[state.board.tiles[element.y][element.x]].elements = []
  state.tiles[state.board.tiles[element.y - 1][element.x]].elements = [element.id]
  element.y--
}
const moveLeft: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  const element = state.elements[state.board.elements[0]]
  state.tiles[state.board.tiles[element.y][element.x]].elements = []
  state.tiles[state.board.tiles[element.y][element.x - 1]].elements = [element.id]
  element.x--
}
const moveDown: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  const element = state.elements[state.board.elements[0]]
  state.tiles[state.board.tiles[element.y][element.x]].elements = []
  state.tiles[state.board.tiles[element.y + 1][element.x]].elements = [element.id]
  element.y++
}
const moveRight: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  const element = state.elements[state.board.elements[0]]
  state.tiles[state.board.tiles[element.y][element.x]].elements = []
  state.tiles[state.board.tiles[element.y][element.x + 1]].elements = [element.id]
  element.x++
}

// SLICE //

const GameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    startGame,

    moveUp,
    moveLeft,
    moveDown,
    moveRight,
  },
})

export default GameSlice
