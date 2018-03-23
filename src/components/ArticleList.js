import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article/index'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
  static propTypes = {
    // props
    articles: PropTypes.array,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }
  
  render(){
    const {articles, openItemId, toggleOpenItem} = this.props
    const articleElements = articles.map(article=>
      <li key={article.id}>
        <Article
          article={article}
          isOpen = {article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>)

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default connect(({filters, articles})=>{
  const {selected, dateRange: {from, to}} = filters

  const filteredArticles = articles.filter(article => {
    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) && (!from||!to || (published> from && published < to))
  })
  return {
    articles: filteredArticles
  }
})(accordion(ArticleList))