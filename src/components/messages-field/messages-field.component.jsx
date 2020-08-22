import React from 'react';

import {MessagesContainer, Messages} from './messages-field.styles';

import Message from '../message/message.component';

const MessagesField = ({messages, displayName}) => {
    let keyCount = 0;
    const getKey = () => keyCount++;

    return (
        <MessagesContainer>
            <Messages>
            {
                messages ? (
                    messages.map(message => <Message key={getKey()} message={message} displayName={displayName}/>)
                ) : null
            }
            </Messages>
        </MessagesContainer>
    );
};

MessagesContainer.defaultProps = {
    messages: []
}

export default MessagesField;