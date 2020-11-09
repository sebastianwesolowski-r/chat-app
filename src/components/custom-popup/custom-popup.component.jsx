import React from 'react';

import {CustomPopupContainer, CustomPopupHeader} from './custom-popup.styles';

const CustomPopup = ({popupData}) => {
    console.log(popupData);
    return (
        <CustomPopupContainer>
            <CustomPopupHeader>chatroom users</CustomPopupHeader>
            {
                popupData.map(({username}) => (
                    <p key={username}>{username}</p>
                ))
            }
        </CustomPopupContainer>
    );
}

export default CustomPopup;