import { UUID } from '@uncover/js-utils'
import { GameState } from 'store/game/game.state'
import { GameBoardCharacter, GameBoardElement } from './element.model'
import CONFIG from 'config'

export const createElement = (
  game: GameState,
) => {
  const element: GameBoardElement = {
    id: `element-${UUID.next()}`,
    src: `${CONFIG.AP_GAMES_MAZE_PUBLIC}/images/char-down.png`,
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