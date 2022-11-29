import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import {
  UUID
} from '@uncover/js-utils'

import * as BoardHelper from 'lib/BoardHelper'

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

  for (let y = 0; y < height; y++) {
    const tileRow: string[] = []
    for (let x = 0; x < width; x++) {
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

interface movePayload {
  elementId: string
}
const moveUp: CaseReducer<GameState, PayloadAction<movePayload>> = (state, action) => {
  const { elementId } = action.payload
  const element = BoardHelper.getElement(state, elementId)
  BoardHelper.moveElement(state, elementId, { ...element, y: element.y - 1 })
}
const moveLeft: CaseReducer<GameState, PayloadAction<movePayload>> = (state, action) => {
  const { elementId } = action.payload
  const element = BoardHelper.getElement(state, elementId)
  BoardHelper.moveElement(state, elementId, { ...element, x: element.x - 1 })
}
const moveDown: CaseReducer<GameState, PayloadAction<movePayload>> = (state, action) => {
  const { elementId } = action.payload
  const element = BoardHelper.getElement(state, elementId)
  BoardHelper.moveElement(state, elementId, { ...element, y: element.y + 1 })
}
const moveRight: CaseReducer<GameState, PayloadAction<movePayload>> = (state, action) => {
  const { elementId } = action.payload
  const element = BoardHelper.getElement(state, elementId)
  BoardHelper.moveElement(state, elementId, { ...element, x: element.x + 1 })
}
interface moveToPayload extends movePayload {
  x: number
  y: number
}
const move: CaseReducer<GameState, PayloadAction<moveToPayload>> = (state, action) => {
  const { elementId, x, y } = action.payload
  BoardHelper.moveElement(state, elementId, { x, y })
}

// SLICE //

const GameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    startGame,

    move,
    moveUp,
    moveLeft,
    moveDown,
    moveRight,
  },
})

export default GameSlice
