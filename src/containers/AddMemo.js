import React from 'react'
import { connect } from 'react-redux'
import { addMemo } from '../actions'
import AddMemo from '../components/AddMemo'

function mapDispatchToProps(dispatch) {
  return {
    handleMemoSubmit: (text) => {
      dispatch(addMemo(text))
    },
  }
}

export default connect(undefined, mapDispatchToProps)(AddMemo)
