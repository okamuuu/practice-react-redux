import assert from 'assert'
import React from 'react'
import {createRenderer} from 'react-addons-test-utils'

import MemoList from '../src/components/MemoList'

describe('Component', function () {

  const renderer = createRenderer()

  it('MemoList', function () {
    const memos = [
      {id:1, text: 'testText1'},
      {id:2, text: 'testText2'}
    ]
    renderer.render(
      <MemoList memos={ memos } />
    )
    const actual = renderer.getRenderOutput();
    const expect = (
      <ul className="memoList">
        <li key="1">testText1</li>
        <li key="2">testText2</li>
      </ul>
    )
    assert.deepEqual(actual, expect)
    assert.ok(true);
  })
})
