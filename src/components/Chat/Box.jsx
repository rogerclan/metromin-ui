import React, { Component } from "react";
import Logo from "../../logo.png";
import ChatInput from "./Input";
import ChatList from "./List";
import ChatCampaignBtn from "./CampaignBtn";
import Api from "../../api";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      poll: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStartCampaign = this.handleStartCampaign.bind(this);
    this.handleSendMessage = this.handleInputChange.bind(this);
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

  handleStartCampaign () {
    this.props.startCampain(this.props.userCase);
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
          <img className="metro-chat-header-img" src={Logo} alt="metro min logo"/> We Can Help
        </div>
        <ChatList userCase={this.props.userCase} messages={this.state.messages} />
        <ChatInput
          value={this.state.message}
          change={this.handleInputChange}
          sendMessage={this.handleSendMessage}
        />
        {this.props.user && <ChatCampaignBtn startCampaign={this.handleStartCampaign} />}
      </article>
    );
  }
}
