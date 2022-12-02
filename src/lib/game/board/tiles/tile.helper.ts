import { UUID } from '@uncover/js-utils'
import { GameState } from 'store/game/game.state'
import { GameBoardTile } from './tile.model'

export const createTile = (
  game: GameState,
  terrain: string,
  position: BoardPosition
) => {
  const tile: GameBoardTile = {
    id: `tile-${UUID.next()}`,
    terrain: terrain,
    x: position.x,
    y: position.y,
    elements: []
  }
  game.tiles[tile.id] = tile
  game.board.tiles[position.y][position.x] = tile.id
  return tile
}