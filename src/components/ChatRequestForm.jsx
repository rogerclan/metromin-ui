import React, { Component } from 'react';
import { CaseType } from './CaseTypes';

export class ChatRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      name: '',
      email: '',
      phone: '',
      need: '',
      caseType: 'financial assistance'
    }

    this.handleStartChat = this.handleStartChat.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNeedChange = this.handleNeedChange.bind(this);
    this.handleCaseTypeChange = this.handleCaseTypeChange.bind(this);
  }

  handleStartChat(ev) {
    ev.preventDefault();
    if (this.state.name && this.state.need) {
      const { name, email, phone, need, caseType } = this.state;
      const data = {
        contactName:name,
        contactEmail: email,
        contactPhone: phone,
        message: need,
        caseType,
        reviewed: false };
      fetch('http://metmin.us-east-1.elasticbeanstalk.com/api/case', {
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json())
      .then(data => console.log(data));
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

  render() {
    return (
      <form className="metro-chat-form">
        <label className="metro-label">What would you like to be called?</label>
        <input className="metro-input" onChange={ev => this.handleNameChange(ev.target.value)} value={this.state.name} type="text" name="name" required/>
        <label className="metro-label">Email</label>
        <input className="metro-input" onChange={ev => this.handleEmailChange(ev.target.value)} value={this.state.email} type="email" name="email" />
        <label className="metro-label">Phone</label>
        <input className="metro-input" onChange={ev => this.handlePhoneChange(ev.target.value)} value={this.state.phone} type="tel" name="phone" />
        <label className="metro-label">Request Type</label>
        <CaseType change={this.handleCaseTypeChange} value={this.state.caseType} />
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