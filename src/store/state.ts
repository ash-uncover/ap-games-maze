import AppState from 'store/app/app.state'
import { GameState } from 'store/game/game.state'

export type RootState = {
  app: AppState,
  game: GameState,
}