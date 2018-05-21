import React, {Component} from 'react'
import SingInForm from '../auth/SingInForm'
import SingUpForm from '../auth/SingUpForm'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp, moduleName} from '../../ducks/auth'
import Loader from '../common/Loader'

class AuthPage extends Component {
  static propTypes = {}

  render() {
    const {loading} = this.props
    console.log("---", loading)
    return (
      <div>
        <h1>AuthPage</h1>
        <NavLink to="/auth/signin" activeStyle={{color: "red"}}>sign in</NavLink>
        <NavLink to="/auth/signup" activeStyle={{color: "red"}}>sign up</NavLink>
        <Route path="/auth/signin" render={() => <SingInForm onSubmit={this.handleSignIn} />} />
        <Route path="/auth/signup" render={() => <SingUpForm onSubmit={this.handleSignUp} />} />
        {loading && <Loader />}
      </div>
    )
  }

  handleSignIn = values => console.log("---", values)

  handleSignUp = ({email, password}) => this.props.signUp(email, password)

}

export default connect(state => ({
  loading: state[moduleName].loading
}), {signUp})(AuthPage)