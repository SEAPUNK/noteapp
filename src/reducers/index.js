import {
  SET_TABS, OPEN_MODAL, CLOSE_MODAL,
  ADD_TAB, REMOVE_TAB, UPDATE_TAB_CONTENT,
  SELECT_TAB, RENAME_TAB
} from '../actions'

const initialState = {
  modalOpen: false,
  tabs: [{
    id: 0,
    name: 'First tab',
    content: ''
  }],
  selectedTab: 0,
  nextTabId: 1
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_TABS:
      return {
        ...state,
        tabs: action.payload.tabs,
        selectedTab: action.payload.selectedTab,
        nextTabId: action.payload.nextTabId
      }
    case OPEN_MODAL:
      return {...state, modalOpen: true}
    case SELECT_TAB:
      return {...state, selectedTab: action.payload}
    case UPDATE_TAB_CONTENT:
      return {
        ...state,
        tabs: state.tabs.map((i, idx) => {
          if (action.payload.id !== idx) return i
          return {...i, content: action.payload.content}
        })
      }
    case CLOSE_MODAL:
      return {...state, modalOpen: false}
    case ADD_TAB:
      return {
        ...state,
        tabs: [
          ...state.tabs,
          {
            id: state.nextTabId,
            name: `Tab ${state.nextTabId}`,
            content: ''
          }
        ],
        nextTabId: state.nextTabId + 1
      }
    case REMOVE_TAB:
      return {
        ...state,
        tabs: state.tabs.filter(
          (i, idx) => idx !== action.payload
        ),
        selectedTab: Math.min(state.tabs.length - 2, state.selectedTab)
      }
    case RENAME_TAB:
      return {
        ...state,
        tabs: state.tabs.map((i, idx) => {
          if (action.payload.id !== idx) return i
          return {...i, name: action.payload.name}
        })
      }
    default:
      return state
  }
}

export default appReducer
