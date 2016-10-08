import { connect } from 'react-redux'
import MemoList from '../components/MemoList'

const mapStateToProps = (state) => {
  return {
    memos: state.memos
  }
}

export default connect(mapStateToProps, undefined)(MemoList)
