import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  state = {
    selected: []
  }

  handelChange = selected => this.setState({selected})

  render() {
    const {articles} = this.props
    const {selected} = this.state
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return <Select
      options={options}
      value={selected}
      onChange={this.handelChange}
      multi
    />
  }
}

export default SelectFilter