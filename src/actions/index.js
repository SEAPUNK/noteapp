const namespace = 'app/'
const gen = name => namespace + name

export const SET_TABS = gen('SET_TABS')

export const OPEN_MODAL = gen('OPEN_MODAL')
export const CLOSE_MODAL = gen('CLOSE_MODAL')

export const SELECT_TAB = gen('SELECT_TAB')
export const ADD_TAB = gen('ADD_TAB')
export const REMOVE_TAB = gen('REMOVE_TAB')
export const RENAME_TAB = gen('RENAME_TAB')

export const UPDATE_TAB_CONTENT = gen('UPDATE_TAB_CONTENT')
