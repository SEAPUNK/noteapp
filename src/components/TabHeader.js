import React from 'react'

import './TabHeader.css'

const TabHeader = (props) => {
  if (props.name === null) {
    return null
  }

  return (
    <div className='TabHeader'>
      <div className='TabHeader-container'>
        <input
          type='text'
          placeholder='Tab Name'
          value={props.name}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default TabHeader
