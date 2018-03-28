import React, { Component } from 'react';
import { RequestItem } from './RequestItem';
import Api from '../../api';

export class RequestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      polling: null
    }

    this.handleSelectClick = this.handleSelectClick.bind(this);
  }

  componentWillMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    clearInterval(this.poll);
  }

  startPolling() {
    this.poll = setInterval(() => this.getUserCases(), 3000);
  }

  getUserCases() {
    const me = this;
    Api.getCases().then(res => {
      me.setState({requests: res.content});
    })
  }


  handleSelectClick(item) {
    this.props.selectCase(item);
  }

  requestItems = () => {
    if(this.state.requests.length > 0) {
      return this.state.requests.map(item => (
        <RequestItem item={item} selectClick={this.handleSelectClick} key={item.id} />
      ))
    }
    return <li className="metro-requests-list-item-empty">No requests pending</li>
  }

  render(){
    return (
      <ul className="metro-requests-list">
        { this.requestItems() }
      </ul>
    )
  }
}

export default RequestList;