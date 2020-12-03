import React from 'react';
import ChatBox from '../chat/Box';

const ChatGrid = (props) => {
  const chats = () => {
    if (props.chats.length > 0) {
      return props.chats.map(chat => (
        <ChatBox key={chat.id} userCase={chat} startCampaign={props.startCampaign} user={props.user} closeChat={props.closeChat}/>
      ))
    }

  }
  return (
    <div className="metro-vol-chat-grid">
      {chats()}
    </div>
  )
}

export default ChatGrid;