import React from 'react'

const ErrorField = (props) => {
  const {input, type, meta: {error, touched}} = props
  const errorText = touched && error && <div style={{color:"red"}}>{error}</div>
  return (
    <div>
      <label htmlFor={input.name}>{input.name}</label>
      <input {...input} type={type}/>
      {errorText}
    </div>
  )
}

ErrorField.propTypes = {}

export default ErrorField