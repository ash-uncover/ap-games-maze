import { ArrayUtils } from '@uncover/js-utils'
import { GameState, GameStatuses } from 'store/game/game.state'
import { Terrains } from '../../data/Data'

export const getElement = (
  game: GameState,
  elementId: string,
) => {
  return game.elements[elementId]
}

export const getTile = (
  game: GameState,
  tileId: string,
) => {
  return game.tiles[tileId]
}

export const getTileByPosition = (
  game: GameState,
  position: BoardPosition
) => {
  try {
    const tileId = game.board.tiles[position.y][position.x]
    return game.tiles[tileId]
  } catch (error) {
    return null
  }
}

export const canMove = (
  game: GameState,
  elementId: string,
  to: {x: number, y: number}
) => {
  const tileId = game.board.tiles[to.y]?.[to.x]
  if (tileId) {
    const tile = getTile(game, tileId)
    const terrain = Terrains[tile.terrain]
    return terrain.accessible
  }
  return false
}

export const placeElement = (
  game: GameState,
  elementId: string,
  position: {x: number, y: number}
) => {
  const element = getElement(game, elementId)
  const sourceTile = getTileByPosition(game, element)
  if (sourceTile) {
    sourceTile.elements = ArrayUtils.removeElement(sourceTile.elements, elementId)
  }
  const targetTile = getTileByPosition(game, position)
  if (targetTile) {
    targetTile.elements = targetTile.elements.concat([element.id])
    element.x = position.x
    element.y = position.y
  }
  if (!game.board.elements.includes(elementId)) {
    game.board.elements.push(elementId)
  }
}

export const moveElement = (
  game: GameState,
  elementId: string,
  to: {x: number, y: number}
) => {
  if (canMove(game, elementId, to)) {
    placeElement(game, elementId, to)
    const element = getElement(game, elementId)
    const tile = getTileByPosition(game, element)
    if (tile?.terrain === '<') {
      game.status = GameStatuses.GAME_ENDED_VICTORY
    }
  }
}

export const nextTurn = (
  game: GameState
) => {

}
