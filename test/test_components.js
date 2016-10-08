import {jsdom} from 'jsdom'

global.document  = jsdom('<html><body></body></html>')
global.window    = document.defaultView
global.navigator = window.navigator

import assert from 'assert'
import React from 'react'
import ReactTestUtils, {createRenderer} from 'react-addons-test-utils'

import MemoList from '../src/components/MemoList'
import AddMemo from '../src/components/AddMemo'

describe('Memo Component', function () {

  it('MemoList', function () {
    const renderer = createRenderer()

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

  it('AddMemo', function () {
    const renderer = createRenderer()

    let memo = 'before'
    const component = ReactTestUtils.renderIntoDocument(
       <AddMemo handleMemoSubmit={() => { memo = 'after' }} />
    )
    assert.ok(memo === 'before', 'input.value is empty')
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
    input.value = 'xxxx';
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
    ReactTestUtils.Simulate.submit(form)
    assert.ok(memo === 'after')
  })
})
