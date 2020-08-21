import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';

import io from 'socket.io-client';
import queryString from 'query-string';

import soundAlert from '../../assets/alert.mp3';

import {Chat, ChatHeader} from './chat.styles';
import ChatMenu from '../../components/chat-menu/chat-menu.component';
import SendMessage from '../../components/send-message/send-message.component';
import MessagesField from '../../components/messages-field/messages-field.component';
import UsersList from '../../components/users-list/users-list.component';

let socket;

const ChatPage = ({location, history}) => {
    const [displayName, setDisplayName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');
    const [usersList, setUsersList] = useState(false);
    const [isSound, setSound] = useState(true);

    const showUsersList = () => setUsersList(!usersList);
    const switchSound = () => {
        if(isSound) {
            Howler.volume(0);
        } else {
            Howler.volume(1);
        }
        setSound(!isSound);
    };

    const alertHowl = new Howl({src: [soundAlert]});

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
            alertHowl.play();
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
            <ChatMenu showUsersList={showUsersList} isSound={isSound} switchSound={switchSound}/>
            <MessagesField messages={messages} displayName={displayName}/>
            {
                usersList ? (
                    <UsersList users={users}/>
                ) : null
            }
            <SendMessage message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        </Chat>
    );
};

export default ChatPage;

