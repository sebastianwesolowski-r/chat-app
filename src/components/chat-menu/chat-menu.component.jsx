import React from 'react';
import {withRouter} from 'react-router-dom';

import {ReactComponent as ShowUsers} from '../../assets/users.svg';
import {ReactComponent as Sound} from '../../assets/sound.svg';
import {ReactComponent as SoundOff} from '../../assets/sound-off.svg';
import {ReactComponent as Leave} from '../../assets/leave.svg';

import {MenuPanel, MenuSettings, MenuOption} from './chat-menu.styles';

const ChatMenu = ({history, showUsers, isSound, switchSound}) => (
    <MenuPanel>
        <MenuSettings>
            <p>MENU</p>
            <MenuOption onClick={() => showUsers()}>
                <ShowUsers />
                <span>Users</span>
            </MenuOption>
            {
                isSound ? (
                    <MenuOption onClick={() => switchSound()} >
                        <Sound />
                        <span>Sound</span>
                    </MenuOption>
                ) : (
                    <MenuOption onClick={() => switchSound()}>
                        <SoundOff />
                        <span>Sound</span>
                    </MenuOption>
                )
            }
        </MenuSettings>
        <MenuOption onClick={() => history.push("/")}>
            <Leave />
            <span>Exit</span>
        </MenuOption>
    </MenuPanel>
);

export default withRouter(ChatMenu);