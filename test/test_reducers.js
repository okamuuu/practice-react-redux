import assert from 'assert'
import { createStore } from 'redux'
import { addMemo } from '../src/actions'
import memoApp from '../src/reducers'

describe('Reducers', () => {
  it('addMemo', () => {
    let store = createStore(memoApp)

    store.dispatch(addMemo('textA'))
    store.dispatch(addMemo('textB'))
    assert.deepEqual(store.getState().memos, [ { id: 1, text: 'textA' }, { id: 2, text: 'textB' } ]);

    assert.ok(true);
  });
});
