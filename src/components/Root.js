import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'


const Root = (props) => {
  return (
    <Provider store={store}>
      <App {...props}/>
    </Provider>
  )
}

Root.propTypes = {
  // test: PropTypes.string
}

export default Root