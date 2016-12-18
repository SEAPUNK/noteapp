import {connect} from 'react-redux'

import {UPDATE_TAB_CONTENT} from '../actions'
import TabContentEditor from '../components/TabContentEditor'

function mapStateToProps (state, ownProps) {
  const tab = state.tabs.filter(
    (i, idx) => idx === ownProps.selected
  )[0]

  return {
    content: tab ? tab.content : null
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onChange: (e) => dispatch({
      type: UPDATE_TAB_CONTENT,
      payload: {
        id: ownProps.selected,
        content: e.target.value
      }
    })
  }
}

const TabContentEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TabContentEditor)

export default TabContentEditorContainer
