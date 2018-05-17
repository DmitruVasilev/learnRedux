import React, {Component} from 'react'
import  {reduxForm, Field} from 'redux-form'
import  emailValidator from 'email-validator'

class SingInForm extends Component {
  static propTypes = {}
  
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" component="input" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" component="input" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = ({email, password}) => {
  const errors = {}
  if (!email) errors.email = "email is required"
  else if (!emailValidator.validate(email)) errors.email = "invalid email"

  if (!password) errors.password = "password is required"
  else if (password.length < 8) errors.email = "password to short"

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SingInForm)
