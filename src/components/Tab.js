import React from 'react'
import classnames from 'classnames'

import './Tab.css'

const Tab = (props) => {
  const className = classnames({
    'selected': props.selected
  }, 'Tab')
  return (
    <div className={className}>
      <div className='Tab-title' onClick={props.onSelect}>
        {props.name ? (
          props.name
        ) : (
          <em>no name</em>
        )}
      </div>
      <div className='Tab-remove danger' onClick={props.onRemove}>
        -
      </div>
    </div>
  )
}

export default Tab
