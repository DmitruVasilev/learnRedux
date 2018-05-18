import React, {Component} from 'react'
import  {reduxForm, Field} from 'redux-form'


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

export default reduxForm({
  form: 'auth'
})(SingInForm)
