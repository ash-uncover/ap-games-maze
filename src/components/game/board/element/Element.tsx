import React, { useEffect, useRef } from 'react'

import './Element.css'

const Element = ({
  id,
}) => {

  // Hooks //

  const element = useRef(null)

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
        src='/images/char.png'
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default Element