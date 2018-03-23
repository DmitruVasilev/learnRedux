import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from "./ArticleList"
import UserForm from "./UserForm"
import Filters from "./Filters"
import Counter from "./Counter"


class App extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  render() {
    const {articles} = this.props

    return (
      <div>
        <Filters articles={articles} />
        <UserForm />
        <Counter />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App