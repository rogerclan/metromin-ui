import React, { Component } from 'react';
import { RequestList } from '../components/volunteer/RequestList';
import User from '../models/User';
import ChatGrid from '../components/volunteer/ChatGrid';
import CampaignForm from '../components/volunteer/CampaignForm';

export class Voulenteer extends Component {
  constructor(props) {
    super(props)
    this.state={
      user: new User(3, 'Felicia', 'Felicia White', true),
      userCase: null,
      chats: []
    }

    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSelectCase = this.handleSelectCase.bind(this);
    this.handleCloseChat = this.handleCloseChat.bind(this);
  }

  handleCloseForm() {
    this.setState({userCase: null});
  }

  handleSelectCase(userCase) {
    const {chats} = this.state;
    chats.push(userCase)
    this.setState({chats});
  }

  handleCloseChat(userCase) {
    const chats = this.state.chats.filter(chat => chat.id !== userCase.id);
    this.setState({chats});
  }

  render() {

    return (
      <div>
        <section className="metro-vol-request-list">
          <h3>Requests</h3>
          <RequestList selectCase={this.handleSelectCase}/>
        </section>
        <div className="metro-vol-container">
          <section className="metro-vol-chat">
            <h3>Chats</h3>
            <ChatGrid chats={this.state.chats} startCampaign={this.handleStartCampaign} user={this.state.user} closeChat={this.handleCloseChat} />
          </section>
          {this.state.userCase && <section className="metro-vol-need">
            <CampaignForm userCase={this.state.userCase} closeForm={this.handleCloseForm}/>
          </section>}
        </div>
      </div>
    );
  }
}

export default Voulenteer;