import React, {Component} from 'react'
import SingInForm from '../auth/SingInForm'
import SingUpForm from '../auth/SingUpForm'
import {Route, NavLink} from 'react-router-dom'

class AuthPage extends Component {
  static propTypes = {}

  handleSignUp = values => console.log("---", values)
  handleSignIn = values => console.log("---", values)

  render() {
    return (
      <div>
        <h1>AuthPage</h1>
        <NavLink to="/auth/signin" activeStyle={{color: "red"}}>sign in</NavLink>
        <NavLink to="/auth/signup" activeStyle={{color: "red"}}>sign up</NavLink>
        <Route path="/auth/signin" render={() => <SingInForm onSubmit={this.handleSignIn} />} />
        <Route path="/auth/signup" render={() => <SingUpForm onSubmit={this.handleSignUp} />} />
      </div>
    )
  }
}

export default AuthPage