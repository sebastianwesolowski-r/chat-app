import React from 'react';

import {MessagesContainer} from './messages-field.styles';

import Message from '../message/message.component';

const MessagesField = ({messages, displayName}) => {
    let keyCount = 0;
    const getKey = () => keyCount++;

    return (
        <MessagesContainer>
            {
                messages ? (
                    messages.map(message => <Message key={getKey()} message={message} displayName={displayName}/>)
                ) : null
            }
        </MessagesContainer>
    );
};

export default MessagesField;