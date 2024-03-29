import React from 'react'

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import RouteRoot from 'routes/index'
import RouteHome from 'routes/home/index'
import RouteGame from 'routes/game/index'
import RouteNotFound from 'routes/notfound'

const Root = () => {

  // Rendering //

  return (
    <>
      <Routes>
        <Route path='/' element={<RouteRoot />}>
          <Route path='' element={<RouteHome />} />
          <Route path='game' element={<RouteGame />} />
          <Route path='*' element={<RouteHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default Root
