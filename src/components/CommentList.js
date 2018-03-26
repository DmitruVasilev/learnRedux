import React from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'

class CommentList extends React.Component{
  static propTypes = {
    //props
    comments: PropTypes.array,
    //decorators
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  render(){
    const {isOpen, toggleOpen} = this.props
    const text = isOpen ? "hide comments":"show comments"
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    const {comments, isOpen} = this.props
    if(!isOpen) return null
    if(!comments.length) return <p>No comments yet</p>
    return (
      <ul>
        {comments.map(id => <li key={id}><Comment id={id} /></li> )}
      </ul>
    )
  }
}

export default toggleOpen(CommentList)