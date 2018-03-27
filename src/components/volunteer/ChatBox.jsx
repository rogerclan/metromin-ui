import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default class ChatBox {
  constructor(props) {
      super(props);
      this.state={
          caseId:null,
          user: {},
          message: '',
          messages: []
      }
  }

    handleInputChange(message) {
        this.setState({message});
    }

    handleSendMessage(ev) {
        ev.preventDefault();
        const { messages } = this.state;
        const message = {
          caseId: this.state.caseId
        }
        this.setState({message: ''});
    }

    messageList() {
        if (this.state.messages.length > 0) {
            return this.state.messages.map(msg => <ChatMessage name={msg.name} text={msg.text} />);
        }
        return <li>Waiting to connect</li>
    }

    render() {
        return (
            <div>
                <ul>{messageList()}</ul>
                <ChatInput value={this.state.message} change={this.handleInputChange} sendMessage={this.handleSendMessage} />
            </div>
        )
    }
}