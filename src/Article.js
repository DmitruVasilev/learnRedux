import React from 'react'
import PropTypes from 'prop-types'

const Article = ({article}) => (
  <div>
    <h3>{article.title}</h3>
    <section>{article.text}</section>
  </div>
)

Article.propTypes = {
  // test: PropTypes.string
}

export default Article