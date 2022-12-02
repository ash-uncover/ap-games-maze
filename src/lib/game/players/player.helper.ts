import { UUID } from '@uncover/js-utils'
import { GameState } from 'store/game/game.state'
import { GamePlayer } from './player.model'

export const createPlayer = (
  game: GameState,
) => {
  const player: GamePlayer = {
    id: `player-${UUID.next()}`,
    items: [],
    steps: 0,
  }
  game.players[player.id] = player
  return player
}