import React from 'react';
import { ChatMessage } from './ChatMessage';

export function ChatList (props) {

  const createList = () => {
    if (props.messages.length > 0) {
      return props.messages.map(msg => (
        <ChatMessage
          title={msg.name}
          message={msg.message}
          isSelf={props.user === msg.user}
        />))
    }
    return [];
  }

  return (
    <ul>
      {createList()}
    </ul>
  );
}

export default ChatList;