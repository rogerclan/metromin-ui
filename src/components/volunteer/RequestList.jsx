import React, { Component } from 'react';
import { RequestItem } from './RequestItem';
import Case from '../../models/Case';
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
    this.getUserCases();
    this.startPolling();
  }

  componentWillUnmount() {
    clearInterval(this.poll);
  }

  startPolling() {
    const poll = setInterval(() => this.getUserCases(), 3000);
    this.setState({poll});
  }

  getUserCases() {
    const me = this;
    Api.getNewCases().then(res => {
      const requests = res.content.map(r => new Case(r.id, r.caseType, r.assignee, r.contactName, r.contactEmail, r.contactPhone, r.location, r.message, r.dateCreated));
      me.setState({requests});
    })
  }


  handleSelectClick(item) {
    const props = this.props;
    Api.updateCase(item.id, this.props.user.id).then(() => {
      props.selectCase(item);
    });
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