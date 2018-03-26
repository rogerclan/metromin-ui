import React, { Component } from 'react';

export class Help extends Component {

  constructor(props) {
    super(props);
    this.state={}
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
          <form className="metro-chat-form">
            <label className="metro-label">What would you like to be called?</label>
            <input className="metro-input" type="text" name="name" required/>
            <label className="metro-label">Email</label>
            <input className="metro-input" type="tele" name="phone" />
            <label className="metro-label">Phone</label>
            <input className="metro-input" type="email" name="email" />
            <label className="metro-label">Your Specific need</label>
            <textarea className="metro-textarea" rows="8" name="needs" required></textarea>
            <div className="metro-btn-bar">
              <button className="metro-btn metro-chat__btn">Start Chat</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default Help;