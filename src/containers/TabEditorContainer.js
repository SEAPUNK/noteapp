import {connect} from 'react-redux'

import {CLOSE_MODAL, SELECT_TAB, ADD_TAB, REMOVE_TAB} from '../actions'
import TabEditor from '../components/TabEditor'

function mapStateToProps (state) {
  return {
    tabs: state.tabs,
    selectedTab: state.selectedTab
  }
}

function mapDispatchToProps (dispatch) {
  return {
    closeModal: () => dispatch({type: CLOSE_MODAL}),
    selectTab: (idx) => dispatch({type: SELECT_TAB, payload: idx}),
    addTab: () => dispatch({type: ADD_TAB}),
    removeTab: (idx) => dispatch({type: REMOVE_TAB, payload: idx})
  }
}

const TabEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TabEditor)

export default TabEditorContainer
