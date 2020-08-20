import React from 'react';

import {ReactComponent as ShowUsers} from '../../assets/users.svg';
import {ReactComponent as Share} from '../../assets/share.svg';
import {ReactComponent as Sound} from '../../assets/sound.svg';
import {ReactComponent as ChangeRoom} from '../../assets/change.svg';
import {ReactComponent as Leave} from '../../assets/leave.svg';

import {MenuPanel, MenuSettings} from './chat-menu.styles';

const ChatMenu = ({history}) => {
    
    return (
        <MenuPanel>
            <MenuSettings>
                <ShowUsers />
                <Share />
                <Sound />
                <ChangeRoom />
            </MenuSettings>
            <a href="/"><Leave/></a>
        </MenuPanel>
    );
};

export default ChatMenu;