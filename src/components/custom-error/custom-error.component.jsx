import React from 'react';

import {CustomErrorContainer, CustomErrorHeader} from './custom-error.styles';

const CustomError = ({errorMessage}) => (
    <CustomErrorContainer>
        <CustomErrorHeader>error</CustomErrorHeader>
        <p>{errorMessage}</p>
    </CustomErrorContainer>
);

export default CustomError;