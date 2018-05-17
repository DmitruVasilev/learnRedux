import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'

class Root extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Route path="/admin" component={AdminPage} />
        <Route path="/auth" component={AuthPage} />
      </div>
    )
  }
}

export default Root