import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

const ArticleList = ({articles}) => {
  const articleElements = articles.map(article=><li key={article.id}><Article article={article} /></li>)
  return (
    <ul>
      {articleElements}
    </ul>
  )
}

ArticleList.propTypes = {
  // test: PropTypes.string
}

export default ArticleList