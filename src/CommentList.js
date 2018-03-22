import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

class CommentList extends React.Component{
  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  static defaultProps = {
    comments: []
  }

  state = {
    isOpen: false
  }

  render(){
    const text = this.state.isOpen ? "hide comments":"show comments"
    return (
      <div>
        <button onClick={this.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    const {isOpen} = this.state
    if (!isOpen) return null

    const {comments} = this.props
    if(!comments.length) return <p>No comments yet</p>
    return (
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li> )}
      </ul>
    )
  }

  toggleOpen=()=>this.setState({isOpen: !this.state.isOpen})

}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default CommentList