import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'


const Comment = ({comment}) => {
  return (
    <p>{comment.text} <b>by {comment.user}</b></p>
  )
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  //from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  })
}

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory()
  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  }
}

export default connect(mapStateToProps)(Comment)