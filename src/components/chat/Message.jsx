import React from 'react';

const ChatMessage = (props) => {
    let className = 'metro-chat-msg';
    if(props.isCustomer) {
        className += ' metro-chat-msg-customer'
    }
    return (
        <li className={className}>
            <h3>{props.name}</h3>
            <p>{props.msg}</p>
        </li>
    );
}

export default ChatMessage;