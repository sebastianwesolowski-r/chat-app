import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
import queryString from 'query-string';

const ChatPage = ({location}) => {

    const [displayName, setDisplayName] = useState('');
    const [romm, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');

    let socket;

    useEffect(() => {
        const {username, room} = queryString.parse(location.search);
        socket = io();

        setDisplayName(username);
        setRoom(room);
        socket.emit('join', {username, room}, error => {
            if(error) {
                alert(error);
                location = "/";
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
        <div></div>
    );
};

export default ChatPage;

