import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class ArticleList extends React.Component {
  state ={
    openArticleId: null
  }

  render(){
    const {articles} = this.props
    const articleElements = articles.map(article=>
      <li key={article.id}>
        <Article
          article={article}
          isOpen = {article.id === this.state.openArticleId}
          toggleOpen={this.toggleOpenArticle(article.id)}
        />
      </li>)

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  toggleOpenArticle= openArticleId => ev => {
    this.setState({
      openArticleId
    })
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList