import React, {useState} from 'react';

import Picker from 'emoji-picker-react';

import {ReactComponent as Send} from '../../assets/send.svg';
import {ReactComponent as SendLocation} from '../../assets/send-location.svg';
import {ReactComponent as SendEmoji} from '../../assets/send-emoji.svg';

import {SendForm, SendContainer, SendInput, SendIcons, SendBtn, EmojiPicker} from './send-message.styles';

const SendMessage = ({message, sendMessage, sendLocation, setMessage, addEmojiToMessage}) => {

    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const handleEmojiPicker = () => setEmojiPickerOpen(!emojiPickerOpen);

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const onEmojiClick = (event, emojiObject) => {
        addEmojiToMessage(emojiObject);
    };

    return (
        <>
            <SendForm onSubmit={sendMessage}>
                <SendContainer>
                    <SendInput type="text" placeholder="Write a message ..." onChange={handleChange} value={message}/>
                    <SendIcons>
                        <SendLocation onClick={sendLocation} />
                        <SendEmoji onClick={handleEmojiPicker} />
                    </SendIcons>
                </SendContainer>
                <SendBtn type="submit"><Send /></SendBtn>
            </SendForm>
            {
                emojiPickerOpen ? (
                    <EmojiPicker>
                        <Picker className="custompicker" onEmojiClick={onEmojiClick} disableSearchBar disableSkinTonePicker />
                    </EmojiPicker>
                ) : null
            }
        </>
    );
};

export default SendMessage;