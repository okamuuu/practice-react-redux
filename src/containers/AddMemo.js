import React from 'react'
import { connect } from 'react-redux'
import { addMemo } from '../actions'

let AddMemo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMemo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Memo
        </button>
      </form>
    </div>
  )
}
AddMemo = connect()(AddMemo)

export default AddMemo

// function mapDispatchToProps(dispatch) {
//   return {
//     handleMemoSubmit: (e) => {
//       console.log('????')
//       e.preventDefault()
//       dispatch(AddMemo('hogehoge'))
//     }
//   }
// }
//
// const mapStateToProps = (state) => {
//   return state
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddMemo)
