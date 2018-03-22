import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentList from './CommentList'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
      comments: PropTypes.array
    }).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render(){
    const {article} = this.props
    const {isOpen} = this.state
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>{isOpen ? "close":"open"}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    const {isOpen} = this.state
    const {article} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article