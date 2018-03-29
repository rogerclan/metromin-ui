import React, { Component } from "react";
import AltLogo from "../../logo_alt.png";
import ChatInput from "./Input";
import ChatList from "./List";
import ChatCampaignBtn from "./CampaignBtn";
import Api from "../../api";
import Message from "../../models/Message";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      userId: (props.user) ? props.user.id: null,
      poll: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStartCampaign = this.handleStartCampaign.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleCloseChat = this.handleCloseChat.bind(this);
  }

  componentWillMount() {
    this.getMessages();
    this.startPolling();
  }

  componentWillUnmount() {
    clearInterval(this.poll);
    const name = (this.props.user !== null) ? this.props.user.name : this.props.userCase.contactName ;
    this.sendMessage(`${name} has left the chat.`).then(()=>{
      console.log('chat window unmounted')
    })
  }

  startPolling() {
    const poll = setInterval(() => this.getMessages(), 3000);
    this.setState({poll});
  }

  handleInputChange(message) {
    this.setState({ message });
  }

  getMessages() {
    const me = this;
    Api.getCaseMessages(this.props.userCase.id).then(res => {
      if (res) {
        const messages = res.content.map(msg => new Message(msg.id, msg.caseId, msg.metminUser, msg.content, msg.dateCreated));
        me.setState({ messages });
      }
    });
  }

  handleStartCampaign () {
    this.props.startCampaign(this.props.userCase);
  }

  handleSendMessage(ev) {
    ev.preventDefault();
    const { message } = this.state;
    if (message.length > 0) {
      this.setState({message:''});
      const me = this;
      this.sendMessage(message).then(() => {
        me.getMessages();
      })
      .catch(() => {
        console.log('failed to send message')
      });
    }

  }

  sendMessage(message) {
    return Api.sendMessage(this.props.userCase.id, this.state.userId, message);
  }

  handleCloseChat() {
    this.props.closeChat(this.props.userCase);
  }

  render() {

    return (
      <article className="metro-chat-box">
        <button className="metro-chat-box-close-btn" onClick={ev => this.handleCloseChat()}><i className="fa fa-times"></i></button>
        <div className="metro-chat-header">
          <img className="metro-chat-header-img" src={AltLogo} alt="metro min logo"/> We Can Help
        </div>
        <ChatList userCase={this.props.userCase} messages={this.state.messages} />
        <ChatInput
          value={this.state.message}
          change={this.handleInputChange}
          sendMessage={this.handleSendMessage}
        />
        {this.props.user && <ChatCampaignBtn userCase={this.props.userCase} startCampaign={this.handleStartCampaign} />}
      </article>
    );
  }
}
