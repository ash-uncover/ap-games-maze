import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import * as BoardHelper from 'lib/game/board/board.helper'
import * as ElementHelper from 'lib/game/board/elements/element.helper'
import * as TileHelper from 'lib/game/board/tiles/tile.helper'
import * as PlayerHelper from 'lib/game/players/player.helper'

import { Maps, Terrains } from 'lib/data/Data'
import { shuffleMap } from 'lib/data/MapHelper'

import {
  GameState,
  GameBoardState,
  GameBoardTilesState,
  GameStatuses,
  GameBoardElementsState,
} from 'store/game/game.state'
import { GameBoardTile } from 'lib/game/board/tiles/tile.model'

// STATE //

const initialState: GameState = {
  status: GameStatuses.GAME_NOT_STARTED,
  board: {
    tiles: [],
    elements: []
  },
  tiles: {},
  elements: {},
  players: {},
}

// REDUCERS //

interface StartGamePayload {
  mapId: string
  nbPlayers: number
}
const startGame: CaseReducer<GameState, PayloadAction<StartGamePayload>> = (state, action) => {
  const {
    mapId,
    nbPlayers
  } = action.payload

  const map = Maps[mapId]
  const tileEntries = []

  // Build Tiles
  shuffleMap(map)
  state.board.tiles = new Array(map.height).fill(null).map(e => new Array(map.width).fill(null))
  for (let y = 0; y < map.height; y++) {
    const mapRow = map.terrains[y]
    for (let x = 0; x < map.width; x++) {
      const terrain = mapRow[x]
      const tile = TileHelper.createTile(state, terrain, { x, y })
      if (terrain === '>') {
        tileEntries.push(tile)
      }
    }
  }

  // Set Players
  const player = PlayerHelper.createPlayer(state)
  const character = ElementHelper.createCharacter(state, player.id)
  BoardHelper.placeElement(state, character.id, tileEntries[0])

  state.status = GameStatuses.PLAYER_SELECTION
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

const endGame: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  Object.assign(state, initialState)
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

    endGame,
  },
})

export default GameSlice
