import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

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
                <Route path="/counter" component={Counter} />
                <Route path="/filters" component={Filters} />
                <Route path="/articles" component={ArticleList} />
              </div>
            </Router>
        )
    }
}

export default App