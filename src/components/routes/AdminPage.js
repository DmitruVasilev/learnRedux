import React, {Component} from 'react'
import PeopleList from '../people/PeopleList'
import VirtualizedEventList from '../events/VirtualizedEventList'
import SelectedEvents from '../events/SelectedEvents'

class AdminPage extends Component {
  static propTypes = {}
  
  render() {
    return (
      <div>
        <h1>AdminPage</h1>
        <PeopleList/>
        <SelectedEvents />
        <VirtualizedEventList />
      </div>
    )
  }
}

export default AdminPage