import React from 'react'
import './TabEditor.css'

import Tab from './Tab'
import TabHeaderContainer from '../containers/TabHeaderContainer'
import TabContentEditorContainer from '../containers/TabContentEditorContainer'

const TabEditor = (props) => {
  return (
    <div className='TabEditor'>
      <header className='TabEditor-header'>
        <div className='TabEditor-header-content'>
          <TabHeaderContainer selected={props.selectedTab} />
        </div>
        <button className='TabEditor-header-close danger' onClick={props.closeModal}>
          Close
        </button>
      </header>
      <div className='TabEditor-content'>
        <div className='TabEditor-tabcontainer'>
          <div className='TabEditor-tabs'>
            {props.tabs.map((i, idx) => (
              <Tab
                key={i.id}
                name={i.name}
                selected={idx === props.selectedTab}
                onSelect={() => props.selectTab(idx)}
                onRemove={() => props.removeTab(idx)}
              />
            ))}
          </div>
          <button
            className='TabEditor-addtab success'
            onClick={props.addTab}
          >
            Add tab
          </button>
        </div>
        <div className='TabEditor-editor'>
          <TabContentEditorContainer selected={props.selectedTab} />
        </div>
      </div>
    </div>
  )
}

export default TabEditor
