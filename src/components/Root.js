import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import ProtectedRoute from './common/ProtectedRoute'

class Root extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <ProtectedRoute path="/auth" component={AuthPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    )
  }
}

export default Root