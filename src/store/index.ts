import { configureStore } from '@reduxjs/toolkit'

import AppSlice from 'store/app/app.slice'
import GameSlice from 'store/game/game.slice'

export default configureStore({
  reducer: {
    app: AppSlice.reducer,
    game: GameSlice.reducer,
  }
})
