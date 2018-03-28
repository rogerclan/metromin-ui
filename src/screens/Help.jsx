import React, { Component } from 'react';
import ChatRequestForm from '../components/ChatRequestForm';
import ChatBox from '../components/chat/Box';

export class Help extends Component {

  constructor(props) {
    super(props);
    this.state={
      session:null
    }

    this.handleCloseChat = this.handleCloseChat.bind(this);
    this.handleStartChat = this.handleStartChat.bind(this);
  }

  handleCloseChat() {
    this.setState({session: null});
  }

  handleStartChat(session) {
    this.setState({session});
  }

  render() {
    const chatBox = () => {
      if (this.state.session !== null) {
        return (
          <section className="metro-help-chat">
            <ChatBox userCase={this.state.session} user={null} closeChat={this.handleCloseChat} />
          </section>
        )
      }
      return (
        <section id="metro-chat" className="container metro-chat-form__view">
          <h3 className="metro-title metro-chat__title">Chat with someone live.</h3>
          <ChatRequestForm startChat={this.handleStartChat} />
        </section>
      );
    }

    return (
      <div className="wrapper">
        <section className="metro-question">
          <h3 className="metro-question__title">Have a specific need?</h3>
          <div className="metro-btn-bar">
            <a className="metro-btn metro-question__btn" href="#metro-chat">Contact Us</a>
          </div>
        </section>
        { chatBox() }
      </div>
    )
  }
}

export default Help;