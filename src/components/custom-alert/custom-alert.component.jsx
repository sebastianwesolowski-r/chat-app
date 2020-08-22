import React from 'react';

import {ReactComponent as AlertBell} from '../../assets/bell.svg';

import {AlertContainer, AlertBtn} from './custom-alert.styles';

const CustomAlert = ({alertMessage, closeAlert}) => (
    <AlertContainer>
        <AlertBell />
        <span>{alertMessage}</span>
        <AlertBtn onClick={() => closeAlert()}>ok</AlertBtn>
    </AlertContainer>
);

export default CustomAlert;