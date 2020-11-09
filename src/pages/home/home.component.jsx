import React from 'react';

import {Home, Panel, Header, Join, JoinInput, JoinInputLabel, EnterBtn, Footer} from './home.styles';

const HomePage = () => (
    <Home>
        <Panel>
            <Header>Join room</Header>
            <Join action="/chat">
                <JoinInputLabel htmlFor="room">Room</JoinInputLabel>
                <JoinInput type="text" id="room" name="room" placeholder="..." maxLength="10" autoComplete="off" required/>
                <JoinInputLabel htmlFor="username">Username</JoinInputLabel>
                <JoinInput type="text" id="username" name="username" placeholder="..." maxLength="10" autoComplete="off" required/>
                <EnterBtn type="submit">Enter</EnterBtn>
            </Join>
        </Panel>
        <Footer>
            <a href="https://sebastianwesolowski.netlify.app/" rel="noopener noreferrer" target="_blank">© 2020 Chat App by SEBASTIANWESOLOWSKI.</a>
            <a href="https://github.com/sebastianwesolowski-r/chat-app" rel="noopener noreferrer" target="_blank">GitHub</a>
        </Footer>
    </Home>
);

export default HomePage;