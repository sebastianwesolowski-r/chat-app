import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
import queryString from 'query-string';

import {Chat, ChatHeader} from './chat.styles';
import ChatMenu from '../../components/chat-menu/chat-menu.component';
import SendMessage from '../../components/send-message/send-message.component';
import MessagesField from '../../components/messages-field/messages-field.component';

let socket;

const ChatPage = ({location, history}) => {
    const [displayName, setDisplayName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        const {username, room} = queryString.parse(location.search);
        socket = io();

        setDisplayName(username);
        setRoom(room);
        socket.emit('join', {username, room}, error => {
            if(error) {
                alert(error);
                history.push('/');
            }
        })
    }, [location, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = e => {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const sendLocation = () => {
        if(!navigator.geolocation) {
            return alert('Geolocation is not supported by your browser');
        }
        navigator.geolocation.getCurrentPosition(position => socket.emit('sendLocation', {
            longitude: position.coords.longitude, latitude: position.coords.latitude
        }));
    }

    return (
        <Chat>
            <ChatHeader>chatroom <span>{room}</span></ChatHeader>
            <ChatMenu />
            <MessagesField messages={messages} displayName={displayName}/>
            <SendMessage message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        </Chat>
    );
};

export default ChatPage;

