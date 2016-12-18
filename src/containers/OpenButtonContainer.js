import {connect} from 'react-redux'

import {OPEN_MODAL} from '../actions'
import OpenButton from '../components/OpenButton'

function mapStateToProps (state) {
  return {
    tabCount: state.tabs.length
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch({type: OPEN_MODAL})
  }
}

const OpenButtonContainer = connect(mapStateToProps, mapDispatchToProps)(OpenButton)

export default OpenButtonContainer
