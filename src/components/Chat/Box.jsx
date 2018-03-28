import React from "react";
import Logo from "../../logo.png";
import ChatInput from "./Input";
import ChatList from "./List";
import Case from "../../models/Case";
import Api from "../../api";

export default class ChatBox {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      poll: null
    };
  }

  componentWillMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    clearTimeout(this.poll);
  }

  startPolling() {
    this.poll = setTimeout(() => this.getMessages(), 3000);
  }

  handleInputChange(message) {
    this.setState({ message });
  }

  getMessages() {
    const me = this;
    Api.getCaseMessages(this.props.userCase.id).then(res => {
      if (res.ok) {
        me.setState({ messages: res.data.content });
      }
    });
  }

  handleSendMessage(ev) {
    const me = this;
    ev.preventDefault();
    const { message } = me.state;
    Api.sendMessage(me.props.userCase.id, null, message)
      .then(res => {
        me.setState({ message: "" });
        me.getMessages();
      })
      .catch(() => {
        console.log('failed to send message')
      });
  }

  render() {
    return (
      <article className="metro-chat-box">
        <div className="metro-chat-header">
          <img className="metro-chat-header-img" src={Logo}> We Can Help
        </div>
        <ChatList userCase={this.props.userCase} messages={this.state.messages} />
        <ChatInput
          value={this.state.message}
          change={this.handleInputChange}
          sendMessage={this.handleSendMessage}
        />
      </article className="metro-chat-box">
    );
  }
}
