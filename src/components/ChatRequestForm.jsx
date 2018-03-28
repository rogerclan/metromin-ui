import React, { Component } from 'react';
import CaseTypes from './CaseTypes';
import Api from '../api';
import Case from '../models/Case';

export class ChatRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      name: '',
      email: '',
      phone: '',
      need: '',
      caseType: '',
      location: ''
    }

    this.handleStartChat = this.handleStartChat.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNeedChange = this.handleNeedChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCaseTypeChange = this.handleCaseTypeChange.bind(this);
  }

  handleStartChat(ev) {
    ev.preventDefault();
    if (this.state.name && this.state.need) {
      const { name, email, phone, need, caseType, location } = this.state;
      Api.addCase(caseType, name, email, phone, location, need)
      .then(data => {
        this.props.startChat(new Case(data.id, data.caseType, data.assignee, data.contactName, data.contactEmail, data.contactPhone, data.location, data.message, data.dateCreated))
      });
    }
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handleCaseTypeChange(caseType) {
    this.setState({ caseType });
  }

  handlePhoneChange(phone) {
    this.setState({ phone });
  }

  handleNeedChange(need) {
    this.setState({ need });
  }

  handleLocationChange(location) {
    this.setState({ location });
  }

  render() {
    return (
      <form className="metro-chat-form">
        <label className="metro-label">What would you like to be called?</label>
        <input className="metro-input" onChange={ev => this.handleNameChange(ev.target.value)} value={this.state.name} type="text" name="name" required/>
        <label className="metro-label">Email</label>
        <input className="metro-input" onChange={ev => this.handleEmailChange(ev.target.value)} value={this.state.email} type="email" name="email" />
        <label className="metro-label">Phone</label>
        <input className="metro-input" onChange={ev => this.handlePhoneChange(ev.target.value)} value={this.state.phone} type="tel" name="phone" />
        <label className="metro-label">Location</label>
        <input className="metro-input" onChange={ev => this.handleLocationChange(ev.target.value)} value={this.state.location} type="text" name="location" />
        <label className="metro-label">Request Type</label>
        <CaseTypes change={this.handleCaseTypeChange} value={this.state.caseType} />
        <label className="metro-label">Your Specific need</label>
        <textarea className="metro-textarea" onChange={ev => this.handleNeedChange(ev.target.value)} value={this.state.need} rows="8" name="needs" required></textarea>
        <div className="metro-btn-bar">
          <button className="metro-btn metro-chat__btn" onClick={ev => this.handleStartChat(ev)}>Start Chat</button>
        </div>
      </form>
    );
  }
}

export default ChatRequestForm;