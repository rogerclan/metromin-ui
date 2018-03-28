import React, { Component } from 'react';
import { RequestItem } from './RequestItem';

export class RequestList extends Component {

  constuctor(props) {
    super(props);
    this.state = {
      requests = []
    }

    this.handleSelectClick = this.handleSelectClick.bind(this);
  }

  handleSelectClick(item) {
    this.props.selectCase
  }

  requestItems = () => {
    if(this.state.requests.length > 0) {
      return this.state.requests.map(item => (
        <RequestItem item={item} selectClick={this.handleSelectClick} key={item.id} />
      ))
    }
    return <li className="metro-requests-list-item-empty">No requests pending</li>
  }

  return (
    <ul>
      { listItems() }
    </ul>
  )
}

export default RequestList;