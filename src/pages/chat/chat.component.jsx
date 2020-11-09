import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';

import io from 'socket.io-client';
import queryString from 'query-string';

import soundAlert from '../../assets/alert.mp3';
import {ReactComponent as HamburgerMenu} from '../../assets/hamburger-menu.svg';

import {Chat, ChatHeader, UserInfo, ChatroomInfo, Modal} from './chat.styles';

import ChatMenu from '../../components/chat-menu/chat-menu.component';
import SendMessage from '../../components/send-message/send-message.component';
import MessagesField from '../../components/messages-field/messages-field.component';
import MobileMenu from '../../components/mobile-menu/mobile-menu.component';
import Spinner from '../../components/spinner/spinner.component';
import CustomPopup from '../../components/custom-popup/custom-popup.component';
import CustomError from '../../components/custom-error/custom-error.component';

let socket;

const ChatPage = ({location, history}) => {
    const [displayName, setDisplayName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isSound, setSound] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [modalComponentData, setModalComponentData] = useState(null);

    const CHATENDPOINT = '/';

    const switchModalBody = modalComponentData => {

        const {type} = modalComponentData;

        switch(type) {
            case "CustomPopup":
                return <CustomPopup popupData={users} />;
            case "CustomError":
                return <CustomError errorMessage={modalComponentData.errorMessage} />
            default: return;
        };
    };

    const showUsers = () => setModalComponentData({type: "CustomPopup"});

    const showError = errorMessage => setModalComponentData({type: "CustomError", errorMessage});

    const handleModalClose = () => setModalComponentData(null);

    const switchSound = () => {
        if(isSound) {
            Howler.volume(0);
        } else {
            Howler.volume(0.7);
        }
        setSound(!isSound);
    };

    const alertHowl = new Howl({src: [soundAlert]});

    useEffect(() => {
        const {username, room} = queryString.parse(location.search);
        socket = io(CHATENDPOINT);

        setDisplayName(username);
        setRoom(room);
        socket.emit('join', {username, room}, error => {
            if(error) {
                alert(error);
                history.push('/');
            }
        })
    }, [CHATENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
            alertHowl.play();
        });

        socket.on('locationMessage', locationMessage => {
            setMessages(messages => [...messages, locationMessage]);
            alertHowl.play();
        });

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    }, []);

    const addEmojiToMessage = emoji => setMessage(message + emoji.emoji);

    const sendMessage = e => {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const sendLocation = () => {
        if(!navigator.geolocation) {
            return showError("Geolocation is not supported by your browser");
        }
        navigator.geolocation.getCurrentPosition(position => socket.emit('sendLocation', {
            longitude: position.coords.longitude, latitude: position.coords.latitude
        }, () => setMessage('')));
    }

    return (
        <>
        {
            messages.length === 0 ? (
                <Spinner />
            ) : (
                <>
                    <Chat>
                        <ChatHeader mobileMenu={mobileMenu}>
                            <HamburgerMenu onClick={() => setMobileMenu(!mobileMenu)}/>
                            <UserInfo>You entered as <span>{displayName}</span></UserInfo>
                            <ChatroomInfo>chatroom <span>{room}</span></ChatroomInfo>
                        </ChatHeader>
                        {
                            mobileMenu ? (
                                <MobileMenu showUsers={showUsers} isSound={isSound} switchSound={switchSound}/>
                            ) : null
                        }
                        <ChatMenu isSound={isSound} switchSound={switchSound} showUsers={showUsers}/>
                        <MessagesField messages={messages} displayName={displayName}/>
                        <SendMessage message={message} sendMessage={sendMessage} sendLocation={sendLocation} setMessage={setMessage} addEmojiToMessage={addEmojiToMessage}/>
                    </Chat>
                    {
                        modalComponentData ? (
                            <Modal onClick={handleModalClose}>
                                {
                                    switchModalBody(modalComponentData)
                                }
                            </Modal>
                        ) : null
                    }
                </>
            )
        }
        </>
    );
};

export default ChatPage;

