import React, { useEffect, useRef } from 'react'

import './Element.css'

const Element = ({
  id,
}) => {

  // Hooks //

  const element = useRef(null)

  useEffect(() => {
    if (element && element.current) {
      element.current.scrollIntoView({block: 'center', inline: 'center'})
    }
  })

  // Rendering //

  return (
    <div
    ref={element}
    className='element'
    >
    </div>
  )
}

export default Element