import React from 'react'

import './TabContentEditor.css'

const TabContentEditor = (props) => {
  if (props.content === null) return null
  return (
    <div className='TabContentEditor'>
      <textarea
        placeholder='Add notes...'
        value={props.content}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TabContentEditor
