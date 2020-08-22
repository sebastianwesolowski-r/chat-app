import React from 'react';

import moment from 'moment';

import {MessageContainer, MessageBox, MessageData} from './message.styles';

const Message = ({message, displayName}) => (
    <MessageContainer displayName={displayName} messageAuthor={message.username}>
        <MessageBox displayName={displayName} messageAuthor={message.username}>{message.text}</MessageBox>
        <MessageData>{message.username} {moment(message.createdAt).format('H:MM A')}</MessageData>
    </MessageContainer>
);

export default Message;