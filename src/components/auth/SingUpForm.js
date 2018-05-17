import React, {Component} from 'react'
import  {reduxForm, Field} from 'redux-form'
import ErrorField from '../common/ErrorField'

class SingUpForm extends Component {
  static propTypes = {}
  
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" component={ErrorField} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" component={ErrorField} type="password"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'auth',
})(SingUpForm)