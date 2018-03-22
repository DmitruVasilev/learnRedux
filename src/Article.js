import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
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
    return <section>{article.text}</section>
  }

  toggleOpen=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    text: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

export default Article