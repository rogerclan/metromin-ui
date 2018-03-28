import React from 'react';
import ChatMessage from './Message';

export default function ChatList (props) {

  const messageList = () => {
    if (props.messages.length > 0) {
      return props.messages.map(msg => (
        <ChatMessage msg={msg.content} name={msg.user ? msg.user.userName : props.userCase.contactName} isCustomer={msg.user?true:false}/>
      ));
    }
    return <li className="metro-chat-wait">Waiting to connect</li>;
  }

  return (
    <ul className="metro-chat-list">
      {messageList()}
    </ul>
  )
}