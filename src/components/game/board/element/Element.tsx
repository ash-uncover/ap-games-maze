import CONFIG from 'config'
import React, { useEffect, useRef } from 'react'

import './Element.css'

interface ElementProperties {
  elementId: string
}

const Element = ({
  elementId,
}: ElementProperties) => {

  // Hooks //

  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (element && element.current) {
      element.current.scrollIntoView({ block: 'center', inline: 'center' })
    }
  })

  // Rendering //

  return (
    <div
      ref={element}
      className='element'
    >
      <img
        width='100%'
        height='100%'
        src={`${CONFIG.AP_GAMES_MAZE_PUBLIC}/images/char.png`}
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default Element