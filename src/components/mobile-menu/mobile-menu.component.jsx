import React, {useState} from 'react';

import {ReactComponent as ShowUsers} from '../../assets/users-mobile.svg';
import {ReactComponent as Share} from '../../assets/share-mobile.svg';
import {ReactComponent as Sound} from '../../assets/sound-mobile.svg';
import {ReactComponent as SoundOff} from '../../assets/sound-off-mobile.svg';
import {ReactComponent as Leave} from '../../assets/leave-mobile.svg';

import {MobileMenuContainer, MobileMenuSettings} from './mobile-menu.styles';

import CustomAlert from '../custom-alert/custom-alert.component';

const MobileMenu = ({showUsersList, isSound, switchSound}) => {

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
            <MobileMenuContainer>
                <MobileMenuSettings>
                    <ShowUsers onClick={() => showUsersList()} />
                    <Share onClick={() => shareLink()} />
                    {
                        isSound ? (
                            <Sound onClick={() => switchSound()} />
                        ) : (
                            <SoundOff onClick={() => switchSound()} />
                        )
                    }
                </MobileMenuSettings>
                <a href="/"><Leave /></a>
            </MobileMenuContainer>
            {
                alert ? (
                    <CustomAlert alertMessage={alertMessage} closeAlert={setAlertHidden}/>
                ) : null
            }
        </>
    );
};

export default MobileMenu;