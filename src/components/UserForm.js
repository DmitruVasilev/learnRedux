import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class UserForm extends Component {
  // static propTypes = {
  //   test: PropTypes.string
  // }
  state = {
    userName: ''
  }

  render() {
    // const {test} = this.props
    const {userName} = this.state
    return (
      <div>
        name: <input type="text" value={userName} onChange={this.handleUserChange} />
      </div>
    )
  }

  handleUserChange = ev => {
    if (ev.target.value.length>10)return
    this.setState({
      userName: ev.target.value
    })
  }
}

export default UserForm