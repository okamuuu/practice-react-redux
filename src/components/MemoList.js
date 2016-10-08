import React, { PropTypes } from 'react'

const MemoList = ({ memos }) => (
  <ul className="memoList">
    {memos.map(memo =>
      <li key={memo.id}>{memo.text}</li>
    )}
  </ul>
)

MemoList.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MemoList
