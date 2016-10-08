import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import memoApp from './reducers'
import AddMemo from './containers/AddMemo'
import MemoList from './containers/MemoList'


let store = createStore(memoApp)

render(
  <Provider store={store}>
    <div>
      <AddMemo />
      <MemoList />
    </div>
  </Provider>,
  document.getElementById('root')
)
