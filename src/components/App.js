import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from "react-select"
import "react-select/dist/react-select.css"
import ArticleList from "./ArticleList"
import UserForm from "./UserForm"


class App extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  state = {
    selection:null
  }

  render() {
    const {articles} = this.props
    const {selection} = this.state
    const options = articles.map(article=>({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <Select options={options} value={selection} onChange={this.changeSelection} multi />
        <UserForm />
        <ArticleList articles={articles} />
      </div>
    )
  }
  changeSelection = selection => this.setState({selection})
}

export default App