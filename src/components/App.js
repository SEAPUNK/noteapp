import React, { Component } from 'react'
import './App.css'

import ModalContainer from '../containers/ModalContainer'
import OpenButtonContainer from '../containers/OpenButtonContainer'
import TabEditorContainer from '../containers/TabEditorContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <OpenButtonContainer />
        <ModalContainer>
          <TabEditorContainer />
        </ModalContainer>
      </div>
    )
  }
}

export default App
