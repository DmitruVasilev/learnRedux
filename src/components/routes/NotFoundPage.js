import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NotFoundPage extends Component {
  static propTypes = {
    test: PropTypes.string
  }

  render() {
    const {test} = this.props
    return (
      <div>
        <h1>NotFoundPage</h1>
      </div>
    )
  }
}

export default NotFoundPage