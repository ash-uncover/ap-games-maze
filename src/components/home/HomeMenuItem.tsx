import { playMenuChange } from 'lib/AudioManager'
import React from 'react'

import './HomeMenuItem.css'

export interface HomeMenuItemProperties {
  selected?: boolean
  text: string
  onClick: () => void
}

export const HomeMenuItem = ({
  selected,
  text,
  onClick,
}: HomeMenuItemProperties) => {

  // Events //

  const handleClick = (event) => {
    event.preventDefault()
    playMenuChange()
    onClick()
    return false
  }

  // Rendering //

  const classes = ['home-menu-item']
  if (selected) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
    >
      <a
        className='home-menu-item__link'
        role='button'
        onClick={handleClick}
      >
        {text}
      </a>
    </li>
  )
}

export default HomeMenuItem