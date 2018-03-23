import React, {Component} from 'react'
// import PropTypes from 'prop-types'


const limits = {
  user: {min:5,max:15},
  text: {min:20,max:50}
}

class UserForm extends Component {
  // static propTypes = {
  //   test: PropTypes.string
  // }
  state = {
    user: '',
    text: ''
  }

  render() {
    // const {test} = this.props
    const {user, text} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        name: <input type="text" value={user} className={this.getClassName('user')} onChange={this.handleChange('user')} />
        text: <input type="text" value={text} className={this.getClassName('text')} onChange={this.handleChange('text')} />
        <input type="submit" value="submit" />
      </form>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({
      user: '',
      text: '',
    })
  }

  getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? "form-input__error":''

  handleChange = type => ev => {
    const {value} = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }


}

export default UserForm