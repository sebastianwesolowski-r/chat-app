import React from 'react';

import {Home, Panel, Header, Join, JoinInput, EnterBtn} from './home.styles';

const HomePage = () => (
    <Home>
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