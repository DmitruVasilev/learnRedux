import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NotFoundPage from './routes/NotFoundPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './routes/CommentsPage'
import history from '../history'
import 'react-select/dist/react-select.css'
import {Route, NavLink, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <div>
            <h2>main menu</h2>
            <div>
              <NavLink activeStyle={{color: "red"}} to='/counter'>counter</NavLink>
            </div>
            <div>
              <NavLink activeStyle={{color: "red"}} to='/articles'>articles</NavLink>
            </div>
            <div>
              <NavLink activeStyle={{color: "red"}} to='/filters'>filters</NavLink>
            </div>
          </div>
          <UserForm/>
          <Switch>
            <Route path="/counter" component={Counter}/>
            <Route path="/filters" component={Filters}/>
            <Route path="/articles" component={Articles}/>
            <Route path='/comments' component={CommentsPage}/>
            {/*<Redirect from="/comments" to="/comments/1" />*/}
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default App