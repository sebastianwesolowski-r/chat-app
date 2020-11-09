import styled from 'styled-components';

export const CustomErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 150px;
    background-color: ${props => props.theme.customWhite};
    p {
        font-size: 1rem;
        color: ${props => props.theme.customBlack};
    }
`;

export const CustomErrorHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    background-color: ${props => props.theme.customPurple};
    margin-bottom: 20px;
`;