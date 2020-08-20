import React from 'react';

import {MessageContainer, MessageBox, MessageData} from './message.styles';

const Message = ({message, displayName}) => (
    <MessageContainer displayName={displayName} messageAuthor={message.username}>
        <MessageBox displayName={displayName} messageAuthor={message.username}>{message.text}</MessageBox>
        <MessageData>{message.username} {message.createdAt}</MessageData>
    </MessageContainer>
);

export default Message;