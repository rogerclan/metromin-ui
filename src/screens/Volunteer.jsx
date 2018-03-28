import React, { Component } from 'react';
import { RequestList } from '../components/volunteer/RequestList';

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
  }

  handleCloseForm() {
    this.setState({userCase: null});
  }

  handleSelectCase(userCase) {
    const {chats} = this.state;

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
            <ChatGrid chats={this.state.chats} startCampaign={this.handleStartCampaign} user={this.state.user}/>
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