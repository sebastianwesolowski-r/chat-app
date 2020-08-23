import React, {useState} from 'react';

import {ReactComponent as ShowUsers} from '../../assets/users.svg';
import {ReactComponent as Share} from '../../assets/share.svg';
import {ReactComponent as Sound} from '../../assets/sound.svg';
import {ReactComponent as SoundOff} from '../../assets/sound-off.svg';
import {ReactComponent as Leave} from '../../assets/leave.svg';

import {MenuPanel, MenuSettings} from './chat-menu.styles';

import CustomAlert from '../custom-alert/custom-alert.component';

const ChatMenu = ({showUsersList, isSound, switchSound}) => {

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const setAlertHidden = () => setAlert(!alert);

    const shareLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setAlertMessage('chatroom link copied to clipboard');
        setAlertHidden();
    }

    return (
        <>
        <MenuPanel>
            <MenuSettings>
                <ShowUsers onClick={() => showUsersList()}/>
                <Share onClick={() => shareLink()}/>
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
        {
            alert ? (
                <CustomAlert alertMessage={alertMessage} closeAlert={setAlertHidden}/>
            ) : null
        }
        </>
    );
};

export default ChatMenu;