import React from 'react';

import {ReactComponent as ShowUsers} from '../../assets/users.svg';
import {ReactComponent as Share} from '../../assets/share.svg';
import {ReactComponent as Sound} from '../../assets/sound.svg';
import {ReactComponent as SoundOff} from '../../assets/sound-off.svg';
import {ReactComponent as Leave} from '../../assets/leave.svg';

import {MenuPanel, MenuSettings} from './chat-menu.styles';

const ChatMenu = ({showUsersList, isSound, switchSound}) => {
    return (
        <MenuPanel>
            <MenuSettings>
                <ShowUsers onClick={() => showUsersList()}/>
                <Share onClick={() => navigator.clipboard.writeText(window.location.href)}/>
                {
                    isSound ? (
                        <Sound onClick={() => switchSound()} />
                    ) : (
                        <SoundOff onClick={() => switchSound()} />
                    )
                }
            </MenuSettings>
            <a href="/"><Leave/></a>
        </MenuPanel>
    );
};

export default ChatMenu;