import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import PersonPage from './routes/PeoplePage'
import EventsPage from './routes/EventsPage'
import ProtectedRoute from './common/ProtectedRoute'
import {moduleName, signOut} from '../ducks/auth'
import CustomDragLayer from './CustomDragLayer'

class Root extends Component {
  static propTypes = {};

  render() {
    const {signOut, signedIn} = this.props
    const btn = signedIn
      ? <button onClick={signOut}>Sign out</button>
      : <Link to="auth/signin">Sign in</Link>
    return (
      <div>
        {btn}
        <ProtectedRoute path="/admin" component={AdminPage} />
        <ProtectedRoute path="/people" component={PersonPage}/>
        <ProtectedRoute path="/events" component={EventsPage}/>
        <Route path="/auth" component={AuthPage} />
        <CustomDragLayer />
      </div>
    )
  }
}

export default connect(state=> ({
  signedIn: !!state[moduleName].user
}),{signOut}, null , {pure:false})(Root)