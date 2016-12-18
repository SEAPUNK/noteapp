import {connect} from 'react-redux'

import {CLOSE_MODAL} from '../actions'
import Modal from '../components/Modal'

function mapStateToProps (state, ownProps) {
  return {
    modalOpen: state.modalOpen,
    children: ownProps.children
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    closeModal: () => dispatch({type: CLOSE_MODAL})
  }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ModalContainer
