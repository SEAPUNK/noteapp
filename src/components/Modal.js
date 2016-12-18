import React from 'react'

import CSSTransitionGroup from 'react-addons-css-transition-group'

import './Modal.css'

const Modal = (props) => {
  return (
    <CSSTransitionGroup
      transitionName='Modal'
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {props.modalOpen ? (
        <div className='Modal'>
          <div className='Modal-container'>
            <div className='Modal-background' onClick={props.closeModal} />
            <div className='Modal-modal'>
              <div className='Modal-modal-content'>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </CSSTransitionGroup>
  )
}

export default Modal
