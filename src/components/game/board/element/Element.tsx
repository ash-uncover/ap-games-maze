import CONFIG from 'config'
import React, { useEffect, useRef } from 'react'

import './Element.css'
import { useSelector } from 'react-redux'
import GameSelectors from 'store/game/game.selectors'

interface ElementProperties {
  elementId: string
}

const Element = ({
  elementId,
}: ElementProperties) => {

  // Hooks //

  const elementRef = useRef<HTMLDivElement>(null)
  const element = useSelector(GameSelectors.element(elementId))

  useEffect(() => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ block: 'center', inline: 'center' })
    }
  })

  // Rendering //

  return (
    <div
      ref={elementRef}
      className='element'
    >
      <img
        width='100%'
        height='100%'
        src={element.src}
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default Element