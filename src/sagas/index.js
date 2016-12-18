import {call, put, take} from 'redux-saga/effects'

import {
  SET_TABS, ADD_TAB, REMOVE_TAB,
  UPDATE_TAB_CONTENT, SELECT_TAB
} from '../actions'

export default function * appSaga (getState) {
  yield call(initTabs, getState)
  yield call(watch, getState)
}

function * initTabs (getState) {
  if (!window.localStorage.getItem('data')) {
    yield call(saveData, getState)
  }
  yield put({
    type: SET_TABS,
    payload: JSON.parse(window.localStorage.getItem('data'))
  })
}

function * watch (getState) {
  while (true) {
    yield take([
      ADD_TAB,
      REMOVE_TAB,
      UPDATE_TAB_CONTENT,
      SELECT_TAB
    ])
    yield call(saveData, getState)
  }
}

function saveData (getState) {
  const state = getState()

  window.localStorage.setItem('data', JSON.stringify({
    tabs: state.tabs,
    selectedTab: state.selectedTab,
    nextTabId: state.nextTabId
  }))
}
