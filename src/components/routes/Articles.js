import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class Articles extends Component {

  getArticle=({match})=>{
    const {id} = match.params
    return <Article id={id} isOpen />
  }

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }
}

export default Articles