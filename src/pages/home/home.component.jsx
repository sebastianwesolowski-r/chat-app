import React from 'react';

import {Home, BackgroundCaption, Panel, Header, Join, JoinInput, EnterBtn} from './home.styles';

const HomePage = () => (
    <Home>
        <BackgroundCaption align="left">socket.io</BackgroundCaption>
        <BackgroundCaption align="right">chat app</BackgroundCaption>
        <Panel>
            <Header>Join</Header>
            <Join action="/chat">
                <JoinInput type="text" name="username" placeholder="Username" maxLength="10" autoComplete="off" required/>
                <JoinInput type="text" name="room" placeholder="Room" maxLength="10" autoComplete="off" required/>
                <EnterBtn type="submit">Enter</EnterBtn>
            </Join>
        </Panel>
    </Home>
);

export default HomePage;