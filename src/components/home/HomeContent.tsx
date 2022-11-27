import React, { ReactElement } from 'react'

import './HomeContent.css'

interface HomeContentProperties {
  children: ReactElement | ReactElement[]
}
const HomeContent = ({
  children,
}: HomeContentProperties) => {

  // Rendering //

  return (
    <div
      className='home-content'
    >
      {children}
    </div>
  )
}

export default HomeContent