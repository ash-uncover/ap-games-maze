import React, { CSSProperties } from 'react'
// Styles
import './LoadIndicator.css'

interface LoadIndicatorProperties {
  className?: string
  style?: CSSProperties
}

export const LoadIndicator = ({
  className,
  style,
}: LoadIndicatorProperties) => {

  // Rendering //

  const classes = ['load-indicator']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <div className='load-indicator-row'>
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
      </div>

      <div className='load-indicator-row'>
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-emtpy' />
      </div>

      <div className='load-indicator-row'>
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-wall' />
      </div>

      <div className='load-indicator-row'>
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-empty' />
        <div className='load-indicator-element element-wall' />
      </div>

      <div className='load-indicator-row'>
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
        <div className='load-indicator-element element-wall' />
      </div>

      <div className='load-indicator-element element-char' />
    </div>
  )
}