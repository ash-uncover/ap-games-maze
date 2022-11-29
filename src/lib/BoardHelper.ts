import { GameState } from 'store/game/game.state'

export const canMove = (
  game: GameState,
  elementId: string,
  to: {x: number, y: number}
) => {
  return game.board.tiles[to.y] && game.board.tiles[to.y][to.x]
}

export const moveElement = (
  game: GameState,
  elementId: string,
  to: {x: number, y: number}
) => {
  const element = getElement(game, elementId)
  if (canMove(game, elementId, to)) {
    game.tiles[game.board.tiles[element.y][element.x]].elements = []
    game.tiles[game.board.tiles[to.y][to.x]].elements = [element.id]
    element.x = to.x
    element.y = to.y
  }
}

export const getElement = (
  game: GameState,
  elementId: string,
) => {
  return game.elements[elementId]
}