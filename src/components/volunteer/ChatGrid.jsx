import React from 'react';

const ChatGrid = (props) => {
  const chats = () => {
    if (props.chats.length > 0) {
      return props.chats.map(chat => (
        <ChatBox userCase={props.userCase} startCampaign={props.startCampaign} user={props.user}/>
      ))
    }
    return;
  }
  return (
    <div className="metro-vol-chat-grid">
      {chats()}
    </div>
  )
}

export default ChatGrid;