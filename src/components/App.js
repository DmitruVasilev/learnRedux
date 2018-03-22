import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from "./ArticleList"

class App extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() {
    const {articles} = this.props
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App