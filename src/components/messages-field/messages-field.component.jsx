import React from 'react';

import {MessagesContainer, Messages} from './messages-field.styles';

import Message from '../message/message.component';

const MessagesField = ({messages, displayName}) => (
    <MessagesContainer>
        <Messages>
        {
            messages ? (
                messages.map(message => <Message key={`${message.text}${message.username}${message.createdAt}`} message={message} displayName={displayName}/>)
            ) : null
        }
        </Messages>
    </MessagesContainer>
);

MessagesContainer.defaultProps = {
    messages: []
}

export default MessagesField;