import { combineReducers } from 'redux'

const memo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MEMO':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

const memos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMO':
      return [
        ...state,
        memo(undefined, action)
      ]
    default:
      return state
  }
}

const memoApp = combineReducers({
  memos
})

export default memoApp
