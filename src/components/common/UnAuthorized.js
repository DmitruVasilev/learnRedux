import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class UnAuthorized extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>UnAuthorized <Link to="/auth/signin">sign in</Link></h1>
      </div>
    )
  }
}

export default UnAuthorized