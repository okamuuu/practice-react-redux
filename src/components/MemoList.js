import React, { Component, PropTypes } from 'react'

class MemoList extends Component {

  render() {
    return (
      <ul className="memoList">
        {this.props.memos.map(memo =>
          <li key={memo.id}>{memo.text}</li>
        )}
      </ul>
    )
  }
}

MemoList.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default MemoList
