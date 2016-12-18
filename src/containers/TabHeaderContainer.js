import {connect} from 'react-redux'

import {RENAME_TAB} from '../actions'
import TabHeader from '../components/TabHeader'

function mapStateToProps (state, ownProps) {
  const tab = state.tabs.filter(
    (i, idx) => idx === ownProps.selected
  )[0]

  return {
    name: tab ? tab.name : null
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onChange: (e) => dispatch({
      type: RENAME_TAB,
      payload: {
        id: ownProps.selected,
        name: e.target.value
      }
    })
  }
}

const TabHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(TabHeader)

export default TabHeaderContainer
