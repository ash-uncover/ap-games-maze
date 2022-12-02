import { UUID } from '@uncover/js-utils'
import { GameState } from 'store/game/game.state'
import { GameBoardCharacter, GameBoardElement } from './element.model'

export const createElement = (
  game: GameState,
) => {
  const element: GameBoardElement = {
    id: `element-${UUID.next()}`,
    x: -1,
    y: -1
  }
  game.elements[element.id] = element
  return element
}

export const createCharacter = (
  game: GameState,
  playerId: string,
) => {
  const character: GameBoardCharacter = {
    ...createElement(game),
    type: 'character',
    playerId
  }
  return character
}