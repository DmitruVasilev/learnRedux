import React, {Component} from 'react'
// import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentList from './CommentList'

class Article extends Component {
  static propTypes = {
    // props
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.isOpen !==this.props.isOpen
  }

  render(){
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? "close":"open"}</button>
        <CSSTransition
          transitionAppear
          component = "div"
          transitionName = "article"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {300}
          transitionAppearTimeout = {1000}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  setContainerRef= ref =>{
    this.container = ref
  }


  getBody(){
    const {article, isOpen} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} ref={this.setComponentRef}/>
      </section>
    )
  }

  setComponentRef = ref =>{
    // console.log('---', findDOMNode(ref))
  }
}

export default Article