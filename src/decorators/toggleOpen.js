import React from 'react'

export default (OriginalComponent) => class ToggleOpen extends React.Component {
  state = {
    isOpen: false
  }

  render(){
    return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
  }

  toggleOpen=(ev)=>{
    ev && ev.preventDefault && ev.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}