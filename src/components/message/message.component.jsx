import React from 'react';

import Linkify from 'react-linkify';

import moment from 'moment';

import {MessageContainer, MessageBox, MessageData} from './message.styles';

const Message = ({message, displayName}) => (
    <MessageContainer displayName={displayName} messageAuthor={message.username}>
        <MessageBox displayName={displayName} messageAuthor={message.username}>
            <Linkify>{message.text}</Linkify>
        </MessageBox>
        <MessageData>{message.username} {moment(message.createdAt).format('H:MM A')}</MessageData>
    </MessageContainer>
);

export default Message;