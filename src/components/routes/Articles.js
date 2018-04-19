import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class Articles extends Component {

  getArticle=({match})=>{
    const {id} = match.params
    return <Article id={id} isOpen key={id} />
  }

  getIndex=()=>{
    return <h2>Please select article</h2>
  }

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles" render={this.getIndex} exact />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }
}

export default Articles