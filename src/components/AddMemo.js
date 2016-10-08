import React, { Component, PropTypes } from 'react'

class AddMemo extends Component {

  propTypes: {
    handleMemoSubmit: PropTypes.func.isRequired
  }

  render () {
    let input;
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        this.props.handleMemoSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Memo</button>
      </form>
    )
  }
}

export default AddMemo
