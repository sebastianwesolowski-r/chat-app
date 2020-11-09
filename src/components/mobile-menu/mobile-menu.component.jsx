import React from 'react';
import {withRouter} from 'react-router-dom';

import {ReactComponent as ShowUsers} from '../../assets/users.svg';
import {ReactComponent as Sound} from '../../assets/sound.svg';
import {ReactComponent as SoundOff} from '../../assets/sound-off.svg';
import {ReactComponent as Leave} from '../../assets/leave.svg';

import {MobileMenuContainer, MobileMenuHeader, MobileMenuSettings} from './mobile-menu.styles';
import {MenuOption} from '../chat-menu/chat-menu.styles';

const MobileMenu = ({history, showUsers, isSound, switchSound}) => (
    <MobileMenuContainer>
        <MobileMenuHeader>MENU</MobileMenuHeader>
        <MobileMenuSettings>
            <MenuOption onClick={showUsers}>
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
            <MenuOption onClick={() => history.push("/")}>
                <Leave />
                <span>Exit</span>
            </MenuOption>
        </MobileMenuSettings>
    </MobileMenuContainer>
);

export default withRouter(MobileMenu);