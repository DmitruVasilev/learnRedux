import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from "./AC";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func
  }

  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={this.handleIncrement}>counter</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.increment()
  }
}

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter)