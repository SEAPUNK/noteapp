import React from 'react'

import './OpenButton.css'

const OpenButton = (props) => {
  return (
    <button className='OpenButton' onClick={props.onClick}>
      Open tab editor <span className='OpenButton-count'>{props.tabCount}</span>
    </button>
  )
}

export default OpenButton
