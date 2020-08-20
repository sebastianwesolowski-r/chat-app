import React from 'react';

import {ReactComponent as Send} from '../../assets/send.svg';

import {SendForm, SendInput, SendBtn} from './send-message.styles';

const SendMessage = ({message, sendMessage, setMessage}) => {

    const handleChange = e => {
        setMessage(e.target.value);
    }

    return (
        <SendForm onSubmit={sendMessage}>
            <SendInput type="text" placeholder="message..." onChange={handleChange} value={message}/>
            <SendBtn type="submit"><Send /></SendBtn>
        </SendForm>
    );
};

export default SendMessage;