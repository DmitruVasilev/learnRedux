import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NotFoundPage from './routes/NotFoundPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './routes/CommentsPage'
import 'react-select/dist/react-select.css'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
              <div>
                <div>
                  <h2>main menu</h2>
                  <div>
                    <NavLink activeStyle={{color:"red"}} to='/counter' >counter</NavLink>
                  </div>
                  <div>
                    <NavLink activeStyle={{color:"red"}} to='/articles' >articles</NavLink>
                  </div>
                  <div>
                    <NavLink activeStyle={{color:"red"}} to='/filters' >filters</NavLink>
                  </div>
                </div>
                <UserForm />
                <Switch>
                  <Route path="/counter" component={Counter} />
                  <Route path="/filters" component={Filters} />
                  <Route path="/articles" component={Articles} />
                  <Route path='/comments/:page' component = {CommentsPage} />
                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </div>
            </Router>
        )
    }
}

export default App