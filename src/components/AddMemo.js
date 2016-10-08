import React, { PropTypes } from 'react'

const AddMemo = ({ handleMemoSubmit }) => {
  return (
    <div>
      <form onSubmit={ () => {
        console.log('hoge');
        handleMemoSubmit()
      }
      }>
        <input type="text" name="memo" value={this.state.memo} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddMemo.propTypes = {
  handleMemoSubmit: PropTypes.func.isRequired
}

export default AddMemo
