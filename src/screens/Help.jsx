import React, { Component } from 'react';
import { ChatRequestForm } from '../components/ChatRequestForm';

export class Help extends Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }


  render() {
    return (
      <div className="wrapper">
        <section className="metro-question">
          <h3 className="metro-question__title">Have a specific need?</h3>
          <div className="metro-btn-bar">
            <a className="metro-btn metro-question__btn" href="#metro-chat">Contact Us</a>
          </div>
        </section>
        <section id="metro-chat" className="container metro-chat-form__view">
          <h3 className="metro-title metro-chat__title">Chat with someone live.</h3>
          <ChatRequestForm />
        </section>
      </div>
    )
  }
}

export default Help;